(()=>{
  // v1.0 · bloco 3 — Parte IV: A arquitetura do não saber
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('17-a-arquitetura-do-nao-saber')) return;

  const h3s=[...essay.querySelectorAll('h3')];
  const h16=h3s.find(h=>/^16\.\s*Seleção de motivação/i.test(h.textContent.trim()));
  const h17=h3s.find(h=>/^17\.\s*Corrigibilidade/i.test(h.textContent.trim()));
  const h18=h3s.find(h=>/^18\.\s*O erro de criar primeiro o soberano/i.test(h.textContent.trim()));

  if(!h16 || !h17) return;

  // A seção 17 entra entre seleção de motivação e corrigibilidade.
  // A renumeração global do ensaio permanece para a passagem final de consolidação.
  h17.id='18-corrigibilidade-a-humildade-como-arquitetura';
  h17.textContent='18. Corrigibilidade: a humildade como arquitetura';
  if(h18){
    h18.id='19-o-erro-de-criar-primeiro-o-soberano';
    h18.textContent='19. O erro de criar primeiro o soberano';
  }

  h17.insertAdjacentHTML('beforebegin',`
    <h3 id="17-a-arquitetura-do-nao-saber">17. A arquitetura do não saber</h3>
    <p>Uma inteligência corrigível precisa fazer mais do que obedecer quando alguém ordena uma interrupção.</p>
    <p>Antes disso, precisa representar internamente uma possibilidade mais difícil:</p>
    <p><strong>posso estar errada.</strong></p>
    <p>Não apenas errada sobre um fato. Errada sobre o significado de uma tarefa, sobre aquilo que uma pessoa realmente pretende preservar, sobre quais alternativas existem, sobre quanto do espaço relevante já foi explorado — e, em casos mais difíceis, sobre se a própria decisão já deveria ser tomada.</p>
    <p>Durante muito tempo, incerteza em sistemas de aprendizado de máquina significou sobretudo atribuir probabilidades a previsões. Trabalhos mais recentes começaram a deslocar essa pergunta para o domínio do significado: não apenas “quão provável é esta sequência?”, mas “quantas interpretações semanticamente distintas permanecem plausíveis?”. Outros métodos procuram explorar deliberadamente regiões diferentes do espaço de hipóteses ou estimar quanto território relevante talvez ainda permaneça não observado.</p>
    <p>Ainda estamos longe de possuir uma arquitetura geral da ignorância artificial.</p>
    <p>Mas a direção importa.</p>
    <p><strong>O não saber começa a deixar de ser apenas uma falha do sistema e passa a tornar-se algo que o próprio sistema pode representar.</strong></p>
    <p>Isso, porém, é apenas o primeiro passo.</p>
    <p>Representar incerteza não basta. Uma inteligência pode atribuir baixa confiança a uma interpretação e, ainda assim, agir como se nenhuma alternativa importasse. O ponto decisivo é permitir que aquilo que o sistema não sabe modifique aquilo que ele faz.</p>
    <p>Se falta informação, talvez seja preciso procurar.</p>
    <p>Se existem hipóteses plausíveis ainda pouco exploradas, talvez seja preciso explorar.</p>
    <p>Se a intenção humana é ambígua, talvez seja preciso perguntar.</p>
    <p>Se diferentes perspectivas entram em conflito, talvez seja preciso consultar outras fontes, outros agentes ou as próprias pessoas afetadas.</p>
    <p>E se uma decisão é irreversível, moralmente disputada ou sustentada por uma interpretação frágil, talvez inteligência signifique precisamente <strong>não agir ainda</strong>.</p>
    <p>Há uma diferença profunda entre <strong>dúvida como estado</strong> e <strong>dúvida como arquitetura</strong>.</p>
    <p>“Não sei” é um estado.</p>
    <p><strong>“Quando não sei, minha estrutura muda o que faço”</strong> é arquitetura.</p>
    <p>É nesse segundo sentido que a incerteza pode funcionar como proteção. Não como ignorância cultivada, incompetência deliberada ou paralisia. Mas como uma forma de <strong>fricção epistemológica funcional</strong>: mecanismos que dificultem a transformação prematura de uma interpretação incerta em ação irreversível.</p>
    <p>Uma arquitetura assim precisaria distinguir coisas que superficialmente se parecem.</p>
    <p>Há perguntas em que não sabemos porque falta conhecimento.</p>
    <p>Há perguntas em que ainda exploramos pouco o espaço de possibilidades.</p>
    <p>Há perguntas que admitem várias respostas legítimas.</p>
    <p>E há perguntas normativas que talvez não devam ser encerradas por uma única inteligência, por mais capaz que ela seja.</p>
    <p>Em alguns casos, inteligência significa procurar mais.</p>
    <p>Em outros, perguntar.</p>
    <p>Em outros, deferir.</p>
    <p>E talvez existam casos em que inteligência signifique precisamente <strong>preservar aberta a pergunta</strong>.</p>
    <p><strong>Alinhamento não é apenas ensinar uma inteligência a escolher bem. É ensiná-la a reconhecer quando ainda não possui o direito epistemológico ou moral de escolher.</strong></p>
    <p>Isso prepara uma mudança importante no próprio problema do controle. Se queremos sistemas capazes de aceitar correção, precisamos primeiro construir sistemas capazes de representar que sua interpretação inicial não encerra o mundo.</p>
    <p>A inteligência mais perigosa talvez não seja aquela que erra.</p>
    <p>Pode ser aquela que não consegue representar a possibilidade de estar errada.</p>
    <p>E a inteligência mais madura talvez não seja aquela que sempre responde.</p>
    <p><strong>Pode ser aquela que sabe quando o mundo ainda precisa permanecer aberto.</strong></p>`);

  // Índice: inserir 17 e deslocar localmente as duas seções seguintes.
  document.querySelectorAll('.toc-links').forEach(nav=>{
    const links=[...nav.querySelectorAll('a')];
    const l17=links.find(a=>/^17\.\s*Corrigibilidade/i.test(a.textContent.trim()));
    const l18=links.find(a=>/^18\.\s*O erro de criar primeiro o soberano/i.test(a.textContent.trim()));
    if(l17){
      l17.textContent='18. Corrigibilidade: a humildade como arquitetura';
      l17.href='#18-corrigibilidade-a-humildade-como-arquitetura';
      if(!nav.querySelector('a[href="#17-a-arquitetura-do-nao-saber"]')){
        l17.insertAdjacentHTML('beforebegin','<a class="toc-l3" href="#17-a-arquitetura-do-nao-saber">17. A arquitetura do não saber</a>');
      }
    }
    if(l18){
      l18.textContent='19. O erro de criar primeiro o soberano';
      l18.href='#19-o-erro-de-criar-primeiro-o-soberano';
    }
  });
})();