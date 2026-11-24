const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let products=[],activeFilter='Todos';
const track=$('#productTrack');
const money=n=>'Bs '+Number(n).toLocaleString('es-BO');
function renderProducts(){
 const q=$('#searchInput').value.trim().toLowerCase();
 const list=products.filter(p=>(activeFilter==='Todos'||p.category===activeFilter)&&(`${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(q)));
 $('#carouselTitle').textContent=activeFilter==='Todos'?'Todos los productos':activeFilter;
 track.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.src='assets/jes-fit-logo.png'"><span class="tag">${p.tag}</span></div><div class="product-info"><span class="product-brand">${p.category} · ${p.brand}</span><h4>${p.name}</h4><p>${p.desc}</p><div class="product-meta"><strong class="price">${money(p.price)}</strong><span class="size">${p.size}</span></div><a class="product-buy" href="#pedido" data-product="${p.id}">Consultar / pedir →</a></div></article>`).join('');
 if(!list.length)track.innerHTML='<p>No se encontraron productos. Prueba otra búsqueda.</p>';
 track.scrollLeft=0;
 $$('#productSelect option[data-product]').forEach(o=>o.remove());
 products.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.dataset.product='1';o.textContent=`${p.name} — ${money(p.price)}`;$('#productSelect').append(o)});
}
async function hydrate(){
 try{const r=await fetch('assets/products.json',{cache:'no-cache'});if(!r.ok)throw Error('fetch');products=await r.json();}
 catch(e){console.warn('Se mantiene la información de respaldo integrada en caché.');}
 renderProducts();
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeFilter=b.dataset.filter;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));renderProducts()});
$$('.category-card').forEach(c=>c.addEventListener('click',()=>{activeFilter=c.dataset.category;$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===activeFilter));setTimeout(renderProducts,0)}));
$('#searchInput').addEventListener('input',renderProducts);
$('#prevProducts').onclick=()=>track.scrollBy({left:-track.clientWidth*.8,behavior:'smooth'});
$('#nextProducts').onclick=()=>track.scrollBy({left:track.clientWidth*.8,behavior:'smooth'});
track.addEventListener('click',e=>{const a=e.target.closest('[data-product]');if(a){$('#productSelect').value=a.dataset.product}});
$('#themeToggle').onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('jesfit-theme',document.body.classList.contains('light')?'light':'dark')};
if(localStorage.getItem('jesfit-theme')==='light')document.body.classList.add('light');
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');
$$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
function setNetwork(){const on=navigator.onLine;$('#networkStatus').textContent=on?'EN LÍNEA':'SIN CONEXIÓN';$('.status-dot').style.background=on?'#40e49a':'#ff637c'}
addEventListener('online',setNetwork);addEventListener('offline',setNetwork);setNetwork();
const name=$('#customerName'),phone=$('#customerPhone');
name.addEventListener('input',()=>{name.value=name.value.replace(/[^\p{L}\s'-]/gu,'').replace(/\s{2,}/g,' ')});
phone.addEventListener('input',()=>{phone.value=phone.value.replace(/\D/g,'').slice(0,8)});
function err(id,msg){$('#'+id).textContent=msg}
$('#orderForm').addEventListener('submit',e=>{
 e.preventDefault();let ok=true;
 const n=name.value.trim();if(n.length<4||n.length>60||!/^\p{L}[\p{L}\s'-]*$/u.test(n)){err('nameError','Escribe un nombre válido de 4 a 60 letras.');name.classList.add('invalid');ok=false}else{err('nameError','');name.classList.remove('invalid')}
 if(!/^\d{8}$/.test(phone.value)){err('phoneError','Ingresa un teléfono de 8 dígitos.');phone.classList.add('invalid');ok=false}else{err('phoneError','');phone.classList.remove('invalid')}
 if(!$('#productSelect').value){err('productError','Selecciona un producto.');ok=false}else err('productError','');
 const qty=Number($('#quantity').value);if(!Number.isInteger(qty)||qty<1||qty>20){err('quantityError','La cantidad debe ser de 1 a 20.');ok=false}else err('quantityError','');
 if(!$('#branchSelect').value){err('branchError','Selecciona una sucursal.');ok=false}else err('branchError','');
 if(!ok){$('#formStatus').textContent='Revisa los campos marcados antes de continuar.';return}
 const p=products.find(x=>x.id===$('#productSelect').value);const branch=$('#branchSelect').value;
 const msg=`Hola JES FIT Suplementos. Mi nombre es ${n}. Mi teléfono: ${phone.value}.\nConsulta: ${$('#kind').value}.\nProducto: ${p.name} (${p.size}) — ${money(p.price)}.\nCantidad: ${qty}.\nSucursal: ${branch}.\nMensaje: ${$('#notes').value||'Sin mensaje adicional'}.\nQuisiera confirmar precio y disponibilidad.`;
 $('#formStatus').textContent='Abriendo WhatsApp para enviar tu consulta…';
 window.open('https://wa.me/59172505969?text='+encodeURIComponent(msg),'_blank','noopener');
});
$('#hydrateBtn').onclick=async()=>{await hydrate();$('#formStatus').textContent='Catálogo actualizado.';};
if('serviceWorker'in navigator && location.protocol.startsWith('http'))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(console.warn));
hydrate();
