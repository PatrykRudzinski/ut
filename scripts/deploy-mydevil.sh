#!/usr/bin/env bash
set -euo pipefail

require_var() {
  local var_name="$1"
  if [[ -z "${!var_name:-}" ]]; then
    echo "Missing required env var: ${var_name}" >&2
    exit 1
  fi
}

require_var "MYDEVIL_HOST"
require_var "MYDEVIL_USER"
require_var "MYDEVIL_TARGET_DIR"

MYDEVIL_PORT="${MYDEVIL_PORT:-22}"
DEPLOY_SOURCE_DIR="${DEPLOY_SOURCE_DIR:-dist/}"
RSYNC_DELETE_FLAG="${RSYNC_DELETE_FLAG:---delete}"

if [[ ! -d "${DEPLOY_SOURCE_DIR}" ]]; then
  echo "Build directory does not exist: ${DEPLOY_SOURCE_DIR}" >&2
  echo "Run build first (for Astro: npm run build)." >&2
  exit 1
fi

echo "Starting deploy to ${MYDEVIL_USER}@${MYDEVIL_HOST}:${MYDEVIL_TARGET_DIR}"

RSYNC_ARGS=(
  -az
  --checksum
  --human-readable
  --omit-dir-times
  --no-perms
  --no-owner
  --no-group
)

if [[ "${RSYNC_DELETE_FLAG}" == "--delete" ]]; then
  RSYNC_ARGS+=(--delete --delete-excluded)
fi

SSH_CMD="ssh -p ${MYDEVIL_PORT} -o StrictHostKeyChecking=yes"

rsync "${RSYNC_ARGS[@]}" \
  -e "${SSH_CMD}" \
  "${DEPLOY_SOURCE_DIR}" \
  "${MYDEVIL_USER}@${MYDEVIL_HOST}:${MYDEVIL_TARGET_DIR%/}/"

echo "Deploy completed successfully."
