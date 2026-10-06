
/* Pure presentation: this animation never reads or writes the planning form. */
(() => {
  const scene = document.getElementById('route-entry-motion');
  if (!scene) return;
  const reduced = matchMedia('(prefers-reduced-motion: reduce)');
  let inView = false, hovered = false, focused = false, pageActive = true;
  function sync() {
    scene.dataset.motion = inView && pageActive && !document.hidden && !reduced.matches && !hovered && !focused ? 'running' : 'paused';
  }
  scene.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') { hovered = true; sync(); } });
  scene.addEventListener('pointerleave', () => { hovered = false; sync(); });
  scene.addEventListener('focusin', () => { focused = true; sync(); });
  scene.addEventListener('focusout', e => { if (!scene.contains(e.relatedTarget)) { focused = false; sync(); } });
  document.addEventListener('visibilitychange', sync);
  reduced.addEventListener('change', sync);
  window.addEventListener('pagehide', () => { pageActive = false; sync(); });
  window.addEventListener('pageshow', () => { pageActive = true; sync(); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); }, { threshold: 0 }).observe(scene);
  } else {
    const check = () => { const box = scene.getBoundingClientRect(); inView = box.bottom > 0 && box.top < innerHeight; sync(); };
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check); check();
  }
  sync();
})();

