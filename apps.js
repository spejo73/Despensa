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