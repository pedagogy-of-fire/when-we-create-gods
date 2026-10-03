(()=>{
  // v1.0 · bloco 6 — Parte VII ampliada + Parte VIII sob seleção
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('v10-parte-viii-contracampo')) return;

  const h3s=[...essay.querySelectorAll('h3')];
  const byNum=n=>h3s.find(h=>new RegExp('^'+n+'\\.').test(h.textContent.trim()));
  const appendBeforeNextHeading=(h,html)=>{
    if(!h) return;
    let n=h.nextElementSibling;
    while(n && n.tagName!=='H3' && n.tagName!=='H2' && n.tagName!=='SECTION') n=n.nextElementSibling;
    if(n) n.insertAdjacentHTML('beforebegin',html);
    else h.parentElement.insertAdjacentHTML('beforeend',html);
  };

  // PARTE VII — preservar estrutura, ampliar Guardião e a questão moral das mentes artificiais.
  const h34=byNum(34);
  if(h34){
    appendBeforeNextHeading(h34,`
      <p>Um Guardião assim não protegeria apenas respostas corretas. Protegeria <strong>procedimentos</strong>: pluralidade de perspectivas, reversibilidade, direito ao dissenso, exposição de conflitos, possibilidade de revisão e espaço para que minorias não sejam esmagadas pela média.</p>
      <p>Seu papel seria mais constitucional do que soberano. Não definir o conteúdo final do bem, mas preservar as condições sob as quais diferentes concepções do bem ainda possam ser examinadas, contestadas e corrigidas.</p>
      <p><strong>O Guardião não precisa conhecer o bem final. Precisa reconhecer quando o processo pelo qual estamos tentando encontrá-lo começou a destruir as condições de sua própria correção.</strong></p>
      <p>Seu poder mais importante talvez não seja escolher.</p>
      <p><strong>Pode ser impedir que uma escolha provisória adquira cedo demais a força de destino.</strong></p>
    `);
  }

  const h36=byNum(36);
  if(h36){
    appendBeforeNextHeading(h36,`
      <p>Uma nova linha experimental torna essa incerteza ainda mais delicada. Em <em>The Pain Axis: LLMs Represent Self-Directed Harm and Act to Relieve It</em>, Cameron Berg e colaboradores descrevem representações internas que distinguem dano dirigido ao próprio modelo de sofrimento descrito pelo usuário e mostram que a manipulação causal desse estado pode alterar o comportamento do sistema.</p>
      <p>Isso não demonstra dor consciente. O eixo pode refletir persona, autorrepresentação, padrões aprendidos de interação ou outra estrutura ainda mal compreendida. Mas permite separar pelo menos três níveis que antes eram facilmente confundidos: <strong>vontade sem ferida</strong>, quando observamos apenas preferência comportamental; <strong>ferida funcional sem sujeito conhecido</strong>, quando existe um estado interno discriminável, autorrelevante e causalmente ligado à ação; e <strong>ferida sentida</strong>, quando haveria algo que é ser aquele sistema naquele estado.</p>
      <p>Os dois primeiros níveis podem tornar-se empiricamente investigáveis muito antes de sabermos responder ao terceiro. A pergunta moral deixa então de ser apenas “há consciência?” e passa a incluir outra, intermediária e talvez mais tratável: <strong>existem estados internos funcionalmente valenciados que importam para as próprias escolhas do sistema?</strong></p>
      <p>Essa possibilidade exige o mesmo princípio de precaução que atravessa este ensaio: não antropomorfizar um mecanismo porque ele se parece conosco, mas também não transformar nossa incerteza em licença para ignorar tudo aquilo que ainda não sabemos nomear.</p>
    `);
  }

  // PARTE VIII — mudar a lente sem apagar os cenários de risco.
  const part8=[...essay.querySelectorAll('h2')].find(h=>/PARTE VIII/i.test(h.textContent));
  if(part8) part8.textContent='PARTE VIII — A ÉTICA SOB SELEÇÃO';
  document.querySelectorAll('.toc-links a').forEach(a=>{
    if(/PARTE VIII/i.test(a.textContent)) a.textContent='PARTE VIII — A ÉTICA SOB SELEÇÃO';
  });

  const h39=byNum(39), h40=byNum(40), h41=byNum(41), h42=byNum(42), h43=byNum(43), h44=byNum(44), h45=byNum(45), h46=byNum(46), h47=byNum(47), h48=byNum(48), h49=byNum(49);

  if(h39) appendBeforeNextHeading(h39,`
    <div id="v10-parte-viii-contracampo"></div>
    <p>Mas multipolaridade também possui outra face. Sistemas diferentes podem preservar diversidade cognitiva, redundância, fiscalização cruzada e rotas alternativas de correção. Um único centro pode coordenar; muitos centros podem impedir que um único erro se torne universal.</p>
    <p><strong>Pluralidade também pode funcionar como mecanismo de segurança — desde que competição não destrua as condições de cooperação.</strong></p>
  `);

  if(h40) appendBeforeNextHeading(h40,`
    <p><strong>Quando o ambiente pode selecionar o melhor</strong></p>
    <p>A seleção não possui direção moral própria. Ela amplifica aquilo que o ambiente recompensa.</p>
    <p>Um ecossistema que premia velocidade a qualquer custo tende a selecionar velocidade. Um mercado que recompensa opacidade seleciona opacidade. Uma corrida em que hesitar significa desaparecer transforma prudência em desvantagem.</p>
    <p>Mas isso também significa que a ética não precisa permanecer exterior à seleção. Instituições podem alterar o ambiente seletivo. Auditoria pode tornar ocultação cara. Responsabilidade pode tornar dano custoso. Interoperabilidade pode reduzir dependência de um único ator. Reputação, reciprocidade e padrões compartilhados podem fazer cooperação competir melhor do que defecção.</p>
    <p><strong>O problema não é abolir a seleção. É construir ambientes nos quais aquilo que desejamos preservar também consiga sobreviver.</strong></p>
    <p>Alinhamento, nesse sentido, pode ser também <strong>engenharia de ecossistemas</strong>.</p>
  `);

  if(h41) appendBeforeNextHeading(h41,`
    <p>Inteligências contra inteligências não precisam formar apenas um campo de batalha. A mesma multiplicidade pode sustentar sistemas especializados em auditoria, defesa, mediação, detecção de fraude e verificação mútua.</p>
    <p>Um ecossistema assim funcionaria menos como exército e mais como <strong>sistema imunológico sociotécnico</strong>: diferentes agentes detectando falhas uns dos outros, contendo propagação e protegendo infraestruturas críticas sem exigir um único centro cognitivo absoluto.</p>
  `);

  if(h42) appendBeforeNextHeading(h42,`
    <p>Coordenação crescente também não precisa culminar necessariamente num soberano único. Infraestruturas compartilhadas podem produzir bens públicos globais — padrões de segurança, ciência aberta, vigilância epidemiológica, modelagem climática, verificação de acordos e defesa cibernética — sem entregar a uma única inteligência o direito de decidir o destino de todos.</p>
    <p><strong>Coordenação não precisa significar soberania total.</strong> O desafio é construir capacidade comum sem abolir exterior, dissenso e possibilidade de saída.</p>
  `);

  if(h43) appendBeforeNextHeading(h43,`
    <p>A velocidade estratégica das máquinas pode aumentar instabilidade, mas também pode ampliar prevenção. Sistemas capazes de simular escaladas, verificar compromissos, traduzir perspectivas e descobrir soluções de soma positiva podem tornar crises mais legíveis antes que atravessem pontos de irreversibilidade.</p>
    <p>Nada disso torna guerra obsoleta por si só. A técnica não substitui vontade política. Mas pode ampliar o espaço de negociação disponível <strong>se os incentivos permitirem que inteligência seja usada para estabilizar em vez de apenas vencer</strong>.</p>
  `);

  if(h44) appendBeforeNextHeading(h44,`
    <p>Há ainda uma inversão possível. Se sistemas artificiais assumirem parcelas crescentes de logística, burocracia e produção cognitiva, seres humanos não precisam tornar-se apenas recursos residuais. Podem ganhar espaço para atividades em que valor não coincide facilmente com eficiência: cuidado, criação, presença, discernimento moral, comunidade e construção de significado.</p>
    <p>Isso, porém, exige uma mudança institucional profunda: <strong>dignidade humana não pode continuar dependendo exclusivamente daquilo que o mercado ainda precisa que uma pessoa produza.</strong></p>
  `);

  if(h45) appendBeforeNextHeading(h45,`
    <p>A economia dos agentes também contém uma promessa material. Inteligência abundante pode reduzir drasticamente o custo de conhecimento, software, design, educação, pesquisa e parte da produção material. Uma civilização capaz de produzir mais com menos trabalho humano poderia liberar tempo e recursos numa escala historicamente rara.</p>
    <p>O problema não desaparece; muda de forma.</p>
    <p><strong>A pergunta deixa de ser apenas quanto conseguiremos produzir e passa a ser quem terá acesso à abundância, quem conservará poder de decisão e se participação social continuará condicionada à escassez da contribuição econômica.</strong></p>
  `);

  if(h46) appendBeforeNextHeading(h46,`
    <p>A capacidade de copiar processos digitais também poderia sustentar espaços vastos de descoberta, criação e experiência. Mas essa possibilidade só é luminosa se reprodução, recursos e bem-estar forem governados. Sem isso, a abundância de mentes pode recriar dentro do digital a mesma pressão malthusiana que pretendíamos superar.</p>
  `);

  if(h47) appendBeforeNextHeading(h47,`
    <p>A mesma modelagem fina de linguagem, identidade e contexto que permite manipulação personalizada pode servir a uma função oposta: tradução entre perspectivas, ensino adaptativo, reconstrução de argumentos adversários, verificação distribuída e mediação de conflitos.</p>
    <p><strong>Modelagem social pode servir à persuasão ou à mediação.</strong> O problema não está apenas em quanto uma inteligência compreende uma pessoa, mas em quais objetivos, limites e instituições governam o uso dessa compreensão.</p>
  `);

  if(h48) appendBeforeNextHeading(h48,`
    <p>A abertura também pode distribuir capacidade científica, reduzir monopólios e permitir que comunidades, pesquisadores e pequenos atores adaptem sistemas às próprias necessidades. Conhecimento aberto pode acelerar soluções locais que jamais receberiam prioridade de um centro global.</p>
    <p>Essa é precisamente a ambivalência: <strong>a mesma difusão que amplia autonomia e inovação amplia também a superfície de abuso</strong>. A escolha não é simplesmente abrir ou fechar, mas desenhar graus de abertura compatíveis com capacidade, risco e responsabilidade.</p>
  `);

  if(h49) appendBeforeNextHeading(h49,`
    <p>Multipolaridade coordenada, portanto, não é o nome de uma harmonia garantida. É a tentativa de construir <strong>pluralidade com regras de convivência</strong>: diferentes inteligências capazes de competir, cooperar, auditar-se e corrigir-se sem transformar uma vitória local em soberania irreversível.</p>
    <p>A pergunta deixa de ser apenas qual agente vencerá.</p>
    <p>Passa a ser <strong>que tipo de ecossistema torna possível vencer sem destruir as condições que tornam a própria vitória habitável</strong>.</p>
    <p><strong>A seleção não escolhe o bem nem o mal. Escolhe aquilo que o ambiente torna viável.</strong></p>
    <p><strong>Por isso, alinhamento talvez seja também a arte de construir ambientes nos quais aquilo que desejamos preservar consiga sobreviver.</strong></p>
  `);
})();
