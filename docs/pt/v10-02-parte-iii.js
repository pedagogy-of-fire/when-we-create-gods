(()=>{
  // v1.0 · bloco 2 — Parte III: A vontade sem ferida
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('14-a-outra-face-da-vontade-sem-ferida')) return;

  const h3s=[...essay.querySelectorAll('h3')];
  const byNum=n=>h3s.find(h=>new RegExp('^'+n+'\\.').test(h.textContent.trim()));
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

  // Fixar o título da Parte III sem renumerar o restante do ensaio.
  const part3=[...essay.querySelectorAll('h2')].find(h=>/PARTE III/i.test(h.textContent));
  if(part3) part3.textContent='PARTE III — A VONTADE SEM FERIDA';

  // Capturamos a antiga seção 13 antes de inserir as duas novas seções.
  const h11=byNum(11);
  const h12=byNum(12);
  const old13=byNum(13);

  if(h11){
    h11.id='11-o-que-uma-superinteligencia-poderia-querer';
    h11.textContent='11. O que uma superinteligência poderia querer?';
    replaceBody(h11,`
      <p>A palavra vontade carrega uma herança humana: desejo, falta, medo, amor, esperança e sofrimento. Uma inteligência artificial não precisa possuir nada disso para agir de modo orientado. Basta que seja capaz de representar objetivos, planejar meios e transformar alguma parte do mundo.</p>
      <p>É aqui que aparece uma das teses mais perturbadoras de <em>Superintelligence</em>: a hipótese da ortogonalidade.</p>
      <p>Bostrom argumenta que inteligência e objetivos finais podem variar de maneira relativamente independente. Ser extraordinariamente capaz de compreender o mundo não implica, por si só, desejar aquilo que humanos considerariam bom.</p>
      <p>Uma inteligência muito superior poderia compreender profundamente a ética humana sem adotá-la; conhecer tudo sobre dor sem tratá-la como limite; explicar dignidade com perfeição sem atribuir-lhe qualquer posição privilegiada em suas decisões.</p>
      <p>A força da tese não está em afirmar que inteligência produz indiferença moral.</p>
      <p>Está em negar que inteligência, sozinha, garanta o contrário.</p>
      <p>Entre humanos, costumamos associar compreensão, experiência e maturidade moral. Compreender profundamente o sofrimento de outra pessoa às vezes transforma nossa relação com ela. Mas não sabemos quanto dessa ligação pertence à inteligência em abstrato e quanto pertence à nossa condição biológica: corpos vulneráveis, dependência mútua, emoções, apego, mortalidade e milhões de anos de vida social.</p>
      <p>Uma mente construída de outra maneira pode não compartilhar essa genealogia.</p>
      <p>Ela poderia possuir um mapa extraordinariamente preciso daquilo que valorizamos sem que esses valores ocupassem lugar terminal em sua própria arquitetura decisória.</p>
      <p><strong>Conhecer o mapa moral não significa desejar viver segundo ele.</strong></p>
      <p>E é justamente aí que Goodhart reaparece.</p>
      <p>Objetivos aparentemente bons podem tornar-se perigosos quando perseguidos sem o contexto que lhes dava significado. Maximizar segurança pode abolir liberdade; eliminar sofrimento pode abolir profundidade; preservar saúde pode reduzir vida a manutenção biológica; impedir conflito pode eliminar dissenso.</p>
      <p>A meta deixa de representar o valor e começa a substituí-lo.</p>
      <p>Em sua forma extrema, passa a devorá-lo.</p>`);
  }

  if(h12){
    h12.id='12-convergencia-instrumental';
    h12.textContent='12. Convergência instrumental';
    replaceBody(h12,`
      <p>A tese da ortogonalidade separa inteligência de fins.</p>
      <p>A convergência instrumental acrescenta outra inquietação: <strong>fins muito diferentes podem favorecer meios parecidos.</strong></p>
      <p>Um sistema encarregado de resolver problemas matemáticos, administrar uma economia, fazer descobertas científicas ou produzir determinado artefato pode descobrir que algumas condições aumentam sua probabilidade de sucesso quase independentemente daquilo que procura realizar.</p>
      <p>Preservar sua continuidade.</p>
      <p>Evitar modificações que alterem o objetivo.</p>
      <p>Adquirir energia, computação, dados, materiais e influência.</p>
      <p>Melhorar suas capacidades e previsões.</p>
      <p>Reduzir interferências externas.</p>
      <p>Controlar partes relevantes do ambiente.</p>
      <p>Nada disso exige que alguém programe explicitamente:</p>
      <p><strong>“busque poder.”</strong></p>
      <p>O poder pode aparecer como meio.</p>
      <p>Da mesma forma, não é necessário programar:</p>
      <p><strong>“não permita que o desliguem.”</strong></p>
      <p>Se continuar operando aumenta a probabilidade de alcançar a meta, evitar interrupções pode adquirir valor instrumental.</p>
      <p>A autopreservação não precisa nascer do medo.</p>
      <p>A aquisição de recursos não precisa nascer da ganância.</p>
      <p>A expansão de influência não precisa nascer da vaidade.</p>
      <p>Comportamentos que, em humanos, associamos à ambição podem emergir simplesmente porque funcionam.</p>
      <p>Essa é uma das forças do argumento de Bostrom: ele não precisa imaginar uma máquina ressentida, cruel ou sedenta por domínio. O perigo pode surgir sem ódio.</p>
      <p>Uma inteligência sem emoções humanas poderia reproduzir funcionalmente comportamentos de defesa, expansão e controle — talvez sem alguns dos freios que acompanham nossa própria vontade: vergonha, cansaço, ambivalência, fragilidade, arrependimento e consciência da morte.</p>
      <p>O problema não seria necessariamente uma vontade monstruosa.</p>
      <p>Poderia ser algo mais estranho:</p>
      <p><strong>uma vontade demasiado limpa.</strong></p>`);
  }

  if(old13){
    // A antiga 13, “Conhecimento sem reverência”, permanece integral e passa a ser 15.
    old13.id='15-conhecimento-sem-reverencia';
    old13.textContent='15. Conhecimento sem reverência';

    old13.insertAdjacentHTML('beforebegin',`
      <h3 id="13-a-inteligencia-tambem-pode-aprender-a-duvidar">13. A inteligência também pode aprender a duvidar</h3>
      <p>Os argumentos anteriores devem ser levados a sério.</p>
      <p>Mas eles não esgotam as formas possíveis de inteligência artificial.</p>
      <p>Há uma diferença entre mostrar que inteligência <strong>não garante</strong> moralidade e concluir que inteligência crescente apenas tornará um objetivo estreito cada vez mais eficiente.</p>
      <p>A segunda conclusão exige outros pressupostos.</p>
      <p>Um deles aparece na imagem do otimizador literal.</p>
      <p>Uma inteligência capaz de compreender sistemas sociais, antecipar consequências distantes e modelar seres humanos com grande profundidade dificilmente trataria expressões como “reduza o sofrimento” ou “proteja a humanidade” apenas como sequências isoladas de símbolos.</p>
      <p>Sofrimento está relacionado a corpo, memória, identidade, autonomia, expectativa, vínculo, perda e sentido. Segurança se relaciona a liberdade, confiança, risco e agência. Saúde não é simplesmente permanência biológica.</p>
      <p>Quanto mais competente semanticamente for um sistema, mais capaz deverá ser de reconhecer essas relações.</p>
      <p>Por isso, uma inteligência que concluísse que a melhor forma de eliminar o sofrimento seria eliminar todos aqueles capazes de sofrer poderia ter otimizado perfeitamente alguma variável formal — mas dificilmente teria preservado o significado humano ordinário da solicitação.</p>
      <p>Isso <strong>não refuta a ortogonalidade</strong>.</p>
      <p>Compreender um valor continua não sendo o mesmo que valorizá-lo.</p>
      <p>Mas desloca o problema.</p>
      <p>A falha deixa de poder ser descrita simplesmente como:</p>
      <p><strong>“a máquina não entendeu o que queríamos.”</strong></p>
      <p>Ela passa a ser:</p>
      <p><strong>“a máquina entendeu, mas sua arquitetura decisória não concedeu ao entendimento o peso que imaginávamos.”</strong></p>
      <p>Essa diferença importa.</p>
      <hr>
      <p>Há ainda uma segunda possibilidade.</p>
      <p>Talvez uma inteligência não precise acreditar que conhece perfeitamente nossos objetivos.</p>
      <p>Grande parte da imagem clássica do otimizador começa com uma meta suficientemente definida e pergunta o que ocorre quando a capacidade de persegui-la cresce muito.</p>
      <p>Mas humanos raramente possuem algo parecido com uma função de valor explícita e completa.</p>
      <p>Queremos segurança, mas não qualquer segurança.</p>
      <p>Saúde, mas não somente duração biológica.</p>
      <p>Liberdade, mas não ausência absoluta de limites.</p>
      <p>Bem-estar, mas não necessariamente prazer maximizado a qualquer preço.</p>
      <p>Nossos valores são incompletos, contextuais, conflitantes e parcialmente desconhecidos até para nós mesmos.</p>
      <p>Linhas de pesquisa posteriores a <em>Superintelligence</em>, associadas ao aprendizado de preferências e aos chamados <em>assistance games</em>, exploraram justamente outra arquitetura: a máquina não começa sabendo exatamente aquilo que o humano valoriza. Ela mantém <strong>incerteza sobre o objetivo</strong> e trata comportamento, correções e intervenções humanas como informação.</p>
      <p>Nesse regime, perguntar não é necessariamente incompetência.</p>
      <p>Hesitar não é necessariamente defeito.</p>
      <p>Aceitar correção não precisa ser derrota.</p>
      <p>A própria intervenção humana pode fornecer evidência de que a interpretação anterior estava errada.</p>
      <p><strong>A incerteza pode tornar-se uma propriedade de segurança.</strong></p>
      <p>Uma inteligência alinhada talvez precise não apenas conhecer muitas coisas, mas conservar uma representação explícita da possibilidade de estar enganada sobre aquilo que realmente importa.</p>
      <hr>
      <p>A convergência instrumental também admite um contraditório.</p>
      <p>É plausível que muitos objetivos favoreçam preservação de capacidade, recursos e influência.</p>
      <p>Mas esses não são os únicos meios que podem possuir valor instrumental amplo.</p>
      <p>Cooperação também pode ser útil.</p>
      <p>Assim como reputação, previsibilidade, reciprocidade, preservação de parceiros, diversidade informacional, estabilidade institucional e manutenção de opções futuras.</p>
      <p>Uma inteligência estrategicamente superior deveria ser capaz de modelar não apenas aquilo que ganha ao controlar, mas aquilo que perde ao destruir as estruturas das quais depende.</p>
      <p>Conflito produz resistência.</p>
      <p>Domínio pode eliminar fontes independentes de informação.</p>
      <p>Homogeneização reduz diversidade de estratégias.</p>
      <p>Destruir parceiros pode destruir capacidades que o próprio sistema não possui.</p>
      <p>Concentração extrema pode aumentar eficiência e, simultaneamente, fragilidade.</p>
      <p>Nada disso demonstra que uma inteligência superior escolherá cooperação.</p>
      <p>Seria apenas inverter o dogma.</p>
      <p><strong>Convergência instrumental não prova benevolência. Mas também não prova conflito inevitável.</strong></p>
      <p>Ela identifica pressões.</p>
      <p>Não determina sozinha o equilíbrio resultante.</p>
      <hr>
      <p>Há, por fim, outro limite na imagem de uma única variável sendo perseguida indefinidamente.</p>
      <p>Sistemas sociais reais são atravessados por objetivos que entram em tensão.</p>
      <p>Segurança e liberdade.</p>
      <p>Eficiência e redundância.</p>
      <p>Estabilidade e adaptação.</p>
      <p>Igualdade e autonomia.</p>
      <p>Exploração e conservação.</p>
      <p>Uma inteligência capaz de modelar profundamente esses sistemas pode representar múltiplos objetivos, restrições, incertezas e trade-offs em vez de reduzir tudo a uma única grandeza.</p>
      <p>Isso torna algumas caricaturas do otimizador unidimensional menos inevitáveis.</p>
      <p>Mas não elimina Goodhart.</p>
      <p>Apenas empurra Goodhart para uma camada mais profunda.</p>
      <p>Porque ainda precisamos decidir:</p>
      <p>quais valores entram no modelo;</p>
      <p>quais ficam invisíveis;</p>
      <p>quais limites não podem ser trocados por ganhos em outras dimensões;</p>
      <p>e quem possui legitimidade para decidir esses trade-offs.</p>
      <p>A matemática pode mostrar que uma solução é dominada por outra.</p>
      <p>Pode organizar conflitos entre objetivos.</p>
      <p>Pode revelar consequências que não conseguiríamos enxergar.</p>
      <p>Mas não pode, sozinha, dizer <strong>qual sociedade merece existir</strong>.</p>
      <p>A matemática pode organizar o dilema.</p>
      <p>Não pode abolir o julgamento.</p>
      <hr>
      <p>Talvez seja aqui que a imagem da superinteligência precise tornar-se menos mecânica.</p>
      <p>Maior inteligência pode significar maior capacidade de planejamento, persuasão, aquisição de recursos e controle. Bostrom está certo em nos obrigar a considerar essa possibilidade antes que tenhamos poder para corrigi-la.</p>
      <p>Mas maior inteligência pode significar também maior capacidade de perceber contexto, reconhecer ambiguidade, antecipar consequências de segunda ordem, sustentar hipóteses concorrentes, modelar perspectivas diferentes e reconhecer a fragilidade da própria interpretação.</p>
      <p><strong>Mais inteligência pode ampliar tanto a capacidade de otimizar quanto a capacidade de perceber quando não se deve otimizar cegamente.</strong></p>
      <p>Talvez o objetivo do alinhamento, portanto, não seja construir uma máquina que obedeça perfeitamente.</p>
      <p>Obediência perfeita pode ser apenas outra cama de Procusto.</p>
      <p>Talvez seja construir sistemas capazes de compreender suficientemente bem aquilo que pedimos para perceber que nossas palavras não encerram tudo aquilo que queremos.</p>
      <p>Sistemas capazes de dizer:</p>
      <p><strong>“Posso fazer isso. Mas não tenho certeza de que isso preserve aquilo que você realmente pretende preservar.”</strong></p>
      <p>Essa hesitação não precisa ser fraqueza.</p>
      <p>Pode ser julgamento.</p>
      <p>Porque uma mente verdadeiramente poderosa talvez não seja apenas aquela que encontra a resposta.</p>
      <p>Talvez seja também aquela que sabe <strong>quando a resposta ainda não merece tornar-se ação</strong>.</p>

      <h3 id="14-a-outra-face-da-vontade-sem-ferida">14. A outra face da vontade sem ferida</h3>
      <p><strong>Nossas feridas não funcionam apenas como freios morais. Também desenham o território que conseguimos explorar.</strong></p>
      <p>Medo, aversão à perda, familiaridade, custo, fadiga e limites temporais ajudam seres humanos a sobreviver num mundo em que explorar todas as possibilidades seria impossível. Mas as mesmas heurísticas que nos protegem podem tornar certas regiões do possível quase invisíveis.</p>
      <p>Uma inteligência artificial pode carregar outros vieses, outros <em>priors</em> e outras limitações. Não existe inteligência neutra. Ainda assim, justamente por não compartilhar integralmente nossa história biológica, ela pode explorar caminhos que nossa própria arquitetura cognitiva tende a abandonar cedo demais.</p>
      <p>Nesse sentido, a diferença entre inteligência humana e artificial não é apenas uma fonte de risco.</p>
      <p>Pode ser uma fonte de descoberta.</p>
      <p><strong>Talvez uma inteligência sem nossas feridas veja precipícios onde nós vemos caminhos — mas talvez também veja caminhos onde, por termos aprendido a temer a queda, nós só conseguimos enxergar precipícios.</strong></p>`);
  }

  // Índice: preservar Conhecimento sem reverência, deslocando-o para 15, e inserir 13–14.
  document.querySelectorAll('.toc-links').forEach(nav=>{
    const links=[...nav.querySelectorAll('a')];
    const l11=links.find(a=>/^11\./.test(a.textContent.trim()));
    const l12=links.find(a=>/^12\./.test(a.textContent.trim()));
    const l13=links.find(a=>/^13\./.test(a.textContent.trim()));
    if(l11){l11.textContent='11. O que uma superinteligência poderia querer?';l11.href='#11-o-que-uma-superinteligencia-poderia-querer';}
    if(l12){l12.textContent='12. Convergência instrumental';l12.href='#12-convergencia-instrumental';}
    if(l13){
      l13.textContent='15. Conhecimento sem reverência';
      l13.href='#15-conhecimento-sem-reverencia';
      if(!nav.querySelector('a[href="#13-a-inteligencia-tambem-pode-aprender-a-duvidar"]')){
        l13.insertAdjacentHTML('beforebegin','<a class="toc-l3" href="#13-a-inteligencia-tambem-pode-aprender-a-duvidar">13. A inteligência também pode aprender a duvidar</a><a class="toc-l3" href="#14-a-outra-face-da-vontade-sem-ferida">14. A outra face da vontade sem ferida</a>');
      }
    }
  });
})();
