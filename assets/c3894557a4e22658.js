
(function(){
  'use strict';
  const $=s=>document.querySelector(s), $$=s=>Array.from(document.querySelectorAll(s));
  const E=window.RouteEngine,C=window.ROUTE_CATALOG,storeKey='specialty-ai-route-v1';
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let saved={},storageAvailable=true;
  try{saved=JSON.parse(localStorage.getItem(storeKey)||'{}')||{};}catch(e){storageAvailable=false;}
  const params=new URLSearchParams(location.search);const shared={};for(const k of ['major','foundation','goal','data','hours','weeks'])if(params.has(k))shared[k]=params.get(k);
  let route=E.build({...E.defaults,...(saved.profile||{}),...shared}),history=saved.history&&typeof saved.history==='object'?saved.history:{},theme=['blue','red','gold'].includes(params.get('theme'))?params.get('theme'):['blue','red','gold'].includes(saved.theme)?saved.theme:'blue';
  let toastTimer;
  function toast(message){$('#toast').textContent=message;$('#toast').classList.add('visible');clearTimeout(toastTimer);toastTimer=setTimeout(()=>$('#toast').classList.remove('visible'),3400);}
  function done(){return Array.isArray(history[route.key])?history[route.key].filter(id=>route.phases.some(s=>s.tasks.some(t=>t.id===id))):[];}
  function persist(){try{localStorage.setItem(storeKey,JSON.stringify({profile:route.profile,theme,history}));storageAvailable=true;}catch(e){storageAvailable=false;}$('.local-hint').innerHTML='<span class="status-dot"></span>'+(storageAvailable?'进度保存在当前浏览器':'当前浏览器无法保存；请导出路线');}
  function readForm(){return E.normalize({major:$('#profileForm input[name=major]:checked').value,foundation:$('#foundation').value,goal:$('#goal').value,data:$('#dataMode').value,hours:$('#hours').value,weeks:$('#weeks').value});}
  function fillForm(p){$('#profileForm input[name=major][value='+p.major+']').checked=true;$('#foundation').value=p.foundation;$('#goal').value=p.goal;$('#dataMode').value=p.data;$('#hours').value=p.hours;$('#weeks').value=p.weeks;updateDraft();}
  function updateDraft(){const p=readForm();$('#hoursOutput').innerHTML=p.hours+' <small>小时</small>';$('#weeksOutput').innerHTML=p.weeks+' <small>周</small>';$('#budgetPreview').innerHTML=p.hours*p.weeks+' <small>小时</small>';const dirty=JSON.stringify(p)!==route.key;$('#formHint').textContent=dirty?'参数已修改，点击生成即可更新右侧路线。':'右侧是当前参数生成的路线。';$('#formHint').classList.toggle('dirty',dirty);$('#generateButton span:first-child').textContent=dirty?'按新参数生成路线':'生成我的学习路线';}
  function setTheme(value){theme=value;document.documentElement.dataset.theme=value;$$('[data-theme-choice]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.themeChoice===value)));persist();}
  function statusLabel(s){return s.status==='covered'?'本期可安排':s.status==='partial'?'本期安排 '+s.allocated+'h':'后续阶段';}
  function weeksLabel(s){return s.startWeek===s.endWeek?'第 '+s.startWeek+' 周':'第 '+s.startWeek+'–'+s.endWeek+' 周';}
  function phaseResource(i){return i===0?C.resources.python:i===1?C.resources.pandas:i===2?C.resources.sklearn:C.resources.pitfalls;}
  function render(){
    const r=route,m=r.major,d=new Set(done());
    $('#routeMode').textContent=r.shortfall?'起步计划':'完整练习计划';
    $('#routeIntro').innerHTML=`<div class="route-intro"><div class="route-title-row"><h2 id="resultTitle">${escape(m.label)} <span style="color:var(--secondary);font-weight:400">×</span> AI</h2><span class="topic-tag">${escape(m.tag)}</span></div><p class="route-headline">${escape(m.headline)}</p><p class="route-question">${escape(m.question)}</p><div class="io-row"><div class="io-item"><small>从什么数据出发</small><p>${escape(m.input)}</p></div><span class="io-arrow" aria-hidden="true">→</span><div class="io-item"><small>让模型回答什么</small><p>${escape(m.output)}</p></div></div><div class="artifact-line"><strong>${r.shortfall?'整条路线的最终作品':'最终带走的作品'}</strong>${escape(r.artifact)}</div></div>`;
    $('#timeSummary').innerHTML=`<div class="time-summary"><div class="stat"><div class="stat-label">你的本期时间</div><div class="stat-value">${r.budget}<small>小时</small></div><div class="stat-caption">${r.profile.weeks} 周 × ${r.profile.hours} 小时 / 周</div></div><div class="stat"><div class="stat-label">整条路线任务估计</div><div class="stat-value">${r.total}<small>小时</small></div><div class="stat-caption">按当前投入约 ${r.requiredWeeks} 周</div></div><div class="stat"><div class="stat-label">${r.shortfall?'本期之后还需':'机动与复盘空间'}</div><div class="stat-value">${r.shortfall||r.reserve}<small>小时</small></div><div class="stat-caption">${r.shortfall?'约 '+r.extraWeeks+' 周后续投入':r.reserve?'可以补基础、复跑和整理作品':'本期时间刚好覆盖估计任务'}</div></div></div><p class="budget-note"><strong>${escape(r.foundation)}</strong> · ${escape(r.goal)}。任务工时是规划估计，完成速度因人而异。</p>${r.shortfall?`<div class="capacity-alert"><strong>先完成一个起步周期。</strong>本期安排 ${r.planned} 小时，可完整覆盖 ${r.fullStages} 个阶段；后续 ${r.shortfall} 小时另行安排。下方保留完整路线，虚线阶段不计入本期成果。</div>`:''}${r.profile.data==='own'?'<div class="capacity-alert"><strong>先确认自己的数据是否适合。</strong>本工具不读取文件；阶段 2 增加可行性检查。通过审核后再继续，否则先用下方公开数据练习。</div>':''}`;
    $('#phaseStrip').innerHTML=r.phases.map(s=>`<button class="strip-item ${s.status}" data-jump="${s.id}" type="button" aria-label="查看阶段 ${s.index+1} ${escape(s.title)}"><strong>${s.index+1}. ${['起步基础','数据与任务','基线模型','验证改进','作品交付'][s.index]}</strong><small>${s.hours}h · ${s.status==='later'?'后续':s.status==='partial'?'本期部分':weeksLabel(s)}</small></button>`).join('');
    $('#phases').innerHTML=r.phases.map(s=>`<details class="phase-card ${s.status}" id="${s.id}" ${s.index===0?'open':''}><summary><span class="phase-number">0${s.index+1}</span><div class="phase-heading"><h4>${escape(s.title)}</h4><p>${weeksLabel(s)} · 估计 ${s.hours} 小时${s.status!=='covered'?' · 本期 '+s.allocated+' 小时':''}</p></div><span class="phase-status">${statusLabel(s)}</span><span class="plus" aria-hidden="true">+</span></summary><div class="phase-body"><p class="learn-line"><span class="label-inline">学什么</span>${escape(s.learn)}</p><div class="task-list">${s.tasks.map(t=>`<label class="task-item ${d.has(t.id)?'done':''}"><input type="checkbox" data-task="${t.id}" ${d.has(t.id)?'checked':''}><span><span class="task-copy">${escape(t.text)}</span><span class="task-meta">估计 ${t.hours} 小时${t.allocated<t.hours?' · 本期安排 '+t.allocated+' 小时':''}</span></span></label>`).join('')}</div><div class="phase-receipt"><strong>完成后，你手里有什么</strong>${escape(s.deliver)}</div><p class="phase-check"><span class="label-inline">如何验收</span>${escape(s.check)}</p><div class="phase-bottom"><a class="phase-resource" href="${phaseResource(s.index).url}" target="_blank" rel="noopener noreferrer">${escape(phaseResource(s.index).name)} ↗</a><button class="prompt-button" type="button" data-prompt="${s.index}">让 AI 陪我做这一步 ↗</button></div></div></details>`).join('');
    $('#weekSummary').textContent=r.profile.weeks+' 周 · 每周 '+r.profile.hours+' 小时';
    $('#weeksList').innerHTML=r.weeks.map(w=>`<div class="week-row"><div class="week-label">第 ${w.index} 周<small>${r.profile.hours} 小时预算</small></div><div>${w.tasks.map(t=>`<p class="week-task"><strong>${escape(t.phase)} · 本周 ${t.scheduled}h${t.scheduled<t.hours?' / 此任务共 '+t.hours+'h':''}</strong><br>${escape(t.text)}</p>`).join('')}${w.reserve?`<p class="reserve">机动与复盘 · ${w.reserve}h<br>补基础、复跑实验、整理结果；根据实际进度调整。</p>`:''}</div></div>`).join('');
    $('#sourceContent').innerHTML=`<div class="source-dataset"><div class="source-header"><div><p class="source-type">公开数据入口 · ${escape(m.dataset.type)}</p><h4>${escape(m.dataset.name)}</h4><p class="source-scale">${escape(m.dataset.scale)}</p></div><a class="secondary-button" href="${m.dataset.url}" target="_blank" rel="noopener noreferrer" style="text-decoration:none">去数据集 ↗</a></div><p class="source-fact">${escape(m.dataset.fact)}</p><p class="source-boundary">${escape(m.boundary)}</p><details class="technical-details"><summary>展开本专业的模型、指标与数据检查</summary><p><strong>模型顺序：</strong>${escape(m.baseline)}</p><p><strong>评价指标：</strong>${escape(m.metrics)}</p><p><strong>验证方式：</strong>${escape(m.split)}</p><p><strong>特别检查：</strong>${escape(m.risk)}</p></details></div><div class="resource-grid">${Object.values(C.resources).map(x=>`<a class="resource-link" href="${x.url}" target="_blank" rel="noopener noreferrer"><strong>${escape(x.name)} ↗</strong><p>${escape(x.note)}</p></a>`).join('')}</div><p class="source-date">数据入口核对于 ${C.verifiedAt} · <a href="https://doi.org/${m.dataset.doi}" target="_blank" rel="noopener noreferrer">数据集 DOI ↗</a><br>样本规模与字段描述来自数据提供方；学习顺序、练习任务和工时为本工具编排建议。</p>`;
    updateProgress();persist();updateDraft();
  }
  function updateProgress(){const completed=done().length;$('#progressText').textContent=completed+' / 10 项任务已勾选';$('#progressBar').style.width=completed*10+'%';}
  function download(name,blob){const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);}
  function filename(ext){return route.major.label+'×AI_'+route.profile.weeks+'周学习路线.'+ext;}
  function info(kind){const help=kind==='help';$('#dialogTitle').textContent=help?'把一条路线真正用起来':'这条路线如何生成';$('#dialogContent').innerHTML=help?`<ol><li>选择专业、基础、目标和时间，点击“生成我的学习路线”。每个专业目前内置一个公开数据练习方向。</li><li>点击阶段卡展开任务；完成后打勾。切换参数会切换到对应路线的独立进度。</li><li>点“让 AI 陪我做这一步”，复制提示词到你的 AI 对话里，按步骤练习。</li><li>展开每周安排，检查这周实际要做的任务。路线长图便于分享，Markdown 保留完整任务和每周安排。</li></ol><p>自有数据选项会加入可行性检查；这里不上传文件，也不会自动训练模型。可先用公开样例跑通流程。</p>`:`<p>这是一个<strong>本地规则生成器</strong>，没有连接大模型接口。它用专业任务目录、基础与目标规则来编排路线。</p><ul><li>五阶段的基础工时：零基础 20 / 18 / 22 / 24 / 12h；会 Python 6 / 14 / 18 / 20 / 10h；有机器学习经验 3 / 10 / 10 / 16 / 8h。</li><li>按专业的数据处理难度增加工时；研究目标增加对照实验，演示目标增加输入校验与界面工作；自有数据增加 14h 的审核与适配预估。</li><li>任务按先后顺序占用每周预算。时间不足时显示尚未覆盖的任务；时间充足时保留机动与复盘时间。</li><li>所有工时都是起步估计。数据质量、学习速度和环境问题可能改变实际安排，勾选进度也不等于通过能力测评。</li></ul><p>这版可离线使用。基础、目标、主题和打勾进度保存在当前浏览器；数据资源链接需要联网打开。</p>`;$('#infoDialog').showModal();}
  const palettes={blue:['#F5F8FB','#D9E6F1','#00468B','#4C8EC4','#9FBDD4','#EAF1F7'],red:['#FCF7F5','#F7DED8','#B83A2D','#E64B35','#D9A69D','#F8EAE6'],gold:['#FFFAF1','#F8E3B8','#966200','#E69F00','#D9B96F','#FBF0D7']};
  function makePoster(){
    const r=route,m=r.major,p=palettes[theme],W=1200,pad=70,width=W-pad*2;
    const measure=document.createElement('canvas').getContext('2d'),ops=[];let y=65;
    const font=(size,weight=400)=>`${weight} ${size}px "Microsoft YaHei", "PingFang SC", sans-serif`;
    function lines(text,size,w,weight=400){measure.font=font(size,weight);let result=[];for(const paragraph of String(text).split('\n')){let line='';for(const char of paragraph){if(line&&measure.measureText(line+char).width>w){result.push(line);line=char;}else line+=char;}result.push(line);}return result;}
    function txt(text,x,yy,size,color,w,weight=400,lineHeight=size*1.65){const ls=lines(text,size,w,weight);ops.push(ctx=>{ctx.font=font(size,weight);ctx.fillStyle=color;ls.forEach((t,i)=>ctx.fillText(t,x,yy+i*lineHeight));});return ls.length*lineHeight;}
    function rect(x,yy,w,h,color,radius=0,stroke){ops.push(ctx=>{ctx.beginPath();ctx.roundRect(x,yy,w,h,radius);ctx.fillStyle=color;ctx.fill();if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=1.5;ctx.stroke();}});}
    function textFlow(text,size=22,color='#171717',weight=400,w=width){y+=txt(text,pad,y,size,color,w,weight);}
    textFlow('路径实验室 / 从专业问题到 AI 作品',18,p[2],700);y+=22;
    textFlow(m.label+' × AI 学习路线',49,p[2],750);y+=8;
    textFlow(m.headline,25,'#171717',600);y+=17;
    textFlow(r.foundation+'  ·  '+r.goal,20,'#595959');
    textFlow(r.profile.weeks+' 周 × '+r.profile.hours+' 小时 / 周  |  预算 '+r.budget+'h  |  任务估计 '+r.total+'h',20,p[2],600);y+=20;
    if(r.shortfall){textFlow('本期为起步计划：安排 '+r.planned+'h，后续还需约 '+r.shortfall+'h。虚线阶段不计入本期完成。',21,p[2],600);y+=10;}
    if(r.profile.data==='own'){textFlow('自有数据待审核；以下任务为公开数据练习预案。',20,p[2],600);y+=10;}
    textFlow('练习问题  '+m.question,22);y+=8;
    textFlow((r.shortfall?'完整路线的最终作品  ':'最终作品  ')+r.artifact,21,'#595959');y+=25;
    for(const s of r.phases){
      const cardStart=y,opIndex=ops.length;y+=26;
      y+=txt('0'+(s.index+1)+'  '+s.title,pad+25,y,29,p[2],width-50,700);y+=4;
      y+=txt(weeksLabel(s)+' · 估计 '+s.hours+'h · 本期 '+s.allocated+'h  /  '+statusLabel(s),pad+25,y,18,'#595959',width-50);y+=16;
      y+=txt('学什么  '+s.learn,pad+25,y,21,'#595959',width-50);y+=13;
      for(const t of s.tasks){y+=txt((done().includes(t.id)?'✓ ':'□ ')+t.text+'（'+t.hours+'h）',pad+25,y,21,'#171717',width-50);y+=9;}
      y+=12;
      y+=txt('完成凭证  '+s.deliver,pad+25,y,21,p[2],width-50,600);y+=10;
      y+=txt('验收  '+s.check,pad+25,y,19,'#595959',width-50);y+=24;
      const cardHeight=y-cardStart;
      ops.splice(opIndex,0,ctx=>{ctx.beginPath();ctx.roundRect(pad,cardStart,width,cardHeight,14);ctx.fillStyle=s.status==='later'?p[0]:'#FFFFFF';ctx.fill();ctx.strokeStyle=p[4];ctx.lineWidth=1.5;if(s.status==='later')ctx.setLineDash([7,6]);ctx.stroke();ctx.setLineDash([]);});
      y+=18;
    }
    y+=12;textFlow('数据与方法',26,p[2],700);y+=7;
    textFlow(m.dataset.name+' / '+m.dataset.scale,20);y+=5;
    textFlow('模型：'+m.baseline,20);textFlow('指标：'+m.metrics,20);textFlow('划分：'+m.split,20);y+=7;
    textFlow('数据边界：'+m.boundary,19,'#595959');y+=12;
    textFlow('数据入口：https://doi.org/'+m.dataset.doi,18,p[2]);
    textFlow('入口核对：'+C.verifiedAt+' · 当前勾选 '+done().length+' / 10 项任务',18,'#595959');y+=20;
    textFlow('本地规则规划 · 工时为估计 · 任务和实验结果需实际完成',18,'#595959');
    textFlow('完整每周安排与资源链接，请导出 Markdown。',18,'#595959');y+=50;
    const canvas=document.createElement('canvas');canvas.width=W;canvas.height=Math.ceil(y);const ctx=canvas.getContext('2d');ctx.fillStyle=p[0];ctx.fillRect(0,0,W,canvas.height);ctx.textBaseline='top';ops.forEach(op=>op(ctx));return canvas;
  }
  $('#majorOptions').innerHTML=C.majors.map(m=>`<div class="major-option"><input type="radio" id="major-${m.id}" name="major" value="${m.id}" ${m.id===route.profile.major?'checked':''}><label for="major-${m.id}"><span class="major-icon" aria-hidden="true">${window.SiteIcons[m.id]}</span><span>${m.short}</span></label></div>`).join('');
  fillForm(route.profile);setTheme(theme);render();
  $('#profileForm').addEventListener('input',updateDraft);
  $('#profileForm').addEventListener('change',updateDraft);
  $('#profileForm').addEventListener('submit',e=>{e.preventDefault();route=E.build(readForm());render();toast('已生成 '+route.major.label+' × AI 路线');if(window.innerWidth<761)window.scrollTo({top:window.scrollY+$('#resultPanel').getBoundingClientRect().top-95,behavior:'smooth'});});
  $('#resetButton').addEventListener('click',()=>{route=E.build(E.defaults);fillForm(route.profile);render();toast('已恢复默认参数；各路线的打勾记录保留');});
  $$('[data-theme-choice]').forEach(b=>b.addEventListener('click',()=>setTheme(b.dataset.themeChoice)));
  $('#phases').addEventListener('change',e=>{const input=e.target.closest('[data-task]');if(!input)return;const selected=new Set(done());if(input.checked)selected.add(input.dataset.task);else selected.delete(input.dataset.task);history[route.key]=Array.from(selected);input.closest('.task-item').classList.toggle('done',input.checked);updateProgress();persist();});
  $('#phases').addEventListener('click',e=>{const b=e.target.closest('[data-prompt]');if(!b)return;const i=Number(b.dataset.prompt);$('#promptTitle').textContent='阶段 '+(i+1)+' · '+route.phases[i].title;$('#promptText').value=E.prompt(route,i);$('#promptDialog').showModal();});
  $('#phaseStrip').addEventListener('click',e=>{const b=e.target.closest('[data-jump]');if(!b)return;const card=$('#'+b.dataset.jump);card.open=true;window.scrollTo({top:window.scrollY+card.getBoundingClientRect().top-100,behavior:'smooth'});});
  $('#copyPrompt').addEventListener('click',async()=>{const text=$('#promptText').value;try{if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(text);}else{$('#promptText').focus();$('#promptText').select();if(!document.execCommand('copy'))throw new Error('copy unavailable');}toast('提示词已复制，粘贴到你的 AI 对话即可');}catch(e){$('#promptText').focus();$('#promptText').select();toast('请按 Ctrl+C 复制已选中的提示词');}});
  $('#helpButton').addEventListener('click',()=>info('help'));$('#aboutButton').addEventListener('click',()=>info('rules'));
  $$('.dialog-close,.dialog-ok').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
  $$('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d){const box=d.getBoundingClientRect();if(e.clientX<box.left||e.clientX>box.right||e.clientY<box.top||e.clientY>box.bottom)d.close();}}));
  $('#exportMd').addEventListener('click',()=>{download(filename('md'),new Blob(['\uFEFF'+E.markdown(route,done())],{type:'text/markdown;charset=utf-8'}));toast('已导出当前路线，包含全部任务和每周安排');});
  $('#exportPng').addEventListener('click',async()=>{const b=$('#exportPng');b.disabled=true;b.textContent='正在生成长图…';try{await document.fonts.ready;const canvas=makePoster();const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw new Error('png export failed');download(filename('png'),blob);toast('路线长图已导出');}catch(e){toast('长图生成失败，请先导出 Markdown 保存路线');console.error(e);}finally{b.disabled=false;b.textContent='↓ 路线长图';}});
  window.RouteApp={getRoute:()=>route,getDone:done,makePoster,exportMarkdown:()=>E.markdown(route,done()),getTheme:()=>theme};
})();

