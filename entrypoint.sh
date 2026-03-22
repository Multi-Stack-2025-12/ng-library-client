#!/bin/sh
set -e

TEMPLATE="${CONFIG_TEMPLATE:-/app/config/env.template.json}"
OUTPUT="${CONFIG_OUTPUT:-/app/dist/ng-library-client/browser/config/config.prod.json}"

echo "[entrypoint] template: $TEMPLATE"
echo "[entrypoint] output:   $OUTPUT"

mkdir -p "$(dirname "$OUTPUT")"

if [ -f "$TEMPLATE" ]; then
  echo "[entrypoint] rendering config with envsubst..."
  envsubst < "$TEMPLATE" > "$OUTPUT"
else
  echo "[entrypoint] WARNING: template not found, skipping render"
fi

echo "[entrypoint] starting SSR server..."
exec node dist/ng-library-client/server/server.mjs
