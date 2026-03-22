# syntax=docker/dockerfile:1.6

# =========================================
# STAGE 1: BUILD (Angular SSR)
# =========================================
FROM node:22-alpine AS build

RUN apk add --no-cache python3 make g++

WORKDIR /app

COPY package*.json ./

ARG NPM_PUBLIC_REGISTRY_URL=https://registry.npmjs.org
ARG NPM_REGISTRY_URL=http://localhost:9082/repository/multistack-npm-hosted/
ARG NPM_SCOPE=@eac-arch
ARG NPM_USERNAME=platform
RUN --mount=type=secret,id=NPM_PASSWORD \
        set -eux; \
        PASSWORD="$(cat /run/secrets/NPM_PASSWORD 2>/dev/null || true)"; \
    PRIVATE_REGISTRY="${NPM_REGISTRY_URL}"; \
    PUBLIC_REGISTRY="${NPM_PUBLIC_REGISTRY_URL}"; \
    echo "Using public npm registry: ${PUBLIC_REGISTRY}"; \
    echo "Using scoped npm registry: ${PRIVATE_REGISTRY}"; \
    REG_HOST="${PRIVATE_REGISTRY#https://}"; \
        REG_HOST="${REG_HOST#http://}"; \
        REG_HOST="${REG_HOST%/}"; \
    echo "registry=${PUBLIC_REGISTRY}" > /root/.npmrc; \
    echo "${NPM_SCOPE}:registry=${PRIVATE_REGISTRY}" >> /root/.npmrc; \
        if [ -n "$PASSWORD" ]; then \
            AUTH_B64="$(printf '%s' "$PASSWORD" | base64 | tr -d '\r\n')"; \
            echo "//${REG_HOST}/:username=${NPM_USERNAME}" >> /root/.npmrc; \
            echo "//${REG_HOST}/:_password=${AUTH_B64}" >> /root/.npmrc; \
            echo "//${REG_HOST}/:email=npm@local" >> /root/.npmrc; \
            echo "always-auth=true" >> /root/.npmrc; \
        fi; \
        if [ -f package-lock.json ] && ! grep -q '"file:\.\./\.\./packages/' package-lock.json; then \
            npm ci; \
        else \
            rm -f package-lock.json; \
            npm install --legacy-peer-deps; \
        fi

COPY . .

RUN npm run build:libs
RUN npm run build:app

# =========================================
# STAGE 2: RUNTIME (Node + Express SSR)
# =========================================
FROM node:22-alpine AS runtime

RUN apk add --no-cache gettext

ENV NODE_ENV=production \
    PORT=4000

WORKDIR /app

COPY package*.json ./

ARG NPM_PUBLIC_REGISTRY_URL=https://registry.npmjs.org
ARG NPM_REGISTRY_URL=http://localhost:9082/repository/multistack-npm-hosted/
ARG NPM_SCOPE=@eac-arch
ARG NPM_USERNAME=platform
RUN --mount=type=secret,id=NPM_PASSWORD \
        set -eux; \
        PASSWORD="$(cat /run/secrets/NPM_PASSWORD 2>/dev/null || true)"; \
        PRIVATE_REGISTRY="${NPM_REGISTRY_URL}"; \
        PUBLIC_REGISTRY="${NPM_PUBLIC_REGISTRY_URL}"; \
        echo "Using public npm registry: ${PUBLIC_REGISTRY}"; \
        echo "Using scoped npm registry: ${PRIVATE_REGISTRY}"; \
        REG_HOST="${PRIVATE_REGISTRY#https://}"; \
        REG_HOST="${REG_HOST#http://}"; \
        REG_HOST="${REG_HOST%/}"; \
        echo "registry=${PUBLIC_REGISTRY}" > /root/.npmrc; \
        echo "${NPM_SCOPE}:registry=${PRIVATE_REGISTRY}" >> /root/.npmrc; \
        if [ -n "$PASSWORD" ]; then \
            AUTH_B64="$(printf '%s' "$PASSWORD" | base64 | tr -d '\r\n')"; \
            echo "//${REG_HOST}/:username=${NPM_USERNAME}" >> /root/.npmrc; \
            echo "//${REG_HOST}/:_password=${AUTH_B64}" >> /root/.npmrc; \
            echo "//${REG_HOST}/:email=npm@local" >> /root/.npmrc; \
            echo "always-auth=true" >> /root/.npmrc; \
        fi; \
        if [ -f package-lock.json ] && ! grep -q '"file:\.\./\.\./packages/' package-lock.json; then \
            npm ci --omit=dev; \
        else \
            rm -f package-lock.json; \
            npm install --omit=dev --legacy-peer-deps; \
        fi

ARG PROJECT=ng-library-client
COPY --from=build /app/dist/${PROJECT} ./dist/${PROJECT}

COPY config/env.template.json /app/config/env.template.json
COPY entrypoint.sh /entrypoint.sh

# OpenShift-friendly perms
USER 0
RUN chmod g+rx /entrypoint.sh \
 && mkdir -p /app/dist/${PROJECT}/browser/config \
 && chmod -R 0777 /app/dist/${PROJECT}/browser/config

RUN chmod +x /entrypoint.sh

ENV CONFIG_TEMPLATE=/app/config/env.template.json \
    CONFIG_OUTPUT=/app/dist/${PROJECT}/browser/config/config.prod.json

USER node
EXPOSE 4000

ENTRYPOINT ["/entrypoint.sh"]
