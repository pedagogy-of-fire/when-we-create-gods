import { readFile, writeFile } from 'node:fs/promises';

const BASE='https://pedagogy-of-fire.github.io/when-we-create-gods';

const pages=[
  {
    file:'docs/pt/index.html',
    url:`${BASE}/pt/`,
    title:'Quando criarmos deuses — Superinteligência, alinhamento e IA',
    description:'Ensaio vivo sobre superinteligência, alinhamento de IA, Bostrom, Goodhart, incerteza, ecologias de agentes e a pedagogia do fogo.',
    type:'website'
  },
  {
    file:'docs/pt/ensaio-v10.html',
    url:`${BASE}/pt/ensaio-v10.html`,
    title:'Superinteligência, alinhamento e RSI | Quando criarmos deuses',
    description:'Ensaio sobre Bostrom, Superintelligence, Goodhart, recursive self-improvement (RSI), ecologias multiagentes, incerteza, metacognição e alinhamento de IA.',
    type:'article',
    datePublished:'2026-10-05'
  },
  {
    file:'docs/pt/cadernos/index.html',
    url:`${BASE}/pt/cadernos/`,
    title:'Cadernos — IA, RSI, multiagentes e incerteza | Quando criarmos deuses',
    description:'Investigações longas sobre RSI, ecologia de agentes, evolução cultural artificial, incerteza, metacognição e alinhamento de inteligência artificial.',
    type:'website'
  },
  {
    file:'docs/pt/cadernos/fornalha-recursiva.html',
    url:`${BASE}/pt/cadernos/fornalha-recursiva.html`,
    title:'A Fornalha Recursiva — RSI e ecossistemas de IA',
    description:'Caderno sobre recursive self-improvement (RSI), infraestrutura, software, hardware, ciência automatizada e recursão como propriedade de um ecossistema sociotécnico.',
    type:'article'
  },
  {
    file:'docs/pt/cadernos/atlas-catraca-bussola-v25.html',
    url:`${BASE}/pt/cadernos/atlas-catraca-bussola-v25.html`,
    title:'Atlas da Catraca e da Bússola — Ecologia de agentes e evolução cultural',
    description:'Caderno sobre ecologia multiagente, transmissão cultural artificial, RSI extra-paramétrica, observabilidade e hereditariedade entre agentes de IA.',
    type:'article'
  },
  {
    file:'docs/pt/cadernos/o-deus-que-preservou-a-duvida.html',
    url:`${BASE}/pt/cadernos/o-deus-que-preservou-a-duvida.html`,
    title:'O Deus que preservou a dúvida — Incerteza e metacognição em IA',
    description:'Caderno sobre incerteza bayesiana, entropia semântica, ignorância explícita, metacognição e arquiteturas capazes de preservar perguntas abertas antes de agir.',
    type:'article'
  }
];

function esc(s){return s.replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

function seoBlock(p){
  const schema={
    '@context':'https://schema.org',
    '@type':p.type==='article'?'Article':'WebPage',
    headline:p.title,
    description:p.description,
    url:p.url,
    inLanguage:'pt-BR',
    isPartOf:{'@type':'WebSite',name:'Quando criarmos deuses',url:`${BASE}/pt/`}
  };
  if(p.datePublished){schema.datePublished=p.datePublished;schema.dateModified='2026-10-05';}
  return `<!-- SEO v1.0 -->\n<meta name="robots" content="index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1">\n<link rel="canonical" href="${p.url}">\n<meta property="og:locale" content="pt_BR">\n<meta property="og:type" content="${p.type}">\n<meta property="og:title" content="${esc(p.title)}">\n<meta property="og:description" content="${esc(p.description)}">\n<meta property="og:url" content="${p.url}">\n<meta property="og:site_name" content="Quando criarmos deuses">\n<meta name="twitter:card" content="summary">\n<meta name="twitter:title" content="${esc(p.title)}">\n<meta name="twitter:description" content="${esc(p.description)}">\n<link rel="sitemap" type="application/xml" href="${BASE}/sitemap.xml">\n<script type="application/ld+json">${JSON.stringify(schema)}</script>\n<!-- /SEO v1.0 -->`;
}

for(const p of pages){
  let html=await readFile(p.file,'utf8');
  html=html.replace(/<!-- SEO v1\.0 -->[\s\S]*?<!-- \/SEO v1\.0 -->\s*/g,'');
  html=html.replace(/<title>[\s\S]*?<\/title>/i,`<title>${esc(p.title)}</title>`);
  html=html.replace(/<meta[^>]+name=["']description["'][^>]*>/i,`<meta name="description" content="${esc(p.description)}">`);
  if(!/<meta[^>]+name=["']description["']/i.test(html)){
    html=html.replace(/<head[^>]*>/i,m=>`${m}\n<meta name="description" content="${esc(p.description)}">`);
  }
  html=html.replace(/<\/head>/i,`${seoBlock(p)}\n</head>`);
  await writeFile(p.file,html,'utf8');
}

const urls=pages.map(p=>`  <url>\n    <loc>${p.url}</loc>\n    <lastmod>2026-10-05</lastmod>\n  </url>`).join('\n');
const sitemap=`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
await writeFile('docs/sitemap.xml',sitemap,'utf8');
await writeFile('docs/robots.txt',`User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`,'utf8');

console.log(`SEO metadata updated for ${pages.length} Portuguese pages.`);
