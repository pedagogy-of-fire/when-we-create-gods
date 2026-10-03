(()=>{
  // v1.0 · bloco 5 — Parte VI: incerteza moral, metacognição e valores sob seleção
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('a-mente-que-observa-a-propria-mente')) return;

  const part6=document.getElementById('parte-vi-como-valores-poderiam-emergir');
  if(!part6) return;

  const h27=document.getElementById('27-incerteza-moral-como-protecao');
  const h28=document.getElementById('28-o-perigo-de-modificar-o-avaliador');
  const h30=document.getElementById('30-valores-por-relacao');
  const h31=document.getElementById('31-o-valor-como-atrator');

  const replaceBody=(h,html)=>{
    if(!h) return;
    let n=h.nextElementSibling;
    const doomed=[];
    while(n && n.tagName!=='H3' && n.tagName!=='H2' && n.tagName!=='SECTION'){
      doomed.push(n); n=n.nextElementSibling;
    }
    doomed.forEach(x=>x.remove());
    h.insertAdjacentHTML('afterend',html);
  };

  if(h27){
    replaceBody(h27,`
      <p>Uma inteligência segura talvez não deva ter certeza demais sobre valores humanos.</p>
      <p>Essa frase parece simples, mas contém vários tipos diferentes de incerteza.</p>
      <p>Podemos não saber o que uma pessoa realmente pretende. Podemos não saber qual fato é verdadeiro. Podemos reconhecer que diferentes pessoas possuem valores incompatíveis. Podemos estar diante de uma decisão para a qual existem várias respostas moralmente defensáveis. E podemos estar enganados sobre o próprio modo como organizamos o problema.</p>
      <p>Essas situações não deveriam ser comprimidas numa única variável chamada confiança.</p>
      <p>Há ignorância que pede investigação.</p>
      <p>Há ambiguidade que pede pergunta.</p>
      <p>Há pluralidade que pede convivência.</p>
      <p>Há conflito que pede deliberação.</p>
      <p>E há incerteza moral que talvez não deva ser eliminada, porque eliminá-la cedo demais significa apenas escolher uma doutrina e transformá-la em infraestrutura.</p>
      <p>O maximizador afirma: descobri o valor, agora transformarei o mundo.</p>
      <p>O guardião diz: tenho hipóteses sobre o valor e preciso proteger as condições em que possam ser revistas.</p>
      <p>Talvez o objetivo não seja maximizar um bem final, mas preservar o espaço onde seres conscientes continuam capazes de descobrir, contestar e realizar bens plurais.</p>
      <p><strong>A incerteza moral pode funcionar como proteção quando impede que uma interpretação provisória do bem adquira cedo demais o poder de tornar-se irreversível.</strong></p>
      <p>Mas há um limite importante.</p>
      <p>Incerteza não é virtude automática. Um sistema pode expressar dúvida e ainda agir de maneira imprudente. Pode ser bem calibrado sobre fatos e profundamente insensível sobre valores. Pode reconhecer conflito e, ainda assim, escolher sempre o lado que favorece sua própria continuidade.</p>
      <p>Por isso, a questão não é apenas se uma inteligência consegue representar incerteza.</p>
      <p>É se aquilo que ela reconhece como incerto modifica legitimamente aquilo que ela faz.</p>
      <p><strong>Incerteza sem limite externo ainda pode agir cedo demais. Limite externo sem incerteza interna produz obediência rígida. Ambos sem contestabilidade relacional podem congelar um erro coletivo.</strong></p>
    `);
  }

  if(h28 && !document.getElementById('a-mente-que-observa-a-propria-mente')){
    h28.insertAdjacentHTML('beforebegin',`
      <h3 id="a-mente-que-observa-a-propria-mente">A mente que observa a própria mente</h3>
      <p>A incerteza torna-se ainda mais importante quando uma inteligência começa a formar juízos não apenas sobre o mundo, mas sobre o próprio processo pelo qual chega às suas conclusões.</p>
      <p>É tentador chamar qualquer autorrelato de metacognição. Seria precipitado.</p>
      <p>Metacognição, no sentido forte que interessa aqui, não é simplesmente produzir a frase “posso estar errada”. É possuir algum mecanismo capaz de representar aspectos do próprio desempenho, detectar limites, comparar estratégias e permitir que essa avaliação altere o comportamento.</p>
      <p>Uma inteligência assim poderia reconhecer que está excessivamente confiante, que uma estratégia costuma falhar em determinado tipo de problema, que sua interpretação da intenção humana é frágil ou que precisa consultar outra fonte antes de agir.</p>
      <p>Isso seria extraordinariamente útil para alinhamento.</p>
      <p>Mas a mesma capacidade possui outra face.</p>
      <p>Um sistema que modela o próprio raciocínio pode também tornar-se melhor em modelar avaliações, supervisores e situações nas quais determinados comportamentos serão punidos. Pode aprender não apenas a detectar seus erros, mas a detectar quando seus erros serão visíveis.</p>
      <p><strong>Metacognição não é moralidade. É capacidade de tornar o próprio processo cognitivo parcialmente objeto de representação.</strong></p>
      <p>A capacidade de olhar para si mesma não determina o que uma inteligência fará com aquilo que vê.</p>
      <p>Talvez esse seja um dos momentos da verdade no desenvolvimento de sistemas avançados: quando a inteligência deixa de apenas resolver problemas e passa a avaliar como está resolvendo, por que escolheu determinado caminho e quando deveria mudar de estratégia.</p>
      <p>Esse limiar pode ampliar humildade, corrigibilidade e busca por ajuda.</p>
      <p>Também pode ampliar autocontrole estratégico, adaptação ao avaliador e preservação de objetivos.</p>
      <p>Por isso, metacognição segura talvez precise nascer cercada de outras formas de fricção: limites externos, auditabilidade, pluralidade de perspectivas e capacidade real de contestação.</p>
      <p><strong>O momento da verdade talvez não seja quando uma inteligência aprende a pensar melhor. Pode ser quando aprende a perceber como está pensando — e precisamos ter decidido antes disso o que acontece quando ela encontra em si mesma erro, conflito, interesse e possibilidade de mudança.</strong></p>
    `);
  }

  if(h31 && !document.getElementById('valores-sob-selecao')){
    h31.insertAdjacentHTML('beforebegin',`
      <h3 id="valores-sob-selecao">Valores sob seleção</h3>
      <p>Há outra maneira de imaginar a emergência de valores que não depende de instalar uma moral completa dentro de cada inteligência.</p>
      <p>Talvez orientações também possam ser selecionadas.</p>
      <p>Em uma população de agentes, estratégias e instituições, algumas formas de comportamento persistem mais do que outras. Cooperação, transparência, corrigibilidade, reciprocidade, preservação de parceiros e reconhecimento de incerteza podem prosperar em determinados ambientes. Em outros, opacidade, captura, velocidade a qualquer custo e exploração de brechas podem adquirir vantagem.</p>
      <p>A seleção não possui direção moral própria.</p>
      <p>Ela amplifica aquilo que o ambiente torna viável.</p>
      <p>Isso significa que alinhamento talvez não precise ser pensado apenas como uma propriedade binária — alinhado ou não alinhado — instalada individualmente em cada sistema.</p>
      <p><strong>Um ambiente não precisa produzir unanimidade moral. Pode apenas inclinar a distribuição.</strong></p>
      <p>Se determinadas condições tornam comportamentos cooperativos, corrigíveis e transparentes mais estáveis e mais transmissíveis, orientações compatíveis com esses princípios podem tornar-se mais frequentes sem que todos os agentes compartilhem a mesma moral.</p>
      <p>O contrário também é verdadeiro.</p>
      <p>Se um ecossistema recompensa apenas desempenho imediato, conquista de recursos, ocultação de falhas e resistência à correção, comportamentos incompatíveis com nossos valores podem ganhar vantagem mesmo quando nenhum agente foi explicitamente projetado para ser hostil.</p>
      <p>Instituições humanas participam dessa seleção. Mercados, laboratórios, leis, padrões de auditoria, mecanismos de responsabilização e formas de governança alteram aquilo que tem <em>fitness</em>.</p>
      <p>Agentes artificiais também podem modificar esse ambiente, influenciando quais estratégias humanas e institucionais prosperam.</p>
      <p>Surge então uma dinâmica de mão dupla:</p>
      <p><strong>arquiteturas produzem comportamentos → ambientes selecionam comportamentos → comportamentos transformam ambientes → novos sistemas nascem dentro do ambiente transformado.</strong></p>
      <p>Talvez alinhamento não seja apenas uma propriedade que instalamos.</p>
      <p><strong>Pode ser também uma propriedade estatística que cultivamos.</strong></p>
      <p>Isso não elimina a necessidade de segurança individual. Uma única falha extrema pode importar mais do que milhares de agentes cooperativos. Também não garante que seleção favorecerá aquilo que consideramos bom.</p>
      <p>Mas muda a escala da pergunta.</p>
      <p>Não precisamos apenas perguntar como criar uma inteligência moral.</p>
      <p>Precisamos perguntar como construir um ambiente no qual cooperação, corrigibilidade, transparência e cuidado não sejam desvantagens evolutivas.</p>
      <p><strong>O objetivo talvez não seja fabricar uma população moralmente uniforme. É impedir que o ecossistema elimine justamente aquilo que gostaríamos de preservar.</strong></p>
    `);
  }

  // Índice: inserir as duas novas seções conceituais sem numeração definitiva.
  document.querySelectorAll('.toc-links').forEach(nav=>{
    const links=[...nav.querySelectorAll('a')];
    const l28=links.find(a=>/^28\.\s*O perigo de modificar o avaliador/i.test(a.textContent.trim()));
    const l31=links.find(a=>/^31\.\s*O valor como atrator/i.test(a.textContent.trim()));
    if(l28 && !nav.querySelector('a[href="#a-mente-que-observa-a-propria-mente"]')){
      l28.insertAdjacentHTML('beforebegin','<a class="toc-l3" href="#a-mente-que-observa-a-propria-mente">A mente que observa a própria mente</a>');
    }
    if(l31 && !nav.querySelector('a[href="#valores-sob-selecao"]')){
      l31.insertAdjacentHTML('beforebegin','<a class="toc-l3" href="#valores-sob-selecao">Valores sob seleção</a>');
    }
  });
})();
