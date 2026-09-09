
/* 纯函数规划引擎；不调用模型 API。小时数是可编辑的规划估计。 */
(function (root) {
  const bases = {
    beginner: {label:'从零开始',hours:[20,18,22,24,12]},
    python: {label:'会一点 Python',hours:[6,14,18,20,10]},
    ml: {label:'做过机器学习项目',hours:[3,10,10,16,8]}
  };
  const goals = {
    project:{label:'做出第一个作品',extra:[0,0,0,0,0]},
    research:{label:'验证一个研究想法',extra:[0,4,2,10,4]},
    demo:{label:'做一个工作演示',extra:[0,2,2,4,12]}
  };
  const titles = ['打好起步基础','把数据变成问题','跑通第一个基线','检验模型与结论','交付一个完整作品'];
  const defaults = {major:'mechanical',foundation:'python',goal:'project',data:'public',hours:8,weeks:12};
  function normalize(p = {}) {
    if (!p || typeof p !== 'object') p = {};
    const c = root.ROUTE_CATALOG;
    return {
      major:c.majors.some(m=>m.id===p.major)?p.major:defaults.major,
      foundation:Object.hasOwn(bases,p.foundation)?p.foundation:defaults.foundation,
      goal:Object.hasOwn(goals,p.goal)?p.goal:defaults.goal,
      data:p.data==='own'?'own':'public',
      hours:Math.max(3,Math.min(20,Math.round(Number(p.hours)||8))),
      weeks:Math.max(4,Math.min(24,Math.round(Number(p.weeks)||12)))
    };
  }
  function build(p) {
    const profile = normalize(p), major=root.ROUTE_CATALOG.majors.find(m=>m.id===profile.major);
    const budget=profile.weeks*profile.hours, base=bases[profile.foundation], goal=goals[profile.goal];
    let cursor=0;
    const phases=major.phases.map((original,i)=>{
      const content=JSON.parse(JSON.stringify(original));
      if(i===0 && profile.foundation==='beginner'){
        content.learn='先练习运行 Notebook、变量、列表与函数；再进入本专业的数据练习。';
        content.tasks[0]='搭好 Python / Notebook 环境，完成读表、筛选和画图练习；'+content.tasks[0];
      }
      if(i===0 && profile.foundation==='ml'){
        content.learn='快速自测数据读写与评价流程，把时间重点放在本专业变量和任务定义。';
        content.tasks[0]='用现有环境快速复核数据：'+content.tasks[0];
      }
      if(profile.data==='own' && i===1){
        content.tasks[0]='先审查自己的数据：样本单位、输入列、标签、单位、缺失、重复与可用权限；写明预测时各列是否已知。';
        content.tasks[1]='确认数据能支持“'+major.tag+'”后再划分；若缺标签或样本不足，先切回下方公开数据。后续执行：'+original.tasks[1];
        content.deliver='自有数据可行性检查表 + 继续 / 切回公开数据的决定';
        content.check='此处不上传或检查文件；在实际数据审核通过前，后续路线按公开练习任务作为预案。';
      }
      if(profile.goal==='research' && i===3){
        content.learn+=' 加入一个可证伪假设与单因素对照。';
        content.tasks[0]='先写一个可证伪假设，固定数据和评价口径，只改变一个因素；'+content.tasks[0];
        content.tasks[1]+=' 补充重复验证的波动，记录假设是否获得支持，保留未改善的结果。';
        content.deliver+=' + 单因素实验记录';
      }
      if(profile.goal==='research' && i===4){
        content.tasks[1]='整理“问题—证据—局限—下一步”的研究备忘录，引用相关工作，区分本次结果与尚未验证的假设。';
        content.deliver='可复跑实验包 + 研究备忘录';
        content.check+=' 研究练习不自动构成创新性或发表成果。';
      }
      if(profile.goal==='demo' && i===4){
        content.learn='输入检查、批量预测界面、结果解释与演示脚本。';
        content.tasks[0]='在已完成的离线模型外加一个演示页面：校验列名、单位与取值，使用公开样例展示输入和输出。';
        content.tasks[1]='测试正常样例、缺列样例和超出范围的样例；整理演示脚本、模型边界与运行说明。';
        content.deliver='本地演示原型 + 样例输入 + 运行说明';
        content.check='异常输入有清晰提示；演示输出与已保存模型一致；未评估的真实业务效果不作承诺。';
      }
      const hours=base.hours[i]+major.complexity[i]+goal.extra[i]+(profile.data==='own'?[0,8,0,4,2][i]:0);
      const start=cursor; cursor+=hours;
      const allocated=Math.max(0,Math.min(hours,budget-start));
      const taskHours=[Math.ceil(hours*.4),hours-Math.ceil(hours*.4)];
      let tc=start;
      const tasks=content.tasks.map((text,j)=>{
        const ts=tc;tc+=taskHours[j];
        return {id:`s${i+1}t${j+1}`,text,hours:taskHours[j],start:ts,end:tc,allocated:Math.max(0,Math.min(taskHours[j],budget-ts))};
      });
      return {...content,id:`s${i+1}`,index:i,title:titles[i],hours,start,end:cursor,allocated,status:allocated===0?'later':allocated<hours?'partial':'covered',startWeek:Math.floor(start/profile.hours)+1,endWeek:Math.ceil(cursor/profile.hours),tasks};
    });
    const total=cursor,planned=Math.min(total,budget),reserve=Math.max(0,budget-total),shortfall=Math.max(0,total-budget);
    const weeks=Array.from({length:profile.weeks},(_,i)=>{
      const start=i*profile.hours,end=start+profile.hours;
      const chunks=phases.flatMap(s=>s.tasks.map(t=>({...t,phase:s.title,phaseIndex:s.index,scheduled:Math.max(0,Math.min(t.end,end)-Math.max(t.start,start))}))).filter(t=>t.scheduled>0);
      return {index:i+1,tasks:chunks,reserve:profile.hours-chunks.reduce((sum,t)=>sum+t.scheduled,0)};
    });
    return {profile,major,foundation:base.label,goal:goal.label,budget,total,planned,reserve,shortfall,requiredWeeks:Math.ceil(total/profile.hours),extraWeeks:Math.ceil(shortfall/profile.hours),phases,weeks,key:JSON.stringify(profile),fullStages:phases.filter(s=>s.status==='covered').length,artifact:profile.goal==='research'?'可复跑实验包 + 研究备忘录':profile.goal==='demo'?'本地模型演示 + 样例输入 + 运行说明':major.artifact};
  }
  function prompt(route,index){
    const s=route.phases[index];
    return `你是我的 ${route.major.label} × AI 学习教练。\n我的基础：${route.foundation}；每周 ${route.profile.hours} 小时。\n练习问题：${route.major.question}\n当前阶段：${s.title}\n需要学习：${s.learn}\n具体任务：\n${s.tasks.map((t,i)=>`${i+1}. ${t.text}`).join('\n')}\n完成凭证：${s.deliver}\n验收标准：${s.check}\n数据入口：${route.major.dataset.url}\n特别注意：${route.major.risk}\n${route.profile.data==='own'?'我准备使用自己的数据，请先询问字段、标签与可用范围，不要假定它符合本任务。\n':''}请先用 2 个小问题检查我会什么，然后指导我完成一个最小练习。每次只推进一步，解释必要概念；给代码时说明输入输出与检查方法。不要替我编造数据、实验分数或已完成的结果。`;
  }
  function markdown(route,done=[]) {
    const d=new Set(done),r=route,m=r.major;
    let out=`# ${m.label} × AI 学习路线\n\n${m.headline}\n\n> 本地规则规划；工时是练习估计，不代表完成或掌握。\n\n- 目标：${r.goal}\n- 基础：${r.foundation}\n- 计划：${r.profile.weeks} 周 × 每周 ${r.profile.hours} 小时，共 ${r.budget} 小时\n- 任务估计：${r.total} 小时，按当前每周投入约 ${r.requiredWeeks} 周\n- 本期安排：${r.planned} 小时；机动与复盘：${r.reserve} 小时；剩余任务：${r.shortfall} 小时\n- 数据：${r.profile.data==='own'?'自有数据待审查；以下公开数据为练习预案':'公开数据'}\n\n## 项目问题\n\n${m.question}\n\n- 输入：${m.input}\n- 输出：${m.output}\n- 基线：${m.baseline}\n- 指标：${m.metrics}\n- 划分：${m.split}\n- 需防范：${m.risk}\n- 边界：${m.boundary}\n- 完整路线交付：${r.artifact}\n`;
    if(r.shortfall)out+=`\n**当前是起步计划：本期预算不足以完成整条路线，还需约 ${r.shortfall} 小时（按当前投入约 ${r.extraWeeks} 周）。**\n`;
    if(r.profile.data==='own')out+='\n自有数据未在本工具中读取或验证。先做可行性检查，未通过时先用公开数据练习。\n';
    for(const s of r.phases){
      out+=`\n## ${s.index+1}. ${s.title}\n\n- 参考时间：第 ${s.startWeek}–${s.endWeek} 周\n- 工时：估计 ${s.hours} 小时；本期安排 ${s.allocated} 小时\n- 学习内容：${s.learn}\n\n${s.tasks.map(t=>`- [${d.has(t.id)?'x':' '}] ${t.text}（估计 ${t.hours} 小时，本期 ${t.allocated} 小时）`).join('\n')}\n\n**完成凭证：** ${s.deliver}\n\n**验收标准：** ${s.check}\n`;
    }
    out+='\n## 每周安排\n';
    for(const w of r.weeks)out+=`\n### 第 ${w.index} 周\n\n${w.tasks.map(t=>`- ${t.phase} / ${t.text}（本周 ${t.scheduled} 小时${t.scheduled<t.hours?'，分段完成':''}）`).join('\n')}${w.reserve?`\n- 机动与复盘：${w.reserve} 小时`:''}\n`;
    out+=`\n## 来源与资源\n\n- [${m.dataset.name}](${m.dataset.url})\n- ${m.dataset.scale}；${m.dataset.type}\n- 数据事实：${m.dataset.fact}\n- DOI：[${m.dataset.doi}](https://doi.org/${m.dataset.doi})\n- 数据入口核对日期：${root.ROUTE_CATALOG.verifiedAt}\n`;
    for(const r of Object.values(root.ROUTE_CATALOG.resources))out+=`- [${r.name}](${r.url})：${r.note}\n`;
    out+='\n课程顺序、模型选择、练习任务和工时为本工具编排建议；未自动下载数据、训练模型或验证你的实验结果。\n';
    return out;
  }
  root.RouteEngine={defaults,bases,goals,titles,normalize,build,prompt,markdown};
})(typeof window!=='undefined'?window:globalThis);

