// Generates public/og-image.png (1200x630) for social sharing.
// Run with: npm run og
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';

const out = fileURLToPath(new URL('../public/og-image.png', import.meta.url));

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M48 0H0V48" fill="none" stroke="#262b34" stroke-width="1"/>
    </pattern>
    <radialGradient id="fade" cx="100%" cy="100%" r="80%">
      <stop offset="0" stop-color="#fff" stop-opacity="1"/>
      <stop offset="1" stop-color="#fff" stop-opacity="0"/>
    </radialGradient>
    <mask id="m"><rect width="1200" height="630" fill="url(#fade)"/></mask>
  </defs>
  <rect width="1200" height="630" fill="#0e1116"/>
  <rect width="1200" height="630" fill="url(#grid)" mask="url(#m)"/>
  <g transform="translate(80 80) scale(2)">
    <path d="M9 3H5.5A2.5 2.5 0 0 0 3 5.5v13A2.5 2.5 0 0 0 5.5 21H9M15 3h3.5A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5H15" stroke="#eceef1" stroke-width="2" fill="none" stroke-linecap="round"/>
    <rect x="9" y="9" width="6" height="6" rx="1.2" fill="#8ea0ff"/>
  </g>
  <text x="140" y="113" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="30" font-weight="600" fill="#eceef1">Context<tspan fill="#a3a9b4" font-weight="500">AI</tspan></text>
  <text x="80" y="360" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="68" font-weight="600" fill="#eceef1" letter-spacing="-2">Infrastruttura AI e modelli</text>
  <text x="80" y="440" font-family="Segoe UI, Helvetica, Arial, sans-serif" font-size="68" font-weight="600" fill="#eceef1" letter-spacing="-2">privati per le aziende</text>
  <text x="80" y="540" font-family="Consolas, Menlo, monospace" font-size="22" fill="#8ea0ff" letter-spacing="2">INFRASTRUTTURA · MODELLI PRIVATI · RAG · AUTOMAZIONE</text>
</svg>`;

await sharp(Buffer.from(svg)).png({ compressionLevel: 9 }).toFile(out);
console.log('Created', out);
