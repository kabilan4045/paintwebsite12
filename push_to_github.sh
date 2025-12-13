#!/bin/bash

# Push script for Paint Website to GitHub
# Repository: https://github.com/LittleKirchhof/paintwebsite12

echo "🚀 Pushing Paint Website to GitHub..."
echo "Repository: LittleKirchhof/paintwebsite12"
echo ""

# First, let's check if the repository exists on GitHub
echo "📋 Current repository status:"
git remote -v
echo ""

# Try to push
echo "🔄 Attempting to push to GitHub..."
echo "Note: You may be prompted for your GitHub credentials."
echo "Use your GitHub username: LittleKirchhof"
echo "Use your Personal Access Token (NOT your password) when prompted."
echo ""

git push -u origin main

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Successfully pushed to GitHub!"
    echo "🌐 View your repository at: https://github.com/LittleKirchhof/paintwebsite12"
else
    echo ""
    echo "❌ Push failed. Here are some troubleshooting steps:"
    echo ""
    echo "1. Make sure the repository exists on GitHub:"
    echo "   Visit: https://github.com/new"
    echo "   Create a repository named: paintwebsite12"
    echo "   Don't initialize with README"
    echo ""
    echo "2. If you need a Personal Access Token:"
    echo "   Visit: https://github.com/settings/tokens"
    echo "   Click 'Generate new token (classic)'"
    echo "   Select 'repo' scope"
    echo "   Copy the token and use it as your password"
    echo ""
    echo "3. Then run this script again: ./push_to_github.sh"
fi
