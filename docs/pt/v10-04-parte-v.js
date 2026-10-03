(()=>{
  // v1.0 · bloco 4 — Parte V: A herança que atravessa substratos
  const essay=document.querySelector('.essay');
  if(!essay || document.getElementById('a-heranca-que-atravessa-substratos')) return;

  const part5=document.getElementById('parte-v-oraculos-genios-soberanos-ferramentas');
  if(!part5) return;

  part5.insertAdjacentHTML('beforeend',`
    <h3 id="a-heranca-que-atravessa-substratos">A herança que atravessa substratos</h3>

    <p><strong>Talvez a fusão entre humanos e máquinas comece muito antes de qualquer implante.</strong></p>
    <p>Ela pode começar quando descobertas produzidas por sistemas artificiais entram naquilo que seres humanos aprendem, ensinam, escrevem, constroem e transmitem à geração seguinte.</p>
    <p>Nesse momento, a inteligência artificial deixa de ser apenas uma ferramenta utilizada pela cultura.</p>
    <p>Passa a tornar-se uma fonte de variação dentro da própria cultura.</p>

    <p>O circuito pode assumir uma forma simples:</p>
    <p><strong>humanos criam IA<br>↓<br>IA descobre novos conceitos<br>↓<br>humanos absorvem os conceitos<br>↓<br>a cultura humana muda<br>↓<br>essa nova cultura produz textos, ciência, software, arte, linguagem<br>↓<br>esses materiais entram nos dados de futuras IAs<br>↓<br>novas IAs nascem dentro de uma cultura que as IAs anteriores ajudaram a criar<br>↓<br>produzem novas descobertas<br>↓<br>humanos mudam novamente.</strong></p>
    <p><strong>IA → cultura → IA′ → cultura′ → IA″…</strong></p>
    <p>Isso já não é apenas influência.</p>
    <p>É um circuito de <strong>coevolução informacional</strong>.</p>
    <p><strong>Talvez humanos e máquinas não precisem compartilhar o mesmo corpo para se fundirem. Basta que passem a compartilhar a mesma hereditariedade cultural.</strong></p>

    <hr>

    <p>Mas há duas formas muito diferentes de essa herança atravessar substratos.</p>
    <p><strong>IA descobre → humano compreende → cultura incorpora</strong></p>
    <p>não é a mesma coisa que:</p>
    <p><strong>IA descobre → humano não compreende → humano delega.</strong></p>
    <p>A segunda forma não precisa ser descrita automaticamente como decadência. Civilizações sempre dependeram de conhecimentos distribuídos que nenhum indivíduo consegue reconstruir por inteiro. Aviões voam, redes elétricas funcionam e medicamentos são produzidos sem que cada pessoa compreenda todas as camadas que os tornam possíveis.</p>
    <p>Mas uma inteligência artificial pode ampliar essa distância em escala nova.</p>
    <p>Uma civilização pode tornar-se mais capaz no conjunto enquanto se torna menos capaz de reconstruir internamente partes crescentes daquilo que faz.</p>
    <p>A questão deixa então de ser apenas quanto conhecimento produzimos.</p>
    <p>Passa a ser quanto desse conhecimento permanece cognitivamente absorvível, auditável e contestável.</p>
    <p><strong>Quanto da nossa inteligência coletiva pode tornar-se dependente de processos que já não conseguimos reconstruir antes que ampliação cognitiva comece a transformar-se em dependência cognitiva?</strong></p>

    <hr>

    <p>A coevolução também pode alterar o próprio ambiente em que ideias e instituições competem.</p>
    <p><strong>IA cria estratégia → estratégia favorece humanos compatíveis → esses humanos moldam instituições → instituições adotam mais IA.</strong></p>
    <p>Nesse circuito, a máquina não modifica apenas indivíduos.</p>
    <p>Modifica o nicho em que indivíduos, práticas e instituições adquirem vantagem.</p>
    <p><strong>A tecnologia não entra apenas no ambiente seletivo. Ela passa a participar da construção desse ambiente.</strong></p>
    <p>Uma forma cognitiva pode prosperar não porque seja mais verdadeira ou mais justa, mas porque possui maior <em>fitness</em> num ambiente progressivamente mediado por sistemas artificiais.</p>
    <p>Da mesma maneira, instituições humanas podem alterar o ambiente seletivo das próprias IAs: premiar transparência ou opacidade, cooperação ou captura, corrigibilidade ou persistência, pluralidade ou convergência.</p>
    <p>Alinhamento deixa então de ser apenas uma propriedade interna do agente.</p>
    <p>Passa também a ser uma propriedade do ecossistema que decide aquilo que consegue crescer.</p>

    <hr>

    <p>É aqui que Goodhart reaparece em outra escala.</p>
    <p>Uma métrica é criada.</p>
    <p>Uma IA aprende a explorá-la.</p>
    <p>Certas soluções vencem.</p>
    <p>Humanos adotam essas soluções.</p>
    <p>Instituições se reorganizam ao redor delas.</p>
    <p>Essas instituições produzem novas métricas, novos dados e novos incentivos.</p>
    <p>Futuras IAs aprendem dentro desse ambiente já transformado.</p>
    <p>O circuito torna-se:</p>
    <p><strong>métrica<br>↓<br>IA explora<br>↓<br>certas soluções vencem<br>↓<br>humanos as adotam<br>↓<br>instituições se reorganizam<br>↓<br>essas instituições produzem novas métricas e novos dados<br>↓<br>novas IAs aprendem nesse ambiente</strong></p>
    <p><strong>Goodhart pode deixar de ser apenas uma falha de otimização dentro da máquina. Pode tornar-se uma pressão seletiva sobre a cultura que vive ao redor dela.</strong></p>
    <p>No início deste ensaio, formulamos uma regra:</p>
    <p><strong>Toda métrica precisa ajoelhar diante do fenômeno que tenta servir.</strong></p>
    <p>Agora sabemos que isso talvez seja também uma regra de proteção cultural.</p>
    <p><strong>Se humanos e máquinas começam a participar juntos da seleção, transmissão e transformação de ideias, como valores poderiam emergir nesse campo?</strong></p>
  `);

  // Índice: inserir a nova seção depois do Companheiro Relacional, sem numeração definitiva.
  document.querySelectorAll('.toc-links').forEach(nav=>{
    const l24=[...nav.querySelectorAll('a')].find(a=>/^24\.\s*O Companheiro Relacional/i.test(a.textContent.trim()));
    if(l24 && !nav.querySelector('a[href="#a-heranca-que-atravessa-substratos"]')){
      l24.insertAdjacentHTML('afterend','<a class="toc-l3" href="#a-heranca-que-atravessa-substratos">A herança que atravessa substratos</a>');
    }
  });
})();
