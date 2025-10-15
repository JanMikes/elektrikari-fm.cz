import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const images = [
  {
    input: 'public/images/elektrikari-fm-logo.png',
    outputBase: 'public/images/elektrikari-fm-logo',
    quality: 90
  },
  {
    input: 'public/images/hero.jpg',
    outputBase: 'public/images/hero',
    quality: 85
  },
  {
    input: 'public/images/o-nas.jpg',
    outputBase: 'public/images/o-nas',
    quality: 85
  }
];

async function convertImage(config) {
  const { input, outputBase, quality } = config;

  console.log(`\nConverting ${input}...`);

  try {
    // Get original file size
    const originalStats = await sharp(input).metadata();
    console.log(`Original: ${originalStats.width}x${originalStats.height}`);

    // Convert to WebP
    await sharp(input)
      .webp({ quality })
      .toFile(`${outputBase}.webp`);
    console.log(`✓ Created ${outputBase}.webp`);

    // Convert to AVIF
    await sharp(input)
      .avif({ quality })
      .toFile(`${outputBase}.avif`);
    console.log(`✓ Created ${outputBase}.avif`);

  } catch (error) {
    console.error(`Error converting ${input}:`, error);
  }
}

async function main() {
  console.log('Converting main images to modern formats...');

  for (const config of images) {
    await convertImage(config);
  }

  console.log('\n✅ All images converted successfully!');
}

main();
