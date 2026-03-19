/**
 * ビルド時に静的 public/sitemap.xml を生成するスクリプト
 * Cloudflare Workers では動的サイトマップ生成が動作しないため静的ファイルで対応
 */

import { writeFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { createRequire } from "module";

const __dirname = dirname(fileURLToPath(import.meta.url));
const require = createRequire(import.meta.url);

const SITE_URL = "https://nanbyonavi.toromonja.com";
const today = new Date().toISOString().split("T")[0];

// diseases.ts を動的にインポート（tsxを使わずJSで処理するため、slugだけ抽出）
const diseasesTsPath = resolve(__dirname, "../src/data/diseases.ts");
const fs = await import("fs");
const raw = fs.readFileSync(diseasesTsPath, "utf-8");

// slug: "xxx" を正規表現で全抽出
const slugMatches = [...raw.matchAll(/slug:\s*"([^"]+)"/g)];
const slugs = slugMatches.map((m) => m[1]);

const staticPages = [
  { url: "/", priority: "1.0", changeFreq: "weekly" },
  { url: "/disease", priority: "0.9", changeFreq: "weekly" },
  { url: "/guides", priority: "0.9", changeFreq: "weekly" },
  { url: "/guides/seido", priority: "0.9", changeFreq: "monthly" },
  { url: "/guides/shinsei", priority: "0.9", changeFreq: "monthly" },
  { url: "/guides/shien", priority: "0.8", changeFreq: "monthly" },
  { url: "/guides/chiken", priority: "0.8", changeFreq: "monthly" },
  { url: "/guides/shikkan", priority: "0.6", changeFreq: "monthly" },
  { url: "/tools", priority: "0.7", changeFreq: "monthly" },
  { url: "/tools/iryohi", priority: "0.8", changeFreq: "monthly" },
  { url: "/about", priority: "0.5", changeFreq: "yearly" },
  { url: "/privacy", priority: "0.4", changeFreq: "yearly" },
  { url: "/disclaimer", priority: "0.4", changeFreq: "yearly" },
];

const urlEntries = [
  ...staticPages.map(
    ({ url, priority, changeFreq }) => `  <url>
    <loc>${SITE_URL}${url}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changeFreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
  ),
  ...slugs.map(
    (slug) => `  <url>
    <loc>${SITE_URL}/disease/${slug}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>`
  ),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlEntries.join("\n")}
</urlset>
`;

const outPath = resolve(__dirname, "../public/sitemap.xml");
writeFileSync(outPath, xml, "utf-8");
console.log(`✅ sitemap.xml generated: ${urlEntries.length} URLs → ${outPath}`);
