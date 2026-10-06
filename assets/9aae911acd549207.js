
(function(){
 const C=window.LAB_CATALOG,R=window.ResearchIntake,esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));let serial=0;
 window.createLearningSurvey=function(root,{value,onChange,compact=false}){
  let p={...value};const uid='learning-survey-'+(++serial),list=v=>Array.isArray(v)?v:typeof v==='string'?v.split(','):[];
  function draw(){p.guidanceNeeds=R.needs(p);root.className='learning-survey'+(compact?' compact':'');root.innerHTML=[['guidanceNeeds','这次你最需要哪些帮助？','可多选，先选最需要的。',C.guidanceTopics],['courseFocus','你希望重点学习哪些课程？','可多选。暂时不选时，按基础与方向安排。',C.courseTopics]].map(([key,title,hint,options])=>`<fieldset><legend>${title}</legend><p>${hint}</p><div class="survey-options">${options.map(o=>`<label for="${uid}-${key}-${o.id}"><input id="${uid}-${key}-${o.id}" type="checkbox" data-survey-key="${key}" value="${o.id}" ${list(p[key]).includes(o.id)?'checked':''}><span>${esc(o.label)}</span></label>`).join('')}</div>${key==='guidanceNeeds'?'<div class="need-priority"></div>':''}</fieldset>`).join('');priority();}
  function priority(){const ids=R.needs(p),primary=R.primary(p);root.querySelector('.need-priority').innerHTML=ids.length>1?`<label class="staff-field">这次优先安排什么？<select data-primary-need>${ids.map(id=>`<option value="${id}" ${primary===id?'selected':''}>${esc(C.guidanceTopics.find(x=>x.id===id).label)}</option>`).join('')}</select></label>`:'';}
  root.addEventListener('change',event=>{const key=event.target.dataset.surveyKey;if(key){p[key]=[...root.querySelectorAll(`[data-survey-key="${key}"]:checked`)].map(el=>el.value);p.primaryNeed=R.primary(p);priority();}else if(event.target.matches('[data-primary-need]'))p.primaryNeed=event.target.value;else return;p.goal=R.needGoal[R.primary(p)]||'learn';onChange({...p});});
  draw();return {setValue(next){p={...next};draw();}};
 };
})();

