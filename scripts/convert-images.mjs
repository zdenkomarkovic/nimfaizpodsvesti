import sharp from "sharp";
import { readdir, mkdir } from "fs/promises";
import { existsSync } from "fs";
import path from "path";

const INPUT_DIR = "./public/images";
const OUTPUT_DIR = "./public/images";
const QUALITY = 75;
const EXTENSIONS = [".jpg", ".jpeg", ".png"];

const files = await readdir(INPUT_DIR);

for (const file of files) {
  const ext = path.extname(file).toLowerCase();
  if (!EXTENSIONS.includes(ext)) continue;

  const name = path.basename(file, ext);
  const input = path.join(INPUT_DIR, file);
  const output = path.join(OUTPUT_DIR, `${name}.webp`);

  if (existsSync(output)) {
    console.log(`✓ vec postoji: ${name}.webp`);
    continue;
  }

  await sharp(input).webp({ quality: QUALITY }).toFile(output);
  console.log(`→ konvertovano: ${file} → ${name}.webp`);
}

console.log("\nGotovo!");
