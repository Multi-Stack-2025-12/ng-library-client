#!/usr/bin/env bash
set -euo pipefail

export DOCKER_BUILDKIT=1

if [[ ! -f .env ]]; then
  cp .env.template .env
  echo "Created .env from .env.template"
fi

docker compose build
docker compose up -d

echo "ng-library-client is running on http://localhost:4000"
