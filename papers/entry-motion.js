/* One fixed pair. SVG effects carry the story; paper content stays in place. */
(() => {
  const figure=document.getElementById('paper-entry-motion');if(!figure)return;
  const host=document.getElementById('paper-pair-cards');
  const playButton=document.getElementById('paper-pair-playback');
  const compareButton=document.getElementById('paper-motion-compare');
  const byId=new Map((window.PAPER_LIBRARY?.cards||[]).map(card=>[card.id,card]));
  const current=(window.PAPER_ENTRY_PAIRS||[]).find(pair=>
    pair.id==='segmentation'&&pair.papers.length===2&&
    pair.papers[0].id!==pair.papers[1].id&&pair.papers.every(p=>byId.has(p.id))&&
    byId.get(pair.papers[0].id).major!==byId.get(pair.papers[1].id).major);
  const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
  function paperGraphic(kind){
    const retinalBoundary='M8 35C42 42 54 27 82 33S139 44 182 35V44C137 53 111 46 84 41S42 52 8 46Z';
    const particles=[[27,24,11],[55,44,12],[82,19,9],[116,40,14],[150,24,10],[170,48,7]];
    const art=kind==='retina'
      ? `<path d="M8 16C38 22 47 8 79 15S130 29 182 16M8 25C40 33 48 17 80 24S137 35 182 26M8 35C42 42 54 27 82 33S139 44 182 35M8 46C42 52 52 37 84 41S137 53 182 44"/><path class="prm-scene-motion prm-retina-fill" d="${retinalBoundary}" fill="#80b6b2" fill-opacity=".45" stroke="none"/><path class="prm-scene-motion prm-retina-boundary" d="${retinalBoundary}" pathLength="1" fill="none" stroke="#c2ead3" stroke-width="1.3"/><g class="prm-scene-motion prm-retina-cursor"><path d="m132 35 4 22 6-7 7 8 4-3-7-8 10-2Z" fill="#f4f7eb" stroke="#264554" stroke-width="1.5"/></g>`
      : `<path d="M8 12H181M8 25H181M8 38H181M8 51H181" stroke-dasharray="1 6" opacity=".4"/><g fill="#9ebbc0">${particles.map(([x,y,r])=>`<circle cx="${x}" cy="${y}" r="${r}"/>`).join('')}</g><g fill="none" stroke="#dfca98" stroke-width="1.5">${particles.map(([x,y,r],i)=>`<circle class="prm-scene-motion prm-particle-ring" cx="${x}" cy="${y}" r="${r+1.5}" pathLength="1" style="--ring-delay:${i*.16}s"/>`).join('')}</g>`;
    const frame=document.createElement('div');frame.className='prm-paper-visual';
    frame.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 66" aria-hidden="true" focusable="false"><rect width="190" height="66" rx="5" fill="#294858"/><g fill="none" stroke="#bbd5d0" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">${art}</g></svg><span>研究示意</span>`;
    frame.title='研究内容示意，非论文原图';return frame;
  }
  function paperLink(item,index){
    const card=byId.get(item.id),link=document.createElement('a');
    link.className='prm-paper';link.href='#paper/'+encodeURIComponent(card.slug);
    link.dataset.motionPaper=card.id;link.dataset.side=String(index);
    link.setAttribute('aria-label','阅读论文：'+card.short);
    const top=document.createElement('div');top.className='prm-paper-top';
    const major=document.createElement('span');major.className='prm-major';major.textContent=card.major;
    const number=document.createElement('span');number.className='prm-year';number.textContent=String(index+1).padStart(2,'0');top.append(major,number);
    const body=document.createElement('div');body.className='prm-paper-body';
    const title=document.createElement('h3');title.textContent=item.label;title.title=card.short;body.append(title);
    const context=document.createElement('p');context.className='prm-context';context.textContent=item.caption;
    const more=document.createElement('span');more.className='prm-read';more.textContent='阅读论文 ↗';
    link.append(top,body,paperGraphic(item.visual),context,more);return link;
  }
  let hovered=false,inView=false,userPaused=false,reducedOptIn=false,pageActive=true;
  const ready=!!(current&&host&&playButton&&compareButton&&window.__atlasReady);
  const wantsPlay=()=>!userPaused&&(!reduced.matches||reducedOptIn);
  const canPlay=()=>ready&&wantsPlay()&&inView&&!hovered&&pageActive&&
    !figure.hidden&&!document.hidden&&!document.querySelector('dialog[open]')&&
    !(figure.contains(document.activeElement)&&document.activeElement!==playButton);
  function syncPlayback(){
    if(playButton){
      const label=wantsPlay()?'暂停动画':'继续动画';
      playButton.setAttribute('aria-label',label);playButton.title=label;
      playButton.dataset.paused=String(!wantsPlay());
    }
    figure.dataset.playback=!wantsPlay()?'paused':canPlay()?'playing':'waiting';
  }
  if(ready){
    figure.dataset.pair=current.id;
    document.getElementById('paper-pair-method').textContent=current.method;
    document.getElementById('paper-pair-kind').textContent=current.kind;
    document.getElementById('paper-pair-connection').textContent=current.connection;
    host.replaceChildren(...current.papers.map(paperLink));
    playButton.hidden=false;compareButton.hidden=false;
    playButton.addEventListener('click',()=>{
      if(wantsPlay())userPaused=true;
      else{userPaused=false;reducedOptIn=true;}
      syncPlayback();
    });
    compareButton.addEventListener('click',()=>document.dispatchEvent(
      new CustomEvent('paper-atlas:compare',{detail:{ids:current.papers.map(p=>p.id)}})));
    figure.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch'){hovered=true;syncPlayback();}});
    figure.addEventListener('pointerleave',()=>{hovered=false;syncPlayback();});
    figure.addEventListener('focusin',syncPlayback);
    figure.addEventListener('focusout',()=>queueMicrotask(syncPlayback));
    document.addEventListener('visibilitychange',syncPlayback);
    window.addEventListener('pagehide',()=>{pageActive=false;syncPlayback();});
    window.addEventListener('pageshow',()=>{pageActive=true;syncPlayback();});
    const dialogs=new MutationObserver(syncPlayback);
    document.querySelectorAll('dialog').forEach(dialog=>dialogs.observe(dialog,{attributes:true,attributeFilter:['open']}));
    if('IntersectionObserver' in window){
      new IntersectionObserver(entries=>{
        inView=entries[0].isIntersecting&&entries[0].intersectionRatio>=.2;syncPlayback();
      },{threshold:[0,.2]}).observe(figure);
    }else{
      const visibility=()=>{const rect=figure.getBoundingClientRect();inView=rect.bottom>0&&rect.top<innerHeight;syncPlayback();};
      window.addEventListener('scroll',visibility,{passive:true});visibility();
    }
  }
  reduced.addEventListener('change',()=>{reducedOptIn=false;syncPlayback();});
  function sync(){
    const view=location.hash.slice(1).split('/')[0],entrance=view!=='map'&&view!=='saved';
    figure.hidden=!entrance;figure.closest('.paper-intro').classList.toggle('has-paper-motion',entrance);
    syncPlayback();
  }
  window.addEventListener('hashchange',sync);sync();
})();
