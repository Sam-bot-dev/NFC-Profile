const $ = id => document.getElementById(id);
const body = document.body;
const toast = $('toast');
let toastTimer;
function showToast(message){toast.textContent=message;toast.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>toast.classList.remove('show'),3000);}
function setTheme(theme){const dark=theme==='dark';body.classList.toggle('dark',dark);$('themeLabel').textContent=dark?'Dark':'Light';$('themeSymbol').textContent=dark?'☾':'☼';document.querySelector('meta[name="theme-color"]').content=dark?'#111110':'#f6f6f4';try{localStorage.setItem('bhavesh-card-theme',theme)}catch(e){}}
try{const saved=localStorage.getItem('bhavesh-card-theme');if(saved)setTheme(saved)}catch(e){}
$('themeToggle').addEventListener('click',()=>setTheme(body.classList.contains('dark')?'light':'dark'));
function downloadVCard(){
 const vcard=['BEGIN:VCARD','VERSION:3.0','N:Kumar;Bhavesh;;;','FN:Bhavesh Kumar','TITLE:Computer Science Undergraduate','TEL;TYPE=CELL,VOICE:+919328405647','EMAIL;TYPE=INTERNET:bavesh2006kumar@gmail.com','URL;TYPE=GitHub:https://github.com/Sam-bot-dev','URL;TYPE=LinkedIn:https://www.linkedin.com/in/l-bhavesh','ADR;TYPE=HOME:;;Gandhinagar;Gujarat;;;India','NOTE:Connect with Bhavesh Kumar','END:VCARD'].join('\r\n')+'\r\n';
 const blob=new Blob([vcard],{type:'text/vcard;charset=utf-8'});const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download='Bhavesh-Kumar.vcf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);showToast('Contact downloaded — open the .vcf file to save it.');
}
$('saveContact').addEventListener('click',downloadVCard);
$('shareProfile').addEventListener('click',async()=>{const data={title:'Bhavesh Kumar — Making Ideas Real',text:'Save Bhavesh Kumar’s contact details.',url:location.href};if(navigator.share){try{await navigator.share(data)}catch(e){if(e.name!=='AbortError')showToast('Sharing is unavailable on this device.')}}else if(navigator.clipboard&&isSecureContext){try{await navigator.clipboard.writeText(location.href);showToast('Profile link copied to clipboard.')}catch(e){showToast('Copy the website URL from your browser address bar.')}}else showToast('Copy the website URL from your browser address bar.');});
$('year').textContent=new Date().getFullYear();
