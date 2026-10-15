#!/usr/bin/env bash
# Create the GitHub repo, replace the OWNER placeholder with your handle, push and (optionally) cut a release.
# Requires: git, gh (GitHub CLI) logged in (`gh auth login`), zip, node >= 20.
set -euo pipefail
cd "$(dirname "$0")/.."
REPO="${1:-dwg-viewer}"
OWNER="$(gh api user --jq .login)"
echo "Publishing as $OWNER/$REPO"
grep -rl "OWNER" --include="*.md" --include="*.json" --include="*.yml" . 2>/dev/null | grep -v node_modules | xargs sed -i "s#OWNER#$OWNER#g"
[ -d .git ] || git init -b main
git add -A
git -c user.name="$(git config user.name || echo "$OWNER")" -c user.email="$(git config user.email || echo "$OWNER@users.noreply.github.com")" commit -m "Initial release: DWG viewer + Claude skill" || true
gh repo create "$OWNER/$REPO" --public --source . --remote origin --push \
  --description "Offline DWG/DXF 3D viewer and Claude skill: open AutoCAD drawings without AutoCAD."
gh repo edit "$OWNER/$REPO" --add-topic dwg --add-topic dxf --add-topic autocad --add-topic claude-skill --add-topic cad-viewer || true
if [ "${2:-}" = "--release" ]; then
  npm ci && npm run build:all && npm run package:skill
  gh release create v1.0.0 dist/dwg-viewer.html dist/dwg-viewer-es.html dist/dwg-viewer-skill.zip \
    --title "v1.0.0" --notes "First release. Standalone viewers (EN/ES) and the Claude skill zip."
fi
echo "Done: https://github.com/$OWNER/$REPO"
