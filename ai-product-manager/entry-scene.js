/* Presentation only. The planner and its saved profile remain independent. */
(() => {
  const check = (x, y) => `<path d="M${x} ${y}l4 4 8-9" fill="none" stroke="#3b9c8d" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>`;
  const need = (x, y) => `<g transform="translate(${x} ${y})">
    <rect y="5" width="136" height="142" rx="16" fill="#e4eaf0" opacity=".45"/>
    <rect width="136" height="142" rx="16" fill="#fffdf8" stroke="#e0d3b9"/>
    <rect class="pm-svg-phase pm-svg-phase-1" width="136" height="142" rx="16" fill="none" stroke="#ca9954" stroke-width="2"/>
    <rect x="14" y="15" width="31" height="24" rx="7" fill="#f7ecd8"/><text x="29.5" y="32" text-anchor="middle" class="pm-svg-index">01</text>
    <text x="14" y="64" class="pm-svg-title">明确需求</text>
    <text x="14" y="92" class="pm-svg-small">谁遇到问题？</text>
    <text x="14" y="115" class="pm-svg-small">要解决什么？</text>
  </g>`;
  const product = (x, y) => `<g transform="translate(${x} ${y})">
    <rect x="0" y="7" width="276" height="235" rx="18" fill="#cbdcf0" opacity=".32"/>
    <rect width="276" height="235" rx="18" fill="#fff" stroke="#b7cde5" stroke-width="1.5"/>
    <path d="M0 42H276" stroke="#e1eaf4"/>
    <g fill="#b6cadd"><circle cx="18" cy="21" r="3"/><circle cx="29" cy="21" r="3"/><circle cx="40" cy="21" r="3"/></g>
    <text x="157" y="26" text-anchor="middle" class="pm-svg-small">你的 AI 产品</text>
    <rect x="16" y="57" width="244" height="104" rx="10" fill="#f7faff"/>
    <rect class="pm-svg-phase pm-svg-phase-2" x="16" y="57" width="244" height="104" rx="10" fill="none" stroke="#769de2" stroke-width="2"/>
    <text x="30" y="82" class="pm-svg-title">02  设计原型</text>
    <rect x="30" y="96" width="125" height="10" rx="4" fill="#dbe7f8"/>
    <rect x="30" y="117" width="103" height="8" rx="4" fill="#e6edf7"/>
    <rect x="30" y="135" width="83" height="8" rx="4" fill="#e6edf7"/>
    <g class="pm-svg-build"><rect x="176" y="99" width="67" height="45" rx="9" fill="#e5eeff"/>
    <path d="M193 123l10 9 22-23" stroke="#608cdd" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/></g>
    <path d="M138 161v15" stroke="#91b4e2" stroke-dasharray="3 3"/>
    <rect x="16" y="177" width="244" height="42" rx="11" fill="#edf3ff"/>
    <rect class="pm-svg-phase pm-svg-phase-3" x="16" y="177" width="244" height="42" rx="11" fill="none" stroke="#527fe4" stroke-width="2"/>
    <rect x="26" y="185" width="30" height="26" rx="7" fill="#245ac0"/><text x="41" y="203" text-anchor="middle" class="pm-svg-ai">AI</text>
    <text x="67" y="204" class="pm-svg-title">03  搭建工作流</text>
    <g stroke="#5b83ca" fill="#f4f8ff" stroke-width="1.4"><path d="M216 198h24"/><circle class="pm-svg-dot" cx="216" cy="198" r="3"/><circle class="pm-svg-dot" style="animation-delay:.4s" cx="228" cy="198" r="3"/><circle class="pm-svg-dot" style="animation-delay:.8s" cx="240" cy="198" r="3"/></g>
    <g class="pm-svg-cursor"><path d="M222 135l3 23 6-7 8 1z" fill="#fff" stroke="#426ca3" stroke-width="1.7" stroke-linejoin="round"/></g>
  </g>`;
  const review = (x, y) => `<g transform="translate(${x} ${y})">
    <rect y="5" width="130" height="142" rx="16" fill="#dce8e4" opacity=".6"/>
    <rect width="130" height="142" rx="16" fill="#fafffd" stroke="#bed8d0"/>
    <rect class="pm-svg-phase pm-svg-phase-4" width="130" height="142" rx="16" fill="none" stroke="#56a397" stroke-width="2"/>
    <rect x="14" y="15" width="31" height="24" rx="7" fill="#e4f2ec"/><text x="29.5" y="32" text-anchor="middle" class="pm-svg-index">04</text>
    <text x="14" y="64" class="pm-svg-title">验证与改进</text>
    <g class="pm-svg-checked">${check(15,89)}${check(15,114)}</g>
    <text x="36" y="94" class="pm-svg-small">结果可用</text>
    <text x="36" y="119" class="pm-svg-small">流程顺畅</text>
  </g>`;
  const desktop = `<svg class="pm-entry-svg pm-entry-desktop" viewBox="0 0 660 350" aria-hidden="true" focusable="false">
    <defs><radialGradient id="pm-scene-glow"><stop stop-color="#e2edff"/><stop offset="1" stop-color="#f8fafc" stop-opacity="0"/></radialGradient><pattern id="pm-scene-grid" width="22" height="22" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".8" fill="#adc4de" opacity=".38"/></pattern></defs>
    <ellipse cx="330" cy="178" rx="326" ry="169" fill="url(#pm-scene-glow)"/>
    <rect x="7" y="16" width="645" height="306" rx="36" fill="url(#pm-scene-grid)"/>
    <text x="20" y="32" class="pm-svg-caption">一个想法，逐步成形。</text>
    <g fill="none" stroke-width="1.5"><path d="M150 175H185M461 175H505" stroke="#c5d7ea"/><path class="pm-svg-flow" d="M150 175H185M461 175H505" stroke="#6a9de0" stroke-dasharray="4 8"/>
    <path d="M570 256v39q0 18-18 18H104q-22 0-22-22v-27" stroke="#c7d9df" stroke-dasharray="5 6"/><path class="pm-svg-return" d="M570 256v39q0 18-18 18H104q-22 0-22-22v-27" stroke="#75a79d" stroke-dasharray="5 13"/>
    <path d="M77 270l5-6 5 6" stroke="#75a79d" stroke-linecap="round" stroke-linejoin="round"/></g>
    ${need(14,106)}${product(185,53)}${review(505,106)}
    <rect x="256" y="300" width="150" height="25" rx="12" fill="#f8fafc"/><text x="331" y="317" text-anchor="middle" class="pm-svg-small">带着反馈，再进一步</text>
  </svg>`;
  const mobile = `<svg class="pm-entry-svg pm-entry-mobile" viewBox="0 0 350 340" aria-hidden="true" focusable="false">
    <rect x="7" y="5" width="336" height="330" rx="24" fill="#edf3fc"/>
    <g transform="translate(25 20)"><rect width="300" height="46" rx="11" fill="#fffdf8" stroke="#e0d3b9"/><rect class="pm-svg-phase pm-svg-phase-1" width="300" height="46" rx="11" fill="none" stroke="#ca9954" stroke-width="2"/><text x="14" y="29" class="pm-svg-title">01  明确需求</text><text x="160" y="29" class="pm-svg-small">要解决什么问题？</text></g>
    <path class="pm-svg-flow" d="M175 66v17" fill="none" stroke="#6a9de0" stroke-width="2" stroke-dasharray="3 4"/>
    <g transform="translate(37 82)">
      <rect y="5" width="276" height="180" rx="18" fill="#cfdef0" opacity=".45"/><rect width="276" height="180" rx="18" fill="#fff" stroke="#b7cde5" stroke-width="1.5"/>
      <g fill="#b6cadd"><circle cx="18" cy="19" r="3"/><circle cx="29" cy="19" r="3"/><circle cx="40" cy="19" r="3"/></g><text x="165" y="24" text-anchor="middle" class="pm-svg-small">你的 AI 产品</text>
      <rect x="16" y="39" width="244" height="77" rx="10" fill="#f7faff"/><rect class="pm-svg-phase pm-svg-phase-2" x="16" y="39" width="244" height="77" rx="10" fill="none" stroke="#769de2" stroke-width="2"/>
      <text x="30" y="64" class="pm-svg-title">02  设计原型</text><rect x="30" y="77" width="115" height="8" rx="4" fill="#dbe7f8"/><rect x="30" y="94" width="91" height="7" rx="4" fill="#e6edf7"/>
      <g class="pm-svg-build"><rect x="176" y="63" width="67" height="38" rx="8" fill="#e5eeff"/><path d="M193 81l10 9 22-22" stroke="#608cdd" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/></g>
      <path d="M138 116v12" stroke="#91b4e2" stroke-dasharray="3 3"/>
      <rect x="16" y="128" width="244" height="37" rx="10" fill="#edf3ff"/><rect class="pm-svg-phase pm-svg-phase-3" x="16" y="128" width="244" height="37" rx="10" fill="none" stroke="#527fe4" stroke-width="2"/>
      <rect x="26" y="134" width="30" height="25" rx="7" fill="#245ac0"/><text x="41" y="152" text-anchor="middle" class="pm-svg-ai">AI</text><text x="67" y="153" class="pm-svg-title">03  搭建工作流</text>
      <g stroke="#5b83ca" fill="#f4f8ff" stroke-width="1.4"><path d="M216 147h24"/><circle class="pm-svg-dot" cx="216" cy="147" r="3"/><circle class="pm-svg-dot" style="animation-delay:.4s" cx="228" cy="147" r="3"/><circle class="pm-svg-dot" style="animation-delay:.8s" cx="240" cy="147" r="3"/></g>
      <g transform="translate(0 -50)"><g class="pm-svg-cursor"><path d="M222 135l3 23 6-7 8 1z" fill="#fff" stroke="#426ca3" stroke-width="1.7" stroke-linejoin="round"/></g></g>
    </g>
    <path class="pm-svg-flow" d="M175 261v17" fill="none" stroke="#6a9de0" stroke-width="2" stroke-dasharray="3 4"/>
    <g transform="translate(25 279)"><rect width="300" height="43" rx="11" fill="#fafffd" stroke="#bed8d0"/><rect class="pm-svg-phase pm-svg-phase-4" width="300" height="43" rx="11" fill="none" stroke="#56a397" stroke-width="2"/><text x="14" y="27" class="pm-svg-title">04  验证与改进</text><g class="pm-svg-checked">${check(170,22)}</g><text x="191" y="27" class="pm-svg-small">带着反馈迭代</text></g>
  </svg>`;
  const markup = `<div class="pm-entry-copy"><p class="pm-entry-kicker"><span></span>AI 产品经理学习路径</p>
    <h1 id="pm-entry-title">把想法，<br>做成 <em>AI 产品。</em></h1>
    <p class="pm-entry-lead">从一个真实问题开始，学会设计、搭建与验证。<br class="pm-entry-copy-break">按你的背景与时间，规划每一步。</p>
    <a class="pm-entry-start" href="#pm-workspace">规划我的路径 <span aria-hidden="true">↗</span></a>
    <p class="pm-entry-note">边学边做，让每一步都有成果。</p></div>
    <figure class="pm-entry-figure" tabindex="0" aria-label="AI 产品学习过程示意：明确需求、设计原型、搭建 AI 工作流、验证与改进。悬停或聚焦可暂停动画。">
      <div class="pm-entry-diagram">${desktop}${mobile}</div>
      <figcaption class="pm-entry-phases"><span>01 <b>需求</b></span><span>02 <b>原型</b></span><span>03 <b>搭建</b></span><span>04 <b>验证</b></span></figcaption>
    </figure>`;

  function mount(root) {
    const scene = root.querySelector('.pm-entry-figure');
    const reduced = matchMedia('(prefers-reduced-motion: reduce)');
    const abort = new AbortController();
    const options = { signal: abort.signal };
    let inView = false, hovered = false, focused = false, active = true;
    const sync = () => { scene.dataset.motion = inView && active && !document.hidden && !reduced.matches && !hovered && !focused ? 'running' : 'paused'; };
    scene.addEventListener('pointerenter', e => { if (e.pointerType !== 'touch') { hovered = true; sync(); } }, options);
    scene.addEventListener('pointerleave', () => { hovered = false; sync(); }, options);
    scene.addEventListener('focusin', () => { focused = true; sync(); }, options);
    scene.addEventListener('focusout', e => { if (!scene.contains(e.relatedTarget)) { focused = false; sync(); } }, options);
    document.addEventListener('visibilitychange', sync, options);
    reduced.addEventListener('change', sync, options);
    window.addEventListener('pagehide', () => { active = false; sync(); }, options);
    window.addEventListener('pageshow', () => { active = true; sync(); }, options);
    let observer;
    if ('IntersectionObserver' in window) {
      observer = new IntersectionObserver(entries => { inView = entries[0].isIntersecting; sync(); });
      observer.observe(scene);
    } else {
      const checkView = () => { const box = scene.getBoundingClientRect(); inView = box.bottom > 0 && box.top < innerHeight; sync(); };
      window.addEventListener('scroll', checkView, { ...options, passive: true });
      window.addEventListener('resize', checkView, options); checkView();
    }
    sync();
    return () => { abort.abort(); observer?.disconnect(); };
  }

  window.PMEntryHero = function PMEntryHero() {
    const ref = React.useRef(null);
    React.useEffect(() => mount(ref.current), []);
    return React.createElement('section', { ref, className: 'pm-entry', 'aria-labelledby': 'pm-entry-title', dangerouslySetInnerHTML: { __html: markup } });
  };
})();
