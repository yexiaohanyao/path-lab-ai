/* The landscape is a procedural explanation. All measured values are kept in the evidence section. */
(() => {
  'use strict';
  const $ = id => document.getElementById(id);
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const mobile = () => window.matchMedia('(max-width: 760px)').matches;
  const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));
  const scenes = [
    ['让森林留下声音', '每个光点，代表一次概念化的观察。', '15,000,000', '两年累积鸟类检测 · 论文报告'],
    ['把声音转为观测', '统一识别、校准，再筛选可信检测。', '263 种', '精调 BirdNET 的覆盖范围 · 论文报告'],
    ['叠合森林的记忆', '迁徙、空间分布、声音检测，三部分先验。', 'p = pM × pS × pD', '某物种在一次录音中被检测到的概率'],
    ['让新证据进入网格', '距离加权的局部似然 · 每格独立更新。', '1 ha / 每日', '原系统分辨率与更新频率 · 非本页模拟'],
    ['把明天留作检验', '次日 App 观测，与独立专家计数交叉验证。', '89 / 73 物种', '两组验证 · 向下查看真实 AUC 数据']
  ];
  const chapters = [...document.querySelectorAll('[data-chapter]')];
  let step = 0, pendingScroll = false, announced = -1;
  const canvas = $('world'), ctx = canvas.getContext('2d');
  let width = 1, height = 1, yaw = -.62, pitch = .61, zoom = 1, phase = 0;
  let paused = reduceMotion.matches, frame = 0, visible = true, dragging = false, dragged = false;
  let last = {x:0, y:0}, selectedNode = -1, pointHits = [];
  const terrain = (x,z) => {
    const river = Math.abs(x - .27*Math.sin(z*3.2)-.02);
    const a=.30*Math.exp(-((x+.58)**2*5+(z-.30)**2*3));
    const b=.23*Math.exp(-((x-.55)**2*6+(z+.42)**2*4));
    const c=.045*Math.sin(x*7+z*3)+.025*Math.sin(z*12+x*2);
    return river < .105 ? .031 : Math.max(.05,.115+a+b+c-(.11*Math.exp(-river*8)));
  };
  const nodes = [[-.68,-.65],[-.32,-.48],[.45,-.72],[.76,-.28],[-.78,-.03],[-.46,.18],[.29,.18],[.72,.30],[-.67,.66],[-.28,.72],[.39,.64],[.77,.71]].map(([x,z],i)=>({x,z,y:terrain(x,z),type:i%3}));
  const types=[['主动录音','参与者当下主动录制。采样时间与地点可能受个人偏好影响。'],['间隔录音','每 10 分钟录 1 分钟，最长 12 小时，缓解时间上的偏好采样。'],['固定点位计数','在预设点位完成 5 分钟录音，帮助缓解空间偏差。']];
  const trees=[];
  for(let i=0;i<107;i++){
    const x=Math.sin(i*48.139)*.91,z=Math.cos(i*29.537)*.91;
    if(Math.abs(x-.27*Math.sin(z*3.2)-.02)>.17 && nodes.every(n=>(n.x-x)**2+(n.z-z)**2>.018))trees.push({x,z,y:terrain(x,z),s:.035+.015*(.5+.5*Math.sin(i*17))});
  }
  let scale=1,cx=1,cy=1;
  function project(x,y,z){const X=x*Math.cos(yaw)-z*Math.sin(yaw),Z=x*Math.sin(yaw)+z*Math.cos(yaw);return{x:cx+X*scale,y:cy+(Z*Math.sin(pitch)-y*Math.cos(pitch))*scale,depth:Z};}
  function path3(points,fill,stroke,line=1){ctx.beginPath();points.forEach((p,i)=>{const v=project(...p);if(i===0)ctx.moveTo(v.x,v.y);else ctx.lineTo(v.x,v.y);});ctx.closePath();if(fill){ctx.fillStyle=fill;ctx.fill();}if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=line;ctx.stroke();}}
  function line3(a,b,color,width=1){const p=project(...a),q=project(...b);ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=color;ctx.lineWidth=width;ctx.stroke();}
  function label(text,x,y,options={}){ctx.font=`${options.size||10}px "Microsoft YaHei", sans-serif`;ctx.textAlign=options.align||'center';ctx.fillStyle=options.color||'#cce1bb';const tw=ctx.measureText(text).width;const left=ctx.textAlign==='left'?0:tw/2,right=ctx.textAlign==='left'?tw:tw/2;const edge=mobile()&&ctx.textAlign==='left'?width-67:width-12;ctx.fillText(text,clamp(x,12+left,edge-right),y);}
  function halo(n,i){const v=project(n.x,n.y+.02,n.z);const bright=step!==3||i===6;const pulse=paused?0.48:((phase*.20+i*.123)%1);const radius=3+10*pulse;
    ctx.beginPath();ctx.ellipse(v.x,v.y,radius,radius*.48,0,0,Math.PI*2);ctx.strokeStyle=`rgba(203,231,159,${(1-pulse)*(bright?.5:.13)})`;ctx.lineWidth=1;ctx.stroke();
    ctx.beginPath();ctx.arc(v.x,v.y,selectedNode===i?5.5:3.3,0,Math.PI*2);ctx.fillStyle=selectedNode===i?'#ffe1a7':bright?'#d5eeb0':'#778d62';ctx.shadowBlur=bright?10:0;ctx.shadowColor='#c5e69a';ctx.fill();ctx.shadowBlur=0;
    if(selectedNode===i){ctx.strokeStyle='#fff1c5';ctx.lineWidth=1;ctx.beginPath();ctx.arc(v.x,v.y,10,0,Math.PI*2);ctx.stroke();label(types[n.type][0],v.x,v.y-17,{size:10,color:'#f1e4b8'});}
    pointHits.push({x:v.x,y:v.y,i});
  }
  function drawLandscape(){
    ctx.clearRect(0,0,width,height);scale=Math.min(width*.338,height*(mobile()?.37:.355))*zoom;cx=width*.51;cy=height*(mobile()?.65:.61);
    const sky=ctx.createLinearGradient(0,0,width,height);sky.addColorStop(0,'#19392f');sky.addColorStop(.5,'#102e27');sky.addColorStop(1,'#1b382b');ctx.fillStyle=sky;ctx.fillRect(0,0,width,height);
    ctx.save();ctx.strokeStyle='#60856d16';ctx.lineWidth=.7;
    for(let j=-3;j<=3;j+=.25){line3([-3,-.095,j],[3,-.095,j],'#83a38612',.7);line3([j,-.095,-3],[j,-.095,3],'#83a38612',.7);}
    ctx.restore();
    ctx.save();ctx.translate(cx,cy+scale*.17);ctx.scale(1,.34);const sh=ctx.createRadialGradient(0,0,scale*.3,0,0,scale*1.5);sh.addColorStop(0,'#00000077');sh.addColorStop(1,'#00000000');ctx.fillStyle=sh;ctx.beginPath();ctx.arc(0,0,scale*1.5,0,Math.PI*2);ctx.fill();ctx.restore();
    const cells=[],N=30,ds=2/N;
    for(let i=0;i<N;i++)for(let j=0;j<N;j++){const x=-1+i*ds,z=-1+j*ds;cells.push({x,z,depth:project(x,0,z).depth});}
    const sides=[];
    for(let i=0;i<N;i++){const t=-1+i*ds;[[t,-1,t+ds,-1],[1,t,1,t+ds],[t,1,t+ds,1],[-1,t,-1,t+ds]].forEach(([x,z,x2,z2])=>sides.push({p:[[x,-.065,z],[x2,-.065,z2],[x2,terrain(x2,z2),z2],[x,terrain(x,z),z]],d:project((x+x2)/2,0,(z+z2)/2).depth}));}
    sides.sort((a,b)=>a.d-b.d).forEach(s=>path3(s.p,s.d>0?'#2f4e39':'#203e2f','#42674766',.4));
    cells.sort((a,b)=>a.depth-b.depth).forEach(({x,z})=>{
      const x2=x+ds,z2=z+ds,h=terrain(x+ds*.5,z+ds*.5),water=h<.05;
      const light=Math.round(26+h*48+(Math.sin(x*11+z*3)*3));
      const color=water?`hsl(171,30%,${22+h*60}%)`:`hsl(${135+h*24},${20+h*12}%,${light}%)`;
      path3([[x,terrain(x,z),z],[x2,terrain(x2,z),z],[x2,terrain(x2,z2),z2],[x,terrain(x,z2),z2]],color,step===3?'#b1cc8f27':'#86ae7e12',.5);
    });
    trees.sort((a,b)=>project(a.x,0,a.z).depth-project(b.x,0,b.z).depth).forEach(t=>{
      if(step===2)return;const p=project(t.x,t.y,t.z),top=project(t.x,t.y+t.s*2.7,t.z),r=t.s*scale*.47;
      ctx.beginPath();ctx.moveTo(p.x,p.y+2);ctx.lineTo(top.x,top.y+3);ctx.strokeStyle='#bcc69588';ctx.lineWidth=1;ctx.stroke();ctx.beginPath();ctx.moveTo(top.x,top.y);ctx.lineTo(p.x-r,p.y-1);ctx.lineTo(p.x+r,p.y-1);ctx.closePath();ctx.fillStyle=t.x>.1?'#234d37':'#345b3d';ctx.fill();ctx.strokeStyle='#81a76c44';ctx.lineWidth=.7;ctx.stroke();
    });
    if(step===2){
      const layers=[['声音检测 · pD',.34,'#afca8355'],['空间分布 · pS',.52,'#72bfa24a'],['迁徙状态 · pM',.70,'#cee1bb44']];
      layers.forEach(([name,y,color],idx)=>{path3([[-.83,y,-.83],[.83,y,-.83],[.83,y,.83],[-.83,y,.83]],color,'#d2e6be55',.8);for(let t=-.83;t<=.84;t+=.277){line3([-.83,y,t],[.83,y,t],'#d0e9c428',.6);line3([t,y,-.83],[t,y,.83],'#d0e9c428',.6);}const v=project(.85,y,.74);label(name,v.x+7,v.y,{size:mobile()?8:10,align:'left'});});
    }
    if(step===1){
      const hub=[-.04,.73,-.08],hp=project(...hub);
      nodes.forEach((n,i)=>{const a=project(n.x,n.y+.025,n.z);ctx.beginPath();ctx.moveTo(a.x,a.y);ctx.quadraticCurveTo((a.x+hp.x)/2,hp.y-15,hp.x,hp.y);ctx.strokeStyle='#b9dab449';ctx.lineWidth=.8;ctx.stroke();const t=paused?.55:((phase*.16+i*.072)%1),u=1-t;const px=u*u*a.x+2*u*t*(a.x+hp.x)/2+t*t*hp.x,py=u*u*a.y+2*u*t*(hp.y-15)+t*t*hp.y;ctx.beginPath();ctx.arc(px,py,2,0,Math.PI*2);ctx.fillStyle='#d4e8af';ctx.fill();});
      ctx.beginPath();for(let i=0;i<6;i++){const a=i*Math.PI/3;const x=hp.x+24*Math.cos(a),y=hp.y+24*Math.sin(a);i?ctx.lineTo(x,y):ctx.moveTo(x,y);}ctx.closePath();ctx.fillStyle='#183c30';ctx.fill();ctx.strokeStyle='#c0daa2';ctx.stroke();label('AI',hp.x,hp.y+4,{size:15});label('BirdNET · ≥ 90%',hp.x,hp.y-34,{size:mobile()?9:11});
    }
    if(step===3){
      const focus=nodes[6],radius=.64;const ring=[];for(let i=0;i<=70;i++){const a=i/70*Math.PI*2,x=focus.x+Math.cos(a)*radius,z=focus.z+Math.sin(a)*radius;ring.push([x,terrain(x,z)+.015,z]);}path3(ring,null,'#d4e8a478',1);
      nodes.forEach((n,i)=>{if(i!==6&&Math.hypot(n.x-focus.x,n.z-focus.z)<.8)line3([focus.x,focus.y+.018,focus.z],[n.x,n.y+.018,n.z],'#e1edb29e',1);});
      const x=focus.x,z=focus.z,d=.16;path3([[x-d,terrain(x-d,z-d)+.02,z-d],[x+d,terrain(x+d,z-d)+.02,z-d],[x+d,terrain(x+d,z+d)+.02,z+d],[x-d,terrain(x-d,z+d)+.02,z+d]],'#d9e9a433','#e5eeb4',1.3);const fp=project(x,focus.y+.21,z);label('当前网格 · 局部更新',fp.x,fp.y,{size:mobile()?8:10});
    }
    pointHits=[];nodes.forEach(halo);
    if(step===4){
      const p=project(-.62,.65,-.35),q=project(.62,.65,.22);
      [[p,'89 物种','次日 App'],[q,'73 物种','独立专家']].forEach(([p,t,s])=>{ctx.fillStyle='#10291fe8';ctx.fillRect(p.x-44,p.y-29,88,49);ctx.strokeStyle='#89ab70';ctx.strokeRect(p.x-44,p.y-29,88,49);label(t,p.x,p.y-8,{size:mobile()?12:14});label(s,p.x,p.y+8,{size:9,color:'#acc696'});});
    }
    if(!mobile()){
      const px=34,py=height-162;ctx.beginPath();ctx.moveTo(px,py+19);ctx.lineTo(px,py-8);ctx.lineTo(px-4,py-1);ctx.moveTo(px,py-8);ctx.lineTo(px+4,py-1);ctx.strokeStyle='#a1bf8955';ctx.stroke();label('N*',px,py-17,{size:8,color:'#9eb68a'});label('* 示意方位',px+20,py+13,{size:8,align:'left',color:'#9eb68a'});
    }
    canvas.dataset.step=String(step);canvas.dataset.yaw=yaw.toFixed(3);canvas.dataset.pitch=pitch.toFixed(3);canvas.dataset.paused=String(paused);
  }
  function loop(){frame=0;drawLandscape();if(!paused&&visible){phase+=.027;frame=requestAnimationFrame(loop);}}
  function render(){if(!frame)frame=requestAnimationFrame(loop);}
  function syncPause(){const b=$('pause-world');b.textContent=paused?'播放动画':'暂停动画';b.setAttribute('aria-pressed',String(paused));render();}
  function resize(){const rect=canvas.getBoundingClientRect();width=rect.width;height=rect.height;const dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(width*dpr);canvas.height=Math.round(height*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);render();}
  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)render();},{rootMargin:'40px'}).observe(canvas);
  $('pause-world').addEventListener('click',()=>{paused=!paused;syncPause();});
  reduceMotion.addEventListener('change',event=>{if(event.matches){paused=true;syncPause();}});
  $('reset-view').addEventListener('click',()=>{yaw=-.62;pitch=.61;zoom=1;$('world-zoom').value='100';selectedNode=-1;$('world-note').textContent='地形、光点与传播轨迹为方法示意；坐标、音频和物种预测未在此重建。';render();});
  $('world-zoom').addEventListener('input',e=>{zoom=Number(e.target.value)/100;render();});
  canvas.addEventListener('pointerdown',e=>{dragging=true;dragged=false;last={x:e.clientX,y:e.clientY};canvas.setPointerCapture(e.pointerId);canvas.classList.add('dragging');});
  canvas.addEventListener('pointermove',e=>{if(!dragging)return;const dx=e.clientX-last.x,dy=e.clientY-last.y;if(Math.abs(dx)+Math.abs(dy)>2)dragged=true;yaw+=dx*.006;pitch=clamp(pitch-dy*.004,.26,1.03);last={x:e.clientX,y:e.clientY};render();});
  function release(e){if(!dragging)return;dragging=false;canvas.classList.remove('dragging');if(canvas.hasPointerCapture(e.pointerId))canvas.releasePointerCapture(e.pointerId);if(!dragged&&e.type==='pointerup'){const r=canvas.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;const hit=pointHits.find(p=>Math.hypot(p.x-x,p.y-y)<17);if(hit){selectedNode=hit.i;const t=types[nodes[hit.i].type];$('world-note').textContent=`示意点 ${String(hit.i+1).padStart(2,'0')} · ${t[0]}：${t[1]}`;render();}}}
  canvas.addEventListener('pointerup',release);canvas.addEventListener('pointercancel',release);
  canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(e.key)){e.preventDefault();if(e.key==='ArrowLeft')yaw-=.13;if(e.key==='ArrowRight')yaw+=.13;if(e.key==='ArrowUp')pitch=clamp(pitch+.07,.26,1.03);if(e.key==='ArrowDown')pitch=clamp(pitch-.07,.26,1.03);render();}});
  function setStep(n){if(n===step&&announced===n)return;step=n;const [title,sub,stat,fact]=scenes[n];$('scene-title').textContent=title;$('scene-sub').textContent=sub;$('scene-stat').textContent=stat;$('scene-stat').parentElement.classList.toggle('formula-stat',n===2);$('scene-fact').textContent=fact;$('scene-number').textContent=`0${n+1} / 05`;chapters.forEach((c,i)=>c.classList.toggle('active',i===n));document.querySelectorAll('.chapter-nav [data-step]').forEach(b=>{if(Number(b.dataset.step)===n)b.setAttribute('aria-current','step');else b.removeAttribute('aria-current');});if(announced!==n){$('scene-announcement').textContent=`第 ${n+1} 章：${title}`;announced=n;}render();}
  function readScroll(){pendingScroll=false;const rect=$('journey').getBoundingClientRect();if(rect.top>window.innerHeight||rect.bottom<0)return;const focus=mobile()?Math.min(height,390)+(window.innerHeight-height)*.36:window.innerHeight*.50;let nearest=0,best=Infinity;chapters.forEach((chapter,i)=>{const r=chapter.getBoundingClientRect(),d=Math.abs(r.top+r.height*.5-focus);if(d<best){best=d;nearest=i;}});setStep(nearest);}
  window.addEventListener('scroll',()=>{if(!pendingScroll){pendingScroll=true;requestAnimationFrame(readScroll);}},{passive:true});
  function goChapter(n){setStep(n);const chapter=chapters[n];const offset=mobile()?height+14:Math.max(25,(window.innerHeight-chapter.offsetHeight)/2);window.scrollTo({top:window.scrollY+chapter.getBoundingClientRect().top-offset,behavior:reduceMotion.matches?'instant':'smooth'});}
  document.querySelectorAll('.chapter-nav [data-step]').forEach(b=>{b.addEventListener('click',()=>goChapter(Number(b.dataset.step)));b.addEventListener('keydown',e=>{if(['ArrowDown','ArrowRight','ArrowUp','ArrowLeft','Home','End'].includes(e.key)){e.preventDefault();let n=Number(b.dataset.step);if(e.key==='Home')n=0;else if(e.key==='End')n=4;else n=clamp(n+(['ArrowDown','ArrowRight'].includes(e.key)?1:-1),0,4);document.querySelector(`.chapter-nav [data-step="${n}"]`).focus({preventScroll:true});goChapter(n);}});});
  syncPause();setStep(0);

  // Figure 5: original source data. The diagram above never feeds these calculations.
  const source=window.RESEARCH&&window.RESEARCH.birds;
  if(!source){$('bird-scatter').textContent='源数据未能加载，请确认 data.js 与本页放在同一目录。';return;}
  const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const name=s=>s.replace(/_/g,' ').replace(/^./,s=>s.toUpperCase());
  const fixed=n=>Number(n).toFixed(3), signed=n=>(n>=0?'+':'')+fixed(n);
  let mode='app',selected=0;
  function pickSpecies(i){selected=clamp(i,0,source[mode].length-1);const d=source[mode][selected];$('species-select').value=String(selected);$('species-name').textContent=name(d.species);$('prior-value').textContent=fixed(d.prior);$('posterior-value').textContent=fixed(d.posterior);$('prior-bar').style.width=`${d.prior*100}%`;$('posterior-bar').style.width=`${d.posterior*100}%`;$('delta-value').innerHTML=`<strong style="color:${d.delta>=0?'#c6dfa6':'#dfb491'}">${signed(d.delta)}</strong> AUC ${d.delta>=0?'提升':'下降'}`;document.querySelectorAll('#bird-scatter circle[data-row]').forEach((c,i)=>{c.setAttribute('r',i===selected?'6.8':'4.1');c.setAttribute('stroke',i===selected?'#f4f3d3':'#152d2288');c.setAttribute('stroke-width',i===selected?'2':'1');c.setAttribute('aria-pressed',String(i===selected));});}
  function scatter(){const rows=source[mode],W=620,H=454,L=62,R=26,T=36,B=58,PW=W-L-R,PH=H-T-B,min=.25,max=1;const x=v=>L+(v-min)/(max-min)*PW,y=v=>T+(max-v)/(max-min)*PH;let svg=`<svg viewBox="0 0 ${W} ${H}" role="group" aria-label="物种 AUC 散点图，可用 Tab 聚焦数据点后按回车选择"><title>每个物种的先验和更新 AUC</title><rect x="${L}" y="${T}" width="${PW}" height="${PH}" fill="#132d23"/>`;
    [.3,.4,.5,.6,.7,.8,.9,1].forEach(t=>{svg+=`<path d="M${x(t)},${T}V${H-B} M${L},${y(t)}H${W-R}" fill="none" stroke="#416046" stroke-width=".6"/><text x="${x(t)}" y="${H-B+23}" text-anchor="middle" fill="#a8c39b" font-size="12">${t.toFixed(1)}</text><text x="${L-14}" y="${y(t)+4}" text-anchor="end" fill="#a8c39b" font-size="12">${t.toFixed(1)}</text>`;});
    svg+=`<path d="M${x(min)},${y(min)}L${x(max)},${y(max)}" fill="none" stroke="#d3dca488" stroke-width="1.2" stroke-dasharray="5 6"/><text x="${L+14}" y="${T+22}" fill="#a6c98d" font-size="11">更新后改善 ↗</text><text x="${W-R-9}" y="${H-B-18}" text-anchor="end" fill="#c09d81" font-size="11">更新后下降</text><text x="${L+PW/2}" y="${H-9}" text-anchor="middle" fill="#c1d6ae" font-size="13">先验模型 AUC</text><text transform="translate(18 ${T+PH/2}) rotate(-90)" text-anchor="middle" fill="#c1d6ae" font-size="13">更新模型 AUC</text>`;
    rows.forEach((d,i)=>{svg+=`<circle data-row="${i}" cx="${x(d.prior)}" cy="${y(d.posterior)}" r="4.1" fill="${d.delta>=0?'#c5dfaa':'#dba987'}" fill-opacity=".87" stroke="#152d2288" tabindex="0" role="button" aria-label="${esc(name(d.species))}，先验 ${fixed(d.prior)}，更新 ${fixed(d.posterior)}"><title>${esc(name(d.species))} | ${fixed(d.prior)} → ${fixed(d.posterior)}</title></circle>`;});svg+='</svg>';$('bird-scatter').innerHTML=svg;
    document.querySelectorAll('#bird-scatter [data-row]').forEach(c=>{c.addEventListener('click',()=>pickSpecies(Number(c.dataset.row)));c.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();pickSpecies(Number(c.dataset.row));}});});
  }
  function setMode(next){const previous=source[mode][selected]?.species;mode=next;const rows=source[mode];selected=Math.max(0,rows.findIndex(r=>r.species===previous));const avg=k=>rows.reduce((sum,r)=>sum+r[k],0)/rows.length;document.querySelectorAll('[data-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.mode===mode)));$('evidence-mean').innerHTML=`各物种算术平均 AUC <strong>${fixed(avg('prior'))} → ${fixed(avg('posterior'))}</strong>`;$('species-select').innerHTML=rows.map((r,i)=>`<option value="${i}">${esc(name(r.species))}</option>`).join('');$('auc-download').href=`data/birds-${mode}-auc.csv`;$('auc-table').innerHTML=rows.map(r=>`<tr><td><i>${esc(name(r.species))}</i></td><td class="num">${fixed(r.prior)}</td><td class="num">${fixed(r.posterior)}</td><td class="num">${signed(r.delta)}</td></tr>`).join('');const better=rows.filter(r=>r.delta>0).length,worse=rows.filter(r=>r.delta<0).length;$('scatter-caption').textContent=`${rows.length} 个物种 · ${better} 个提升 · ${worse} 个下降。${mode==='expert'?'验证来自 1,185 次独立专家 5 分钟计数。':'验证使用次日 App 检测。'}`;scatter();pickSpecies(selected);}
  document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.mode)));$('species-select').addEventListener('change',e=>pickSpecies(Number(e.target.value)));setMode('app');
  const daily=source.daily;if(daily&&daily.length){const W=850,H=220,L=10,R=12,T=18,B=34,max=Math.max(...daily.map(d=>d.hours)),x=i=>L+i/(daily.length-1)*(W-L-R),y=v=>T+(1-v/max)*(H-T-B);let path=daily.map((d,i)=>(i?'L':'M')+x(i).toFixed(2)+','+y(d.hours).toFixed(2)).join('');const area=path+` L${x(daily.length-1)},${H-B} L${L},${H-B} Z`;let svg=`<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="作者源数据中的每日录音时长趋势；使用下面的日期滑块读取具体值"><path d="${area}" fill="#a5c17b35"/><path d="${path}" fill="none" stroke="#b6d491" stroke-width="1.4"/><path d="M${L},${H-B}H${W-R}" stroke="#517246"/><text x="${L}" y="12" fill="#a5bc94" font-size="10">录音时长 / 小时 · 峰值 ${Math.round(max).toLocaleString('en-US')} h</text>`;[0,Math.floor(daily.length*.5),daily.length-1].forEach(i=>svg+=`<text x="${x(i)}" y="${H-9}" text-anchor="${i===0?'start':i===daily.length-1?'end':'middle'}" fill="#a5bc94" font-size="11">${daily[i].date}</text>`);svg+='<line id="daily-cursor" x1="0" x2="0" y1="18" y2="186" stroke="#f0dfaa" stroke-dasharray="4 4"/><circle id="daily-dot" cx="0" cy="0" r="4" fill="#f0dfaa"/></svg>';$('daily-chart').innerHTML=svg;$('day-slider').max=String(daily.length-1);let initial=daily.findIndex(d=>d.hours===max);$('day-slider').value=String(initial);function readDay(){const i=Number($('day-slider').value),d=daily[i];$('day-date').textContent=d.date;$('day-hours').textContent=d.hours.toLocaleString('en-US',{maximumFractionDigits:1});$('day-detections').textContent=d.detections.toLocaleString('en-US',{maximumFractionDigits:0});$('daily-cursor').setAttribute('x1',x(i));$('daily-cursor').setAttribute('x2',x(i));$('daily-dot').setAttribute('cx',x(i));$('daily-dot').setAttribute('cy',y(d.hours));$('day-slider').setAttribute('aria-valuetext',`${d.date}，${d.hours.toFixed(1)} 小时录音，${Math.round(d.detections)} 次检测`);}$('day-slider').addEventListener('input',readDay);readDay();}
})();
