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
  // Remove build-time scripts. The frozen edition keeps only a tiny interaction layer;
  // all editorial content remains directly in HTML for readers and search engines.
  document.querySelectorAll('script').forEach(s=>s.remove());

  const head=document.head;
  const ensureMeta=(name,content,property=false)=>{
    const selector=property?`meta[property="${name}"]`:`meta[name="${name}"]`;
    let el=head.querySelector(selector);
    if(!el){
      el=document.createElement('meta');
      el.setAttribute(property?'property':'name',name);
      head.appendChild(el);
    }
    el.setAttribute('content',content);
  };
  const ensureLink=(rel,href,attrs={})=>{
    let el=head.querySelector(`link[rel="${rel}"][href="${href}"]`);
    if(!el){
      el=document.createElement('link');
      el.rel=rel;
      el.href=href;
      head.appendChild(el);
    }
    for(const [k,v] of Object.entries(attrs)) el.setAttribute(k,v);
  };

  const canonical='https://pedagogy-of-fire.github.io/when-we-create-gods/pt/ensaio-v10.html';
  const title='Superinteligência, alinhamento, RSI e Bostrom | Quando criarmos deuses';
  const description='Ensaio sobre superinteligência, alinhamento de IA, Goodhart, Bostrom, RSI, incerteza, ecologias de agentes, metacognição e governança.';

  document.title=title;
  ensureMeta('description',description);
  ensureMeta('robots','index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1');
  ensureMeta('theme-color','#09070d');
  ensureLink('canonical',canonical);

  ensureMeta('og:type','article',true);
  ensureMeta('og:title',title,true);
  ensureMeta('og:description',description,true);
  ensureMeta('og:url',canonical,true);
  ensureMeta('og:locale','pt_BR',true);
  ensureMeta('og:site_name','Quando criarmos deuses',true);
  ensureMeta('twitter:card','summary');
  ensureMeta('twitter:title',title);
  ensureMeta('twitter:description',description);

  const article=document.createElement('script');
  article.type='application/ld+json';
  article.textContent=JSON.stringify({
    '@context':'https://schema.org',
    '@type':'Article',
    headline:'Quando criarmos deuses — Superinteligência, alinhamento e a pedagogia do fogo',
    description,
    url:canonical,
    mainEntityOfPage:canonical,
    inLanguage:'pt-BR',
    datePublished:'2026-10-05',
    dateModified:'2026-10-05',
    author:{'@type':'Organization',name:'Quando criarmos deuses'},
    publisher:{'@type':'Organization',name:'Quando criarmos deuses'},
    about:[
      'inteligência artificial','superinteligência','alinhamento de IA','recursive self-improvement','Nick Bostrom','Goodhart','sistemas multiagentes','metacognição','governança de IA'
    ]
  });
  head.appendChild(article);

  const breadcrumb=document.createElement('script');
  breadcrumb.type='application/ld+json';
  breadcrumb.textContent=JSON.stringify({
    '@context':'https://schema.org',
    '@type':'BreadcrumbList',
    itemListElement:[
      {'@type':'ListItem',position:1,name:'Quando criarmos deuses',item:'https://pedagogy-of-fire.github.io/when-we-create-gods/pt/'},
      {'@type':'ListItem',position:2,name:'Ensaio v1.0',item:canonical}
    ]
  });
  head.appendChild(breadcrumb);

  const script=document.createElement('script');
  script.src='app-static.js';
  script.defer=true;
  document.body.appendChild(script);

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
  'id="v10-site-nav"',
  'rel="canonical"',
  'application/ld+json',
  'app-static.js'
];
for(const token of required){
  if(!check.includes(token)) throw new Error(`Static snapshot missing required token: ${token}`);
}
if(/v10-0[1-9].*\.js/i.test(check)) throw new Error('Static snapshot still references v1.0 build modules');

console.log(`Frozen static HTML written to ${target} (${check.length} bytes)`);
