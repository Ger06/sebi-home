/**
 * Reads the Playwright-extracted gallery data, keeps only full-size originals,
 * downloads them to public/images/projects/ with project-prefixed names,
 * and prints the updated projects.ts image arrays to stdout.
 */
const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');

const DEST = path.join(__dirname, '..', 'public', 'images', 'projects');

// Full gallery data extracted by Playwright (only originals — no WxH suffix)
const RAW = {
  cor4287: [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/5-Lavadero-Balcon-15.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/20250312_184531-scaled.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/20250815_181505-1-scaled.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/20250815_181634-1536x1152.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-05-at-19.04.27-2.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/08/WhatsApp-Image-2025-08-05-at-19.04.27-1.jpeg",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/09/20250815_181444-B-1-scaled.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/09/20250815_181449-B-1536x1152.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2025/09/20250815_181651-B-1536x1152.webp",
  ],
  'esmeralda-inv': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/12/WP_20170815_15_36_15_Pro-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/12/WP_20170815_15_35_52_Pro-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/12/WP_20170715_09_39_44_Pro-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/12/DSC_0005-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/12/WP_20170824_12_37_01_Pro-scaled-1.webp",
  ],
  'lagos-34': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/00-GRAL-EXT-Fte-Entrada.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/01-PB-Cocina.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/02-PB-Comedor.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/06-PA-estar-2-v-Hueco.webp",
  ],
  'cabildo336II': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20231207_175758.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/Cocina-4-.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/Cocina-7-.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/Mueble-2.webp",
  ],
  'cabildo336I': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20240118_091645-b.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20240118_092259.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20240118_092303.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20240118_092312.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20240118_093238.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230704_175322.webp",
  ],
  'ame2900-inv': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230211_191956.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230211_192639.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230211_193929.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230211_205804.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230212_160614.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20230221_055748.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/Terraza-PA-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20220919_135113-b.webp",
  ],
  'ambrosetti-42': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0118.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0147.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0154.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0158.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0161.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0162.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0163.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_1048.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/WP_20150914_11_13_20_Pro.webp",
  ],
  '460': [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0031-2.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0041-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0044.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0054-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0060-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0082.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0094.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/WP_20161229_10_11_49_Pro-scaled-1.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/WP_20170501_10_17_59_Pro-scaled-1.webp",
  ],
  caldas: [
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/P1299175.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/P1299176.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/P1299182.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/P1299246.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0492.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0505.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0530.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/DSC_0544.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/IMG_2624.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/IMG_2625.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/IMG_8185.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20220624_155345.webp",
    "https://www.ueharaarquitectura.com.ar/wp-content/uploads/2024/06/20200309_101526.webp",
  ],
};

const sleep = ms => new Promise(r => setTimeout(r, ms));

function download(url, dest) {
  return new Promise((resolve, reject) => {
    const proto = url.startsWith('https') ? https : http;
    const file = fs.createWriteStream(dest);
    proto.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, res => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close();
        fs.unlinkSync(dest);
        return download(res.headers.location, dest).then(resolve).catch(reject);
      }
      if (res.statusCode !== 200) {
        file.close();
        fs.unlinkSync(dest);
        return reject(new Error(`HTTP ${res.statusCode} for ${url}`));
      }
      res.pipe(file);
      file.on('finish', () => file.close(resolve));
    }).on('error', e => {
      file.close();
      try { fs.unlinkSync(dest); } catch {}
      reject(e);
    });
  });
}

function localName(prefix, index, url) {
  const ext = url.endsWith('.jpeg') ? '.jpeg' : '.webp';
  return index === 0 ? `${prefix}${ext}` : `${prefix}-${index}${ext}`;
}

(async () => {
  const mapping = {};

  for (const [prefix, urls] of Object.entries(RAW)) {
    mapping[prefix] = [];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const fname = localName(prefix, i, url);
      const fpath = path.join(DEST, fname);
      const exists = fs.existsSync(fpath) && fs.statSync(fpath).size > 0;
      if (exists) {
        process.stderr.write(`SKIP ${fname} (exists)\n`);
      } else {
        // Remove any 0-byte file from a previous failed attempt
        if (fs.existsSync(fpath)) fs.unlinkSync(fpath);
        let ok = false;
        for (let attempt = 1; attempt <= 3 && !ok; attempt++) {
          try {
            await download(url, fpath);
            const kb = Math.round(fs.statSync(fpath).size / 1024);
            process.stderr.write(`OK   ${fname} (${kb} KB)\n`);
            ok = true;
          } catch (e) {
            process.stderr.write(`ERR  ${fname} (attempt ${attempt}): ${e.message}\n`);
            if (attempt < 3) await sleep(3000);
          }
        }
      }
      mapping[prefix].push(`/images/projects/${fname}`);
      await sleep(400);
    }
  }

  // Print updated projects.ts arrays
  console.log('\n=== UPDATED IMAGE ARRAYS ===\n');
  for (const [prefix, paths] of Object.entries(mapping)) {
    console.log(`// ${prefix}`);
    console.log(`coverImage: '${paths[0]}',`);
    console.log(`images: [\n${paths.map(p => `  '${p}',`).join('\n')}\n],`);
    console.log('');
  }
})();
