(function () {
  const title = document.getElementById('hero-title');
  if (!title) return;
  const views = {
    explore: ['论文交互馆', '从真实研究出发，\n发现不同学科的共同 AI 方法。'],
    map: ['方法图谱', '一个共同方法，可以连接哪些不同的研究问题？'],
    saved: ['我的收藏', '把值得再次阅读的论文，与自己的思考放在一起。']
  };
  let deepLinks = {};
  fetch('feishu-links.json').then(r => r.ok ? r.json() : {}).then(data => { deepLinks = data.papers || {}; related(); }).catch(() => {});
  function sync() {
    const hash = decodeURIComponent(location.hash.slice(1)).split('/')[0];
    const view = views[hash] || views[document.body.dataset.page] || views.explore;
    title.textContent = view[0];
    document.querySelector('.paper-intro-lead').textContent = view[1];
    document.querySelector('.paper-intro .breadcrumb>span:last-child').textContent = view[0];
    document.getElementById('paper-grid').setAttribute('aria-busy', 'false');
    related();
  }
  function related() {
    const reader = document.getElementById('reader'), panel = document.getElementById('reader-panel');
    if (!reader.open || document.getElementById('tab-overview').getAttribute('aria-selected') !== 'true') return;
    const slug = decodeURIComponent(location.hash.slice(1)).replace(/^paper\//, '');
    const cards = window.PAPER_LIBRARY.cards, current = cards.find(card => card.slug === slug);
    if (!current) return;
    if (!panel.querySelector('.feishu-reading')) {
      const url = deepLinks[current.id] || deepLinks[current.doi];
      if (typeof url === 'string' && /^https:\/\/[a-z0-9.-]+\.(feishu\.cn|larksuite\.com)\//i.test(url)) {
        const link = document.createElement('a'); link.href = url; link.className = 'feishu-reading';
        link.target = '_blank'; link.rel = 'noopener noreferrer'; link.textContent = '在飞书阅读深度导读 ↗'; panel.append(link);
      }
    }
    if (panel.querySelector('.related-papers')) return;
    const matches = cards.filter(card => card.id !== current.id && card.methodFamily === current.methodFamily).slice(0, 4);
    const section = document.createElement('section'); section.className = 'related-papers';
    const heading = document.createElement('h3'); heading.textContent = '沿着这个方法，继续阅读'; section.append(heading);
    const list = document.createElement('div'); list.className = 'related-papers-list';
    for (const card of matches) {
      const link = document.createElement('a'); link.href = '#paper/' + card.slug;
      const img = document.createElement('img'); img.src = `assets/previews/${card.id}-320.webp`; img.alt = ''; img.loading = 'lazy';
      const text = document.createElement('span'); text.textContent = card.short;
      link.append(img, text); list.append(link);
    }
    section.append(list); panel.append(section);
  }
  addEventListener('hashchange', sync);
  document.addEventListener('click', event => {
    if (event.target.closest('[data-reader-tab]')) related();
  });
  const image = document.getElementById('full-image'), toolbar = document.querySelector('.image-tools');
  let zoom = 1;
  const controls = document.createElement('span'); controls.className = 'image-zoom-controls';
  controls.innerHTML = '<button type="button" data-zoom="out" aria-label="缩小图片">−</button><button type="button" data-zoom="reset" aria-label="重置图片缩放">100%</button><button type="button" data-zoom="in" aria-label="放大图片">＋</button>';
  toolbar.insertBefore(controls, document.getElementById('image-close'));
  function size() { image.style.width = (zoom * 100) + '%'; controls.querySelector('[data-zoom="reset"]').textContent = Math.round(zoom * 100) + '%'; }
  controls.onclick = event => { const action = event.target.dataset.zoom; if (!action) return; zoom = action === 'reset' ? 1 : Math.max(.5, Math.min(3, zoom + (action === 'in' ? .25 : -.25))); size(); };
  document.getElementById('reader-image-button').addEventListener('click', () => { zoom = 1; size(); });
  if (new URLSearchParams(location.search).has('search')) { document.getElementById('search').focus(); }
  sync();
})();
