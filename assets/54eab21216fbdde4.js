
(function(){
  const C=window.ROUTE_CATALOG;
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  let serial=0;
  window.createMajorPicker=function(root,{value,onChange,compact=false}){
    let selected=value,group=C.majors.find(m=>m.id===value)?.group||C.groups[0].label,query='';
    const uid='major-picker-'+(++serial);
    root.className='major-picker'+(compact?' compact':'');
    root.innerHTML=`<div class="major-picker-summary"><span>学科门类 → 专业方向</span><span>按专业推荐常见资料与研究任务</span></div><label class="major-search-label" for="${uid}-search">搜索专业或研究方向</label><div class="major-search-row"><input id="${uid}-search" type="search" placeholder="如：临床医学、材料、护理、非遗" autocomplete="off"><button type="button" data-major-clear hidden>清除</button></div><div class="major-picker-layout"><nav class="major-groups" aria-label="专业大类">${C.groups.map(g=>`<button type="button" data-major-group="${esc(g.label)}" aria-pressed="false"><span>${esc(g.label)}</span><small>${g.ids.length}</small></button>`).join('')}</nav><div class="major-picker-main"><label class="major-group-label" for="${uid}-group">专业大类</label><select id="${uid}-group" class="major-group-select">${C.groups.map(g=>`<option value="${esc(g.label)}">${esc(g.label)} · ${g.ids.length} 个方向</option>`).join('')}</select><p class="major-results-caption" aria-live="polite"></p><div class="major-results" role="group" aria-label="选择专业方向"></div></div></div><div class="major-selection" aria-live="polite"></div>`;
    const search=root.querySelector('input'),select=root.querySelector('select'),results=root.querySelector('.major-results');
    function draw(){
      const words=query.trim().toLocaleLowerCase().split(/\s+/).filter(Boolean);
      const shown=C.majors.filter(m=>words.length?words.every(w=>(m.searchText+' '+(m.label==='非物质文化遗产'?'非遗':'')).toLocaleLowerCase().includes(w)):m.group===group);
      root.querySelector('[data-major-clear]').hidden=!query;
      select.value=group;
      root.querySelectorAll('[data-major-group]').forEach(b=>b.setAttribute('aria-pressed',String(!words.length&&b.dataset.majorGroup===group)));
      root.querySelector('.major-results-caption').textContent=words.length?'全目录搜索 · '+shown.length+' 个方向':group+' · '+shown.length+' 个方向';
      results.innerHTML=shown.length?shown.map(m=>`<button type="button" class="major-choice" data-major-choice="${m.id}" aria-pressed="${m.id===selected}"><span class="major-choice-head"><strong>${esc(m.label)}</strong><i aria-hidden="true">${m.id===selected?'✓':'↗'}</i></span><span class="major-choice-meta">${esc(m.group)}${m.code?' · '+esc(m.directoryKind):''}</span><small>${esc(m.paperMajors.filter(x=>x!==m.label).slice(0,3).join('、')||'查看适合的资料与研究任务')}</small></button>`).join(''):'<div class="major-search-empty"><strong>暂未找到这个方向</strong><p>试试相关学科，或选择“其他专业”后补充名称。</p><button type="button" data-major-choice="other-major">选择其他专业</button><p></p></div>';
      const m=C.majors.find(m=>m.id===selected);
      root.querySelector('.major-selection').innerHTML=`<span>当前选择</span><strong>${esc(m.label)}</strong><small>${esc(m.group)}${m.code?' · '+esc(m.code):''}</small><p>下一步会展示这个专业常见的资料；你也可以补充自己的研究方向。</p>`;
    }
    root.addEventListener('click',event=>{
      const category=event.target.closest('[data-major-group]'),choice=event.target.closest('[data-major-choice]');
      if(category){group=category.dataset.majorGroup;query='';search.value='';draw();}
      if(choice){selected=choice.dataset.majorChoice;draw();root.querySelector(`[data-major-choice="${selected}"]`)?.focus({preventScroll:true});onChange(selected);}
      if(event.target.closest('[data-major-clear]')){query='';search.value='';draw();search.focus();}
    });
    search.addEventListener('input',()=>{query=search.value;draw();});
    search.addEventListener('keydown',event=>{if(event.key==='Enter'){event.preventDefault();results.querySelector('button')?.focus();}});
    select.addEventListener('change',()=>{group=select.value;query='';search.value='';draw();});
    draw();
    return {setValue(next){if(next===selected)return;selected=next;group=C.majors.find(m=>m.id===next).group;query='';search.value='';draw();}};
  };
})();

