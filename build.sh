#!/bin/bash
# meltflake.com build script
# Assembles static root + sub-projects into dist/
set -euo pipefail

DIST="dist"
rm -rf "$DIST"
mkdir -p "$DIST"

# 1. Copy static root files
cp index.html "$DIST/"
cp favicon* apple-touch-icon.png android-chrome-*.png "$DIST/" 2>/dev/null || true
cp -r legal "$DIST/"

# 2. Build aisg (Astro)
echo "=== Building aisg ==="
git clone --depth 1 https://github.com/meltflake/aisg.git _aisg
cd _aisg && npm ci && npm run build && cd ..
cp -r _aisg/dist "$DIST/aisg"
rm -rf _aisg

# 3. Build creatorcut (Astro)
echo "=== Building creatorcut ==="
git clone --depth 1 https://github.com/meltflake/creatorcut.git _creatorcut
cd _creatorcut && npm ci && npm run build && cd ..
cp -r _creatorcut/dist "$DIST/creatorcut"
rm -rf _creatorcut

# 4. Build artx (Next.js static export)
echo "=== Building artx ==="
git clone --depth 1 https://github.com/meltflake/artx.git _artx
cd _artx && npm ci && npm run build && cd ..
cp -r _artx/out "$DIST/artx"
rm -rf _artx

# 5. Build sg-charity (Astro, site/ subdirectory)
echo "=== Building sg-charity ==="
git clone --depth 1 https://github.com/meltflake/sg-charity.git _sg-charity
cd _sg-charity/site && npm ci --legacy-peer-deps && npm run build && cd ../..
cp -r _sg-charity/site/dist "$DIST/sg-charity"
rm -rf _sg-charity

# 6. Build writing (Pandoc)
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
