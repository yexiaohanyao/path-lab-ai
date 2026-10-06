
/* Source: 点头人工智能 V7.0 课程产品手册-去重 v9.11，四.2、六、七、十.4。
   Type names are an intake taxonomy derived from the manual, not additional course promises. */
window.LAB_CATALOG={
  source:'点头人工智能 V7.0 课程产品手册 · 去重 v9.11',
  courseTopics:[
    {id:'python',label:'Python 与数据分析',stage:0,detail:'模块 3—4：编程、读写、清洗与可视化'},
    {id:'ml',label:'机器学习基础',stage:0,detail:'模块 5：特征、训练、验证与模型比较'},
    {id:'dl',label:'深度学习与 PyTorch',stage:0,detail:'模块 6：数据加载、训练循环与模型推理'},
    {id:'vibe',label:'AI 编程与 Vibe Coding',stage:0,detail:'模块 7：代码理解、调试与项目协作'},
    {id:'research',label:'科研方法与选题',stage:0,detail:'模块 8：问题定义、文献与实验设计'},
    {id:'data',label:'实验室数据处理',stage:1,detail:'所选实验室的数据读取、标注与划分'},
    {id:'models',label:'实验室算法与项目',stage:2,detail:'所选实验室的模型体系与 Baseline'},
    {id:'improve',label:'模型改进与实验评估',stage:3,detail:'对照、消融、误差分析与复现'},
    {id:'delivery',label:'成果表达与项目复盘',stage:4,detail:'报告、代码说明、演示与下一步计划'}
  ],
  guidanceTopics:[
    {id:'roadmap',label:'学习',stage:0,action:'根据基础安排学习顺序，完成课程练习。'},
    {id:'topic',label:'科研选题',stage:0,action:'阅读相关论文，把研究方向整理成一个具体问题。'},
    {id:'experiment',label:'实验指导',stage:3,action:'跑通基础实验，固定比较方法，记录结果与问题。'},
    {id:'writing',label:'论文写作',stage:4,action:'根据真实实验整理研究问题、方法、结果和讨论，标明参考文献。'},
    {id:'portfolio',label:'求职',stage:4,action:'整理项目中自己完成的工作和结果，练习介绍项目。'},
    {id:'team',label:'研究团队搭建',stage:4,action:'确定研究方向、成员角色与分工，安排共同练习和交流。'},
    {id:'other',label:'其他',stage:0,action:'写下具体需求，选择本期优先解决的问题。'}
  ],
  labs:[
    {id:'image',label:'影像实验室',short:'影像',description:'图像、三维体数据与视频',modules:['模块 9｜影像数据处理','模块 10｜影像算法体系','模块 11｜影像模型改进与优化','模块 12｜影像综合项目'],foundation:'模块 1—8｜AI 概述、环境、Python、机器学习、深度学习、Vibe Coding、科研方法论',baseline:'先用小型 CNN 或传统图像方法建立基线，再按任务选择 U-Net、YOLO 或视频模型。',preprocess:'核对图像尺寸、通道、标注格式与来源；增强只用于训练集，按对象或视频来源隔离划分。',validation:'按患者、样本、场景或视频来源隔离；同源切片、相邻帧和增强图像不跨训练与测试。',improvement:'从数据增强、Backbone、多尺度特征或训练策略中只改一项，完成同口径对照。'},
    {id:'sequence',label:'时序实验室',short:'时序',description:'传感器、业务指标、文本与时空序列',modules:['模块 9｜时序与文本数据处理','模块 10｜项目框架拆解','模块 11｜时序算法体系','模块 12｜时序模型改进与优化','模块 13｜时序综合项目'],foundation:'模块 1—8｜通识底座；按基础补数据读写、ML 流程与 PyTorch',baseline:'时间预测先比较持续性／季节性基线；信号任务先用特征模型；文本任务先用词频或简单分类模型。',preprocess:'时间数据核对时间戳、采样率、对齐与滑窗；文本核对清洗、标签、Tokenizer 和数据格式。',validation:'时序按时间滚动验证，个体信号按人或设备隔离；文本按文档来源与重复内容隔离，不强加时间假设。',improvement:'选择数据处理、窗口／特征、模型或训练策略之一做对照；记录误差、消融与运行成本。'},
    {id:'graph',label:'AI+ 实验室',short:'AI+',description:'关系网络、知识图谱与分子／材料结构图',modules:['模块 9｜图数据处理','模块 10｜图算法体系','模块 11｜图模型改进与优化','模块 12｜AI+ 综合项目'],foundation:'模块 1—8｜通识底座；补节点、边、图结构与 GNN 最小流程',baseline:'先比较非图特征或简单图基线，再按任务选择 GCN、GraphSAGE、GAT 等模型。',preprocess:'定义节点、边、属性、图级／节点级／边级标签；记录关系来源，构造 Data 对象与独立划分。',validation:'明确节点、边或图级评价；隔离测试标签与未来关系，按新实体、时间或独立结构设置符合场景的验证。',improvement:'在特征、建图、邻居聚合或图增强中选择一项改进；设置不使用关系信息的对照。'}
  ],
  tasks:{
    classify:{label:'分类与识别',output:'类别标签或概率',metrics:'Macro-F1、各类召回率与混淆矩阵',baseline:'多数类／简单特征基线 → 一个轻量分类模型'},
    segment:{label:'分割',output:'像素／体素或点级分割标签',metrics:'Dice、IoU；医学体分割按任务补 HD95',baseline:'简单阈值或传统方法 → 适配维度的 U-Net 等分割模型'},
    detect:{label:'目标检测',output:'目标类别、位置与置信度',metrics:'Precision-Recall、mAP；速度另记运行设备与 FPS',baseline:'固定的小型检测基线 → 适配标注的检测模型'},
    track:{label:'追踪与视频理解',output:'目标 ID、轨迹或视频事件类别',metrics:'追踪用 IDF1、MOTA；视频分类用 Macro-F1',baseline:'逐帧检测 → ByteTrack／DeepSORT 等关联方法；视频分类另建轻量基线'},
    forecast:{label:'数值／时序预测',output:'明确定义对象与单位的数值预测；有时间维度时固定预测时点',metrics:'MAE、RMSE；MAPE 仅在分母与业务口径适用时使用',baseline:'静态数据先用均值／线性回归；时间数据先用持续性／季节性基线，再比较学习模型'},
    anomaly:{label:'异常检测与预警',output:'异常分数、事件与告警',metrics:'Precision、Recall、F1、误报与发现延迟；先定义事件匹配规则',baseline:'固定规则或统计阈值 → 预测／重构异常模型'},
    denoise:{label:'信号降噪',output:'去噪信号与质量检查记录',metrics:'有干净参考时用 SNR／RMSE；无真值时另列质量评价依据',baseline:'滤波／ICA／小波 → Denoising AE 或 1D U-Net'},
    generate:{label:'文本生成',output:'有来源约束与生成记录的文本',metrics:'适用时报告困惑度，并人工检查质量、重复与事实一致性',baseline:'固定模板或简单序列生成 → RNN／Transformer 对照'},
    qa:{label:'知识问答与检索',output:'答案、引用与检索证据',metrics:'答案正确性、证据支持率与拒答；检索部分另报 Recall@k',baseline:'关键词／检索基线 → 提示或微调方案；固定独立问题集'},
    node:{label:'节点分类／回归',output:'节点标签或属性预测',metrics:'分类用 Accuracy／F1；回归用 MAE／R²',baseline:'节点特征模型 → GCN／GraphSAGE 等节点模型'},
    link:{label:'链接预测',output:'候选关系或链接得分',metrics:'MRR、Hits@K；二分类场景另用 AUC／PR-AUC',baseline:'简单关系打分 → 图表示与链接预测模型'},
    graph:{label:'图分类／回归',output:'分子、材料或事件图的类别／性质',metrics:'分类用 F1／AUC；回归用 MAE／R²',baseline:'手工特征模型 → 图级预测模型'},
    recommend:{label:'推荐排序',output:'用户—对象候选排序',metrics:'Recall@K、NDCG；固定候选集合与评估口径',baseline:'流行度／协同过滤 → 异构图推荐'},
    graphgen:{label:'图生成',output:'待独立验证的候选图结构',metrics:'结构有效性、新颖性、约束满足与独立验证；非效果承诺',baseline:'简单结构采样 → 与约束匹配的图生成方法'},
    define:{label:'先了解研究方向',output:'资料说明、研究方向与下一步学习安排',metrics:'先确认真值、评价单位与指标，再进入实验',baseline:'暂不选模型；先完成数据与任务可行性判断'}
  },
  types:[
    {id:'image2d',label:'二维图像',lab:'image',examples:'X 光、眼底、病理／显微、工业与自然图像',tasks:['classify','segment','detect'],source:'四.2；六.1；七.2',projects:['胸部影像肺炎分类','显微细胞核分割','交通标志与信号灯检测'],match:['医学影像与超声','病理、显微与细胞图像','自然、工业与艺术图像','遥感与空间影像']},
    {id:'volume',label:'三维体数据',lab:'image',examples:'3D MRI、器官／病灶体数据',tasks:['segment','classify'],source:'四.2；七.2 项目 09',projects:['3D MRI 医学分割'],match:['医学影像与超声']},
    {id:'video',label:'视频与动态图像',lab:'image',examples:'行人、工业过程、行为与事件视频',tasks:['track','detect','classify','segment'],source:'六.1；七.2 项目 04',projects:['视频行人多目标追踪'],match:['视频与动态图像']},
    {id:'pointcloud',label:'三维点云',lab:'image',examples:'点坐标、体素、几何结构；进阶内容',tasks:['classify','segment','detect'],source:'十.4｜3D 点云',projects:[],review:'这是影像侧的进阶方向。选择前请确认点云基础、算力与所需指导。',match:['三维视觉与几何']},
    {id:'sensor',label:'传感器与生理信号',lab:'sequence',examples:'多传感器、加速度／陀螺仪、EEG 等波形',tasks:['anomaly','classify','denoise','forecast'],source:'四.2；七.3 项目 01、04、05',projects:['工业机器多传感器异常检测与预警','可穿戴传感器人体行为识别','脑电信号数据降噪'],match:['传感器、波形与生理信号']},
    {id:'business-ts',label:'业务指标与流式时序',lab:'sequence',examples:'销量、光伏功率、运行指标与实时事件',tasks:['forecast','anomaly','classify'],source:'六.2；七.3 项目 02、03',projects:['光伏功率短期预测与天气联合建模','流式实时应用程序异常检测与预警'],match:['时间序列与业务指标','行为、事件与日志序列']},
    {id:'spatiotemporal',label:'时空序列',lab:'sequence',secondary:'graph',examples:'交通流量、传感器位置与历史观测',tasks:['forecast','anomaly'],source:'七.3 项目 08；七.4 项目 05',projects:['基于 STGCN 的交通流量时空预测'],review:'以时间预测为主时进入时序；若重点是路网关系与建图，可调整到 AI+ 并写明理由。',match:['时空序列与轨迹']},
    {id:'text',label:'文本与语言序列',lab:'sequence',examples:'评论、语料、领域资料与问答对',tasks:['classify','generate','qa'],source:'六.2；七.3 项目 06、07、10',projects:['基于 LLM 的情感文本分类','基于 RNN 的中文评论语料生成','大模型微调：知识问答'],match:['文本、语言与代码序列']},
    {id:'table',label:'结构化表格与特征矩阵',lab:'sequence',examples:'临床指标、配方参数、统计表、表达特征矩阵',tasks:['classify','forecast','anomaly'],source:'五.4、五.5；六.2 模块 12',projects:['电商销售分析报告生成器'],review:'先学习表格分析与机器学习；在时序实验室的相关课程中继续练习。没有连续时间记录时，不安排时序预测。',match:['结构化表格与临床记录','仿真、数值场与实验参数']},
    {id:'social',label:'社交、引用与推荐网络',lab:'graph',examples:'用户—商品异构图、论文引用与社交关系',tasks:['node','recommend','link'],source:'四.2；七.4 项目 01、02',projects:['学术论文引用网络主题分类','电商用户—商品异构图推荐'],match:['社交、推荐与交易网络']},
    {id:'knowledge',label:'知识图谱与语义关系',lab:'graph',examples:'实体—关系—实体、企业知识与领域图谱',tasks:['link','qa','node'],source:'四.2；七.4 项目 06',projects:['企业知识图谱链接预测与问答'],match:['知识图谱与语义关系']},
    {id:'molecule',label:'分子与药物结构图',lab:'graph',examples:'原子、化学键、几何结构与药物—靶点关系',tasks:['graph','link','graphgen'],source:'四.2；七.4 项目 03、07',projects:['分子毒性与关键子结构解释','药物—靶点相互作用预测'],match:['分子、药物与化学结构']},
    {id:'protein',label:'蛋白结构与互作网络',lab:'graph',examples:'蛋白关系、功能标签与生物网络',tasks:['node','link','graph'],source:'四.2；七.4 项目 09',projects:['蛋白质互作网络功能预测'],match:['蛋白、基因与组学网络']},
    {id:'crystal',label:'晶体与材料结构图',lab:'graph',examples:'原子特征、晶格与邻接关系',tasks:['graph','graphgen'],source:'四.2；七.4 项目 08',projects:['晶体材料性质预测（CGCNN）'],match:['晶体与材料结构图']},
    {id:'dynamic',label:'动态交易与时空图',lab:'graph',secondary:'sequence',examples:'带时间戳的交易边、交通拓扑与节点观测',tasks:['node','link','forecast','anomaly'],source:'六.3；七.4 项目 04、05',projects:['动态交易图欺诈团伙识别','城市交通传感器图预测与拥堵传播'],match:['社交、推荐与交易网络','交通、电网与工程拓扑']},
    {id:'constructed',label:'人工建图与异构／超图',lab:'graph',examples:'由非图数据定义有依据的节点、边与关系',tasks:['node','link','graph'],source:'六.3 模块 9',projects:[],review:'先说明边的含义与建图依据；不能仅因专业属于 AI+ 就强行建图。',match:['通用图、异构图与人工建图']},
    {id:'multimodal-graph',label:'图像—文本—关系多模态图',lab:'graph',secondary:'image',examples:'图像与文本特征结合事件或实体关系',tasks:['graph','node','link'],source:'七.4 项目 10',projects:['图像—文本—关系多模态事件图'],review:'这里指已经定义关系结构的多模态图；仅有图片与文本时需核对任务，不能自动认定为图项目。',match:['视觉多模态数据','知识图谱与语义关系']},
    {id:'other',label:'其他／数据尚不明确',lab:'',examples:'先补数据样例、单位、标签与研究目标',tasks:['define'],source:'六、八｜按数据与任务判断',projects:[],review:'可以先学习基础课程，想好使用的资料和目标后再选择实验室。',match:[]}
  ]
};

