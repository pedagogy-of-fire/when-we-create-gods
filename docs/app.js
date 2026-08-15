
const progress=document.querySelector('.progress');
const headings=[...document.querySelectorAll('.essay h2[id],.essay h3[id]')];
const links=[...document.querySelectorAll('.toc-links a')];
function update(){
  const h=document.documentElement; const max=h.scrollHeight-h.clientHeight; progress.style.width=(max?100*h.scrollTop/max:0)+'%';
  let active=''; for(const x of headings){ if(x.getBoundingClientRect().top<140) active=x.id; }
  links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+active));
}
addEventListener('scroll',update,{passive:true}); update();
for(const input of document.querySelectorAll('[data-search]')){
 input.addEventListener('input',()=>{const q=input.value.toLowerCase().trim(); document.querySelectorAll('.toc-links a').forEach(a=>a.style.display=!q||a.textContent.toLowerCase().includes(q)?'block':'none')});
}
document.querySelectorAll('[data-focus]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.toggle('focus'); b.textContent=document.body.classList.contains('focus')?'Sair do modo foco':'Modo foco'}));


// v0.3: subtle anchor highlighting for quick-reading cards
for(const a of document.querySelectorAll('.base-card,.choice-card,.formula-link,.formula-cta')){
  a.addEventListener('click',()=>{a.classList.add('tapped'); setTimeout(()=>a.classList.remove('tapped'),450)});
}
