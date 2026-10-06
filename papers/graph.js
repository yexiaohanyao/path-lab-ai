/* Small, bounded SVG force layout. Links encode method membership, never citations. */
(function () {
  let frame = 0, dispose = () => {};
  const NS = 'http://www.w3.org/2000/svg';
  function el(tag, attrs = {}, text) {
    const node = document.createElementNS(NS, tag);
    Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function stop() { cancelAnimationFrame(frame); dispose(); dispose = () => {}; }
  function render(container, cards, method) {
    stop();
    const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const width = 1000, height = 750, cx = 500, cy = 345;
    const svg = el('svg', { viewBox: `0 0 ${width} ${height}`, role: 'group', 'aria-label': method + '的关联论文；可拖动节点、点击阅读' });
    const defs = el('defs'); svg.append(defs);
    svg.append(el('circle', { cx, cy, r: 260, class: 'graph-orbit' }));
    const edges = el('g'), nodes = el('g'); svg.append(edges, nodes);
    const hub = el('g', { class: 'graph-hub', transform: `translate(${cx} ${cy})` });
    hub.append(el('circle', { r: 81 }), el('text', { y: -29, class: 'hub-caption', 'text-anchor': 'middle' }, '共同方法'));
    const parts = [...method];
    for (let i = 0; i < parts.length; i += 8) hub.append(el('text', { y: 1 + i / 8 * 23, 'text-anchor': 'middle', class: 'hub-title' }, parts.slice(i, i + 8).join('')));
    hub.append(el('text', { y: 58, 'text-anchor': 'middle', class: 'hub-caption' }, `${cards.length} 篇 · 当前组`));
    svg.append(hub);
    const data = cards.map((card, i) => {
      const angle = -Math.PI / 2 + (i + .5) * Math.PI * 2 / cards.length;
      const tx = cx + Math.cos(angle) * 340, ty = cy + Math.sin(angle) * 254;
      const clipId = `graph-clip-${i}`;
      const clip = el('clipPath', { id: clipId }); clip.append(el('circle', { r: 41 })); defs.append(clip);
      const edge = el('path', { class: 'map-edge', 'data-edge-paper': card.id, pathLength: 1 }); edges.append(edge);
      const group = el('g', { class: 'graph-node graph-paper', tabindex: 0, role: 'button', 'data-open-slug': card.slug, 'data-node-paper': card.id, 'aria-label': `阅读 ${card.short}，${card.major}，${card.year}` });
      group.append(el('title', {}, card.short));
      const visual = el('g', { class: 'graph-paper-visual' });
      visual.append(el('circle', { r: 46, class: 'graph-ring' }));
      visual.append(el('image', { href: card.thumbnail || card.image, x: -41, y: -41, width: 82, height: 110, preserveAspectRatio: 'xMidYMin slice', 'clip-path': `url(#${clipId})` }));
      group.append(visual);
      const words = [...card.short];
      for (let row = 0; row < Math.min(2, Math.ceil(words.length / 12)); row++) {
        const text = words.slice(row * 12, row * 12 + 12).join('') + (row === 1 && words.length > 24 ? '…' : '');
        group.append(el('text', { y: 68 + row * 20, 'text-anchor': 'middle', class: 'graph-label' }, text));
      }
      group.append(el('text', { y: words.length > 12 ? 108 : 89, 'text-anchor': 'middle', class: 'graph-meta' }, `${card.major} · ${card.year}`));
      nodes.append(group);
      return { card, group, edge, x: reduced ? tx : cx + Math.cos(angle) * 110, y: reduced ? ty : cy + Math.sin(angle) * 100, tx, ty, vx: 0, vy: 0, pinned: false };
    });
    container.append(svg);
    requestAnimationFrame(()=>{if(container.clientWidth)container.scrollLeft=Math.max(0,(container.scrollWidth-container.clientWidth)/2);});
    let ticks = 0, dragged = null, pointer = null, moved = false, suppressUntil = 0;
    function paint() {
      for (const node of data) {
        node.group.setAttribute('transform', `translate(${node.x.toFixed(2)} ${node.y.toFixed(2)})`);
        node.edge.setAttribute('d', `M${cx} ${cy} L${node.x.toFixed(2)} ${node.y.toFixed(2)}`);
      }
    }
    function tick() {
      for (const a of data) {
        if (a.pinned) continue;
        let fx = (a.tx - a.x) * .025, fy = (a.ty - a.y) * .025;
        for (const b of data) {
          if (a === b) continue;
          const dx = a.x - b.x, dy = a.y - b.y, distance = Math.max(1, Math.hypot(dx, dy));
          const repel = Math.min(8, 850 / (distance * distance)) + Math.max(0, 161 - distance) * .055;
          fx += dx / distance * repel; fy += dy / distance * repel;
        }
        const dx = a.x - cx, dy = a.y - cy, distance = Math.max(1, Math.hypot(dx, dy));
        if (distance < 186) { fx += dx / distance * (186 - distance) * .09; fy += dy / distance * (186 - distance) * .09; }
        a.vx = (a.vx + fx) * .77; a.vy = (a.vy + fy) * .77;
        a.x = Math.max(100, Math.min(900, a.x + a.vx)); a.y = Math.max(65, Math.min(625, a.y + a.vy));
      }
      paint();
      if (++ticks < 220 || dragged) frame = requestAnimationFrame(tick);
    }
    function resume() { ticks = 0; cancelAnimationFrame(frame); frame = requestAnimationFrame(tick); }
    function position(event) { const point = new DOMPoint(event.clientX, event.clientY).matrixTransform(svg.getScreenCTM().inverse()); return point; }
    function down(event) {
      const group = event.target.closest('.graph-paper');
      if (!group || event.button !== 0) return;
      dragged = data.find(n => n.group === group); pointer = position(event); moved = false;
      dragged.pinned = true; dragged.group.setPointerCapture(event.pointerId); resume();
    }
    function move(event) {
      if (!dragged) return;
      const point = position(event); if (Math.hypot(point.x - pointer.x, point.y - pointer.y) > 4) moved = true;
      if (!moved) return;
      dragged.x = Math.max(100, Math.min(900, point.x)); dragged.y = Math.max(65, Math.min(625, point.y));
      dragged.vx = dragged.vy = 0; paint();
    }
    function up(event) {
      if (!dragged) return;
      if (moved) { suppressUntil = Date.now() + 400; dragged.tx = dragged.x; dragged.ty = dragged.y; }
      dragged.pinned = false;
      if (dragged.group.hasPointerCapture(event.pointerId)) dragged.group.releasePointerCapture(event.pointerId);
      dragged = null;
      resume();
    }
    function click(event) { if (Date.now() < suppressUntil) { event.preventDefault(); event.stopImmediatePropagation(); } }
    svg.addEventListener('pointerdown', down); svg.addEventListener('pointermove', move);
    svg.addEventListener('pointerup', up); svg.addEventListener('pointercancel', up); svg.addEventListener('click', click, true);
    dispose = () => { svg.removeEventListener('pointerdown', down); svg.removeEventListener('pointermove', move); svg.removeEventListener('pointerup', up); svg.removeEventListener('pointercancel', up); svg.removeEventListener('click', click, true); };
    paint(); if (!reduced) resume();
  }
  window.PaperGraph = { render, stop };
})();
