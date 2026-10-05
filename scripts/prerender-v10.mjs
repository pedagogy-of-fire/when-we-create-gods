import { chromium } from 'playwright';
import { readFile, writeFile } from 'node:fs/promises';

const target='docs/pt/ensaio-v10.html';
const url='http://127.0.0.1:8080/pt/ensaio-v10.html';

const browser=await chromium.launch({headless:true});
const page=await browser.newPage({viewport:{width:1440,height:1000}});

await page.goto(url,{waitUntil:'networkidle',timeout:120000});
await page.waitForFunction(()=>document.documentElement.dataset.v10Frozen==='true',{timeout:30000});
await page.waitForSelector('#v10-site-nav',{timeout:30000});
await page.waitForTimeout(750);

await page.evaluate(()=>{
  // Remove all build-time scripts from the serialized page. The frozen edition
  // keeps only a tiny interaction layer; all editorial content remains in HTML.
  document.querySelectorAll('script').forEach(s=>s.remove());
  const script=document.createElement('script');
  script.src='app-static.js';
  script.defer=true;
  document.body.appendChild(script);

  // Mark the edition explicitly for future maintainers and prevent dynamic loaders.
  document.documentElement.dataset.v10Frozen='true';
  document.documentElement.dataset.rendering='static';
});

let html=await page.content();
await browser.close();

if(!/^<!DOCTYPE html>/i.test(html)) html='<!DOCTYPE html>\n'+html;
html=html.replace('<head>','<head>\n<!-- v1.0 frozen static snapshot · 5 out 2026 -->');

await writeFile(target,html,'utf8');

const check=await readFile(target,'utf8');
const required=[
  'v1.0 · 5 out 2026',
  'A arquitetura do não saber',
  'A herança que atravessa substratos',
  'A mente que observa a própria mente',
  'Valores sob seleção',
  'R ≈ C × A × H × X × O × (1 + αS) × (1 + βMₑff) × (1 + γL)',
  'id="v10-site-nav"'
];
for(const token of required){
  if(!check.includes(token)) throw new Error(`Static snapshot missing required token: ${token}`);
}
if(/v10-0[1-9].*\.js/i.test(check)) throw new Error('Static snapshot still references v1.0 build modules');

console.log(`Frozen static HTML written to ${target} (${check.length} bytes)`);
