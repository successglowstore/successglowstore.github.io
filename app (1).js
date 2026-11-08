(function(){
var K='sgv_order',N='2347067019699',L=[];
try{L=JSON.parse(localStorage.getItem(K))||[]}catch(e){}
function $(s){return document.querySelector(s)}
function sv(){try{localStorage.setItem(K,JSON.stringify(L))}catch(e){}}
function cnt(){return L.reduce(function(a,i){return a+i.q},0)}
function esc(s){return s.replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
var b=document.createElement('button');b.id='ob';b.className='btn';b.setAttribute('aria-haspopup','dialog');
var p=document.createElement('div');p.id='op';p.setAttribute('role','dialog');p.setAttribute('aria-label','Your order');
document.body.appendChild(b);document.body.appendChild(p);
function msg(){var t='Hello Success Glow Venture, I would like to order:\n\n';
L.forEach(function(i){t+='\u2022 '+i.q+' \u00d7 '+i.n+'\n'});
var n=$('#on');if(n&&n.value.trim())t+='\nNote: '+n.value.trim()+'\n';
return t+'\nPlease send me the prices and delivery details. Thank you.'}
function upd(){var a=$('#os');if(!a)return;
if(cnt()){a.className='btn';a.href='https://wa.me/'+N+'?text='+encodeURIComponent(msg())}else{a.className='btn off';a.href='#'}}
function draw(){var c=cnt(),k=$('#on')?$('#on').value:'';b.textContent='Your Order ('+c+')';b.classList.toggle('show',c>0);
var h='<h3>Your Order</h3>';
if(!c)h+='<p>Your order is empty. Tap \u201cAdd to order\u201d on any item.</p>';
else{L.forEach(function(i,x){h+='<div class="row"><b>'+esc(i.n)+'</b><button class="q" data-a="m" data-x="'+x+'" aria-label="Fewer">\u2212</button><span>'+i.q+'</span><button class="q" data-a="p" data-x="'+x+'" aria-label="More">+</button></div>'});
h+='<label for="on">Add a note (optional)</label><textarea id="on" placeholder="Size, colour or anything else we should know"></textarea>'}
h+='<p class="price">Prices are confirmed with you on WhatsApp.</p><a class="btn" id="os" target="_blank" rel="noopener" href="#">Send order on WhatsApp</a><button class="btn alt" data-a="c">Close</button>';
p.innerHTML=h;if($('#on'))$('#on').value=k;upd()}
document.addEventListener('click',function(e){var t=e.target;
if(t.id==='ob'){p.classList.toggle('open');return}
if(t.dataset.add){var n=t.dataset.add,f=L.filter(function(i){return i.n===n})[0];
if(f)f.q++;else L.push({n:n,q:1});sv();draw();var o=t.textContent;t.textContent='Added \u2713';setTimeout(function(){t.textContent=o},1100);return}
var a=t.dataset.a;if(!a)return;
if(a==='c')p.classList.remove('open');
if(a==='p'){L[t.dataset.x].q++}
if(a==='m'){var x=+t.dataset.x;L[x].q--;if(L[x].q<1)L.splice(x,1)}
if(a!=='c'){sv();draw()}});
document.addEventListener('input',function(e){if(e.target.id==='on')upd()});
document.addEventListener('keydown',function(e){if(e.key==='Escape')p.classList.remove('open')});
draw();
var nv=$('nav'),bar=$('.bar');
if(nv&&bar){var m=document.createElement('button');m.id='mb';m.textContent='Menu';m.setAttribute('aria-expanded','false');bar.insertBefore(m,nv);
m.onclick=function(){var o=nv.classList.toggle('open');m.setAttribute('aria-expanded',o);m.textContent=o?'Close':'Menu'}}
if('IntersectionObserver' in window){var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll('main section').forEach(function(x){x.classList.add('rv');io.observe(x)})}
})();