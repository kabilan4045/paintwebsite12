#!/bin/bash

echo "🧹 Starting safe cleanup..."

# Remove elementor packages (not needed for React project)
rm -rf "src/assets/elementor-pro-package (1).zip"
rm -rf "src/assets/elementor-pro-package (1)"

# Remove dist folder (can be regenerated)
rm -rf dist

# Clean git history (optional - makes .git smaller)
# git gc --aggressive --prune=now

echo "✅ Cleanup complete!"
echo ""
echo "Space saved:"
du -sh src/assets
