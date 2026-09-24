import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const imagesDirectory = path.resolve('src/images');
const sourceExtensions = new Set(['.png', '.jpg', '.jpeg']);
const imageFiles = await readdir(imagesDirectory);

await Promise.all(
  imageFiles
    .filter(fileName => sourceExtensions.has(path.extname(fileName).toLowerCase()))
    .map(async fileName => {
      const sourcePath = path.join(imagesDirectory, fileName);
      const outputPath = path.join(imagesDirectory, `${path.parse(fileName).name}.webp`);

      await sharp(sourcePath)
        .resize({ width: 1600, withoutEnlargement: true })
        .webp({ quality: 82 })
        .toFile(outputPath);
    }),
);

console.log(`Optimized ${imageFiles.filter(fileName => sourceExtensions.has(path.extname(fileName).toLowerCase())).length} images.`);