
(function(root){
  const C=root.LAB_CATALOG;
  const clean=(v,n)=>typeof v==='string'?v.trim().slice(0,n):'';
  const projectTasks={image2d:{classify:[0],segment:[1],detect:[2]},volume:{segment:[0]},video:{track:[0]},sensor:{anomaly:[0],classify:[1],denoise:[2]},'business-ts':{forecast:[0],anomaly:[1]},spatiotemporal:{forecast:[0]},text:{classify:[0],generate:[1],qa:[2]},table:{forecast:[0]},social:{node:[0],recommend:[1]},knowledge:{link:[0],qa:[0]},molecule:{graph:[0],link:[1]},protein:{node:[0]},crystal:{graph:[0]},dynamic:{node:[0,1],link:[0],forecast:[1],anomaly:[0]},'multimodal-graph':{graph:[0]}};
  function normalize(p){
    if(!C.types.some(t=>t.id===p.dataType))return {};
    const type=C.types.find(t=>t.id===p.dataType),task=p.task==='define'||p.taskStatus==='pending'?'define':type.tasks.includes(p.task)?p.task:'define';
    const override=C.labs.some(l=>l.id===p.labOverride)&&clean(p.labReason,400)?p.labOverride:'';
    const selected=(value,options)=>options.map(x=>x.id).filter(id=>(Array.isArray(value)?value:typeof value==='string'?value.split(','):[]).includes(id));
    const courseFocus=selected(p.courseFocus,C.courseTopics),guidanceNeeds=root.ResearchIntake?root.ResearchIntake.needs(p):selected(p.guidanceNeeds,C.guidanceTopics);
    return {dataType:type.id,task,...Object.fromEntries(['scenario','taskStatus','recordMode','primaryNeed'].map(k=>[k,clean(p[k],80)]).filter(([,v])=>v)),...(override?{labOverride:override,labReason:clean(p.labReason,400)}:{}),...Object.fromEntries(['dataNotes','projectQuestion','staffNotes'].map(k=>[k,clean(p[k],k==='projectQuestion'?300:1000)]).filter(([,v])=>v)),...(courseFocus.length?{courseFocus}:{}),...(guidanceNeeds.length?{guidanceNeeds}:{})};
  }
  function resolve(p){
    const type=C.types.find(t=>t.id===p.dataType);if(!type)return null;
    const id=type.tasks.includes(p.task)&&p.taskStatus!=='pending'?p.task:'define',task={...C.tasks[id],label:root.ResearchIntake?root.ResearchIntake.taskLabel(id,p):C.tasks[id].label},override=p.labOverride&&p.labReason?.trim()?p.labOverride:'',lab=id==='define'?null:C.labs.find(l=>l.id===(override||type.lab));
    return {type,task,lab,dataLabel:root.ResearchIntake?.dataLabel(p)||type.label,secondary:C.labs.find(l=>l.id===type.secondary),overridden:!!override,review:type.review||'',pending:!lab};
  }
  function adapt(p,base){
    const r=resolve(p);if(!r)return base;
    const {type,task,lab}=r,labName=lab?.label||'待确认实验室';
    const candidates=(projectTasks[type.id]?.[p.task]||[]).map(i=>type.projects[i]);
    const relevant={clinical:/医学|胸部|脑电|细胞|可穿戴|药物/,health:/脑电|可穿戴|医学/,materials:/材料|晶体/,biology:/分子|蛋白|细胞|药物/,pharma:/分子|药物|细胞|蛋白/,finance:/交易|欺诈/,business:/电商|交易|推荐/,security:/异常检测|交易|流式/,earth:/交通|光伏/,transport:/交通|追踪/,sports:/可穿戴|追踪/,education:/问答|文本/,law:/问答/,social:/文本|推荐|引用/,arts:/文本|追踪/};
    const domain=relevant[root.ResearchIntake?.family(p)];
    const projects=domain?candidates.filter(name=>domain.test(name)):candidates;
    const question=p.projectQuestion||'在'+base.label+'背景下，使用'+type.label+'开展「'+task.label+'」；请补充具体研究对象与目标。';
    const context=p.dataNotes?'你的数据说明：'+p.dataNotes:'还没有资料说明，可以先用课程样例了解如何读取和整理资料。';
    const table=type.id==='table',text=type.id==='text';
    const split=table?'先判断一行代表谁、是否存在时间或分组。静态表格按独立对象划分，不默认构造时序滑窗；预处理只拟合训练集。':text?'按文档来源、实体或时间隔离，去除跨集合的重复与近似文本；问答测试题与答案不能进入训练资料。':lab?.validation||'待数据与任务明确后制定独立验证方案。';
    const preprocess=table?'核对字段字典、缺失、重复、单位与标签；先做表格 ML 基线，有明确时间轴或关系证据后再转入时序或图项目。':lab?.preprocess||'收集一个脱敏样例，明确每个样本、输入、输出和可取得的真实标签。';
    const modules=lab?.modules||['先了解手头的资料和想做的事情，再选择实验室课程'];
    const baseline=r.pending?'暂不训练；先了解资料与研究目标':task.baseline;
    const phaseNames=['通识与需求核对','数据处理与分流确认','实验室课程与 Baseline','改进、对照与评估','成果整理与复盘'];
    const phases=[
      {title:phaseNames[0],learn:'按你的基础补模块 1—8：环境与 Python、ML、PyTorch、Vibe Coding、科研方法论。',tasks:['明确你的研究问题：'+question+'；记录基础、目标和本期可投入时间。','完成对应基础自测与最小环境运行；'+context],deliver:'学习需求清单 + 基础自测与环境记录',check:'具体数据与目标可描述；缺失信息逐项记录，暂不明确的信息保留待确认。'},
      {title:phaseNames[1],learn:modules[0]+'；'+preprocess,tasks:['检查数据获取条件、样本单位、格式、规模、标注和使用权限。'+context,'执行数据检查并确定验证划分：'+split+' 确认「'+labName+'」的课程与数据任务相匹配。'+(r.review?' 特别判断：'+r.review:'')],deliver:'数据说明 + 划分方案 + 实验室分流记录',check:'数据条件不足时交付待办与方案；不假定论文附件或课程数据已经取得。'},
      {title:phaseNames[2],learn:modules.slice(1,Math.max(2,modules.length-1)).join('；'),tasks:['数据与环境通过检查后实施：'+baseline+'；保存配置、日志与真实预测输出。',projects.length?'参考课程练习「'+projects.join(' / ')+'」，结合自己的资料和目标完成一个小练习。':'围绕「'+(p.projectQuestion||'你选择的资料与目标')+'」确定一个小练习，用已学方法完成输入、处理和结果展示。'],deliver:r.pending?'补齐数据后的 Baseline 实施方案':'Baseline 代码、运行日志与初步评价',check:'仅在真实运行后记录结果；课程项目为参考，需核对当期资源和数据说明适配性。'},
      {title:phaseNames[3],learn:lab?modules.at(-2)+'；对照与消融实验':'先制定可行的验证方案',tasks:[(lab?.improvement||'先固定问题、评价单位和数据条件。')+' 指标建议：'+task.metrics+'。','锁定独立测试后检查失败样本、分组误差和结果波动；数据不足时只交付对照与评价设计。'],deliver:'基线与改进对照、误差案例；未运行部分标为待执行',check:'指标与任务匹配，不用论文报告数值替代自己的实验结果，不以单次最好结果宣称改进有效。'},
      {title:phaseNames[4],learn:(lab?modules.at(-1)+'；':'')+'README、实验报告、演示与项目复盘。',tasks:['整理需求、数据来源、配置、脚本、实际结果、限制与下一轮待办，逐项标记已完成和未完成。','回顾实验室方向、课程衔接、项目范围与每周计划；'+(p.staffNotes?'定制说明：'+p.staffNotes:'记录仍需解决的问题与下一次指导重点。')],deliver:'个性化学习路线 + 可核对的项目资料包',check:'完成课程与项目后，用真实代码、实验和报告检验学习成果；时间安排可按实际进度调整。'}
    ];
    const courseFocus=C.courseTopics.filter(x=>(p.courseFocus||[]).includes(x.id)),guidance=C.guidanceTopics.filter(x=>(p.guidanceNeeds||[]).includes(x.id));
    for(const focus of courseFocus)phases[focus.stage].learn+=' 重点学习：'+focus.label+'（'+focus.detail+'）。';
    for(const need of guidance)phases[need.stage].tasks[1]+=' 指导重点：'+need.action;
    const outcomes={
      learn:['独立完成一次练习，复述数据、模型与评价之间的关系，整理知识清单与下一轮学习重点。','可复跑练习 + 学习复盘'],
      research:['整理相关工作、研究假设、对照与消融记录，完成「问题—方法—证据—局限」研究备忘录。','实验资料包 + 研究备忘录'],
      job:['围绕目标岗位整理作品集，讲清个人贡献、技术选择与可复核结果，准备 3 分钟演示及项目问答。','项目作品集 + 演示与问答提纲'],
      team:['整理团队研究方向、角色分工、数据与代码权限、协作仓库、实验记录规范及例会节奏，完成一次交叉复现与交接。','团队启动方案 + 分工表 + 共研项目与协作规范'],
      demo:['整理样例输入、演示流程和运行说明，检查正常输入与异常输入的处理方式。','可运行演示 + 样例与运行说明']
    };
    if(outcomes[p.goal]){phases[4].tasks[0]=outcomes[p.goal][0];phases[4].deliver=outcomes[p.goal][1];}
    if(p.goal==='team'){
      phases[0].tasks[1]+=' 列出成员已有能力、共同研究问题、角色与职责，选择一个小规模共研任务。';
      phases[2].tasks[1]+=' 使用统一环境与配置，通过协作仓库完成第一次交叉复现。';
      phases[3].check+=' 用另一位协作者的独立运行记录检查复现性。';
    }
    if(r.pending){
      const prep=[
       ['了解专业与基础','Python、读表与简单画图。',['写下感兴趣的专业方向，了解相关研究在做什么。','运行一个基础课程练习，记录不懂的地方。'],'基础练习与学习记录'],
       ['认识常见资料','这个专业常见的图片、表格、文字或记录。',['查看课程或论文中的资料示例，认识每份资料包含什么。','比较几个研究目标，选择自己感兴趣的一个；暂时没有方向也可以记录问题。'],'资料示例与感兴趣的问题'],
       ['完成基础练习','读取资料、简单整理和展示。',['跟随课程读取一个示例文件，检查是否正确显示。','整理一个表格或展示一张图片，保存练习代码。'],'可运行的基础练习'],
       ['检查练习结果','检查输入、输出和常见错误。',['对照课程样例检查自己的结果，记录差异。','尝试修改一个参数，观察变化并说明原因。'],'结果记录与问题清单'],
       ['整理下一步计划','总结已学内容，选择后续方向。',['整理代码、笔记和仍不懂的问题。','补充资料与课题后，回到第二步选择任务和实验室。'],'基础学习记录与下一步计划']
      ];
      prep.forEach(([title,learn,tasks,deliver],i)=>Object.assign(phases[i],{title,learn,tasks,deliver,check:'能说明自己做了什么；暂不确定的方向保留待补充。'}));
      for(const focus of courseFocus)phases[focus.stage].learn+=' 重点了解：'+focus.label+'。';
      for(const need of guidance)phases[need.stage].tasks[1]+=' 你的需求：'+need.label+'，结合已有练习继续安排。';
    }
    return {...base,kind:'staff',routing:r,tag:task.label,headline:labName+' · '+r.dataLabel,question,input:r.dataLabel+'；'+context,output:task.output,baseline,metrics:task.metrics,split,risk:'先核对授权、标签与划分；保持训练和测试独立。'+(r.review||''),boundary:'按 V7.0 手册组织课程衔接，具体实验需适配实际数据。'+(r.review||'')+' 可以按实际进展继续调整。',artifact:r.pending?'基础学习路线 + 后续方向选择':outcomes[p.goal]?.[1]||('个性化学习路线 + '+labName+'项目规划'),complexity:r.pending?[0,4,0,0,0]:[0,4,4,4,2],phases,
      dataset:{name:'数据与课程参考',type:type.label,scale:p.data==='own'?'已有数据，待核对可用性':'从课程／论文来源选择数据，待核对获取条件',fact:context,url:'#course-mapping',doi:'',availability:'待核对'},
      course:{source:C.source,sections:type.source,modules,projects,focus:courseFocus,guidance},goalOutcome:outcomes[p.goal]?.[1]||'可复跑项目 + 学习报告'}
  }
  function summary(route){
    const m=route.major;if(m.kind!=='staff')return '';
    const r=m.routing,p=route.profile;
    return '你的学习路线与实验室方向\n使用资料：'+r.dataLabel+'\n任务：'+r.task.label+'\n课题名称或研究方向：'+(p.projectQuestion||'尚未填写')+'\n主实验室：'+(r.lab?.label||'待确认')+'\n分流依据：'+(p.labOverride?'调整；理由：'+p.labReason:'数据类型与任务匹配课程手册 '+m.course.sections)+(r.review?'\n需复核：'+r.review:'')+(r.secondary?'\n交叉参考：'+r.secondary.label+'，按实际任务决定是否需要':'')+'\n课程衔接：'+m.course.modules.join(' → ')+'\n课程项目参考：'+(m.course.projects.join('、')||'可另选适配项目')+'\n资料准备：'+(root.ResearchIntake?.readyLabel(p)||'待补充')+'\n资料说明：'+(p.dataNotes||'暂未填写')+'\n学习计划补充：'+(p.staffNotes||'待补充')+'\n重点课程：'+(m.course.focus.map(x=>x.label).join('、')||'按基础与方向安排')+'\n指导需求：'+(m.course.guidance.map(x=>x.label).join('、')||'按学习目的安排')+'\n手册依据：'+m.course.source+'，'+m.course.sections;
  }
  root.LabPlanner={normalize,resolve,adapt,summary};
})(window);

