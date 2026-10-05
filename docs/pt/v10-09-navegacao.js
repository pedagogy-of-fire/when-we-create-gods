(()=>{
  // v1.0 · navegação persistente entre ensaio, presente e cadernos
  if(document.getElementById('v10-site-nav')) return;
  const topbar=document.querySelector('.topbar');
  if(!topbar) return;

  const style=document.createElement('style');
  style.textContent=`
    #v10-site-nav{position:sticky;top:72px;z-index:19;display:flex;justify-content:center;gap:8px;padding:8px 12px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(9,7,13,.9);backdrop-filter:blur(12px)}
    #v10-site-nav a{display:inline-flex;align-items:center;justify-content:center;min-height:36px;padding:7px 12px;border:1px solid #2d2635;border-radius:999px;color:#d9d0de;text-decoration:none;font:600 .82rem/1.1 Inter,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif;letter-spacing:.01em;background:#100d15}
    #v10-site-nav a:hover{border-color:#6d5c7c;color:#fff}
    #v10-site-nav a[data-accent="gold"]{color:#e8bb75}
    @media(max-width:760px){
      #v10-site-nav{top:92px;justify-content:flex-start;overflow-x:auto;-webkit-overflow-scrolling:touch;scrollbar-width:none;padding:7px 10px}
      #v10-site-nav::-webkit-scrollbar{display:none}
      #v10-site-nav a{flex:0 0 auto;font-size:.78rem;padding:7px 10px}
    }
  `;
  document.head.appendChild(style);

  const nav=document.createElement('nav');
  nav.id='v10-site-nav';
  nav.setAttribute('aria-label','Navegação do projeto');
  nav.innerHTML=`
    <a href="index.html">⌂ Início</a>
    <a href="#agora">◷ Presente</a>
    <a href="cadernos/" data-accent="gold">Cadernos</a>
  `;
  topbar.insertAdjacentElement('afterend',nav);
})();
