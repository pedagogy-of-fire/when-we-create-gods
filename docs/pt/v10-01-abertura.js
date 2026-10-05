(async()=>{
  const parts=['v10-01-conteudo.js','v10-02-parte-iii.js','v10-03-parte-iv.js','v10-04-parte-v.js','v10-05-parte-vi.js','v10-06-partes-vii-viii.js','v10-07-parte-ix-formula.js'];
  for(const src of parts){
    await new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src=src;
      s.onload=resolve;
      s.onerror=reject;
      document.body.appendChild(s);
    });
  }
})().catch(err=>console.error('Falha ao carregar módulos v1.0',err));
