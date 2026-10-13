import { existsSync, mkdirSync, writeFileSync } from "node:fs";

const slug = process.argv[2];

if (!slug || !/^[a-z0-9-]+$/.test(slug)) {
  console.error("記事名を半角英数字とハイフンで指定してください。例: npm run new kyoto");
  process.exit(1);
}

const mdPath = `src/pages/blog/${slug}.md`;
const imgDir = `src/assets/blog/${slug}`;

if (existsSync(mdPath) || existsSync(imgDir)) {
  console.error(`「${slug}」はすでにあります。別の名前にしてください。`);
  process.exit(1);
}

const today = new Date().toLocaleDateString("sv-SE");

mkdirSync(imgDir, { recursive: true });

writeFileSync(
  mdPath,
  `---
layout: ../../layouts/BlogPost.astro
title: ${slug}
date: ${today}
cover: /src/assets/blog/${slug}/01.jpg
---

ここに本文を書きます。

<!-- 写真の入れ方: ![](../../assets/blog/${slug}/01.jpg) をコピーして、この外に貼る -->
`
);

console.log(`作成しました:`);
console.log(`  ${mdPath}   ← 本文`);
console.log(`  ${imgDir}/   ← 写真を入れる場所`);
