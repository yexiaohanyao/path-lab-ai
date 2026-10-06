
(function(){
  const root=document.getElementById('route-wizard');if(!root)return;
  const $=id=>document.getElementById(id),form=$('profileForm'),C=window.ROUTE_CATALOG,L=window.LAB_CATALOG;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const steps=['专业背景','想做什么','基础与需求','信息复核'];
  let step=0,complete=new URLSearchParams(location.search).has('major'),draft={...window.RouteApp.getRoute().profile};
  function sync(){window.RouteApp.fillForm(draft);}
  function render(){
    if(complete){root.innerHTML='<div class="wizard-complete"><div><span>✓</span><strong>你的学习路线已生成</strong><p>查看课程、阶段任务和每周安排，也可以继续编辑并保存路线长图。</p></div><button type="button" data-edit>继续调整定制信息 ↗</button></div>';return;}
    let title='',hint='',body='';
    if(step===1){title='从你的专业出发，选一个想做的方向';hint='选资料、写课题，再看看适合的任务。暂时没想好也可以继续。';body='<div id="wizardStaffIntake"></div>';}
    if(step===0){title='从你的专业背景出发';hint='选择与你最接近的专业，下一步会展示相关资料和任务。';body='<div id="wizardMajorPicker"></div><label class="staff-field">具体专业或研究方向（选填）<input data-field="background" maxlength="120" value="'+esc(draft.background)+'" placeholder="如：材料科学中的水泥微结构、护理中的生理信号"></label>';}
    if(step===2){title='安排适合你的学习计划';hint='告诉我们你的基础、时间，以及最需要的帮助。';body=`<div class="staff-input-grid"><label>你目前的基础<select data-field="foundation">${Object.entries(window.RouteEngine.bases).map(([id,x])=>`<option value="${id}" ${draft.foundation===id?'selected':''}>${x.label}</option>`).join('')}</select></label><label>每周可投入（小时）<input data-field="hours" type="number" min="3" max="20" value="${draft.hours}"></label><label>这次安排多久（周）<input data-field="weeks" type="number" min="4" max="24" value="${draft.weeks}"></label></div><div id="wizardLearningSurvey"></div><label class="staff-field">还有什么想补充的？（选填）<textarea data-field="needs" rows="2" maxlength="500" placeholder="例如：准备开题、转行求职，或希望先解决的学习难点。">${esc(draft.needs)}</textarea></label>`;}
    if(step===3){const r=window.LabPlanner.resolve(draft),m=C.majors.find(m=>m.id===draft.major);const labels=(key,options)=>options.filter(x=>(draft[key]||[]).includes(x.id)).map(x=>x.label).join('、');title='核对你的路线信息';hint='确认专业、数据、学习目的与投入时间，生成适合自己的学习路线。';body=`<div class="staff-review-grid"><div><span>专业背景</span><strong>${esc(m.group)} / ${esc(m.label)}</strong></div><div><span>使用资料</span><strong>${esc(r?.dataLabel||'还没想好')}</strong></div><div><span>想做的任务</span><strong>${esc(r?.task.label||'还没想好')}</strong></div><div><span>资料准备</span><strong>${esc(({own:'已有资料',public:'想用公开资料练习',unknown:'还没有，先了解'})[draft.data]||'还没想好')}</strong></div><div><span>实验室方向</span><strong>${esc(r?.lab?.label||'选好资料与目标后推荐')}</strong></div><div><span>优先安排</span><strong>${esc(L.guidanceTopics.find(x=>x.id===window.ResearchIntake.primary(draft))?.label||window.RouteEngine.goals[draft.goal].label)}</strong></div><div><span>已有基础</span><strong>${esc(window.RouteEngine.bases[draft.foundation].label)}</strong></div><div><span>本期安排</span><strong>${draft.weeks} 周 × 每周 ${draft.hours} 小时</strong></div><div><span>重点学习课程</span><strong>${esc(labels('courseFocus',L.courseTopics)||'按基础与实验室方向安排')}</strong></div><div><span>希望获得的指导</span><strong>${esc(labels('guidanceNeeds',L.guidanceTopics)||'按学习目的安排')}</strong></div></div>${r?.review?`<p class="staff-review-note">方向说明：${esc(r.review)}</p>`:''}${draft.projectQuestion?`<p class="staff-draft-note">课题或研究方向：${esc(draft.projectQuestion)}</p>`:''}${draft.needs?`<p class="staff-draft-note">具体期待：${esc(draft.needs)}</p>`:''}<label class="staff-field">学习计划补充（可选）<textarea data-field="staffNotes" rows="3" maxlength="1000" placeholder="例如：优先补数据处理，每周安排一次项目复盘，月底完成第一次演示。">${esc(draft.staffNotes)}</textarea></label><p class="staff-draft-note">生成后可以继续调整路线，也可以编辑长图内容、保存 HTML 并导出 PNG。</p>`;}
    root.innerHTML=`<div class="wizard-shell"><div class="wizard-stepper">${steps.map((label,i)=>`<span class="${i<=step?'passed':''}" ${i===step?'aria-current="step"':''}><b>${i<step?'✓':i+1}</b><em>${label}</em></span>`).join('')}</div><div class="wizard-progress"><span style="width:${(step+1)/steps.length*100}%"></span></div><div class="wizard-inner"><h2 tabindex="-1">${title}</h2><p>${hint}</p>${body}<p id="wizardError" role="status" class="staff-error"></p><div class="wizard-actions"><span>第 ${step+1} 步 / 共 ${steps.length} 步</span><div><button type="button" data-back ${step===0?'disabled':''}>上一步</button><button type="button" data-next>${step===steps.length-1?'生成我的学习路线 ↗':'下一步 →'}</button></div></div></div></div>`;
    if(step===1)window.createStaffIntake($('wizardStaffIntake'),{value:draft,onChange:p=>{draft={...draft,...p};}});
    if(step===2)window.createLearningSurvey($('wizardLearningSurvey'),{value:draft,onChange:p=>{draft.courseFocus=p.courseFocus||[];draft.guidanceNeeds=p.guidanceNeeds||[];draft.primaryNeed=p.primaryNeed||'';draft.goal=p.goal;}});
    if(step===0)window.createMajorPicker($('wizardMajorPicker'),{value:draft.major,onChange:value=>{draft=window.ResearchIntake.changeMajor(draft,value);}});
  }
  root.addEventListener('input',event=>{const k=event.target.dataset.field;if(k)draft[k]=['hours','weeks'].includes(k)?Number(event.target.value):event.target.value;});
  root.addEventListener('change',event=>{const k=event.target.dataset.field;if(k)draft[k]=event.target.value;});
  root.addEventListener('click',event=>{
    if(event.target.closest('[data-edit]')){draft={...window.RouteApp.getRoute().profile};complete=false;step=0;render();return;}
    if(event.target.closest('[data-back]')){step=Math.max(0,step-1);render();return;}
    if(!event.target.closest('[data-next]'))return;
    if(draft.labOverride&&!draft.labReason?.trim()){$('wizardError').textContent='请填写实验室调整理由，或恢复按数据推荐。';return;}
    if(step===2){const bad=[...root.querySelectorAll('input[type=number]')].find(el=>!el.checkValidity());if(bad){bad.reportValidity();return;}}
    if(step<steps.length-1){step++;render();root.querySelector('h2').focus({preventScroll:true});root.scrollIntoView({block:'start',behavior:'smooth'});return;}
    sync();form.requestSubmit();complete=true;document.body.classList.add('wizard-ready');render();$('resultPanel').scrollIntoView({behavior:'smooth',block:'start'});
  });
  document.querySelectorAll('[data-planner-mode]').forEach(button=>button.addEventListener('click',()=>{
    if(document.body.dataset.plannerMode==='wizard'&&!complete)sync();
    document.body.dataset.plannerMode=button.dataset.plannerMode;
    document.querySelectorAll('[data-planner-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
    if(button.dataset.plannerMode==='wizard'){draft=window.RouteApp.getDraft();complete=false;render();}
  }));
  function recommendations(){
    const route=window.RouteApp.getRoute(),m=route.major,type=m.routing?.type;
    let cards=(window.ROUTE_PAPERS||{})[route.profile.major]||[],scope='同专业参考';
    if(type){const all=window.ROUTE_PAPER_INDEX||[],matched=all.filter(c=>type.match.includes(c.dataSubtype)),same=matched.filter(c=>m.paperMajors?.includes(c.major)||c.major===m.label);
      cards=(same.length?same:matched).slice(0,4);scope=same.length?'同专业、相近数据形态':matched.length?'跨专业、相近数据形态':'当前没有直接匹配的数据形态';}
    $('route-papers')?.remove();const section=document.createElement('section');section.id='route-papers';section.className='route-papers';
    section.innerHTML=`<div class="section-heading"><h3>结合数据形态，参考真实研究</h3></div><p>${esc(scope)}。以下按卡片数据标签匹配，阅读时请核对研究任务与数据条件。</p>${cards.length?`<div class="route-paper-grid">${cards.map(c=>`<a href="papers/index.html#paper/${esc(c.slug)}"><img src="papers/assets/previews/${c.id}-320.webp" loading="lazy" alt="${esc(c.short)}"><span><small>${esc(c.major)} · ${c.year}</small><strong>${esc(c.short)}</strong><em>核对论文与数据 ↗</em></span></a>`).join('')}</div>`:'<p class="staff-draft-note">补充数据形态后，可以查看相关论文。</p>'}`;$('sources').after(section);
  }
  document.addEventListener('route:rendered',recommendations);
  form.addEventListener('submit',()=>{document.body.classList.add('wizard-ready');draft={...window.RouteApp.getRoute().profile};});
  $('resetButton').addEventListener('click',()=>{draft={...window.RouteApp.getRoute().profile};step=0;complete=false;render();});
  let printDetails=[];addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('#resultPanel details')].map(e=>[e,e.open]);printDetails.forEach(([e])=>e.open=true);});addEventListener('afterprint',()=>printDetails.forEach(([e,open])=>e.open=open));
  $('exportPdf').addEventListener('click',()=>window.print());document.body.dataset.plannerMode='wizard';if(complete)document.body.classList.add('wizard-ready');render();recommendations();
})();

