
(function(){
  const $=q=>document.querySelector(q),C=window.ROUTE_CATALOG,E=window.RouteEngine,key='specialty-ai-route-v1';
  let state={};try{state=JSON.parse(localStorage.getItem(key)||'{}')||{};}catch(e){}
  const page=document.body.dataset.page;
  if(page!=='planner'&&['blue','red','gold'].includes(state.theme))document.documentElement.dataset.theme=state.theme;
  const menu=$('#siteMenu'),toggle=$('#menuToggle');
  if(toggle)toggle.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);});
  document.addEventListener('keydown',e=>{if(e.key==='Escape'&&toggle){toggle.setAttribute('aria-expanded','false');menu.classList.remove('is-open');}});
  if(page==='home'&&state.profile){
    const r=E.build(state.profile),link=$('#continueRoute');link.hidden=false;
    link.textContent='继续上次的 '+r.major.label+' 路线 · '+r.profile.weeks+' 周计划 ↗';
    link.href='planner.html?'+new URLSearchParams(r.profile).toString();
  }
  if(page==='resources'){
    const params=new URLSearchParams(location.search),search=$('#resourceSearch'),major=$('#resourceMajor');
    search.value=(params.get('q')||'').slice(0,200);
    if(C.majors.some(m=>m.id===params.get('major')))major.value=params.get('major');
    function filter(){
      const query=search.value.trim().toLocaleLowerCase(),selected=major.value;let count=0;
      document.querySelectorAll('.dataset-card').forEach(card=>{const show=(selected==='all'||card.dataset.major===selected)&&(!query||card.dataset.search.toLocaleLowerCase().includes(query));card.hidden=!show;if(show)count++;});
      $('#resourceCount').textContent=count+' 个数据入口';$('#resourceEmpty').hidden=count!==0;
      try{const next=new URL(location.href);next.search='';if(query)next.searchParams.set('q',search.value.trim());if(selected!=='all')next.searchParams.set('major',selected);history.replaceState(null,'',next);}catch(e){}
    }
    $('#resourceFilters').addEventListener('submit',e=>{e.preventDefault();filter();});
    search.addEventListener('input',filter);major.addEventListener('change',filter);
    $('#clearResourceFilters').addEventListener('click',()=>{search.value='';major.value='all';filter();search.focus();});filter();
  }
  if(page==='planner'){
    const app=window.RouteApp,share=$('#shareRoute'),dialog=$('#shareDialog');
    function currentURL(){const u=new URL(location.href);u.hash='';u.search='';Object.entries(app.getRoute().profile).forEach(([k,v])=>u.searchParams.set(k,v));u.searchParams.set('theme',app.getTheme());return u;}
    function updateURL(){try{if(/^https?:$/.test(location.protocol))history.replaceState(null,'',currentURL());}catch(e){}}
    $('#profileForm').addEventListener('submit',updateURL);$('#resetButton').addEventListener('click',updateURL);
    document.querySelectorAll('[data-theme-choice]').forEach(b=>b.addEventListener('click',updateURL));
    share.addEventListener('click',()=>{
      if(!/^https?:$/.test(location.protocol)){$('#shareExplain').textContent='当前打开的是本地文件。请从已部署的站点打开后复制网址；现在可以先导出 Markdown 或长图。';$('#shareURL').value='';$('#copyRouteLink').disabled=true;}
      else{$('#shareExplain').textContent='链接包含专业、基础、目标和时间参数。对方会生成相同路线，个人打勾记录不会一并分享。';$('#shareURL').value=currentURL().href;$('#copyRouteLink').disabled=false;}
      $('#copyStatus').textContent='';dialog.showModal();
    });
    $('#copyRouteLink').addEventListener('click',async()=>{const text=$('#shareURL');try{if(navigator.clipboard&&isSecureContext)await navigator.clipboard.writeText(text.value);else{text.focus();text.select();if(!document.execCommand('copy'))throw new Error('clipboard unavailable');}$('#copyStatus').textContent='已复制路线链接。';}catch(e){text.focus();text.select();$('#copyStatus').textContent='请按 Ctrl+C 复制选中的链接。';}});
    // 路线参数和位置分开：站内锚点仅用于定位到某个阶段。
    if(/^#(s[1-5]|sources)$/.test(location.hash))requestAnimationFrame(()=>{const el=document.getElementById(location.hash.slice(1));if(el){if(el.tagName==='DETAILS')el.open=true;window.scrollTo({top:window.scrollY+el.getBoundingClientRect().top-100,behavior:'instant'});}});
  }
})();

