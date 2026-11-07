/* Wizardry Tutoring presentation demo: discourage casual copying. */
(()=>{'use strict';
const stop=e=>{e.preventDefault();};
document.addEventListener('contextmenu',stop);
document.addEventListener('dragstart',e=>{if(e.target.closest('img,a'))stop(e)});
document.addEventListener('copy',stop);
document.addEventListener('cut',stop);
document.addEventListener('selectstart',e=>{if(!e.target.closest('input,textarea,select,[contenteditable="true"]'))stop(e)});
document.addEventListener('keydown',e=>{
const k=e.key.toLowerCase();
if(e.key==='F12'||((e.ctrlKey||e.metaKey)&&e.shiftKey&&['i','j','c','k'].includes(k))||((e.ctrlKey||e.metaKey)&&['u','s','p'].includes(k))){stop(e);}
},{capture:true});
})();
