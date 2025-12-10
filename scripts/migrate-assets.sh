#!/bin/bash

# Script to migrate assets from old PHP site to new Astro project
# Run from rustrade-astro directory

SOURCE_DIR="../www/rustrade.pro"
TARGET_DIR="./public"

echo "🚀 Starting asset migration..."

# Create target directories
mkdir -p "$TARGET_DIR/img"
mkdir -p "$TARGET_DIR/fonts"

# Copy images
echo "📷 Copying images..."
if [ -d "$SOURCE_DIR/img" ]; then
  cp -r "$SOURCE_DIR/img/"* "$TARGET_DIR/img/"
  echo "  ✅ Images copied"
else
  echo "  ⚠️  Source images directory not found"
fi

# Copy fonts
echo "🔤 Copying fonts..."
if [ -d "$SOURCE_DIR/fonts" ]; then
  cp -r "$SOURCE_DIR/fonts/"* "$TARGET_DIR/fonts/"
  echo "  ✅ Fonts copied"
else
  echo "  ⚠️  Source fonts directory not found"
fi

# Copy favicons
echo "🎨 Copying favicons..."
cp "$SOURCE_DIR/favicon.ico" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ favicon.ico"
cp "$SOURCE_DIR/favicon-16x16.png" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ favicon-16x16.png"
cp "$SOURCE_DIR/favicon-32x32.png" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ favicon-32x32.png"
cp "$SOURCE_DIR/apple-touch-icon.png" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ apple-touch-icon.png"
cp "$SOURCE_DIR/android-chrome-192x192.png" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ android-chrome-192x192.png"
cp "$SOURCE_DIR/android-chrome-512x512.png" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ android-chrome-512x512.png"
cp "$SOURCE_DIR/site.webmanifest" "$TARGET_DIR/" 2>/dev/null && echo "  ✅ site.webmanifest"

# Copy presentation PDF
echo "📄 Copying PDF..."
cp "$SOURCE_DIR/"*.pdf "$TARGET_DIR/" 2>/dev/null && echo "  ✅ PDF files copied"

# Create missing SVG icons
echo "🖼️  Creating placeholder icons..."
mkdir -p "$TARGET_DIR/img/menu"
mkdir -p "$TARGET_DIR/img/social"

# Count copied files
IMG_COUNT=$(find "$TARGET_DIR/img" -type f | wc -l)
FONT_COUNT=$(find "$TARGET_DIR/fonts" -type f | wc -l)

echo ""
echo "✨ Migration complete!"
echo "   Images: $IMG_COUNT files"
echo "   Fonts: $FONT_COUNT files"
echo ""
echo "📝 Next steps:"
echo "   1. Run 'npm install' to install dependencies"
echo "   2. Run 'npm run dev' to start development server"
echo "   3. Verify all assets load correctly"

