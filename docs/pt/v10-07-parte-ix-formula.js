(()=>{
  // v1.0 · bloco 7 — Parte IX + revisão da fórmula do risco
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('v10-parte-ix-fecho-cadernos')) return;

  const h52=document.getElementById('52-autoaperfeicoamento-recursivo-incipiente');
  const h53=document.getElementById('53-agentes-de-longa-duracao');
  const part9=document.getElementById('parte-ix-a-hora-da-verdade');

  // Expandir 52 sem substituir o texto original.
  if(h52 && h53 && !document.getElementById('v10-52-ecossistema-recursivo')){
    h53.insertAdjacentHTML('beforebegin',`
      <div id="v10-52-ecossistema-recursivo">
        <p>Mas o circuito pode ultrapassar o próprio código. Uma inteligência capaz de participar da pesquisa que melhora seus sucessores pode também contribuir para melhorar compiladores, <em>harnesses</em>, sistemas de avaliação, pipelines de dados, arquiteturas de memória, ferramentas de agentes, desenho de chips, materiais, refrigeração, redes e infraestrutura energética.</p>
        <p>O objeto do aperfeiçoamento deixa então de ser apenas o modelo.</p>
        <p>Passa a ser o <strong>ecossistema que torna modelos melhores possíveis</strong>.</p>
        <p>Uma IA melhora software; software melhora pesquisa de hardware; hardware amplia computação; computação permite experimentos maiores; novos experimentos produzem novas IAs. Em outros ramos, sistemas artificiais podem acelerar materiais, biologia, automação laboratorial ou energia — e essas melhorias retornam à infraestrutura cognitiva que as tornou possíveis.</p>
        <p>Isso não garante uma explosão sem limites. Gargalos físicos, econômicos, institucionais e científicos continuam existindo. Mas muda a unidade de análise: o ciclo recursivo pode aparecer menos como uma mente reescrevendo a si mesma e mais como <strong>uma rede sociotécnica aprendendo a reduzir sucessivamente os próprios gargalos</strong>.</p>
        <p>O mesmo mecanismo pode ser extraordinariamente fecundo. Ciência mais rápida, novos materiais, melhores instrumentos e automação experimental podem ampliar radicalmente aquilo que conseguimos descobrir. O problema não é a aceleração em si. É se validação, corrigibilidade, governança e capacidade humana de compreender crescem junto com ela.</p>
      </div>
    `);
  }

  // Fecho da Parte IX: apontar para os Cadernos sem transformar o ensaio em revisão técnica.
  if(part9){
    part9.insertAdjacentHTML('beforeend',`
      <div id="v10-parte-ix-fecho-cadernos">
        <p><strong>Nem todo sinal de mudança de fase é um sinal de catástrofe. Mas toda mudança de fase exige novas formas de julgamento.</strong></p>
        <p>Alguns dos mecanismos apenas esboçados aqui — recursão distribuída, agentes persistentes, transmissão entre gerações artificiais, ecologias multiagentes, incerteza e metacognição — exigem mais espaço do que o ensaio deveria carregar. Nos <a href="cadernos/"><strong>Cadernos</strong></a>, essas hipóteses são tratadas como investigações próprias, com evidência, matemática conceitual, limites, contraditórios e perguntas abertas.</p>
        <p>O ensaio guarda a arquitetura. Os Cadernos acompanham aquilo que ainda está se movendo.</p>
      </div>
    `);
  }

  // Fórmula v1.0: distinguir persistência de uma trajetória (H) de hereditariedade entre trajetórias (L).
  const formula='R ≈ C × A × H × X × O × (1 + αS) × (1 + βMₑff) × (1 + γL)';
  document.querySelectorAll('.formula-main,.equation').forEach(el=>{
    if(/^R\s*≈/.test(el.textContent.trim())) el.textContent=formula;
  });

  const formulaSection=document.getElementById('formula');
  if(formulaSection){
    const grid=formulaSection.querySelector('.factor-grid');
    if(grid && !grid.querySelector('[data-factor="L"]')){
      grid.insertAdjacentHTML('beforeend','<div class="factor" data-factor="L"><strong>L</strong><span>hereditariedade efetiva</span></div>');
    }
  }

  const anatomy=document.getElementById('formula-anatomia');
  if(anatomy && !document.getElementById('formula-linhagem')){
    const mgrid=anatomy.querySelector('.m-grid');
    if(mgrid){
      mgrid.insertAdjacentHTML('beforebegin',`
        <div class="callout" id="formula-linhagem">
          <p><strong>H e L representam dois tipos diferentes de tempo.</strong></p>
          <p><strong>H</strong> é horizonte e persistência dentro de uma trajetória: quanto tempo um agente consegue manter contexto, objetivos e estratégia. <strong>L</strong> é hereditariedade efetiva: quanto de uma trajetória sobrevive à troca do próprio agente por meio de código, memória, artefatos, resumos, instituições, cultura, treinamento de sucessores ou outras formas de transmissão.</p>
          <p>Uma instância pode desaparecer e ainda deixar descendência causal. O peso individual termina; a linhagem pode continuar.</p>
          <div class="equation">L = f(memória transmissível, artefatos, código, instituições, cultura, sucessores)</div>
          <p class="micro">L não pressupõe reprodução biológica nem consciência. É uma variável conceitual para distinguir persistência do agente de persistência da informação e da estratégia através de substratos e gerações.</p>
        </div>
      `);
    }

    const mcore=anatomy.querySelector('.m-core');
    if(mcore){
      const chips=mcore.querySelector('.m-chips');
      if(chips){
        [...chips.querySelectorAll('span')].forEach(span=>{
          if(/herança de artefatos/i.test(span.textContent)) span.remove();
        });
      }
    }
  }

  // Atualizar a explicação textual na Parte XI, se presente.
  const equations=[...document.querySelectorAll('.essay .equation')];
  const riskEq=equations.find(el=>/^R\s*≈/.test(el.textContent.trim()));
  if(riskEq){
    let p=riskEq.nextElementSibling;
    if(p && /C representa capacidade cognitiva/.test(p.textContent)){
      p.innerHTML='A equação não pretende ser uma função quantitativa calibrada. É um mapa causal. <strong>C</strong> representa capacidade cognitiva; <strong>A</strong>, agência e possibilidade de ação autônoma; <strong>H</strong>, horizonte temporal e persistência de uma trajetória; <strong>X</strong>, acesso causal ao mundo real; <strong>O</strong>, distância entre a especificação formal e aquilo que os humanos realmente desejavam; <strong>S</strong>, capacidade de modelar pessoas, crenças e instituições; <strong>Mₑff</strong>, multiplicidade efetiva do ecossistema; e <strong>L</strong>, hereditariedade efetiva — a capacidade de memória, estratégias, artefatos ou estruturas sobreviverem à instância que os produziu.';
    }

    // Atualizar a definição de M_eff para evitar dupla contagem com L.
    const mEq=equations.find(el=>/^Mₑff\s*=/.test(el.textContent.trim()));
    if(mEq) mEq.textContent='Mₑff = f(N, topologia, correlação, memória compartilhada, competição, cooperação)';

    const multP=[...essay.querySelectorAll('p')].find(p=>/A multiplicidade permite que o risco deixe de pertencer/.test(p.textContent));
    if(multP && !/hereditariedade/.test(multP.textContent)){
      multP.insertAdjacentHTML('afterend','<p>A hereditariedade acrescenta outra dimensão: o risco pode deixar de pertencer não apenas a um agente, mas também a uma geração. Uma estratégia, uma representação ou uma forma de coordenação pode persistir mesmo quando a instância original desaparece.</p>');
    }
  }

  // Nota metodológica: a fórmula descreve pressão bruta, não “risco líquido” após salvaguardas.
  if(formulaSection && !document.getElementById('formula-nota-salvaguardas')){
    const wrap=formulaSection.querySelector('.formula-wrap');
    if(wrap){
      wrap.insertAdjacentHTML('afterend','<p class="micro" id="formula-nota-salvaguardas"><strong>Leitura:</strong> a fórmula representa pressão potencial, não risco líquido após salvaguardas. Corrigibilidade, auditoria, fricção epistemológica, limites de acesso e governança atuam reduzindo vários termos ao mesmo tempo; não são um único “divisor de segurança”.</p>');
    }
  }
})();
