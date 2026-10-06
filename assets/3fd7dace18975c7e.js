
(function(root){
  // Local, conservative suggestions. A title is never an automatic task confirmation.
  const S={
    'clinical-image':['检查影像','X 光、超声、CT 或 MRI','image2d','临床影像'],
    'clinical-table':['检验与随访记录','检验指标、病情记录、随访表','table','临床记录'],
    'clinical-signal':['心电、脑电与监测记录','心电波形、脑电、连续监护记录','sensor','生理信号'],
    'clinical-text':['病历与报告文字','病历、检查报告、医学文献','text','医学文字'],
    'health-table':['量表、问卷与随访记录','问卷得分、评估指标、随访表','table','调查记录'],
    'health-signal':['生理与活动记录','心率、睡眠、活动监测','sensor','生理记录'],
    'material-image':['显微照片','孔隙、颗粒、裂纹与微观结构','image2d','显微图像'],
    'material-table':['配方与性能记录','成分、工艺参数、测试结果','table','性能记录'],
    'material-curve':['实验曲线','应力应变、光谱、循环测试','sensor','实验曲线'],
    'material-crystal':['晶体结构','原子位置、晶格与材料性质','crystal','晶体结构'],
    'bio-image':['细胞与组织图像','显微照片、组织切片','image2d','细胞图像'],
    'bio-table':['实验与组学数据表','实验测量、基因表达、蛋白丰度','table','生物实验'],
    'bio-protein':['蛋白与基因关系','蛋白互作、调控关系','protein','生物关系'],
    'drug-molecule':['分子与药物结构','分子结构、化学键、药物与靶点','molecule','分子结构'],
    'drug-table':['成分与实验结果','成分、活性、药效实验记录','table','药物实验'],
    'device-signal':['设备与传感器记录','振动、电流、温度、运行信号','sensor','设备信号'],
    'device-image':['产品照片与检测图像','零件、表面缺陷、工况图像','image2d','工业图像'],
    'device-table':['参数与测试记录','设备参数、实验数据、性能指标','table','测试记录'],
    'device-video':['设备与动作视频','运行过程、机器人运动、作业视频','video','动作视频'],
    'earth-image':['遥感与现场影像','卫星图、航拍图、现场照片','image2d','空间影像'],
    'earth-series':['环境与站点记录','天气、水位、污染物、站点观测','spatiotemporal','环境观测'],
    'earth-table':['调查与实验数据表','调查结果、属性记录、实验参数','table','调查数据'],
    'earth-network':['道路与设施关系','路网、管网、站点连接','dynamic','设施关系'],
    'finance-series':['历史行情与指标','价格、成交量、按期统计的指标','business-ts','历史指标'],
    'finance-table':['业务报表','客户信息、财务指标、业务统计','table','业务报表'],
    'finance-network':['交易与客户关系','交易双方、资金往来、关联关系','dynamic','交易关系'],
    'finance-text':['公告与研报','公告、报告、新闻文字','text','金融文字'],
    'business-series':['销售与运营记录','销量、流量、库存的历史变化','business-ts','运营指标'],
    'business-network':['用户与商品关系','购买、推荐、供应链连接','social','业务关系'],
    'law-text':['案例与法律文本','判决书、合同、法规','text','法律文字'],
    'law-knowledge':['案件与法条关系','案件、法条、人物之间的关系','knowledge','法律关系'],
    'social-text':['访谈与文献','访谈记录、新闻、研究文献','text','访谈文字'],
    'social-table':['问卷与统计表','问卷、调查、统计记录','table','调查资料'],
    'social-network':['人物与组织关系','交往、合作、引用关系','social','社会关系'],
    'education-table':['学习与测评记录','成绩、练习、问卷','table','学习记录'],
    'education-text':['教学材料与文字作业','教材、问答、作文','text','教学文字'],
    'education-video':['课堂与活动视频','课堂行为、活动过程','video','课堂视频'],
    'arts-image':['作品与纹样照片','作品、文物、纹样、工艺照片','image2d','作品图像'],
    'arts-video':['表演与动作视频','舞蹈、表演、运动记录','video','表演视频'],
    'arts-text':['访谈与文献','传承人口述、作品说明、文献','text','艺术文字'],
    'sports-signal':['运动与生理记录','可穿戴设备、动作传感器','sensor','运动记录'],
    'code-text':['文本与代码','文档、代码、问答资料','text','文本代码'],
    'security-log':['访问日志与流量记录','访问事件、流量、系统运行记录','business-ts','网络记录'],
    'security-network':['设备与访问关系','设备连接、账户往来、访问关系','dynamic','网络关系'],
    'general-image':['图片或视频','照片、扫描图、视频画面','image2d','图片'],
    'general-table':['表格与记录','统计表、测试结果、业务记录','table','表格'],
    'general-text':['文字资料','文档、报告、问答','text','文字'],
    'general-network':['对象之间的关系','人物、物品、知识之间的连接','knowledge','关系']
  };
  const groups={
    clinical:['clinical-image','clinical-table','clinical-signal','clinical-text'],
    health:['health-table','health-signal','clinical-text','clinical-image'],
    biology:['bio-image','bio-table','bio-protein','drug-molecule'],
    pharma:['drug-molecule','drug-table','bio-image','clinical-text'],
    materials:['material-image','material-table','material-curve','material-crystal'],
    engineering:['device-signal','device-image','device-table','device-video'],
    computing:['code-text','general-image','business-network','security-log'],
    security:['security-log','security-network','code-text','finance-table'],
    civil:['device-image','device-signal','device-table','earth-network'],
    earth:['earth-image','earth-series','earth-table','earth-network'],
    transport:['earth-series','earth-network','device-video','device-table'],
    agriculture:['bio-image','device-signal','bio-table','earth-image'],
    finance:['finance-series','finance-table','finance-network','finance-text'],
    business:['business-series','finance-table','business-network','finance-text'],
    law:['law-text','law-knowledge','social-table'],
    social:['social-table','social-text','social-network'],
    education:['education-table','education-text','education-video','social-network'],
    arts:['arts-image','arts-video','arts-text'],
    sports:['arts-video','sports-signal','health-table'],
    general:['general-image','general-table','general-text','general-network']
  };
  const plainTypes={image2d:'照片与单张图像',volume:'整套 CT / MRI 等三维影像',video:'视频',pointcloud:'三维扫描点云',sensor:'传感器与生理记录','business-ts':'按时间记录的指标',spatiotemporal:'不同地点的连续记录',text:'文字资料',table:'表格与指标',social:'用户、人物与物品关系',knowledge:'知识与对象关系',molecule:'分子结构',protein:'蛋白与基因关系',crystal:'晶体结构',dynamic:'随时间变化的对象关系',constructed:'自行整理的对象关系','multimodal-graph':'带图片和文字的对象关系',other:'还没想好'};
  function major(p){const C=root.ROUTE_CATALOG;return C.majors.find(m=>m.id===(C.majorAliases?.[p.major]||p.major))||C.majors[0];}
  const family=p=>major(p).scenarioGroup||'general';
  function options(p){return (groups[family(p)]||groups.general).map(id=>({id,label:S[id][0],example:S[id][1],dataType:S[id][2]}));}
  function dataLabel(p){if(p.scenario==='clinical-table'&&p.recordMode==='longitudinal')return '连续随访记录';if(p.scenario==='clinical-image'&&p.dataType==='volume')return '整套 CT / MRI 影像';return S[p.scenario]?.[0]||plainTypes[p.dataType]||'还没想好';}
  function taskLabel(id,p={}){
    const f=family(p),type=p.dataType;
    const object=['clinical','health'].includes(f)?'器官或病灶':f==='materials'?'孔隙、颗粒等结构':f==='biology'?'细胞或组织':f==='earth'?'地物':f==='arts'?'纹样或作品元素':'关注对象';
    return ({classify:type==='text'?'按内容分组（文本分类）':['image2d','volume','video','pointcloud'].includes(type)?'判断属于哪一类，或是否有某类异常（分类识别）':'判断记录属于哪种状态（分类识别）',segment:'描出'+object+'的边界（分割）',detect:'找出'+object+'的位置（目标检测）',track:'跟踪视频中的对象或动作（追踪 / 视频理解）',forecast:type==='table'?'根据已有指标估计结果（数值预测）':'预测后续指标变化（预测）',anomaly:'找出异常记录或时段（异常检测）',denoise:'减少记录中的干扰（信号降噪）',generate:'根据资料生成文字草稿（文本生成）',qa:'从资料中查找答案（检索问答）',node:'根据关联信息判断某个对象的类别或属性（节点预测）',link:'寻找对象之间可能的联系（链接预测）',graph:type==='crystal'?'根据晶体结构预测材料性质（图预测）':type==='molecule'?'根据分子结构预测性质（图预测）':'根据整体结构预测类别或性质（图预测）',recommend:'推荐可能感兴趣的内容（推荐排序）',graphgen:'提出新的结构方案（图生成）',define:'还没想好，先了解可做的方向'})[id]||id;
  }
  function tasks(p){return (root.LAB_CATALOG.types.find(t=>t.id===p.dataType)?.tasks||[]).filter(id=>id!=='define').map(id=>({id,label:taskLabel(id,p)}));}
  function suggest(p){
    const original=(p.projectQuestion||'').trim();
    if(!original)return {matches:[],message:'可以先写课题，也可以直接从下面选择想得到的结果。'};
    const text=original.replace(/(?:不是|不做|无需|不需要|不要|非)[^，。；;、\n]*/g,'');
    const rules=[['segment',/分割|勾画|描出.{0,12}边界|轮廓|掩膜|像素级|分出.{0,12}区域/],['detect',/目标检测|定位|检测框|框出|找出.{0,12}位置|标出.{0,12}位置/],['classify',/分类|判断.{0,12}(类别|是否|类型)|识别.{0,12}类别/],['track',/追踪|跟踪|视频理解|动作识别/],['forecast',/预测|估计.{0,12}(数值|强度|寿命|结果)|预报/],['anomaly',/异常检测|异常时段|故障预警|欺诈检测/],['denoise',/降噪|去噪|去除.{0,8}干扰/],['qa',/问答|检索|查找答案/],['generate',/文本生成|生成.{0,8}(草稿|文字|报告)/],['link',/链接预测|关系预测|相互作用预测/],['recommend',/推荐系统|推荐排序/],['graphgen',/图生成|分子生成|结构生成/]];
    const hit=rules.filter(([,re])=>re.test(text)).map(([id])=>id);
    // '风险预测' on a static table does not specify classification vs regression.
    if(p.dataType==='table'&&hit.includes('forecast')&&!/数值|强度|浓度|温度|评分|金额|价格|功率|含量|回归/.test(text))hit.splice(hit.indexOf('forecast'),1);
    if(hit.includes('forecast')&&['molecule','crystal'].includes(p.dataType)){hit.splice(hit.indexOf('forecast'),1);hit.push('graph');}
    if(hit.includes('link')){const i=hit.indexOf('forecast');if(i>=0)hit.splice(i,1);}
    const allowed=tasks(p).map(t=>t.id),matches=[...new Set(hit.filter(id=>allowed.includes(id)))];
    const mismatch=hit.filter(id=>!allowed.includes(id));
    return {matches,mismatch,message:mismatch.length?'课题中的部分任务与当前资料不一致，请检查资料或补充预期结果。':matches.length===1?'课题中出现了相关表述，建议如下。确认它是否符合你想得到的结果。':matches.length>1?'这个课题可能包含多个任务，请先选本次重点。':'仅凭课题名称还不能确定任务。你更希望得到下面哪一种结果？'};
  }
  function changeMajor(p,id){
    const next={...p,major:id};
    if(!p.scenario||p.scenario==='other'||p.dataType==='other')return next;
    if(options(next).some(o=>o.id===p.scenario))return next;
    return {...next,scenario:'',dataType:'other',task:'define',taskStatus:'pending',recordMode:'',labOverride:'',labReason:'',intakeNotice:'专业已更改，请重新选择适合的资料。课题和资料说明已保留。'};
  }
  const needGoal={roadmap:'learn',topic:'research',experiment:'research',writing:'research',portfolio:'job',team:'team',other:'other'};
  function needs(p){
    const old={data:'experiment',code:'experiment',baseline:'experiment'};
    const list=Array.isArray(p.guidanceNeeds)?p.guidanceNeeds:typeof p.guidanceNeeds==='string'?p.guidanceNeeds.split(','):[];
    return [...new Set(list.map(id=>old[id]||id).filter(id=>id in needGoal))];
  }
  function primary(p){const ids=needs(p);return ids.includes(p.primaryNeed)?p.primaryNeed:ids[0]||'';}
  const readyLabel=p=>({own:'已有资料',public:'想用公开资料练习',unknown:'还没有，先了解'})[p.data]||'待补充';
  root.ResearchIntake={readyLabel,options,dataLabel,taskLabel,tasks,suggest,changeMajor,family,plainTypes,needs,primary,needGoal};
})(window);

