#!/bin/bash

# Simple one-command push to GitHub
# This will open your terminal and allow you to enter credentials

echo "════════════════════════════════════════════════════════"
echo "  🎨 Paint Website - GitHub Push"
echo "════════════════════════════════════════════════════════"
echo ""
echo "Repository: https://github.com/LittleKirchhof/paintwebsite12"
echo ""
echo "📝 Instructions:"
echo "1. First, create the repository on GitHub (if not done yet)"
echo "2. When prompted for credentials:"
echo "   Username: LittleKirchhof"
echo "   Password: [Your Personal Access Token]"
echo ""
echo "Press ENTER to continue..."
read

# Execute the push in a new terminal window that can handle interactive input
osascript <<EOF
tell application "Terminal"
    activate
    do script "cd '/Users/kabilan/Desktop/Paintwebsite Test' && git push -u origin main"
end tell
EOF

echo ""
echo "✅ Opened new terminal window for push"
echo "   Enter your credentials there when prompted"
