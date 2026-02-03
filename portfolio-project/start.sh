#!/bin/bash

echo "🚀 Portfolio Quick Start Script"
echo "================================"
echo ""

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "❌ Node.js is not installed!"
    echo "Please install Node.js from: https://nodejs.org/"
    exit 1
fi

echo "✅ Node.js found: $(node --version)"
echo ""

# Check if npm is installed
if ! command -v npm &> /dev/null
then
    echo "❌ npm is not installed!"
    exit 1
fi

echo "✅ npm found: $(npm --version)"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
npm install

if [ $? -ne 0 ]; then
    echo "❌ Installation failed!"
    exit 1
fi

echo ""
echo "✅ Dependencies installed successfully!"
echo ""

# Prompt user
echo "🎉 Setup complete! What would you like to do?"
echo ""
echo "1. Start development server (npm run dev)"
echo "2. Build for production (npm run build)"
echo "3. Exit"
echo ""
read -p "Enter your choice (1-3): " choice

case $choice in
    1)
        echo ""
        echo "🚀 Starting development server..."
        echo "Your portfolio will open at http://localhost:5173"
        echo ""
        npm run dev
        ;;
    2)
        echo ""
        echo "🔨 Building for production..."
        npm run build
        if [ $? -eq 0 ]; then
            echo ""
            echo "✅ Build successful! Files are in the 'dist' folder"
            echo "To preview: npm run preview"
        else
            echo "❌ Build failed!"
        fi
        ;;
    3)
        echo "👋 Goodbye!"
        exit 0
        ;;
    *)
        echo "❌ Invalid choice!"
        exit 1
        ;;
esac
