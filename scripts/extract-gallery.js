const { chromium } = require('playwright');

const slugs = [
  'cor4287',
  'esmeralda',
  'lagos-34',
  'cabildo-336-ii',
  'cabildo-336-i',
  'amenabar-2956',
  'ambrosetti-42',
  '460',
  'caldas',
];

async function extractImages(page, slug) {
  const url = `https://www.ueharaarquitectura.com.ar/obras/${slug}/`;
  await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
  // Extra wait for Elementor lazy load
  await page.waitForTimeout(2000);

  const images = await page.evaluate(() => {
    const urls = new Set();
    const wpBase = 'wp-content/uploads';

    // Regular img tags
    document.querySelectorAll('img').forEach(img => {
      [img.src, img.dataset.src, img.dataset.lazySrc].forEach(s => {
        if (s && s.includes(wpBase)) urls.add(s.split('?')[0]);
      });
      // srcset
      if (img.srcset) {
        img.srcset.split(',').forEach(entry => {
          const s = entry.trim().split(' ')[0];
          if (s && s.includes(wpBase)) urls.add(s.split('?')[0]);
        });
      }
    });

    // Background images
    document.querySelectorAll('[style]').forEach(el => {
      const match = el.style.backgroundImage.match(/url\(["']?([^"')]+)["']?\)/);
      if (match && match[1].includes(wpBase)) urls.add(match[1].split('?')[0]);
    });

    // data-background attributes (Elementor lazy)
    document.querySelectorAll('[data-background]').forEach(el => {
      const s = el.dataset.background;
      if (s && s.includes(wpBase)) urls.add(s.split('?')[0]);
    });

    // data-src on any element
    document.querySelectorAll('[data-src]').forEach(el => {
      const s = el.dataset.src;
      if (s && s.includes(wpBase)) urls.add(s.split('?')[0]);
    });

    return Array.from(urls)
      .filter(u => !u.includes('/elementor/') && !u.includes('dastel'))
      .filter(u => !u.includes('uarq'))
      .filter(u => !u.includes('-150x') && !u.includes('-scaled.webp') && !u.endsWith('-1-scaled.webp') === false || true)
      .sort();
  });

  return images;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
  });
  const page = await context.newPage();

  const results = {};

  for (const slug of slugs) {
    process.stderr.write(`Scraping ${slug}...\n`);
    try {
      results[slug] = await extractImages(page, slug);
      process.stderr.write(`  → ${results[slug].length} images\n`);
    } catch (e) {
      process.stderr.write(`  ERROR: ${e.message}\n`);
      results[slug] = [];
    }
  }

  await browser.close();
  console.log(JSON.stringify(results, null, 2));
})();
