const FALLBACK_PRODUCTS = [{"id": "crea-300", "name": "Creatina monohidratada 300 g", "category": "Creatinas", "brand": "Línea deportiva", "price": 185, "size": "300 g", "desc": "Creatina monohidratada en presentación de 300 g. Consulta disponibilidad y marca en sucursal.", "img": "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1100&q=88", "tag": "Más buscada"}, {"id": "crea-500", "name": "Creatina monohidratada 500 g", "category": "Creatinas", "brand": "Línea deportiva", "price": 285, "size": "500 g", "desc": "Presentación grande para quienes buscan un envase de mayor contenido.", "img": "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1100&q=88", "tag": "Presentación grande"}, {"id": "crea-micro", "name": "Creatina micronizada", "category": "Creatinas", "brand": "Línea deportiva", "price": 220, "size": "300 g", "desc": "Opción micronizada. Revisa etiqueta, ingredientes y modo de uso del fabricante.", "img": "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1100&q=88", "tag": "Micronizada"}, {"id": "crea-pack", "name": "Creatina en cápsulas", "category": "Creatinas", "brand": "Línea deportiva", "price": 195, "size": "Frasco", "desc": "Formato en cápsulas; verifica cantidad por porción en el envase.", "img": "https://images.unsplash.com/photo-1622484212850-eb596d769edc?auto=format&fit=crop&w=1100&q=88", "tag": "Cápsulas"}, {"id": "whey-2", "name": "Whey Protein", "category": "Proteínas", "brand": "Proteína de suero", "price": 390, "size": "2 lb", "desc": "Proteína en polvo de suero. Sabores y marcas sujetos a stock.", "img": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1100&q=88", "tag": "Popular"}, {"id": "whey-5", "name": "Whey Protein", "category": "Proteínas", "brand": "Proteína de suero", "price": 790, "size": "5 lb", "desc": "Presentación de mayor tamaño. Consulta sabores disponibles.", "img": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1100&q=88", "tag": "Ahorro por tamaño"}, {"id": "iso", "name": "Iso Whey / aislada", "category": "Proteínas", "brand": "Proteína aislada", "price": 560, "size": "2 lb", "desc": "Proteína aislada. Revisa la información nutricional y alérgenos del fabricante.", "img": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1100&q=88", "tag": "Aislada"}, {"id": "mass", "name": "Mass Gainer", "category": "Proteínas", "brand": "Ganador de peso", "price": 430, "size": "6 lb", "desc": "Mezcla en polvo de aporte energético. Consulta la tabla nutricional del producto.", "img": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?auto=format&fit=crop&w=1100&q=88", "tag": "Aporte energético"}, {"id": "pre", "name": "Pre-entreno", "category": "Pre-entrenos", "brand": "Energía deportiva", "price": 260, "size": "Envase", "desc": "Suplemento pre-entreno. Lee advertencias, cafeína y recomendaciones de la etiqueta.", "img": "https://images.unsplash.com/photo-1579758629938-03607ccdbaba?auto=format&fit=crop&w=1100&q=88", "tag": "Pre-entreno"}, {"id": "bcaa", "name": "Aminoácidos BCAA", "category": "Aminoácidos", "brand": "Aminoácidos", "price": 230, "size": "Envase", "desc": "Producto de aminoácidos. Consulta ingredientes y porciones en el envase.", "img": "https://images.unsplash.com/photo-1550572017-edd951b55104?auto=format&fit=crop&w=1100&q=88", "tag": "Aminoácidos"}, {"id": "omega", "name": "Omega 3", "category": "Vitaminas", "brand": "Bienestar", "price": 145, "size": "Frasco", "desc": "Complemento alimenticio. Verifica ingredientes, dosis y advertencias del fabricante.", "img": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1100&q=88", "tag": "Bienestar"}, {"id": "multi", "name": "Multivitamínico", "category": "Vitaminas", "brand": "Vitaminas", "price": 130, "size": "Frasco", "desc": "Vitaminas y minerales. Consulta composición y advertencias del envase.", "img": "https://images.unsplash.com/photo-1607619056574-7b8d3ee536b2?auto=format&fit=crop&w=1100&q=88", "tag": "Vitaminas"}, {"id": "shaker", "name": "Shaker mezclador", "category": "Accesorios", "brand": "Accesorios fitness", "price": 55, "size": "600–700 ml", "desc": "Botella mezcladora para preparar bebidas en polvo.", "img": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=88", "tag": "Accesorio"}, {"id": "gloves", "name": "Guantes de entrenamiento", "category": "Accesorios", "brand": "Accesorios fitness", "price": 85, "size": "Varios tamaños", "desc": "Accesorio para entrenamiento. Consulta tallas disponibles.", "img": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1100&q=88", "tag": "Accesorio"}];
const CATEGORIES = ['Creatinas','Proteínas','Pre-entrenos','Vitaminas','Aminoácidos','Accesorios'];
const CATEGORY_META = {
 'Creatinas':['LÍNEA DE RENDIMIENTO','creatinas'],
 'Proteínas':['LÍNEA DE NUTRICIÓN','proteinas'],
 'Pre-entrenos':['ENERGÍA PARA ENTRENAR','pre-entrenos'],
 'Vitaminas':['BIENESTAR Y VITAMINAS','vitaminas'],
 'Aminoácidos':['RECUPERACIÓN Y COMPLEMENTOS','aminoacidos'],
 'Accesorios':['EQUIPAMIENTO DEPORTIVO','accesorios']
};
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)];
let products=FALLBACK_PRODUCTS,activeFilter='Todos';
const track=$('#productTrack');
const money=n=>'Bs '+Number(n).toLocaleString('es-BO');
function buildShowcaseSections(){
 const host=$('#showcaseGroups'); if(!host)return;
 host.innerHTML=CATEGORIES.map((cat,i)=>{const id='showcase-'+i;return `<div class="showcase-block"><div class="carousel-heading"><div><p class="eyebrow">${CATEGORY_META[cat][0]}</p><h2>${cat}</h2></div><div><button class="circle-btn" data-scroll="${id}" data-dir="-1" aria-label="Ver ${cat} anteriores">←</button><button class="circle-btn" data-scroll="${id}" data-dir="1" aria-label="Ver más ${cat}">→</button></div></div><div class="image-carousel" id="${id}" aria-label="Carrusel de ${cat}"></div></div>`}).join('');
 host.addEventListener('click',e=>{const b=e.target.closest('[data-scroll]');if(!b)return;const el=document.getElementById(b.dataset.scroll);el.scrollBy({left:Number(b.dataset.dir)*el.clientWidth*.82,behavior:'smooth'});});
}
function renderImageShowcases(){
 for(const cat of CATEGORIES){const idx=CATEGORIES.indexOf(cat),el=$('#showcase-'+idx);if(!el)continue;const items=products.filter(p=>p.category===cat);
  el.innerHTML=items.map(p=>`<article class="showcase-card"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='assets/${CATEGORY_META[cat][1]}.svg'"><div class="showcase-caption"><span>${p.category}</span><b>${p.name}</b><small>${p.size} · ${money(p.price)}</small></div></article>`).join('');
 }
}
function renderProducts(){
 const q=$('#searchInput').value.trim().toLowerCase();
 const list=products.filter(p=>(activeFilter==='Todos'||p.category===activeFilter)&&(`${p.name} ${p.category} ${p.brand}`.toLowerCase().includes(q)));
 $('#carouselTitle').textContent=activeFilter==='Todos'?'Todos los productos':activeFilter;
 track.innerHTML=list.map(p=>`<article class="product-card"><div class="product-image"><img loading="lazy" src="${p.img}" alt="${p.name}" onerror="this.onerror=null;this.src='assets/${CATEGORY_META[p.category][1]}.svg'"><span class="tag">${p.tag}</span></div><div class="product-info"><span class="product-brand">${p.category} · ${p.brand}</span><h4>${p.name}</h4><p>${p.desc}</p><div class="product-meta"><strong class="price">${money(p.price)}</strong><span class="size">${p.size}</span></div><a class="product-buy" href="#pedido" data-product="${p.id}">Consultar / pedir →</a></div></article>`).join('');
 if(!list.length)track.innerHTML='<p class="empty-products">No se encontraron productos. Prueba otra búsqueda.</p>';
 track.scrollLeft=0;renderImageShowcases();
 const select=$('#productSelect');select.querySelectorAll('option[data-product]').forEach(o=>o.remove());
 products.forEach(p=>{const o=document.createElement('option');o.value=p.id;o.dataset.product='1';o.textContent=`${p.name} — ${money(p.price)}`;select.append(o)});
}
async function hydrate(){
 // Always paint the embedded catalog first; network/file fetch is only an update.
 products=FALLBACK_PRODUCTS;renderProducts();
 try{const r=await fetch('assets/products.json',{cache:'no-cache'});if(!r.ok)throw Error('HTTP '+r.status);const data=await r.json();if(Array.isArray(data)&&data.length){products=data;renderProducts();}}
 catch(e){console.info('Catálogo local integrado activo; no se necesita conexión para mostrar productos.');}
}
$('#filters').addEventListener('click',e=>{const b=e.target.closest('[data-filter]');if(!b)return;activeFilter=b.dataset.filter;$$('.filter').forEach(x=>x.classList.toggle('active',x===b));renderProducts()});
$$('.category-card').forEach(c=>c.addEventListener('click',()=>{activeFilter=c.dataset.category;$$('.filter').forEach(x=>x.classList.toggle('active',x.dataset.filter===activeFilter));renderProducts()}));
$('#searchInput').addEventListener('input',renderProducts);
$('#prevProducts').onclick=()=>track.scrollBy({left:-track.clientWidth*.8,behavior:'smooth'});
$('#nextProducts').onclick=()=>track.scrollBy({left:track.clientWidth*.8,behavior:'smooth'});
track.addEventListener('click',e=>{const a=e.target.closest('[data-product]');if(a)$('#productSelect').value=a.dataset.product});
$('#themeToggle').onclick=()=>{document.body.classList.toggle('light');localStorage.setItem('jesfit-theme',document.body.classList.contains('light')?'light':'dark')};
try{if(localStorage.getItem('jesfit-theme')==='light')document.body.classList.add('light')}catch(e){}
$('#menuToggle').onclick=()=>$('#mainNav').classList.toggle('open');
$$('#mainNav a').forEach(a=>a.addEventListener('click',()=>$('#mainNav').classList.remove('open')));
function setNetwork(){const on=navigator.onLine;$('#networkStatus').textContent=on?'EN LÍNEA':'SIN CONEXIÓN';$('.status-dot').style.background=on?'#40e49a':'#ff637c'}
addEventListener('online',setNetwork);addEventListener('offline',setNetwork);setNetwork();
const name=$('#customerName'),phone=$('#customerPhone');
name.addEventListener('input',()=>{name.value=name.value.replace(/[^\p{L}\s'-]/gu,'').replace(/\s{2,}/g,' ')});
phone.addEventListener('input',()=>{phone.value=phone.value.replace(/\D/g,'').slice(0,8)});
function err(id,msg){$('#'+id).textContent=msg}
$('#orderForm').addEventListener('submit',e=>{
 e.preventDefault();let ok=true;const n=name.value.trim();
 if(n.length<4||n.length>60||!/^\p{L}[\p{L}\s'-]*$/u.test(n)){err('nameError','Escribe un nombre válido de 4 a 60 letras.');name.classList.add('invalid');ok=false}else{err('nameError','');name.classList.remove('invalid')}
 if(!/^\d{8}$/.test(phone.value)){err('phoneError','Ingresa un teléfono de 8 dígitos.');phone.classList.add('invalid');ok=false}else{err('phoneError','');phone.classList.remove('invalid')}
 if(!$('#productSelect').value){err('productError','Selecciona un producto.');ok=false}else err('productError','');
 const qty=Number($('#quantity').value);if(!Number.isInteger(qty)||qty<1||qty>20){err('quantityError','La cantidad debe ser de 1 a 20.');ok=false}else err('quantityError','');
 if(!$('#branchSelect').value){err('branchError','Selecciona una sucursal.');ok=false}else err('branchError','');
 if(!ok){$('#formStatus').textContent='Revisa los campos marcados antes de continuar.';return}
 const p=products.find(x=>x.id===$('#productSelect').value),branch=$('#branchSelect').value;
 const msg=`Hola JES FIT Suplementos. Mi nombre es ${n}. Mi teléfono: ${phone.value}.\nConsulta: ${$('#kind').value}.\nProducto: ${p.name} (${p.size}) — ${money(p.price)}.\nCantidad: ${qty}.\nSucursal: ${branch}.\nMensaje: ${$('#notes').value||'Sin mensaje adicional'}.\nQuisiera confirmar precio y disponibilidad.`;
 $('#formStatus').textContent='Abriendo WhatsApp para enviar tu consulta…';window.open('https://wa.me/59172505969?text='+encodeURIComponent(msg),'_blank','noopener');
});
$('#hydrateBtn').onclick=async()=>{await hydrate();$('#formStatus').textContent='Catálogo actualizado.'};
buildShowcaseSections();
if('serviceWorker'in navigator&&location.protocol.startsWith('http'))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(console.warn));
hydrate();
