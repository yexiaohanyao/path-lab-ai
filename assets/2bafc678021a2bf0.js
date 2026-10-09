
(() => {
  if (document.body.dataset.page !== 'projects') return;
  const $ = selector => document.querySelector(selector);
  const cards = [...document.querySelectorAll('[data-project-card]')];
  const filters = [...document.querySelectorAll('[data-project-filter]')];
  const search = $('#project-search'), status = $('#project-status'), dialog = $('#project-dialog');
  const details = [...document.querySelectorAll('[data-project-detail]')];
  const params = new URLSearchParams(location.search);
  let category = ['team', 'course', 'student'].includes(params.get('type')) ? params.get('type') : 'all';
  let opener = null, openedFromClick = false;
  search.value = (params.get('q') || '').slice(0, 160);
  status.value = ['available', 'example', 'preparing'].includes(params.get('status')) ? params.get('status') : 'all';

  function renderFilters(writeURL = true) {
    const query = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const card of cards) {
      const visible = (category === 'all' || card.dataset.category === category)
        && (status.value === 'all' || card.dataset.status === status.value)
        && (!query || card.dataset.search.toLocaleLowerCase().includes(query));
      card.hidden = !visible;
      if (visible) count++;
    }
    filters.forEach(button => button.setAttribute('aria-pressed', String(button.dataset.projectFilter === category)));
    $('#project-count').textContent = `${count} 个项目`;
    $('#project-empty').hidden = count !== 0;
    const catalogEmpty = cards.length === 0;
    const categoryEmpty = category !== 'all' && !cards.some(c => c.dataset.category === category);
    const labels = {all: '展示项目', team: '团队项目', course: '课程项目', student: '学员作品'};
    $('#project-search-form').hidden = catalogEmpty;
    $('#project-count').hidden = catalogEmpty;
    $('#project-clear').hidden = catalogEmpty;
    $('#project-empty-title').textContent = catalogEmpty || categoryEmpty ? `暂无${labels[category]}` : '还没有匹配的项目';
    $('#project-empty-message').textContent = catalogEmpty || categoryEmpty
      ? '这里将展示团队项目、课程实践与学员作品。'
      : '试试其他关键词，或清除筛选看看全部项目。';
    if (writeURL && /^https?:$/.test(location.protocol)) {
      const url = new URL(location.href);
      for (const [key, value] of [['q', search.value.trim()], ['type', category === 'all' ? '' : category], ['status', status.value === 'all' ? '' : status.value]]) {
        if (value) url.searchParams.set(key, value); else url.searchParams.delete(key);
      }
      history.replaceState(null, '', url);
    }
  }
  filters.forEach(button => button.addEventListener('click', () => {
    category = button.dataset.projectFilter; renderFilters();
  }));
  search.addEventListener('input', () => renderFilters());
  status.addEventListener('change', () => renderFilters());
  $('#project-search-form').addEventListener('submit', event => { event.preventDefault(); renderFilters(); });
  $('#project-clear').addEventListener('click', () => {
    category = 'all'; search.value = ''; status.value = 'all'; renderFilters(); filters[0].focus();
  });

  function syncProject() {
    const match = location.hash.match(/^#project\/([a-z0-9-]+)$/);
    if (!match) {
      if (dialog.open) dialog.close();
      document.body.classList.remove('pr-dialog-open');
      openedFromClick = false;
      return;
    }
    const item = details.find(section => section.dataset.projectDetail === match[1]);
    details.forEach(section => { section.hidden = section !== item; });
    $('#project-not-found').hidden = !!item;
    $('#project-share').hidden = !item;
    $('#project-share-status').textContent = '';
    $('#project-share-fallback').hidden = true;
    const heading = item?.querySelector('h2') || $('#project-not-found h2');
    if (item) dialog.setAttribute('aria-labelledby', heading.id); else dialog.removeAttribute('aria-labelledby');
    if (!dialog.open) dialog.showModal();
    document.body.classList.add('pr-dialog-open');
    dialog.scrollTop = 0;
    heading.focus({preventScroll: true});
  }
  function closeProject() {
    if (openedFromClick) { history.back(); return; }
    const url = new URL(location.href); url.hash = 'project-list';
    history.replaceState(null, '', url); syncProject();
  }
  document.addEventListener('click', event => {
    const link = event.target.closest('[data-project-open]');
    if (link && !event.ctrlKey && !event.metaKey && !event.shiftKey && event.button === 0) {
      opener = link; openedFromClick = true;
    }
    if (event.target.closest('[data-project-close]')) closeProject();
  });
  dialog.addEventListener('cancel', event => { event.preventDefault(); closeProject(); });
  // Restore focus after the dialog leaves the top layer and history traversal finishes.
  dialog.addEventListener('close', () => requestAnimationFrame(() => {
    if (dialog.open) return;
    const target = opener?.isConnected && !opener.closest('[hidden]') ? opener : $('#project-list-title');
    if (target.tagName === 'H2') target.tabIndex = -1;
    target.focus({preventScroll: true});
  }));
  dialog.addEventListener('click', event => {
    const box = dialog.getBoundingClientRect();
    if (event.target === dialog && (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom)) closeProject();
  });
  $('#project-share').addEventListener('click', async () => {
    const url = new URL(location.href); url.search = '';
    try {
      await navigator.clipboard.writeText(url.href);
      $('#project-share-status').textContent = '项目链接已复制';
    } catch {
      const input = $('#project-share-fallback'); input.value = url.href; input.hidden = false; input.focus(); input.select();
      $('#project-share-status').textContent = '请选择并复制下方项目链接';
    }
  });
  addEventListener('hashchange', syncProject);
  renderFilters(false); syncProject();
})();

