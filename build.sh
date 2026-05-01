#!/bin/bash
# meltflake.com build script
# Assembles static root + sub-projects into dist/
set -euo pipefail

DIST="dist"
rm -rf "$DIST"
mkdir -p "$DIST"

# 1. Copy static root files
cp index.html robots.txt manifest.json "$DIST/"
cp favicon* apple-touch-icon.png android-chrome-*.png "$DIST/" 2>/dev/null || true
cp -r legal "$DIST/"

# 2. Build creatorcut (Astro)
echo "=== Building creatorcut ==="
git clone --depth 1 https://github.com/meltflake/creatorcut.git _creatorcut
cd _creatorcut && npm ci && npm run build && cd ..
cp -r _creatorcut/dist "$DIST/creatorcut"
rm -rf _creatorcut

# 3. Build artx (Next.js static export)
echo "=== Building artx ==="
git clone --depth 1 https://github.com/meltflake/artx.git _artx
cd _artx && npm ci && npm run build && cd ..
cp -r _artx/out "$DIST/artx"
rm -rf _artx

# 4. Build sg-charity (Astro 6, requires Node 22+)
echo "=== Building sg-charity ==="
echo "Installing Node 22 for Astro 6..."
curl -sL https://nodejs.org/dist/v22.14.0/node-v22.14.0-linux-x64.tar.xz | tar xJ -C /tmp
ORIG_PATH="$PATH"
export PATH="/tmp/node-v22.14.0-linux-x64/bin:$PATH"
echo "Node version: $(node -v)"
git clone --depth 1 https://github.com/meltflake/sg-charity.git _sg-charity
cd _sg-charity/site && npm ci --legacy-peer-deps && npm run build && cd ../..
export PATH="$ORIG_PATH"
cp -r _sg-charity/site/dist "$DIST/sg-charity"
rm -rf _sg-charity

# 5. Build writing (Pandoc)
echo "=== Building writing ==="
if ! command -v pandoc &>/dev/null; then
  echo "Installing pandoc..."
  curl -sL https://github.com/jgm/pandoc/releases/download/3.6.4/pandoc-3.6.4-linux-amd64.tar.gz | tar xz -C /tmp
  export PATH="/tmp/pandoc-3.6.4/bin:$PATH"
fi
git clone --depth 1 https://github.com/meltflake/writing.git _writing
cd _writing && bash build.sh tianshu.md tianshu.html && cd ..
mkdir -p "$DIST/writing"
cp _writing/index.html _writing/tianshu.html "$DIST/writing/"
rm -rf _writing

echo "=== Done: $(find "$DIST" -type f | wc -l) files in $DIST ==="
