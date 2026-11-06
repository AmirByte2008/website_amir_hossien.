
(() => {
 const canvas=document.getElementById('matrix');
 if(canvas){
  const ctx=canvas.getContext('2d'); let w,h,columns,drops;
  const resize=()=>{w=canvas.width=innerWidth;h=canvas.height=innerHeight;columns=Math.floor(w/16);drops=Array(columns).fill(1)};
  resize(); addEventListener('resize',resize);
  const chars='01アイウエオカキクケコサシスセソ';
  setInterval(()=>{ctx.fillStyle='rgba(3,8,10,0.09)';ctx.fillRect(0,0,w,h);ctx.fillStyle='#168bff';ctx.font='13px monospace';
   drops.forEach((y,i)=>{ctx.fillText(chars[Math.floor(Math.random()*chars.length)],i*16,y*16);if(y*16>h&&Math.random()>.975)drops[i]=0;drops[i]++});
  },45);
 }
 const toggle=document.querySelector('.menu-toggle'), links=document.querySelector('.navlinks');
 if(toggle&&links)toggle.addEventListener('click',()=>{const opened=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(opened));});
 document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
 const langButton=document.querySelector('.lang-switch');
 if(langButton){let english=false;langButton.addEventListener('click',()=>{english=!english;document.querySelectorAll('.welcome-fa').forEach(el=>el.hidden=english);document.querySelectorAll('.welcome-en').forEach(el=>el.hidden=!english);document.documentElement.lang=english?'en':'fa';document.documentElement.dir=english?'ltr':'rtl';langButton.textContent=english?'FA / EN':'EN / FA';});}
 const terminal=document.querySelector('[data-terminal]');
 if(terminal){const lines=['> initializing LimSystem interface...','> checking digital pathways: OK','> loading personal archive...','> connection established.'];let i=0;terminal.textContent='';const write=()=>{if(i<lines.length){terminal.textContent+=lines[i]+'\n';i++;setTimeout(write,500)}};write();}
})();
