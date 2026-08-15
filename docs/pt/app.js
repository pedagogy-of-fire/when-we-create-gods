const progress=document.querySelector('.progress');
const headings=[...document.querySelectorAll('.essay h2[id],.essay h3[id]')];
const links=[...document.querySelectorAll('.toc-links a')];
window.addEventListener('scroll',()=>{
 const h=document.documentElement;
 const max=h.scrollHeight-h.clientHeight;
 progress.style.width=(max?Math.min(100,(h.scrollTop/max)*100):0)+'%';
 let current='';
 for(const el of headings){if(el.getBoundingClientRect().top<150)current=el.id}
 links.forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+current));
});
for(const input of document.querySelectorAll('[data-search]')){
 input.addEventListener('input',()=>{const q=input.value.toLowerCase();document.querySelectorAll('.toc-links a').forEach(a=>a.style.display=(!q||a.textContent.toLowerCase().includes(q))?'block':'none')});
}
document.querySelectorAll('[data-focus]').forEach(b=>b.addEventListener('click',()=>{document.body.classList.toggle('focus');b.textContent=document.body.classList.contains('focus')?'Sair do modo foco':'Modo foco'}));
for(const a of document.querySelectorAll('.base-card,.choice-card,.formula-link,.formula-cta')){
 a.addEventListener('click',()=>{a.classList.add('tapped');setTimeout(()=>a.classList.remove('tapped'),450)});
}
