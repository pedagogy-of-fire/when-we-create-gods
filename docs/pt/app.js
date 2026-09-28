async function loadEssay(){
 const host=document.getElementById('essay-loaded');
 if(host && Array.isArray(window.ESSAY_PARTS)){host.innerHTML=''; for(const src of window.ESSAY_PARTS){const r=await fetch(src); if(r.ok) host.insertAdjacentHTML('beforeend',await r.text()); else host.insertAdjacentHTML('beforeend',`<p>Não foi possível carregar ${src}.</p>`);}}
 const progress=document.querySelector('.progress');
 const headings=[...document.querySelectorAll('.essay h3[id]')];
 const nav=document.querySelector('.toc-links');
 if(nav){nav.innerHTML=''; for(const h of headings){const a=document.createElement('a');a.href='#'+h.id;a.textContent=h.textContent;nav.appendChild(a);}}
 const links=[...document.querySelectorAll('.toc-links a')];
 window.addEventListener('scroll',()=>{const h=document.documentElement;const max=h.scrollHeight-h.clientHeight; if(progress) progress.style.width=(max?Math.min(100,(h.scrollTop/max)*100):0)+'%';let current='';for(const el of headings){if(el.getBoundingClientRect().top<150)current=el.id}links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));});
 for(const input of document.querySelectorAll('[data-search]')){input.addEventListener('input',()=>{const q=input.value.toLowerCase();links.forEach(a=>a.style.display=(!q||a.textContent.toLowerCase().includes(q))?'block':'none')});}
 document.querySelectorAll('[data-focus]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.toggle('focus');b.textContent=document.body.classList.contains('focus')?'Sair do modo foco':'Modo foco'}));
}
loadEssay();
