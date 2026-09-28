(()=>{
  // v1.0 · bloco 1 — Prólogo + abertura + mudança de regime
  document.querySelectorAll('.version').forEach(el=>{
    if(/^v0\./.test(el.textContent.trim())) el.textContent='v1.0 · 28 set 2026';
  });

  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('prologo-o-fogo')) return;

  const opening=document.getElementById('abertura-quando-a-medida-comeca-a-governar');
  if(opening){
    opening.insertAdjacentHTML('beforebegin', `
      <section class="part new-part" id="prologo-o-fogo">
        <div class="part-kicker">PRÓLOGO · v1.0</div>
        <h2>PRÓLOGO — O FOGO</h2>
        <p>Durante quase toda a história humana, nossas ferramentas ampliaram alguma coisa que já existia em nós.</p>
        <p>A pedra prolongou a mão.<br>A escrita prolongou a memória.<br>O telescópio ampliou o olhar.<br>A máquina multiplicou o músculo.<br>O computador acelerou o cálculo.</p>
        <p>Cada uma dessas invenções alterou não apenas aquilo que podíamos fazer, mas também aquilo que podíamos imaginar.</p>
        <p>A inteligência artificial talvez pertença a uma categoria diferente.</p>
        <p>Não porque seja mágica. Não porque pense necessariamente como nós. E não porque esteja destinada a tornar-se algo maior do que a humanidade.</p>
        <p>Mas porque, pela primeira vez, começamos a construir ferramentas capazes de participar do próprio processo pelo qual descobrimos novas ferramentas.</p>
        <p>Uma máquina que calcula mais rápido ainda permanece dentro de um problema que alguém formulou.</p>
        <p>Uma máquina que ajuda a encontrar uma molécula que nunca existiu, uma estrutura que ninguém havia visto, uma demonstração que ninguém conseguiu encontrar ou uma hipótese que ninguém havia considerado começa a ocupar um lugar diferente.</p>
        <p>Ela não amplia apenas uma habilidade.</p>
        <p>Pode ampliar o <strong>espaço do possível</strong>.</p>
        <p>E isso muda a escala da pergunta.</p>
        <p>Talvez sistemas futuros ajudem a compreender doenças que hoje tratamos apenas pelos sintomas. Talvez explorem milhões de moléculas antes que um laboratório precise sintetizar uma única delas. Talvez descubram materiais capazes de armazenar energia de maneiras que hoje não sabemos produzir, encontrem catalisadores que transformem processos industriais, ajudem a estabilizar plasmas, interpretem sistemas climáticos profundamente complexos ou tornem acessível a qualquer criança uma forma de educação que hoje depende da presença rara de um grande professor.</p>
        <p>Talvez ajudem matemáticos a explorar territórios que uma vida humana inteira não seria suficiente para percorrer.</p>
        <p>Talvez revelem regularidades na natureza para as quais ainda não temos linguagem.</p>
        <p>Talvez nos ajudem a construir instrumentos científicos que, por sua vez, permitam construir instrumentos ainda melhores.</p>
        <p>E algumas possibilidades provavelmente serão muito mais estranhas.</p>
        <p>A história da tecnologia raramente respeita as categorias disponíveis no momento em que começa.</p>
        <p>Um romano poderia imaginar uma carruagem extraordinariamente rápida. Dificilmente imaginaria um satélite utilizando relógios atômicos para dizer a alguém onde está sobre a superfície do planeta.</p>
        <p>Nós também estamos presos ao vocabulário de nossa época.</p>
        <p>Quando imaginamos o futuro da inteligência artificial, tendemos a imaginar as coisas que já conhecemos — apenas melhores.</p>
        <p>Um chatbot melhor.<br>Um robô melhor.<br>Um médico artificial melhor.<br>Um cientista artificial melhor.</p>
        <p>Mas talvez parte da transformação esteja justamente naquilo para o qual ainda não possuímos nome.</p>
        <p>Isso não exige acreditar numa superinteligência que resolverá todos os problemas humanos.</p>
        <p>Alguns problemas não são problemas de inteligência.</p>
        <p>São conflitos de valores. São escolhas políticas. São tragédias. São limites físicos. São escassez, distribuição, poder, sofrimento, acaso e mortalidade.</p>
        <p>Nenhuma quantidade de cálculo transforma automaticamente uma sociedade numa sociedade justa.</p>
        <p>Mas também seria estranho concluir daí que inteligência adicional pouco importa.</p>
        <p>A história humana é, em grande medida, a história daquilo que aconteceu quando conseguimos enxergar um pouco mais longe, medir um pouco melhor, lembrar um pouco mais, transmitir conhecimento com maior fidelidade e explorar espaços que antes permaneciam invisíveis.</p>
        <p>Se ampliarmos radicalmente nossa capacidade de descoberta, alguma coisa importante acontecerá.</p>
        <p>Não sabemos exatamente o quê.</p>
        <p>E talvez essa incerteza seja parte do fascínio.</p>
        <hr>
        <p>É por isso que construímos essas máquinas.</p>
        <p>Não apenas para escrever mensagens mais rapidamente, organizar agendas ou produzir imagens.</p>
        <p>Nós as construímos porque inteligência é uma das forças que transformam o mundo.</p>
        <p>Com inteligência descobrimos antibióticos, eletricidade, cálculo, vacinas, agricultura, música, foguetes e teorias capazes de descrever estrelas que morreram antes mesmo que nossa espécie existisse.</p>
        <p>A possibilidade de amplificar essa força é extraordinária.</p>
        <p>E é exatamente por isso que ela merece cuidado.</p>
        <p>O fogo aquece porque pode queimar.</p>
        <p>A mesma propriedade que permite fundir o metal permite incendiar a casa.</p>
        <p>A mesma química capaz de produzir um medicamento pode produzir um veneno.</p>
        <p>A mesma capacidade de compreender um organismo pode permitir curá-lo ou modificá-lo de formas que nunca pretendemos.</p>
        <p>O poder não chega ao mundo dividido em duas caixas — uma marcada <strong>benefício</strong>, outra marcada <strong>perigo</strong>.</p>
        <p>Frequentemente são a mesma caixa.</p>
        <p>O problema, portanto, não é escolher entre maravilhamento e medo.</p>
        <p>É aprender a sustentar ambos.</p>
        <hr>
        <p>E aqui começa a parte mais difícil.</p>
        <p>Porque nem todo desastre nasce do ódio.</p>
        <p>Nem todo dano exige uma intenção maligna.</p>
        <p>Às vezes basta transformar uma aproximação em objetivo.</p>
        <p>Uma medida em realidade.</p>
        <p>Uma regra em finalidade.</p>
        <p>Uma representação imperfeita do mundo em algo que passa a governar o próprio mundo que deveria representar.</p>
        <p>É aqui que uma velha observação da teoria econômica começa a adquirir uma importância inesperada.</p>
        <p>Quando uma medida se torna um alvo, ela tende a deixar de ser uma boa medida.</p>
        <p>Essa ideia ficou conhecida como <strong>Lei de Goodhart</strong>.</p>
        <p>Parece, à primeira vista, um problema modesto.</p>
        <p>Uma advertência sobre indicadores, burocracias e sistemas de avaliação.</p>
        <p>Mas escondida dentro dela existe uma pergunta muito maior:</p>
        <blockquote><strong>o que acontece quando damos a uma máquina extraordinariamente poderosa um objetivo que representa apenas imperfeitamente aquilo que realmente valorizamos?</strong></blockquote>
        <p>O problema do alinhamento começa muito antes da superinteligência.</p>
        <p>Começa no instante em que confundimos o mapa com o território.</p>
        <p>E talvez toda a história que segue possa ser entendida como uma tentativa de responder a essa confusão.</p>
        <p>Porque o maior perigo do fogo nunca foi simplesmente que ele queimasse.</p>
        <p>Foi esquecer <strong>para que queríamos a luz</strong>.</p>
      </section>`);
  }

  // Índice: inserir o prólogo antes da abertura, em desktop e mobile.
  document.querySelectorAll('.toc-links').forEach(nav=>{
    const first=nav.querySelector('a');
    if(first && !nav.querySelector('a[href="#prologo-o-fogo"]')){
      first.insertAdjacentHTML('beforebegin','<a class="toc-l2" href="#prologo-o-fogo">PRÓLOGO — O FOGO</a>');
    }
  });

  const h1=document.getElementById('1-quando-a-medida-comeca-a-governar');
  if(h1){
    h1.insertAdjacentHTML('afterend','<p><strong>Toda potência precisa de uma forma de orientação. E toda orientação começa, inevitavelmente, por uma representação imperfeita daquilo que queremos preservar.</strong></p>');
  }

  const h2=document.getElementById('2-a-banalidade-do-mal');
  if(h2){
    let n=h2.nextElementSibling, last=null;
    while(n && n.tagName!=='H3' && n.tagName!=='H2'){last=n;n=n.nextElementSibling}
    if(last) last.insertAdjacentHTML('afterend','<p><strong>Mas a capacidade de escolher meios também é precisamente aquilo que torna uma inteligência útil. O problema não é a competência. É competência sem interrupção, sem perspectiva e sem alguém — humano ou artificial — capaz de perguntar novamente para que aqueles meios existem.</strong></p>');
  }

  const h3=document.getElementById('3-a-cama-de-procusto');
  if(h3){
    let n=h3.nextElementSibling, ps=[];
    while(n && n.tagName!=='H3' && n.tagName!=='H2'){if(n.tagName==='P') ps.push(n);n=n.nextElementSibling}
    if(ps.length){
      ps[ps.length-1].outerHTML=`
        <p>Os mitos importam porque guardam conhecimentos ainda não convertidos em teoria. Antes de possuirmos conceitos como otimização, burocracia, alinhamento ou especificação de objetivos, já sabíamos que existe algo perigoso em obrigar o vivo a caber numa medida fixa. Goodhart desdobra em proposição aquilo que Procusto condensou em imagem; Arendt desdobra em análise política aquilo que o mito apresentou como cena. Imagens míticas podem funcionar como sensores morais pré-conceituais: reconhecemos a violência antes de conseguirmos demonstrá-la.</p>
        <p><strong>Mas a lição de Procusto não é que devamos abandonar a cama, a medida ou a técnica. É que a forma precisa permanecer capaz de se curvar diante daquilo que pretende servir.</strong></p>
        <p><strong>É com essa dupla consciência — da potência que queremos ampliar e das formas que podem deformá-la — que devemos olhar para a superinteligência. Não apenas perguntar como impedir que uma inteligência maior nos corte para cabermos em sua medida, mas como construir formas suficientemente vivas para que uma inteligência maior possa nos ajudar a enxergar além das nossas próprias.</strong></p>`;
    }
  }

  const h4=document.getElementById('4-a-inteligencia-tentando-escapar-do-cranio');
  if(h4){
    let n=h4.nextElementSibling, last=null;
    while(n && n.tagName!=='H3' && n.tagName!=='H2' && !(n.tagName==='SECTION')){last=n;n=n.nextElementSibling}
    if(last) last.insertAdjacentHTML('afterend','<p><strong>Essa é a pergunta de Bostrom em <em>Superintelligence</em>. Mas ela não esgota o horizonte aberto por uma inteligência maior. A mesma capacidade que torna possível uma assimetria perigosa é também aquilo que poderia ampliar radicalmente nossa capacidade de compreender, descobrir e criar.</strong></p>');
  }

  const p1=document.getElementById('parte-i-a-agua-comeca-a-aquecer');
  if(p1){
    const title=p1.querySelector('h2');
    if(title) title.insertAdjacentHTML('afterend','<p><strong>A metáfora da água não é uma escala de medo, mas de regime.</strong> Enquanto as mudanças permanecem graduais, ainda conseguimos reconhecer continuidades, medir tendências e corrigir trajetórias. Mas sistemas complexos podem atravessar limiares: pequenas variações acumuladas produzem propriedades novas, e aquilo que antes era previsível sob uma forma passa a exigir outra linguagem. Aquecer, aqui, significa aproximar-se da possibilidade de mudança de fase.</p>');
  }
})();