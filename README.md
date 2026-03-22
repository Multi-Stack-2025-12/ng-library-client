# ng-library-client

Angular SSR client application for the library domain. This app includes local domain libraries (`library-integration`, `library-catalog`, `library-authors`, `library-books`) and can run either directly with Angular CLI or in Docker.

## Project layout

- `projects/library-integration`: integration contracts and shared client-side application abstractions.
- `projects/library-catalog`: catalog use cases and adapters.
- `projects/library-authors`: authors use cases and adapters.
- `projects/library-books`: books use cases and adapters.
- `src/`: Angular app (SSR-enabled).
- `Dockerfile`: multi-stage build/runtime image.
- `docker-compose.yml`: local container run (`8086:4000`).
- `.env.template`: runtime/env defaults for local Docker execution.
- `config/env.template.json`: runtime JSON template rendered by `entrypoint.sh`.

## Prerequisites

- Node.js 22+
- npm 10+
- Docker + Docker Compose (for container workflow)

## Install dependencies

```bash
cd app.client/client/ng-library-client
npm install
```

## Build

```bash
npm run build
```

This builds internal libraries first and then the SSR app.

Useful alternatives:

```bash
npm run build:libs
npm run build:app
```

## Run locally (non-Docker)

```bash
npm start
```

Default URL: `http://localhost:4200`

## Run with Docker

From `app.client/client/tools`:

```bash
./client-cli.sh build
./client-cli.sh up --build
```

Useful commands:

```bash
./client-cli.sh build --no-cache
./client-cli.sh logs -f
./client-cli.sh ps
./client-cli.sh down
```

Container URL: `http://localhost:8086`

## Internal dependency modes

The client CLI can switch internal `@eac-arch/*` references across all client manifests (`package.json` root + `projects/*/package.json`).

From `app.client/client/tools`:

```bash
./client-cli.sh refs-project
./client-cli.sh refs-package auto
./client-cli.sh refs-package 1.0.6
```

Modes:

- `refs-project`: uses local `file:` dependencies pointing to `app.client/packages/*/dist/*`.
- `refs-package`: uses published package versions.

## Release management

From `app.client/client/tools`:

```bash
./client-cli.sh release-tag
./client-cli.sh release
./client-cli.sh release 1.2.3
./client-cli.sh prerelease
./client-cli.sh prerelease 0.0.0-ci.20260311090000
```

Behavior:

- `release-tag`: creates and pushes only the release git tag using the next patch version unless an explicit version is entered interactively.
- `release`: resolves the next patch version from existing GitHub releases and tags unless an explicit version is provided.
- `prerelease`: uses the provided version or defaults to `0.0.0-ci.<UTC timestamp>`.
- Both commands create and push a commit, create and push a git tag, and then create the GitHub release.

## Environment configuration

Main runtime variables in `.env`:

- `PORT`
- `LIBRARY_URL`
- `OTEL_COLLECTOR_ENDPOINT`
- `TELEMETRY_HTTP_CAPTURE_DETAILS`
- `TELEMETRY_HTTP_MAX_ATTRIBUTE_LENGTH`
- `TELEMETRY_HTTP_RESPONSE_BODY_MAX_LENGTH`
- `IDP_ISSUER`
- `IDP_CLIENT_ID`
- `IDP_REDIRECT_URI`
- `IDP_RESPONSE_TYPE`
- `IDP_SCOPE`
- `IDP_POST_LOGOUT_REDIRECT_URI`
- `IDP_STRICT_DISCOVERY_DOCUMENT_VALIDATION`
- `IDP_SHOW_DEBUG_INFORMATION`
- `IDP_REQUIRE_HTTPS`

`entrypoint.sh` renders `config/env.template.json` into `dist/ng-library-client/browser/config/config.prod.json` using `envsubst`.

Docker build variables are not stored in `.env`. The client CLI passes them to `docker compose` from the shell environment or from [app.client/client/tools/global-params.sh](app.client/client/tools/global-params.sh):

- `NPM_PUBLIC_REGISTRY_URL`
- `NPM_REGISTRY_URL`
- `NPM_SCOPE`
- `NPM_USERNAME`
- `NPM_PASSWORD`

## Repository bootstrap

To create/update and push the client repo:

```bash
cd app.client/client/tools
./create-repo-and-push.sh
```

Optional flags via env:

- `DELETE_EXISTING_REPO=true` to delete and recreate the remote repo.
- `CLEAN_EXISTING_REPO_CONTENT=true` to force-push content when repo already exists.
- `RESET_LOCAL_GIT_LINK=true` to reset local `.git` before push.

## OpenShift deployment (kustomize)

Kustomize manifests are available at:

- `.openshift/ng-library-client/base`
- `.openshift/ng-library-client/overlays/ephemeral`

To deploy manually:

```bash
cd app.client/client/ng-library-client

OPENSHIFT_NAMESPACE_VALUE=<your-namespace>
OPENSHIFT_DOMAIN_VALUE=<your-domain>

kustomize build .openshift/ng-library-client/overlays/ephemeral \
	| sed "s#__OPENSHIFT_NAMESPACE__#${OPENSHIFT_NAMESPACE_VALUE}#g" \
	| sed "s#__OPENSHIFT_DOMAIN__#${OPENSHIFT_DOMAIN_VALUE}#g" \
	| oc apply -f -
```

Notes:

- `Secret` includes runtime app variables used by `entrypoint.sh` to render `config.prod.json`.
- `Route` is exposed as `ng-library-client.apps.__OPENSHIFT_DOMAIN__`.
- Container listens on port `4000`.
- Base deployment uses `__IMAGE_URI__` and deploy pipeline injects the built image tag.

## Troubleshooting

### TS2307 cannot find `@eac-arch/*`

Run:

```bash
cd app.client/client/tools
./client-cli.sh refs-project
cd ../ng-library-client
npm install
npm run build
```

### CORS errors from browser to `localhost:8082` or `localhost:4318`

Current app config uses absolute endpoints in `.env` by default. If frontend and backend run on different origins, backend/collector must allow CORS for the frontend origin.

### `Unchecked runtime.lastError` in browser console

This usually comes from browser extensions, not from app code. Verify in incognito mode with extensions disabled.

## Tests

```bash
npm test
```

## Created By

**Erick Arostegui Cunza**  
Enterprise Solutions Architect

Professional Profile:
- LinkedIn: https://www.linkedin.com/in/erick-arostegui-cunza/

Articles:
- Medium: https://medium.com/@scorpius86

Channels and Media:
- Facebook: https://www.facebook.com/Erick.Arostegui.Cunza
- TikTok: https://www.tiktok.com/@erick_arostegui_cunza
- Instagram: https://www.instagram.com/erickarosteguicunza/
- Spotify: https://open.spotify.com/show/2JQxlxcRg7k7cJ1hB52Ge5

Created by Erick Arostegui Cunza.
