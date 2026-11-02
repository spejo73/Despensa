let existencias = []; let siguienteId = 1; let seleccionActual = null;

function cargar(){ try { const raw = localStorage.getItem('despensa_v1'); if (raw) { const d = JSON.parse(raw); existencias = d.existencias || []; siguienteId = d.siguienteId || 1; } } catch(e) { existencias = []; siguienteId = 1; } }
function guardar(){ localStorage.setItem('despensa_v1', JSON.stringify({ existencias: existencias, siguienteId: siguienteId })); }
function hoy(){ return new Date(); }
function aFecha(s){ if (!s) return null; const [y,m,d] = s.split('-').map(Number); return new Date(y, m-1, d); }
function diasHasta(fecha){ if (!fecha) return null; const f = aFecha(fecha); const h = hoy(); f.setHours(0,0,0,0); h.setHours(0,0,0,0); return Math.round((f - h) / (1000*60*60*24)); }
function formatoFecha(s){ if (!s) return '—'; const f = aFecha(s); return f.toLocaleDateString('es-ES', { day:'numeric', month:'short', year:'numeric' }); }
function buscarAlimento(nombre){ return ALIMENTOS.find(a => a.n.toLowerCase() === nombre.toLowerCase()); }

function renderTodo(){ ['nevera','congelador','despensa'].forEach(renderPanel); renderRecetas(); renderTrucos(); renderAvisos(); }

function renderPanel(ubi){
  const panel = document.getElementById('panel-' + ubi); if (!panel) return;
  const items = existencias.filter(e => e.ubicacion === ubi && !e.gastado);
  if (items.length === 0){ panel.innerHTML = '<div style="text-align:center; color:#888; padding:20px;">No hay nada en ' + ubi + '.</div>'; return; }
  items.sort((a,b) => { const da = diasHasta(a.caduca); const db = diasHasta(b.caduca); if (da === null) return 1; if (db === null) return -1; return da - db; });
  let html = '';
  items.forEach(e => {
    const dias = diasHasta(e.caduca);
    let btnMover = ubi === 'congelador' ? '<button class="btn-mover" onclick="moverProducto(' + e.id + ', \'nevera\')">🔥</button>' : '<button class="btn-mover" onclick="moverProducto(' + e.id + ', \'congelador\')">❄️</button>';
    let fechaTxt = e.caduca ? '📅 ' + formatoFecha(e.caduca) : '';
    if (dias !== null) fechaTxt += ' · ' + (dias < 0 ? '❌ caducado' : (dias === 0 ? '⚠️ hoy' : '⏳ ' + dias + ' días'));
    html += '<div class="item"><div><div class="nombre">' + (e.abierto ? '🔓 ' : '📦 ') + e.nombre + '</div><div class="detalle">' + fechaTxt + '</div></div><div class="acciones">' + btnMover + (e.abierto ? '' : '<button class="btn-abrir" onclick="abrirProducto(' + e.id + ')">Abrir</button>') + '<button class="btn-gastar" onclick="gastarProducto(' + e.id + ')">Gastar</button></div></div>';
  });
  panel.innerHTML = html;
}

function renderAvisos(){
  const cont = document.getElementById('avisos-globales'); if (!cont) return;
  const proximos = existencias.filter(e => !e.gastado && e.caduca).map(e => ({ e, dias: diasHasta(e.caduca) })).filter(x => x.dias !== null && x.dias <= 3).sort((a,b) => a.dias - b.dias);
  if (proximos.length === 0){ cont.innerHTML = ''; return; }
  let html = '';
  proximos.forEach(x => {
    const clase = x.dias < 0 ? 'rojo' : 'ambar';
    const txt = x.dias < 0 ? 'Caducado' : (x.dias === 0 ? 'Caduca hoy' : 'Caduca en ' + x.dias + ' días');
    const alim = ALIMENTOS.find(a => a.n.toLowerCase() === x.e.nombre.toLowerCase());
    const esCongelable = alim ? (alim.c !== false) : true; 
    let sug = (x.dias >= 0 && x.e.ubicacion !== 'congelador') ? (esCongelable ? ' (Puedes congelarlo ❄️)' : ' (¡Gástalo pronto! No congela bien)') : '';
    html += '<div class="aviso ' + clase + '"><b>' + (x.dias < 0 ? '❌ ' : '⚠️ ') + txt + ':</b> ' + x.e.nombre + sug + '</div>';
  });
  cont.innerHTML = html;
}
function abrirProducto(id){
  const e = existencias.find(x => x.id === id); if (!e) return;
  const alim = buscarAlimento(e.nombre); const dias = alim && alim.a ? alim.a : 3;
  const nueva = new Date(hoy().getTime() + dias * 24*60*60*1000); const impresa = aFecha(e.caduca);
  let final = nueva; if (impresa && impresa < nueva) final = impresa;
  e.abierto = true; e.caduca = final.toISOString().slice(0,10); guardar(); renderTodo();
}

function gastarProducto(id){
  const e = existencias.find(x => x.id === id); if (!e) return;
  if (!confirm('¿Gastar ' + e.nombre + '?')) return;
  e.gastado = true; guardar(); renderTodo();
}

function moverProducto(id, destino){
  const e = existencias.find(x => x.id === id); if (!e) return;
  e.ubicacion = destino;
  if(destino === 'congelador'){
    const nueva = new Date(hoy().getTime() + 90 * 24*60*60*1000);
    e.caduca = nueva.toISOString().slice(0,10); e.abierto = false; 
  } else if (destino === 'nevera'){
    const nueva = new Date(hoy().getTime() + 2 * 24*60*60*1000);
    e.caduca = nueva.toISOString().slice(0,10);
  }
  guardar(); renderTodo();
}

function abrirModal(){
  seleccionActual = null; document.getElementById('in-nombre').value = ''; document.getElementById('in-caduca').value = ''; document.getElementById('in-ubi').value = 'nevera';
  document.getElementById('sugerencias').style.display = 'none'; document.getElementById('ocr-estado').style.display = 'none';
  document.getElementById('modal').classList.add('abierto');
}
function cerrarModal(){ document.getElementById('modal').classList.remove('abierto'); }

function alEscribirNombre(){
  const v = document.getElementById('in-nombre').value.trim().toLowerCase(); const cont = document.getElementById('sugerencias');
  if (v.length < 2){ cont.style.display = 'none'; return; }
  const matches = ALIMENTOS.filter(a => a.n.toLowerCase().includes(v)).slice(0, 8);
  if (matches.length === 0){ cont.innerHTML = '<div style="padding:10px; cursor:pointer;" onclick="elegirLibre()">Usar «' + document.getElementById('in-nombre').value + '» (nuevo)</div>'; cont.style.display = 'block'; return; }
  cont.innerHTML = matches.map(a => '<div style="padding:10px; cursor:pointer; border-bottom:1px solid #eee;" onclick="elegirAlimento(\'' + a.n.replace(/'/g, "\\'") + '\')">' + a.n + '</div>').join(''); cont.style.display = 'block';
}

function elegirAlimento(nombre){
  document.getElementById('in-nombre').value = nombre; document.getElementById('sugerencias').style.display = 'none';
  seleccionActual = buscarAlimento(nombre);
  if (seleccionActual){
    document.getElementById('in-ubi').value = seleccionActual.u;
    if (seleccionActual.dias && seleccionActual.dias > 0) {
      const f = new Date(hoy().getTime() + seleccionActual.dias * 24*60*60*1000);
      document.getElementById('in-caduca').value = f.toISOString().slice(0,10);
    }
  }
}
function elegirLibre(){ seleccionActual = null; document.getElementById('sugerencias').style.display = 'none'; }

function guardarProducto(){
  const nombre = document.getElementById('in-nombre').value.trim(); const caduca = document.getElementById('in-caduca').value;
  const ubi = document.getElementById('in-ubi').value;
  if (!nombre){ alert('Escribe un nombre'); return; }
  existencias.push({ id: siguienteId++, nombre: nombre, caduca: caduca, ubicacion: ubi, abierto: false, gastado: false });
  guardar(); cerrarModal(); renderTodo();
}
function renderRecetas(){
  const panel = document.getElementById('panel-recetas'); if (!panel) return;
  const abiertos = existencias.filter(e => !e.gastado).map(e => e.nombre.toLowerCase());
  const proximos = existencias.filter(e => !e.gastado).filter(e => { const d = diasHasta(e.caduca); return d !== null && d <= 5; }).map(e => e.nombre.toLowerCase());
  const todas = RECETAS.map(r => {
    const usa = r.ing.filter(i => abiertos.some(a => a.includes(i.toLowerCase()) || i.toLowerCase().includes(a)));
    const deCaducan = r.ing.filter(i => proximos.some(p => p.includes(i.toLowerCase()) || i.toLowerCase().includes(p)));
    return { r: r, usa: usa.length, deCaducan: deCaducan.length };
  }).sort((a,b) => b.deCaducan - a.deCaducan || b.usa - a.usa || a.r.n.localeCompare(b.r.n));

  let html = '<h2 style="margin:0 0 10px;color:#2c3e2e">Recetario</h2>';
  html += '<input type="text" id="buscador-receta" class="buscador" placeholder="🔍 Buscar receta..." onkeyup="filtrarRecetas(this.value)">';
  html += '<div id="lista-recetas">';
  todas.forEach(x => {
    let badge = x.deCaducan > 0 ? '<b style="color:#c62828; font-size:12px;">(¡Gastar pronto!)</b>' : (x.usa >= 2 ? '<b style="color:#2e7d32; font-size:12px;">(Puedes hacerlo)</b>' : '');
    html += '<div class="receta" data-nombre="' + x.r.n.toLowerCase() + '"><h3>' + x.r.n + ' ' + badge + '</h3><div class="meta">⏱ ' + x.r.t + ' min · tienes ' + x.usa + ' de ' + x.r.ing.length + ' ing.</div><div class="ing">' + x.r.ing.map(i => { const tiene = abiertos.some(a => a.includes(i.toLowerCase()) || i.toLowerCase().includes(a)); return '<span class="' + (tiene ? 'tiene' : 'falta') + '">' + (tiene ? '✓ ' : '· ') + i + '</span>'; }).join(' · ') + '</div><ol class="pasos">' + x.r.pasos.map(p => '<li>' + p + '</li>').join('') + '</ol></div>';
  });
  html += '</div>';
  panel.innerHTML = html;
}

function renderTrucos(){
  const panel = document.getElementById('panel-trucos'); if (!panel) return;
  let html = '<h2 style="margin:0 0 10px;color:#2c3e2e">Trucos de Cocina</h2>';
  html += '<input type="text" id="buscador-trucos" class="buscador" placeholder="🔍 Buscar truco..." onkeyup="filtrarTrucos(this.value)">';
  html += '<div id="lista-trucos">';
  TRUCOS.forEach(t => {
    html += '<div class="receta" data-nombre="' + (t.t + " " + t.c).toLowerCase() + '"><h3 style="font-size:16px;">' + t.t + '</h3><div class="meta">' + t.c + '</div><div class="pasos" style="padding-left:0; margin-top:4px;">' + t.d + '</div></div>';
  });
  html += '</div>';
  panel.innerHTML = html;
}

function filtrarRecetas(texto) { const filtro = texto.toLowerCase(); document.querySelectorAll('#lista-recetas .receta').forEach(r => { r.style.display = r.getAttribute('data-nombre').includes(filtro) ? 'block' : 'none'; }); }
function filtrarTrucos(texto) { const filtro = texto.toLowerCase(); document.querySelectorAll('#lista-trucos .receta').forEach(r => { r.style.display = r.getAttribute('data-nombre').includes(filtro) ? 'block' : 'none'; }); }

function extraerFechaInteligente(texto) {
  let t = texto.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const meses = {"ene":"01","feb":"02","mar":"03","abr":"04","may":"05","jun":"06","jul":"07","ago":"08","sep":"09","oct":"10","nov":"11","dic":"12"};
  for (let m in meses) { t = t.replace(new RegExp(m + "[a-z]*", "g"), meses[m]); }
  let d=null, m=null, a=null;
  let match = t.match(/(20\d{2})[\/\-\.\s](\d{1,2})[\/\-\.\s](\d{1,2})/);
  if (match) { a = match[1]; m = match[2].padStart(2,'0'); d = match[3].padStart(2,'0'); }
  if (!a) {
    match = t.match(/(\d{1,2})[\/\-\.\s](\d{1,2})[\/\-\.\s](20\d{2}|\d{2})/);
    if (match) { d = match[1].padStart(2,'0'); m = match[2].padStart(2,'0'); a = match[3]; }
  }
  if (a && a.length === 2) a = "20" + a;
  if (d && m && a && parseInt(d) <= 31 && parseInt(m) <= 12) return a + "-" + m + "-" + d;
  return null;
}

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('fecha-hoy').textContent = hoy().toLocaleDateString('es-ES', { weekday:'long', day:'numeric', month:'long', year:'numeric' });
  document.querySelectorAll('.tab').forEach(t => { t.addEventListener('click', () => { document.querySelectorAll('.tab').forEach(x => x.classList.remove('activa')); document.querySelectorAll('.panel').forEach(x => x.classList.remove('activa')); t.classList.add('activa'); document.getElementById('panel-' + t.dataset.tab).classList.add('activa'); }); });
  
  document.getElementById('fab-add').addEventListener('click', abrirModal); 
  document.getElementById('btn-cancelar').addEventListener('click', cerrarModal);
  document.getElementById('btn-guardar').addEventListener('click', guardarProducto); 
  document.getElementById('in-nombre').addEventListener('input', alEscribirNombre);

  function configurarMicro(btnId, targetInputId, esFecha) {
    document.getElementById(btnId).addEventListener('click', function(){
      if (!('webkitSpeechRecognition' in window)) { alert('Tu móvil no soporta dictado por voz.'); return; }
      const rec = new webkitSpeechRecognition(); rec.lang = 'es-ES'; rec.interimResults = false; rec.maxAlternatives = 1;
      rec.onstart = () => { this.textContent = '🔴'; this.style.background = '#ffcccc'; };
      rec.onresult = (e) => { 
        let txt = e.results[0][0].transcript;
        if (esFecha) {
          let f = extraerFechaInteligente(txt);
          if(f) document.getElementById(targetInputId).value = f;
          else alert("No entendí la fecha. Prueba a decir: 'doce de noviembre de 2024'.");
        } else { document.getElementById(targetInputId).value = txt; alEscribirNombre(); }
      };
      rec.onend = () => { this.textContent = '🎤'; this.style.background = '#f0f0f0'; };
      rec.start();
    });
  }
  configurarMicro('btn-micro-nombre', 'in-nombre', false); configurarMicro('btn-micro-fecha', 'in-caduca', true);

  function configurarCamara(btnId, inputFileId, esFecha) {
    document.getElementById(btnId).addEventListener('click', () => { document.getElementById(inputFileId).click(); });
    document.getElementById(inputFileId).addEventListener('change', function(e){
      if (!e.target.files.length) return;
      const file = e.target.files[0]; const estado = document.getElementById('ocr-estado');
      estado.style.display = 'block'; estado.textContent = '⏳ Analizando imagen...'; estado.style.color = '#3e5c42';
      Tesseract.recognize(file, 'spa').then(({ data: { text } }) => {
        const fechaEncontrada = extraerFechaInteligente(text);
        if (esFecha) {
          if (fechaEncontrada) { document.getElementById('in-caduca').value = fechaEncontrada; estado.textContent = '✅ Fecha detectada: ' + fechaEncontrada.split('-').reverse().join('/'); estado.style.color = '#2e7d32'; } 
          else { estado.textContent = '⚠️ No se ve bien la fecha.'; estado.style.color = '#c62828'; }
        } else {
          let lineas = text.split('\n').filter(l => l.trim().length > 2);
          if (lineas.length > 0) {
            let nombreDetectado = lineas[0].trim(); document.getElementById('in-nombre').value = nombreDetectado; alEscribirNombre(); 
            estado.textContent = '✅ Texto leído: ' + nombreDetectado; estado.style.color = '#2e7d32';
            if (fechaEncontrada) document.getElementById('in-caduca').value = fechaEncontrada;
          } else { estado.textContent = '⚠️ No se ha leído texto claro.'; estado.style.color = '#c62828'; }
        }
      }).catch(err => { estado.textContent = '❌ Error al procesar la imagen.'; estado.style.color = '#c62828'; });
    });
  }
  configurarCamara('btn-camara-nombre', 'in-foto-nombre', false); configurarCamara('btn-camara-fecha', 'in-foto-fecha', true);

  document.getElementById('btn-backup').addEventListener('click', function(){
    const data = localStorage.getItem('despensa_v1');
    if(!data || data === '{"existencias":[],"siguienteId":1}') { alert("La despensa está vacía."); return; }
    prompt("Copia este texto y guárdalo:", data);
  });
  document.getElementById('btn-restore').addEventListener('click', function(){
    const data = prompt("Pega aquí la copia de seguridad:");
    if(data){ try { JSON.parse(data); localStorage.setItem('despensa_v1', data); alert("¡Copia cargada!"); location.reload(); } catch(e) { alert("El texto no es válido."); } }
  });
  
  cargar(); 
  renderTodo();
});
