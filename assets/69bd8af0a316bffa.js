
(function(){
 const C=window.LAB_CATALOG,R=window.ResearchIntake,esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let serial=0;
 window.staffProfileKeys=['dataType','task','scenario','taskStatus','recordMode','labOverride','labReason','dataNotes','projectQuestion','staffNotes','courseFocus','guidanceNeeds','primaryNeed'];
 window.createStaffIntake=function(root,{value,onChange,compact=false}){
  let p={dataType:'other',task:'define',data:'unknown',...value};const uid='research-intake-'+(++serial);
  const publish=()=>onChange({...p});
  function resetTask(){p.task='define';p.taskStatus='pending';p.labOverride='';p.labReason='';}
  function assessment(){
   const result=R.suggest(p),r=window.LabPlanner.resolve(p);
   root.querySelector('.task-suggestion').innerHTML=`<p>${esc(result.message)}</p>${result.matches.length?'<div class="suggestion-list">'+result.matches.map(id=>`<button type="button" data-confirm-task="${id}">采用：${esc(R.taskLabel(id,p))}</button>`).join('')+'</div>':''}`;
   root.querySelector('.research-task-options').innerHTML=[...R.tasks(p),{id:'define',label:'还没想好，先了解可做的方向'}].map(t=>`<button type="button" class="research-choice" data-task-choice="${t.id}" aria-pressed="${p.task===t.id}">${esc(t.label)}${p.task===t.id?'<span aria-hidden="true"> ✓</span>':''}</button>`).join('');
   root.querySelector('.research-selected-task').textContent=p.task==='define'?'暂不确定具体任务，可以先安排基础学习。':'当前选择：'+R.taskLabel(p.task,p);
   root.querySelector('.staff-routing').innerHTML=r?.lab?`<span>建议实验室</span><strong>${esc(r.lab.label)}</strong><p>${esc(R.dataLabel(p))} · ${esc(R.taskLabel(p.task,p))}</p>${r.review?'<small>'+esc(r.review)+'</small>':''}`:'<span>实验室方向</span><strong>选好资料与目标后推荐</strong><p>暂时没想好也可以继续，先从基础课程开始。</p>';
  }
  function draw(){
   root.className='staff-intake research-intake'+(compact?' compact':'');
   const opts=R.options(p),hasCurrent=opts.some(o=>o.id===p.scenario),other=p.scenario==='other'||(!hasCurrent&&p.dataType!=='other');
   root.innerHTML=`${p.intakeNotice?'<p class="staff-review-note">'+esc(p.intakeNotice)+'</p>':''}<fieldset class="research-fieldset"><legend>${R.family(p)==='clinical'?'你想用哪类医学资料？':'你想用哪类资料？'}</legend><p class="research-hint">选择已有的资料，或想尝试的方向。</p><div class="research-data-options">${opts.map(o=>`<button type="button" class="research-choice" data-scenario="${o.id}" aria-pressed="${p.scenario===o.id}"><strong>${esc(o.label)}</strong><small>${esc(o.example)}</small></button>`).join('')}<button type="button" class="research-choice" data-scenario="other" aria-pressed="${other}"><strong>其他资料</strong><small>查看其他可选方向</small></button><button type="button" class="research-choice" data-scenario="" aria-pressed="${p.dataType==='other'&&!other}"><strong>还没想好</strong><small>先了解基础课程</small></button></div></fieldset>
   ${other?`<label class="staff-field">选择其他资料<select data-staff-field="dataType"><option value="other">请选择，或暂时跳过</option>${C.types.filter(t=>t.id!=='other').map(t=>`<option value="${t.id}" ${p.dataType===t.id?'selected':''}>${esc(R.plainTypes[t.id])}</option>`).join('')}</select></label>`:''}
   ${p.scenario==='clinical-image'?`<label class="staff-field">影像是什么形式？<select data-staff-field="imageFormat"><option value="image2d" ${p.dataType==='image2d'?'selected':''}>单张图片或选出的切片</option><option value="volume" ${p.dataType==='volume'?'selected':''}>一整套 CT / MRI 三维影像</option></select></label>`:''}
   ${p.scenario==='clinical-table'?`<label class="staff-field">这些记录是怎样整理的？<select data-staff-field="recordMode"><option value="">还不清楚</option><option value="static" ${p.recordMode==='static'?'selected':''}>每个人一次记录，或一张汇总表</option><option value="longitudinal" ${p.recordMode==='longitudinal'?'selected':''}>同一个人有按时间排列的多次记录</option></select></label>`:''}
   <label class="staff-field" for="${uid}-question">你的课题名称或研究方向（选填）<textarea id="${uid}-question" data-staff-field="projectQuestion" maxlength="300" rows="2" placeholder="${esc(({clinical:'例如：基于 CT 的肺结节定位；也可以只写目前感兴趣的方向。',materials:'例如：水泥显微图像中的孔隙分割，或根据配方预测强度。',finance:'例如：识别异常交易，或根据历史指标预测后续变化。'})[R.family(p)]||'写下你真正想研究的问题，不需要先知道算法名称。')}">${esc(p.projectQuestion)}</textarea></label>
   <div class="research-assessment"><button type="button" class="secondary-button" data-assess>看看适合的任务</button><div class="task-suggestion" role="status"></div></div>
   <fieldset class="research-fieldset"><legend>你希望得到什么结果？</legend><p class="research-hint">选择最接近的一项。括号里是对应的技术名称，可以随时调整。</p><div class="research-task-options"></div><p class="research-selected-task" role="status"></p></fieldset>
   <div class="staff-routing" aria-live="polite"></div>
   <label class="staff-field" for="${uid}-ready">你现在有这些资料吗？<select id="${uid}-ready" data-staff-field="data"><option value="unknown" ${p.data==='unknown'?'selected':''}>还没有，想先了解</option><option value="public" ${p.data==='public'?'selected':''}>想先用公开资料练习</option><option value="own" ${p.data==='own'?'selected':''}>已有资料</option></select></label>
   <label class="staff-field data-notes-field" ${p.data!=='own'&&!p.dataNotes?'hidden':''}>简单介绍一下（选填）<textarea data-staff-field="dataNotes" rows="2" maxlength="1000" placeholder="${R.family(p)==='clinical'?'例如：有一份检验记录表，或者一些 CT 图片。':'例如：有一张实验记录表，或一批照片。'}">${esc(p.dataNotes)}</textarea></label>`;
   assessment();
  }
  root.addEventListener('click',e=>{
   const s=e.target.closest('[data-scenario]'),t=e.target.closest('[data-task-choice],[data-confirm-task]');
   if(s){p.scenario=s.dataset.scenario;p.recordMode='';p.dataType=R.options(p).find(o=>o.id===p.scenario)?.dataType||'other';p.intakeNotice='';resetTask();draw();publish();}
   if(t){p.task=t.dataset.taskChoice||t.dataset.confirmTask;p.taskStatus=p.task==='define'?'pending':'confirmed';assessment();publish();}
   if(e.target.closest('[data-assess]')){assessment();root.querySelector('.task-suggestion').scrollIntoView({block:'nearest',behavior:'smooth'});}
  });
  root.addEventListener('input',e=>{
   if(e.target.tagName==='SELECT')return;const k=e.target.dataset.staffField;if(!k)return;p[k]=e.target.value;
   if(k==='projectQuestion'){resetTask();assessment();}publish();
  });
  root.addEventListener('change',e=>{
   if(e.target.tagName!=='SELECT')return;const k=e.target.dataset.staffField;if(!k)return;
   if(k==='dataType'||k==='imageFormat'){p.dataType=e.target.value;resetTask();draw();}
   else if(k==='recordMode'){p.recordMode=e.target.value;p.dataType=p.recordMode==='longitudinal'?'business-ts':'table';resetTask();draw();}
   else if(k==='data'){p.data=e.target.value;root.querySelector('.data-notes-field').hidden=p.data!=='own'&&!p.dataNotes;}
   publish();
  });
  draw();return {getValue:()=>({...p}),setValue(next){p={dataType:'other',task:'define',data:'unknown',...next};draw();}};
 };
})();

