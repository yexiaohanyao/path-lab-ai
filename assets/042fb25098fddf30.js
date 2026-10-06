
/* An optional entrance, never a gate in front of product links. */
(() => {
  const root = document.getElementById('homeLaunch');
  if (!root) return;
  const find = selector => root.querySelector(selector);
  const core = find('.launch-core');
  const controls = find('.launch-controls');
  const skip = find('[data-launch-skip]');
  const status = find('[data-launch-status]');
  const canvas = find('canvas');
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let introTimer = 0, sparkTimer = 0, frame = 0, lastFrame = 0;
  let onScreen = true, suspended = false;
  let width = 0, height = 0, center = { x: 0, y: 0 };
  let pointer = null, hoverKey = '', focusKey = '', introStarted = 0;
  let time = 0;
  const ripples = [];
  // Stable distribution prevents the background jumping when the window resizes.
  const points = Array.from({ length: 68 }, (_, i) => ({
    x: ((i * 137.508) % 997) / 997,
    y: ((i * 239.117 + 81) % 991) / 991,
    phase: i * 2.399, radius: i % 4 === 0 ? 1.6 : .9
  }));
  let ctx = null;
  try { ctx = canvas.getContext('2d'); } catch { /* SVG remains interactive. */ }

  function reveal(announce = false) {
    clearTimeout(introTimer);
    root.dataset.phase = 'ready';
    const moveFocus = document.activeElement === skip;
    skip.hidden = true;
    controls.hidden = true;
    core.setAttribute('aria-label', '点亮光核，连接论文、路线与资源');
    if (moveFocus) core.focus({ preventScroll: true });
    if (announce) status.textContent = '核心产品已展开：论文交互馆、学习路线制定器、资源中心。';
  }

  function enter() {
    if (reduced.matches) { reveal(); return; }
    clearTimeout(introTimer);
    // Flush the static fallback before starting the short entrance.
    root.dataset.phase = 'ready';
    void root.offsetWidth;
    root.dataset.phase = 'intro';
    introStarted = performance.now();
    controls.hidden = false;
    skip.hidden = false;
    status.textContent = '';
    core.setAttribute('aria-label', '点亮光核，展开核心产品');
    introTimer = setTimeout(() => reveal(), 2250);
  }

  function motionAllowed() {
    return !reduced.matches && onScreen && !document.hidden && !suspended;
  }

  function syncMotion() {
    const active = motionAllowed();
    root.dataset.motion = active ? 'running' : 'paused';
    if (!active) {
      cancelAnimationFrame(frame); frame = 0; lastFrame = 0; pointer = null;
      root.style.removeProperty('--tilt-x'); root.style.removeProperty('--tilt-y');
    } else if (ctx && !frame) frame = requestAnimationFrame(draw);
  }

  function resize() {
    const box = root.getBoundingClientRect(), hub = core.getBoundingClientRect();
    width = box.width; height = box.height;
    center = { x: hub.left - box.left + hub.width / 2, y: hub.top - box.top + hub.height / 2 };
    if (!ctx) return;
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    paint();
  }

  function paint() {
    if (!ctx || !width || !height) return;
    ctx.clearRect(0, 0, width, height);
    const elapsed = performance.now() - introStarted;
    const gather = root.dataset.phase === 'intro' ? Math.sin(Math.min(1, elapsed / 2250) * Math.PI) * .62 : 0;
    const rendered = points.map(p => {
      let x = p.x * width + Math.sin(time * .15 + p.phase) * 12;
      let y = p.y * height + Math.cos(time * .12 + p.phase) * 10;
      x += (center.x - x) * gather; y += (center.y - y) * gather;
      if (pointer) {
        const distance = Math.hypot(x - pointer.x, y - pointer.y);
        const pull = Math.max(0, 1 - distance / 170) * .15;
        x += (pointer.x - x) * pull; y += (pointer.y - y) * pull;
      }
      return { x, y, p };
    });
    ctx.lineWidth = .6;
    for (let i = 0; i < rendered.length; i++) {
      const a = rendered[i];
      for (let j = i + 1; j < rendered.length; j++) {
        const b = rendered[j], distance = Math.hypot(a.x - b.x, a.y - b.y);
        if (distance > 105) continue;
        ctx.strokeStyle = `rgba(137,181,247,${(1 - distance / 105) * .12})`;
        ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
      }
      ctx.fillStyle = `rgba(154,205,255,${.22 + (Math.sin(time + a.p.phase) + 1) * .15})`;
      ctx.beginPath(); ctx.arc(a.x, a.y, a.p.radius, 0, Math.PI * 2); ctx.fill();
      if (pointer) {
        const distance = Math.hypot(a.x - pointer.x, a.y - pointer.y);
        if (distance < 135) {
          ctx.strokeStyle = `rgba(156,218,255,${(1 - distance / 135) * .3})`;
          ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(pointer.x, pointer.y); ctx.stroke();
        }
      }
    }
    for (let i = ripples.length - 1; i >= 0; i--) {
      const ripple = ripples[i], age = time - ripple.born;
      if (age > 1.1) { ripples.splice(i, 1); continue; }
      ctx.strokeStyle = `rgba(163,216,255,${(1 - age / 1.1) * .5})`;
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(ripple.x, ripple.y, 12 + age * 155, 0, Math.PI * 2); ctx.stroke();
    }
  }

  function draw(now) {
    frame = 0;
    // A preference can update before its change event is delivered. Apply the
    // static UI before stopping the last frame, so controls cannot stay stale.
    if (reduced.matches) { syncPreference(); return; }
    if (!motionAllowed()) { syncMotion(); return; }
    if (!lastFrame || now - lastFrame >= 32) {
      time += lastFrame ? Math.min((now - lastFrame) / 1000, .06) : .033;
      lastFrame = now; paint();
    }
    frame = requestAnimationFrame(draw);
  }

  function highlight() {
    const key = focusKey || hoverKey;
    root.querySelectorAll('[data-launch-product],[data-launch-node]').forEach(el => {
      el.classList.toggle('is-active', (el.dataset.launchProduct || el.dataset.launchNode) === key);
    });
  }

  function spark(x = center.x, y = center.y) {
    if (!motionAllowed()) return;
    ripples.push({ x, y, born: time });
    if (ripples.length > 3) ripples.shift();
    clearTimeout(sparkTimer);
    root.dataset.spark = 'false';
    void core.offsetWidth;
    root.dataset.spark = 'true';
    sparkTimer = setTimeout(() => { delete root.dataset.spark; }, 800);
  }

  skip.addEventListener('click', () => reveal(true));
  core.addEventListener('click', () => { reveal(true); spark(); });
  root.querySelectorAll('[data-launch-node]').forEach(node => {
    node.addEventListener('click', e => {
      e.preventDefault(); reveal();
      const card = find(`[data-launch-product="${node.dataset.launchNode}"]`);
      card.querySelector('.launch-product-primary').focus({ preventScroll: true });
      const box = card.getBoundingClientRect();
      if (box.top < 100 || box.bottom > innerHeight) card.scrollIntoView({ block: 'center', behavior: reduced.matches ? 'instant' : 'smooth' });
      spark();
    });
  });
  root.querySelectorAll('[data-launch-product],[data-launch-node]').forEach(el => {
    const key = el.dataset.launchProduct || el.dataset.launchNode;
    el.addEventListener('pointerenter', () => { hoverKey = key; highlight(); });
    el.addEventListener('pointerleave', () => { hoverKey = ''; highlight(); });
    el.addEventListener('focusin', () => {
      if (el.dataset.launchProduct) reveal();
      focusKey = key; highlight();
    });
    el.addEventListener('focusout', e => {
      if (!el.contains(e.relatedTarget)) { focusKey = ''; highlight(); }
    });
  });
  root.addEventListener('pointermove', e => {
    if (!motionAllowed() || e.pointerType === 'touch') return;
    const box = root.getBoundingClientRect();
    pointer = { x: e.clientX - box.left, y: e.clientY - box.top };
    root.style.setProperty('--tilt-x', `${(pointer.y / height - .5) * -5}deg`);
    root.style.setProperty('--tilt-y', `${(pointer.x / width - .5) * 7}deg`);
  }, { passive: true });
  root.addEventListener('pointerleave', () => {
    pointer = null;
    root.style.removeProperty('--tilt-x'); root.style.removeProperty('--tilt-y');
  });
  root.addEventListener('pointerdown', e => {
    if (e.target.closest('a,button')) return;
    const box = root.getBoundingClientRect();
    spark(e.clientX - box.left, e.clientY - box.top);
  }, { passive: true });
  document.addEventListener('visibilitychange', syncMotion);
  window.addEventListener('pagehide', () => {
    suspended = true; reveal(); clearTimeout(sparkTimer); syncMotion();
  });
  window.addEventListener('pageshow', () => { suspended = false; resize(); syncMotion(); });
  window.addEventListener('hashchange', () => { if (location.hash) reveal(); });
  function syncPreference() {
    controls.hidden = reduced.matches || root.dataset.phase !== 'intro';
    find('.launch-interaction-hint').hidden = reduced.matches;
    if (reduced.matches) reveal();
    syncMotion(); paint();
  }
  reduced.addEventListener('change', syncPreference);
  if ('ResizeObserver' in window) new ResizeObserver(resize).observe(root);
  else window.addEventListener('resize', resize);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => {
      onScreen = entries[0].isIntersecting;
      if (!onScreen) reveal();
      syncMotion();
    }, { threshold: 0 }).observe(root);
  }
  root.dataset.enhanced = 'true';
  core.disabled = false;
  find('.launch-interaction-hint').hidden = reduced.matches;
  resize();
  if (reduced.matches || location.hash || scrollY > 100) reveal();
  else enter();
  syncMotion();
})();

