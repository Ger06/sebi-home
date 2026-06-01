import sharp from "sharp";
import { readFileSync, writeFileSync, unlinkSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const iconPath = resolve(root, "src/app/icon.png");

// Read the webp content and convert to real PNG
const buf = await sharp(iconPath).png().toBuffer();
writeFileSync(iconPath, buf);
console.log("icon.png convertido a PNG real");

// Remove the broken favicon.ico
const faviconPath = resolve(root, "src/app/favicon.ico");
try {
  unlinkSync(faviconPath);
  console.log("favicon.ico eliminado");
} catch {
  console.log("favicon.ico no encontrado, nada que eliminar");
}
