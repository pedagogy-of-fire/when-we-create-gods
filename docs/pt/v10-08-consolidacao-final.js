(()=>{
  // v1.0 · consolidação final — numeração, fórmula, índice e selo de versão
  const essay=document.querySelector('.essay');
  if(!essay || document.documentElement.dataset.v10Frozen==='true') return;

  const FINAL_VERSION='v1.0 · 5 out 2026';
  const FINAL_FORMULA='R ≈ C × A × H × X × O × (1 + αS) × (1 + βMₑff) × (1 + γL)';

  // 1) Fórmula única em toda a página.
  document.querySelectorAll('.formula-main,.equation').forEach(el=>{
    if(/^R\s*≈/.test(el.textContent.trim())) el.textContent=FINAL_FORMULA;
  });
  const formulaSection=document.getElementById('formula');
  if(formulaSection){
    const grid=formulaSection.querySelector('.factor-grid');
    if(grid && !grid.querySelector('[data-factor="L"]')){
      grid.insertAdjacentHTML('beforeend','<div class="factor" data-factor="L"><strong>L</strong><span>hereditariedade efetiva</span></div>');
    }
  }

  // 2) Renumeração definitiva das Partes I–X.
  // As seções 1–4 ficam preservadas na abertura; a sequência editorial principal começa em 5.
  const romanParts=['i','ii','iii','iv','v','vi','vii','viii','ix','x'];
  let n=5;
  const changed=[];
  for(const roman of romanParts){
    const part=[...essay.querySelectorAll('section.part')].find(s=>s.id && s.id.startsWith(`parte-${roman}-`));
    if(!part) continue;
    const headings=[...part.children].filter(el=>el.tagName==='H3');
    for(const h of headings){
      const title=h.textContent.trim().replace(/^\d+\.\s*/, '');
      const newText=`${n}. ${title}`;
      if(h.textContent.trim()!==newText) h.textContent=newText;
      h.dataset.finalNumber=String(n);
      changed.push({id:h.id,text:newText});
      n+=1;
    }
  }

  // 3) Sincronizar o índice pelas âncoras existentes, sem quebrar URLs antigas.
  for(const item of changed){
    if(!item.id) continue;
    document.querySelectorAll(`.toc-links a[href="#${CSS.escape(item.id)}"]`).forEach(a=>{
      a.textContent=item.text;
    });
  }

  // 4) Garantir que as novas seções conceituais apareçam numeradas no índice.
  // (A própria renumeração acima já numera os H3; aqui apenas sincronizamos links eventualmente inseridos sem número.)
  const specialIds=['a-heranca-que-atravessa-substratos','a-mente-que-observa-a-propria-mente','valores-sob-selecao'];
  for(const id of specialIds){
    const h=document.getElementById(id);
    if(!h) continue;
    document.querySelectorAll(`.toc-links a[href="#${CSS.escape(id)}"]`).forEach(a=>a.textContent=h.textContent.trim());
  }

  // 5) Selo final de versão no ensaio.
  document.querySelectorAll('.version').forEach(el=>{
    if(/^v(?:0|1)\./i.test(el.textContent.trim())) el.textContent=FINAL_VERSION;
  });

  // 6) Marcar a página como congelada para impedir dupla execução acidental.
  document.documentElement.dataset.v10Frozen='true';
})();
