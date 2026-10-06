
(function () {
  const nav = document.querySelector('.site-nav, .dt-network nav');
  const toggle = document.querySelector('#menuToggle');
  if (toggle && nav) {
    toggle.onclick = () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); nav.classList.toggle('is-open', open); };
  }
  document.addEventListener('click', event => {
    document.querySelectorAll('.nav-group[open]').forEach(group => { if (!group.contains(event.target)) group.open = false; });
    if (event.target.closest('.nav-menu a, .site-nav>a, .dt-network nav>a')) { nav?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); }
  });
  document.addEventListener('keydown', event => {
    if (event.key !== 'Escape') return;
    const wasOpen = nav?.classList.contains('is-open');
    nav?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false');
    document.querySelectorAll('.nav-group[open]').forEach(group => { group.open = false; });
    if (wasOpen) toggle?.focus();
  });
})();

