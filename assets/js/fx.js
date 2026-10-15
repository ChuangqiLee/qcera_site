/* 奇创纪元 Qichuang Era — visual effects
   Interactive dot field, target-locking cursor with a comet trail, click
   shockwaves, heading reveals, label decrypt, a restrained glitch and the
   home-page DNA helix. Everything here is decorative: content stays visible
   and usable when this script fails, on touch screens and with reduced motion. */
(function () {
  'use strict';
  var root = document.documentElement, body = document.body;
  if (!body || !window.requestAnimationFrame) return;
  var reduceQ = matchMedia('(prefers-reduced-motion: reduce)');
  var fineQ = matchMedia('(hover: hover) and (pointer: fine)');
  function reduced() { return reduceQ.matches; }
  function fine() { return fineQ.matches; }
  var DPR = Math.min(window.devicePixelRatio || 1, 2);
  var ACCENT = [110, 168, 255];
  function make(tag, cls, parent) {
    var n = document.createElement(tag);
    n.className = cls;
    n.setAttribute('aria-hidden', 'true');
    (parent || body).appendChild(n);
    return n;
  }

  /* ------------------------------------------------------------------
     Canvases: a dot field behind the page, effects above it
     ------------------------------------------------------------------ */
  var field = make('canvas', 'fx-field'), fx = make('canvas', 'fx-top');
  var dctx = field.getContext('2d'), fctx = fx.getContext('2d');
  var W = 0, H = 0, S = 26, dirty = true;
  function resize() {
    W = innerWidth; H = innerHeight; S = fine() ? 26 : 30;
    [field, fx].forEach(function (c) { c.width = Math.round(W * DPR); c.height = Math.round(H * DPR); });
    dctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    fctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    dirty = true;
  }
  var mouse = { x: -9999, y: -9999, active: false };
  var waves = [], trail = [], rings = [], streaks = [];

  function drawField(t) {
    dctx.clearRect(0, 0, W, H);
    var R = 170, R2 = R * R, still = reduced();
    var oy = still ? 0 : -((scrollY * 0.18) % S);
    var live = !still && fine();
    var near = [];
    dctx.fillStyle = 'rgba(255,255,255,.08)';
    dctx.beginPath();
    for (var gy = 0, iy = 0; gy < H + S; gy += S, iy++) {
      var y = gy + oy + S / 2;
      for (var gx = S / 2, ix = 0; gx < W; gx += S, ix++) {
        var x = gx, yy = y, glow = 0;
        if (mouse.active && live) {
          var dx = x - mouse.x, dy = yy - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < R2) {
            var d = Math.sqrt(d2) || 1, f = 1 - d / R, e = f * f * (3 - 2 * f);
            x += dx / d * e * 9; yy += dy / d * e * 9; glow = e;
          }
        }
        for (var w = 0; w < waves.length; w++) {
          var wv = waves[w], wx = x - wv.x, wy = yy - wv.y, wd = Math.sqrt(wx * wx + wy * wy) || 1, k = wd - wv.r;
          if (k > -40 && k < 40) {
            var b = Math.exp(-(k * k) / 360) * wv.life;
            x += wx / wd * b * 12; yy += wy / wd * b * 12; glow = Math.max(glow, b);
          }
        }
        if (live && !glow) {
          var hsh = Math.sin(ix * 12.9898 + iy * 78.233) * 43758.5453;
          var tw = Math.sin(t * 0.0011 + (hsh - Math.floor(hsh)) * 6283);
          if (tw > 0.985) glow = (tw - 0.985) * 22;
        }
        if (glow > 0.02) near.push(x, yy, glow);
        else dctx.rect(x - 0.6, yy - 0.6, 1.2, 1.2);
      }
    }
    dctx.fill();
    for (var i = 0; i < near.length; i += 3) {
      var g = Math.min(1, near[i + 2]);
      var r = Math.round(255 + (ACCENT[0] - 255) * g), gg = Math.round(255 + (ACCENT[1] - 255) * g);
      dctx.fillStyle = 'rgba(' + r + ',' + gg + ',255,' + (0.12 + g * 0.7) + ')';
      var s = 1.2 + g * 1.4;
      dctx.fillRect(near[i] - s / 2, near[i + 1] - s / 2, s, s);
    }
  }

  function drawFx() {
    fctx.clearRect(0, 0, W, H);
    for (var i = trail.length - 1; i >= 0; i--) { trail[i].life -= 0.06; if (trail[i].life <= 0) trail.splice(i, 1); }
    if (trail.length > 2) {
      fctx.lineCap = 'round';
      for (var j = 1; j < trail.length; j++) {
        var p = trail[j - 1], q = trail[j], k = j / trail.length, a = q.life * k;
        fctx.strokeStyle = 'rgba(' + Math.round(255 - 145 * (1 - k)) + ',' + Math.round(255 - 87 * (1 - k)) + ',255,' + (a * 0.55) + ')';
        fctx.lineWidth = 0.5 + k * 1.6;
        fctx.beginPath(); fctx.moveTo(p.x, p.y); fctx.lineTo(q.x, q.y); fctx.stroke();
      }
    }
    for (var m = rings.length - 1; m >= 0; m--) {
      var rg = rings[m]; rg.r += (rg.max - rg.r) * 0.09; rg.life -= 0.03;
      if (rg.life <= 0) { rings.splice(m, 1); continue; }
      fctx.strokeStyle = 'rgba(255,255,255,' + (rg.life * 0.55) + ')'; fctx.lineWidth = 1;
      fctx.beginPath(); fctx.arc(rg.x, rg.y, rg.r, 0, 6.2832); fctx.stroke();
    }
    for (var n = streaks.length - 1; n >= 0; n--) {
      var s = streaks[n]; s.d += s.v; s.v *= 0.9; s.life -= 0.035;
      if (s.life <= 0) { streaks.splice(n, 1); continue; }
      var x1 = s.x + Math.cos(s.a) * s.d, y1 = s.y + Math.sin(s.a) * s.d, len = 4 + s.v * 3;
      fctx.strokeStyle = s.c.replace('A', s.life.toFixed(2)); fctx.lineWidth = 1.2;
      fctx.beginPath(); fctx.moveTo(x1, y1); fctx.lineTo(x1 + Math.cos(s.a) * len, y1 + Math.sin(s.a) * len); fctx.stroke();
    }
    return trail.length || rings.length || streaks.length;
  }

  function shock(x, y, light) {
    waves.push({ x: x, y: y, r: 0, life: 1 });
    rings.push({ x: x, y: y, r: 2, max: light ? 46 : 64, life: 1 });
    if (light) return;
    var n = 12;
    for (var i = 0; i < n; i++) {
      streaks.push({ x: x, y: y, a: i / n * 6.2832 + Math.random() * 0.25, d: 6, v: 3.5 + Math.random() * 2.5, life: 1,
        c: i % 4 === 0 ? 'rgba(255,122,61,A)' : i % 3 ? 'rgba(255,255,255,A)' : 'rgba(110,168,255,A)' });
    }
  }

  /* ------------------------------------------------------------------
     Cursor: exact dot, trailing ring that locks onto targets, crosshair
     ------------------------------------------------------------------ */
  var dot = make('div', 'cur-dot'), ring = make('div', 'cur-ring'), cross = make('div', 'cur-cross'), readout = make('div', 'cur-read');
  for (var ci = 0; ci < 4; ci++) ring.appendChild(document.createElement('i'));
  var rp = { x: -100, y: -100, w: 36, h: 36 };
  var lockEl = null, lastRead = '';
  var TARGETS = 'a,button,[role=button],summary,label[for],select';
  function p4(n) { return String(Math.max(0, Math.round(n))).padStart(4, '0'); }
  function cursorOn() { return fine() && !reduced(); }
  function syncCursor() { root.classList.toggle('cursor-on', cursorOn() && mouse.active); }

  function drawCursor() {
    var tx, ty, tw, th;
    if (lockEl && lockEl.isConnected) {
      var b = lockEl.getBoundingClientRect();
      if (b.width > 0 && b.width < W * 0.8 && b.height < H * 0.6) { tx = b.left - 6; ty = b.top - 6; tw = b.width + 12; th = b.height + 12; }
    }
    if (tx === undefined) { tw = 36; th = 36; tx = mouse.x - 18; ty = mouse.y - 18; }
    rp.x += (tx - rp.x) * (lockEl ? 0.28 : 0.18); rp.y += (ty - rp.y) * (lockEl ? 0.28 : 0.18);
    rp.w += (tw - rp.w) * 0.25; rp.h += (th - rp.h) * 0.25;
    ring.style.transform = 'translate3d(' + rp.x + 'px,' + rp.y + 'px,0)';
    ring.style.width = rp.w + 'px'; ring.style.height = rp.h + 'px';
    dot.style.transform = 'translate3d(' + mouse.x + 'px,' + mouse.y + 'px,0)';
    cross.style.setProperty('--cx', mouse.x + 'px'); cross.style.setProperty('--cy', mouse.y + 'px');
    readout.style.transform = 'translate3d(' + Math.min(mouse.x + 20, W - 140) + 'px,' + Math.min(mouse.y + 18, H - 34) + 'px,0)';
    var verb = '';
    if (lockEl) {
      if (lockEl.matches('a[href^="mailto:"]')) verb = '✉ MAIL';
      else if (lockEl.matches('a[target=_blank]')) verb = '↗ EXTERNAL';
      else if (lockEl.matches('a')) verb = '→ OPEN';
      else if (lockEl.matches('.node,[data-city]')) verb = '◎ LOCATE';
      else if (lockEl.matches('.eq-card,[data-pf]')) verb = '⤢ ZOOM';
      else verb = '◆ ACTION';
    }
    var text = (verb ? '<em>' + verb + '</em><br>' : '') + 'X ' + p4(mouse.x) + '  Y ' + p4(mouse.y);
    if (text !== lastRead) { readout.innerHTML = text; lastRead = text; }
  }

  /* ------------------------------------------------------------------
     Main loop: runs only while something is moving
     ------------------------------------------------------------------ */
  var running = false;
  function frame(t) {
    if (document.hidden) { running = false; return; }
    for (var i = waves.length - 1; i >= 0; i--) { var w = waves[i]; w.r += 11; w.life -= 0.016; if (w.life <= 0) waves.splice(i, 1); }
    var ambient = fine() && !reduced();
    if (ambient || dirty || waves.length) { drawField(t); dirty = false; }
    var busy = drawFx();
    if (cursorOn() && mouse.active) drawCursor();
    if (ambient || busy || waves.length) requestAnimationFrame(frame); else running = false;
  }
  function kick() { if (!running) { running = true; requestAnimationFrame(frame); } }

  addEventListener('pointermove', function (e) {
    if (e.pointerType === 'touch') return;
    mouse.x = e.clientX; mouse.y = e.clientY;
    if (!mouse.active) { mouse.active = true; rp.x = mouse.x - 18; rp.y = mouse.y - 18; syncCursor(); }
    if (cursorOn()) { trail.push({ x: mouse.x, y: mouse.y, life: 1 }); if (trail.length > 18) trail.shift(); }
    var tg = cursorOn() && e.target.closest ? e.target.closest(TARGETS) : null;
    if (tg !== lockEl) { lockEl = tg; ring.classList.toggle('is-lock', !!tg); }
    kick();
  }, { passive: true });
  root.addEventListener('pointerleave', function () { mouse.active = false; lockEl = null; trail.length = 0; syncCursor(); dirty = true; kick(); });
  addEventListener('blur', function () { mouse.active = false; syncCursor(); });
  addEventListener('pointerdown', function (e) {
    ring.classList.add('is-down');
    if (reduced()) return;
    shock(e.clientX, e.clientY, e.pointerType === 'touch' || !fine());
    kick();
  }, { passive: true });
  addEventListener('pointerup', function () { ring.classList.remove('is-down'); }, { passive: true });
  addEventListener('scroll', function () { dirty = true; if (!fine()) kick(); }, { passive: true });
  addEventListener('resize', function () { resize(); kick(); });
  document.addEventListener('visibilitychange', function () { if (!document.hidden) { dirty = true; kick(); } });
  function motionChanged() { syncCursor(); dirty = true; kick(); }
  if (reduceQ.addEventListener) reduceQ.addEventListener('change', motionChanged);
  if (fineQ.addEventListener) fineQ.addEventListener('change', function () { resize(); motionChanged(); });
  resize(); kick();

  /* Magnetic controls */
  document.querySelectorAll('.btn,.lang,.dir-arrow').forEach(function (el) {
    el.addEventListener('pointermove', function (e) {
      if (!cursorOn()) return;
      var b = el.getBoundingClientRect();
      el.style.translate = ((e.clientX - b.left - b.width / 2) * 0.18) + 'px ' + ((e.clientY - b.top - b.height / 2) * 0.28) + 'px';
    });
    el.addEventListener('pointerleave', function () { el.style.translate = ''; });
  });

  /* ------------------------------------------------------------------
     Label decrypt (short mono labels). settleText() is called by site.js
     before a language switch so no scrambled text is ever left behind.
     ------------------------------------------------------------------ */
  var GLYPHS = '01<>/\\[]{}#*+=-_ABCDEFXZ';
  var active = new Map();
  function decrypt(el) {
    if (reduced() || active.has(el) || el.children.length) return;
    var final = el.textContent;
    if (!final.trim() || final.length > 48) return;
    el.__final = final;
    var f = 0, total = 16;
    function tick() {
      if (!active.has(el)) return;
      var shown = Math.floor((++f / total) * final.length);
      el.textContent = Array.from(final, function (ch, i) { return i < shown || ch === ' ' ? ch : GLYPHS[(Math.random() * GLYPHS.length) | 0]; }).join('');
      if (f < total) active.set(el, requestAnimationFrame(tick)); else { el.textContent = final; active.delete(el); }
    }
    active.set(el, requestAnimationFrame(tick));
  }
  function settleText() {
    active.forEach(function (id, el) { cancelAnimationFrame(id); el.textContent = el.__final; });
    active.clear();
  }
  var LABELS = '.eyebrow,.crumbs .here,.dir-top>span:first-child,.stat-index,.pf-block-head .code,.ds-head .code,.eq-cap>span,.pf-row .n';
  function leaves(el) {
    if (!el.children.length) return [el];
    return Array.prototype.filter.call(el.querySelectorAll('span'), function (s) { return !s.children.length; });
  }
  document.addEventListener('pointerover', function (e) {
    if (e.pointerType !== 'mouse' || !e.target.closest) return;
    var lab = e.target.closest(LABELS);
    if (lab && !lab.contains(e.relatedTarget)) leaves(lab).forEach(decrypt);
  });

  /* ------------------------------------------------------------------
     Headings: Chinese blurs in character by character, English word by word
     ------------------------------------------------------------------ */
  var CJK = /[⺀-鿿＀-￯]/;
  function split(el) {
    var i = 0;
    (function walk(node) {
      Array.prototype.slice.call(node.childNodes).forEach(function (child) {
        if (child.nodeType === 3) {
          var text = child.textContent;
          if (!text.trim()) return;
          var parts = CJK.test(text) ? text.match(/[⺀-鿿＀-￯]|[^⺀-鿿＀-￯\s]+|\s+/g) : text.split(/(\s+)/);
          var frag = document.createDocumentFragment();
          parts.forEach(function (p) {
            if (!p) return;
            if (/^\s+$/.test(p)) { frag.appendChild(document.createTextNode(p)); return; }
            var s = document.createElement('span'); s.className = 'tw'; s.style.setProperty('--i', i++); s.textContent = p; frag.appendChild(s);
          });
          child.parentNode.replaceChild(frag, child);
        } else if (child.nodeType === 1) {
          if (child.matches('em')) { child.classList.add('tw'); child.style.setProperty('--i', i++); i += 2; return; }
          if (child.matches('br,svg,img,.glitch')) return;
          walk(child);
        }
      });
    })(el);
  }
  if ('IntersectionObserver' in window && !reduced()) {
    var hio = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        hio.unobserve(en.target);
        en.target.classList.add('tw-in');
        if (en.target.matches(LABELS)) { en.target.classList.add('flicker'); leaves(en.target).forEach(decrypt); }
      });
    }, { threshold: 0.15, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('main h2, .page-hero h1').forEach(function (h) { split(h); hio.observe(h); });
    document.querySelectorAll('.eyebrow,.crumbs .here').forEach(function (el) { hio.observe(el); });
  }

  /* Hero headline: an occasional chromatic glitch */
  var glitches = Array.prototype.slice.call(document.querySelectorAll('.glitch'));
  function refreshGlitchText() { glitches.forEach(function (g) { g.setAttribute('data-text', g.textContent); }); }
  refreshGlitchText();
  document.addEventListener('qcera:lang', refreshGlitchText);
  if (glitches.length && !reduced()) {
    var glitch = function (g) { if (reduced() || document.hidden) return; g.classList.remove('is-glitching'); void g.offsetWidth; g.classList.add('is-glitching'); };
    var loop = function () { glitches.forEach(glitch); setTimeout(loop, 7000 + Math.random() * 6000); };
    setTimeout(loop, 2400);
    glitches.forEach(function (g) { g.addEventListener('pointerenter', function (e) { if (e.pointerType === 'mouse') glitch(g); }); });
  }

  /* ------------------------------------------------------------------
     DNA double helix (home hero). Depth-sorted points and rungs, a scan
     line, travelling signal packets and orbiting dust; follows the cursor.
     ------------------------------------------------------------------ */
  function sprite(rgb) {
    var c = document.createElement('canvas'); c.width = c.height = 64;
    var x = c.getContext('2d'), g = x.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(' + rgb + ',1)'); g.addColorStop(0.18, 'rgba(' + rgb + ',.85)'); g.addColorStop(0.42, 'rgba(' + rgb + ',.22)'); g.addColorStop(1, 'rgba(' + rgb + ',0)');
    x.fillStyle = g; x.fillRect(0, 0, 64, 64);
    return c;
  }
  function helix(canvas) {
    var ctx = canvas.getContext('2d');
    var SPR = { a: sprite('110,168,255'), b: sprite('165,140,255'), o: sprite('255,122,61'), w: sprite('255,255,255') };
    var cw = 0, ch = 0, N = 44, TURNS = 2.4;
    var rot = 0, tilt = 0, tiltT = 0, spin = 0, spinT = 0, visible = true, last = 0;
    var dust = [];
    for (var i = 0; i < 140; i++) dust.push({ a: Math.random() * 6.283, r: 1.25 + Math.random() * 1.6, y: Math.random() - 0.5, s: 0.4 + Math.random() * 0.9 });
    var packets = [{ t: 0.1, v: 0.0019, strand: 0 }, { t: 0.62, v: 0.0014, strand: 1 }];
    function size() {
      var b = canvas.getBoundingClientRect();
      cw = b.width; ch = b.height;
      canvas.width = Math.round(cw * DPR); canvas.height = Math.round(ch * DPR);
      ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    }
    var hoverX = 0.5, hoverY = 0.5;
    canvas.parentNode.addEventListener('pointermove', function (e) {
      var b = canvas.getBoundingClientRect();
      hoverX = (e.clientX - b.left) / b.width; hoverY = (e.clientY - b.top) / b.height;
      tiltT = (hoverY - 0.5) * 0.7; spinT = (hoverX - 0.5) * 0.02;
    });
    canvas.parentNode.addEventListener('pointerleave', function () { tiltT = 0; spinT = 0; });
    function draw(t) {
      ctx.clearRect(0, 0, cw, ch);
      var cx = cw / 2, cy = ch / 2;
      var R = Math.min(cw, ch) * 0.16, LEN = ch * 0.86, F = 520;
      var axis = -0.42; // helix leans across the frame
      var ca = Math.cos(axis), sa = Math.sin(axis), ct = Math.cos(tilt), st = Math.sin(tilt);
      function P(x, y, z) {
        // tilt around X, perspective, then lean in 2D
        var y2 = y * ct - z * st, z2 = y * st + z * ct;
        var s = F / (F + z2);
        var px = x * s, py = y2 * s;
        return { x: cx + px * ca - py * sa, y: cy + px * sa + py * ca, z: z2, s: s };
      }
      var items = [], A = [], B = [];
      for (var i = 0; i < N; i++) {
        var u = i / (N - 1), y = (u - 0.5) * LEN, a = u * TURNS * 6.2832 + rot;
        A.push(P(Math.cos(a) * R, y, Math.sin(a) * R));
        B.push(P(Math.cos(a + Math.PI) * R, y, Math.sin(a + Math.PI) * R));
      }
      var zmax = R * 1.05;
      function depth(z) { return Math.max(0, Math.min(1, 0.5 - z / (2 * zmax))); } // 1 = front
      for (var j = 0; j < N; j++) {
        if (j % 2 === 0) items.push({ k: 'rung', a: A[j], b: B[j], z: (A[j].z + B[j].z) / 2 });
        if (j < N - 1) { items.push({ k: 'seg', a: A[j], b: A[j + 1], z: (A[j].z + A[j + 1].z) / 2, c: '110,168,255' }); items.push({ k: 'seg', a: B[j], b: B[j + 1], z: (B[j].z + B[j + 1].z) / 2, c: '165,140,255' }); }
        items.push({ k: 'node', p: A[j], z: A[j].z, spr: SPR.a, j: j });
        items.push({ k: 'node', p: B[j], z: B[j].z, spr: SPR.b, j: j });
      }
      dust.forEach(function (d) {
        var a = d.a + rot * d.s * 0.6;
        var p = P(Math.cos(a) * R * d.r, d.y * LEN * 1.05, Math.sin(a) * R * d.r);
        items.push({ k: 'dust', p: p, z: p.z });
      });
      packets.forEach(function (pk) {
        var u = pk.t, y = (u - 0.5) * LEN, a = u * TURNS * 6.2832 + rot + (pk.strand ? Math.PI : 0);
        var p = P(Math.cos(a) * R, y, Math.sin(a) * R);
        items.push({ k: 'packet', p: p, z: p.z - 1 });
      });
      items.sort(function (m, n) { return n.z - m.z; });
      // scan line position along the helix axis
      var scan = ((t || 0) * 0.00012) % 1.4 - 0.2;
      var scanY = (scan - 0.5) * LEN;
      for (var k = 0; k < items.length; k++) {
        var it = items[k], dz = depth(it.z);
        if (it.k === 'rung') {
          ctx.strokeStyle = 'rgba(220,230,255,' + (0.05 + dz * 0.22) + ')';
          ctx.lineWidth = 0.6 + dz * 0.8;
          ctx.setLineDash([2, 3]);
          ctx.beginPath(); ctx.moveTo(it.a.x, it.a.y); ctx.lineTo(it.b.x, it.b.y); ctx.stroke();
          ctx.setLineDash([]);
        } else if (it.k === 'seg') {
          ctx.strokeStyle = 'rgba(' + it.c + ',' + (0.12 + dz * 0.55) + ')';
          ctx.lineWidth = 0.8 + dz * 1.6;
          ctx.beginPath(); ctx.moveTo(it.a.x, it.a.y); ctx.lineTo(it.b.x, it.b.y); ctx.stroke();
        } else if (it.k === 'node') {
          var u2 = it.j / (N - 1), near = Math.abs((u2 - 0.5) * LEN - scanY) < LEN * 0.035;
          var sz = (6 + dz * 14) * it.p.s * (near ? 1.7 : 1);
          ctx.globalAlpha = 0.25 + dz * 0.75;
          ctx.drawImage(near ? SPR.w : it.spr, it.p.x - sz / 2, it.p.y - sz / 2, sz, sz);
          ctx.globalAlpha = 1;
        } else if (it.k === 'dust') {
          ctx.fillStyle = 'rgba(200,215,255,' + (0.08 + dz * 0.4) + ')';
          var ds = 0.6 + dz * 1.1;
          ctx.fillRect(it.p.x - ds / 2, it.p.y - ds / 2, ds, ds);
        } else if (it.k === 'packet') {
          var ps = 22 * it.p.s;
          ctx.drawImage(SPR.o, it.p.x - ps / 2, it.p.y - ps / 2, ps, ps);
        }
      }
      // scan line across the frame, perpendicular to the helix axis
      if (scan > 0 && scan < 1) {
        var sp = P(0, scanY, 0), half = R * 2.4;
        var gx1 = sp.x - half * ca, gy1 = sp.y - half * sa, gx2 = sp.x + half * ca, gy2 = sp.y + half * sa;
        var g = ctx.createLinearGradient(gx1, gy1, gx2, gy2);
        g.addColorStop(0, 'rgba(110,168,255,0)'); g.addColorStop(0.5, 'rgba(190,215,255,.55)'); g.addColorStop(1, 'rgba(110,168,255,0)');
        ctx.strokeStyle = g; ctx.lineWidth = 1;
        ctx.beginPath(); ctx.moveTo(gx1, gy1); ctx.lineTo(gx2, gy2); ctx.stroke();
      }
    }
    var running = false;
    function start() { if (!running) { running = true; last = 0; requestAnimationFrame(loop); } }
    function loop(t) {
      if (!visible || document.hidden) { running = false; return; }
      var dt = last ? Math.min(50, t - last) : 16; last = t;
      tilt += (tiltT - tilt) * 0.05; spin += (spinT - spin) * 0.05;
      rot += (0.0042 + spin) * dt / 16;
      packets.forEach(function (pk) { pk.t += pk.v * dt / 16; if (pk.t > 1) pk.t -= 1; });
      draw(t);
      requestAnimationFrame(loop);
    }
    size();
    addEventListener('resize', function () { size(); if (reduced()) draw(0); });
    if (reduced()) { draw(0); return; }
    if ('IntersectionObserver' in window) {
      new IntersectionObserver(function (en) {
        visible = en[0].isIntersecting;
        if (visible) start();
      }).observe(canvas);
    } else start();
    document.addEventListener('visibilitychange', function () { if (!document.hidden && visible) start(); });
  }
  var hc = document.getElementById('helix');
  if (hc && hc.getContext) helix(hc);

  window.QFX = { settleText: settleText };
})();
