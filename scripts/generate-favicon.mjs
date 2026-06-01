import sharp from "sharp";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, "..");

const input = resolve(root, "public/images/logo/uarq.webp");
const output = resolve(root, "src/app/icon.png");

const meta = await sharp(input).metadata();
const h = meta.height;
// El box ARQ es más ancho que alto — tomamos ~165px del lado izquierdo
const cropW = 165;

await sharp(input)
  .extract({ left: 0, top: 0, width: cropW, height: h })
  .resize(512, 512, { fit: "contain", background: { r: 255, g: 255, b: 255, alpha: 0 } })
  .png()
  .toFile(output);

console.log(`Favicon generado: ${output} (${cropW}x${h} → 512x512)`);
