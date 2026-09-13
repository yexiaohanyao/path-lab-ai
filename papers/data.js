window.PAPER_LIBRARY = {
  "schemaVersion": 1,
  "title": "点头教育 · 论文交互馆",
  "subtitle": "专业与 AI 的交叉研究收藏",
  "sample": true,
  "updated": "2026-09-12",
  "cards": [
    {
      "slug": "active-plates",
      "major": "材料科学",
      "short": "4D 打印：从平板到目标曲面",
      "summary": "把材料排布交给神经网络，让前向预测参与逆向设计，再用仿真与打印检验形变。",
      "methods": [
        "深度学习",
        "逆问题"
      ],
      "method": "ResNet · 逆向设计",
      "metric": "450",
      "metricLabel": "材料设计体素",
      "color": "#A8533B",
      "tone": "#F6EBE5",
      "id": "paper-20a4a1475e670d5f",
      "title": "4D 打印主动板材：从目标形状反推材料排布",
      "originalTitle": "Machine learning-enabled forward prediction and inverse design of 4D-printed active plates",
      "venue": "Nature Communications",
      "year": 2024,
      "doi": "10.1038/s41467-024-49775-z",
      "sourceUrl": "https://www.nature.com/articles/s41467-024-49775-z",
      "question": "哪些位置放主动材料、哪些位置放被动材料，才能让一块平板在受到刺激后变成目标形状？",
      "data": "56,250 个原始设计，经 16 倍几何对称增强得到 900,000 组数据；总数据量包含训练与验证数据，不等于独立仿真次数。",
      "dataSource": "有限元仿真与 4D 打印形变实验",
      "dataType": "15 × 15 × 2 二值材料分布 → 表面三维坐标",
      "availability": "作者公开设计与有限元案例",
      "aiMethod": "ResNet-51 学习前向形状映射；ML-GD、ML-EA 及全局—局部策略参与逆向布局优化。",
      "pipeline": [
        {
          "title": "编码材料",
          "detail": "450 个主动／被动材料体素"
        },
        {
          "title": "仿真造数",
          "detail": "有限元与对称增强"
        },
        {
          "title": "学习形状",
          "detail": "训练前向 ResNet"
        },
        {
          "title": "反推布局",
          "detail": "ML-GD / ML-EA 优化"
        },
        {
          "title": "打印验证",
          "detail": "FE 检验与实际形变实验"
        }
      ],
      "result": "论文报告 (x, y) 预测 R² > 0.999，z 预测 R² = 0.995。1,000 次 ML 预测约 3.6 s；对应 FE 比较与硬件条件见完整正文。",
      "validation": "以目标形状、优化布局的 FE 形状及实际打印形变对照验证。",
      "metrics": "坐标预测 R²、前向计算时间、逆向形状误差",
      "boundary": "本站交互实验播放作者公开案例，不执行在线神经网络训练或新的有限元求解。",
      "dataUrl": "https://github.com/XiaohaoSun/ML_4DP_AC_plates",
      "codeUrl": "https://github.com/XiaohaoSun/ML_4DP_AC_plates",
      "image": "assets/active-plates.png",
      "markdownUrl": "cards/active-plates.md",
      "markdown": "# 材料科学 × 深度学习\n\n## 4D 打印主动板材：从目标形状反推材料排布\n\n这张卡讨论一个直观问题：同一块初始平板中，哪些位置应该放主动材料、哪些位置应该放被动材料，才能在受到刺激后变成目标形状？交互样例使用作者公开的真实材料布局与有限元结果，帮助读者比较不同设计。\n\n### 论文来源\n\n- 原题：**Machine learning-enabled forward prediction and inverse design of 4D-printed active plates**\n- 作者：Xiaohao Sun、Liang Yue、Luxia Yu、Connor T. Forte、Connor D. Armstrong、Kun Zhou、Frédéric Demoly、Ruike Renee Zhao、H. Jerry Qi。\n- 期刊：**Nature Communications 15, 5509 (2024)**。\n- DOI：[10.1038/s41467-024-49775-z](https://doi.org/10.1038/s41467-024-49775-z)。\n- [出版页](https://www.nature.com/articles/s41467-024-49775-z)；[开放全文](https://pmc.ncbi.nlm.nih.gov/articles/PMC11217466/)。\n- PMCID：PMC11217466；开放获取，论文采用 CC BY 4.0。\n- 本次使用用户指定的已采集批次 `MAT-AI-20260811-01` 中的 `paper-20a4a1475e670d5f`，并用开放全文与作者仓库补全细节。未核实 OpenAlex ID，本样例不填造该字段。\n\n### 01 数据与研究问题\n\n主动复合材料由响应不同的材料组成。本研究把受到刺激会膨胀的主动材料编码为 **1**，不响应的被动材料编码为 **0**。\n\n论文研究的双层板尺寸为 **40 × 40 × 1 mm**，划分成 **15 × 15 × 2 = 450 个体素**。二值材料分布有 **2^450** 种可能。正向问题是“给定布局，预测形状”；逆向问题是“给定目标形状，寻找布局”。\n\n作者通过有限元（FE）仿真获得材料—形状数据：\n\n| 数据项目 | 原文信息 |\n|---|---|\n| 原始设计数 | 56,250 |\n| 完全随机设计 | 31,250 |\n| 岛状设计 | 25,000 |\n| 对称增强 | 每组数据扩展为 16 组 |\n| 增强后总数据量 | 900,000 组，包含训练与验证数据 |\n| 模型输入 | 15 × 15 × 2 的二值材料分布 |\n| 模型输出 | 16 × 16 个中面采样点的三维坐标 |\n\n依据：正文 “Physical problem and dataset” 与 Fig. 2。总数据量不等同于独立仿真次数。\n\n### 02 AI 如何参与\n\n前向模型采用 **ResNet-51**。作者分别用两个网络学习 **(x, y)** 和 **z** 坐标，将材料布局映射成变形后的表面。统一边界条件的表示和对称增强有助于学习这一映射。\n\n逆向设计把前向网络放进优化循环：\n\n- **ML-GD**：结合梯度下降和自动微分更新设计变量。\n- **ML-EA**：用演化算法探索候选布局，以快速前向模型评价候选。\n- **全局—局部策略**：先在整体设计空间内搜索，再定位误差较大的区域，用 ML-EA 局部优化。\n\n论文还对不规则目标形状采用**基于法向距离的损失函数**。这里的 normal distance 应译为“法向距离”；当前交互选择的是 FE 导出目标，显示的是对应角点欧氏距离，不将两种误差定义混用。\n\n### 03 五步 Pipeline\n\n**编码材料 → 仿真造数 → 学习形状 → 反推布局 → 打印验证**\n\n1. **编码材料**：把主动与被动材料写成 450 个二值体素。\n2. **仿真造数**：计算给定布局的变形坐标，并通过几何对称性扩充数据。\n3. **学习形状**：训练前向 ResNet，快速近似材料布局与形状之间的映射。\n4. **反推布局**：用 ML-GD 或 ML-EA 搜索，再针对较大误差区域细化设计。\n5. **打印验证**：通过 FE 检验模型优化布局，并用 4D 打印与形变实验验证。\n\n### 04 论文报告的结果与评价\n\n| 评价维度 | 论文报告 |\n|---|---|\n| (x, y) 坐标预测 | R² > 0.999 |\n| z 坐标预测 | R² = 0.995；进一步利用对称性可增强预测 |\n| 前向预测耗时 | 1,000 次 ML 预测约 3.6 s |\n| 对应 FE 耗时 | 完全随机设计约 11 h，岛状设计约 28 h |\n| 逆向设计验证 | 比较目标、ML 优化形状、FE 检验形状及打印后的实际形状 |\n\n依据：正文 “Performance of machine-learning model”、Table 1、Fig. 5。速度比较有具体硬件条件：单核 Intel Core i9-10900 与 NVIDIA Quadro P620。该结果不能直接等同于任意硬件、任意材料体系上的速度。\n\n### 05 本张卡可以怎样操作\n\n打开同目录的 **打开交互论文卡.html**：\n\n1. 选择目标 A 或 B；分别对应 Fig. 5 第三行和第二行的作者案例。\n2. 选择原始布局、全局搜索或局部优化结果；目标 B 还可比较不同初始化的 ML-GD 结果。\n3. 切换上层与下层；点击任一格子，查看其编码并在三维表面中定位。\n4. 拖动阶段滑块或播放形变；拖动三维表面旋转，滚轮缩放。\n5. 叠加目标末态，查看材料着色或末态偏差着色；点击对照条形图切换方案。\n6. 导出当前视图 PNG、交互数据 JSON 或当前材料布局 CSV。\n\n### 06 交互数据与计算口径\n\n本样例读取 **2 组目标、11 份布局、每份 450 个体素、每份 46 × 46 个中面节点**。每份形状包含初始平板及作者保存的 5 个 FE 形变帧。\n\n这些是作者已经得到的优化设计与 FE 检验结果。浏览器没有实时运行原始 ResNet、优化器或 FE 求解器；网格点击是查看与定位，不修改布局。自动播放的帧间过渡仅用于视觉连续性，不表示真实时间。\n\n平均对应点偏差的重算步骤为：按作者转换边界条件统一坐标方向，取 16 × 16 个体素角点，计算优化设计的 FE 末态与目标末态的欧氏距离，再对 256 个距离求均值。百分比等于均值除以 40 mm。\n\n例如目标 A：\n\n| 方案 | 末态平均偏差（mm） | 占 40 mm 边长 | 相对原始布局改变的体素 |\n|---|---:|---:|---:|\n| 全局 ML-EA | 0.830 | 2.075% | 196 |\n| 局部优化 1 | 0.634 | 1.585% | 202 |\n| 局部优化 2 | 0.599 | 1.497% | 194 |\n| 局部优化 3 | 0.654 | 1.634% | 197 |\n\n以上数值由作者公开 CSV 重算，区别于上文直接引用的论文总体预测指标。初始原布局是目标的生成来源，其误差为 0，不作为优化算法的竞争基线。\n\n从这组数据可以观察到：许多体素改变后，形状仍可逼近同一目标；继续局部优化也不保证 FE 对应点误差始终下降。这些观察限于所展示案例。\n\n### 07 数据与代码入口\n\n- [作者代码仓库与案例数据](https://github.com/XiaohaoSun/ML_4DP_AC_plates)。\n- [完整数据集与预训练模型入口](https://www.kaggle.com/datasets/sunxiaohao/dataset-for-active-shapes-of-ac-plates)。\n- 具体交互案例位于作者仓库 `InverseDesign1`：`special_*.txt` 保存布局，`outs-Nocut2_*.csv` 保存 FE 坐标和位移。\n- 本次读取已公开案例数据，未下载或运行完整训练数据集、预训练模型，也未重新进行打印实验。\n- 坐标转换参考 `functions/data_convertBC1.m` 与 `functions/readFEA_convBC_frame.m`；计算点选择参考 `functions/ShapeDistP2P.m`。\n\n### 交付状态\n\n完整正文、交互 HTML、PNG、数据、处理源文件与来源核验记录保留在本目录。此交付为交互样例，等待用户审阅。\n\n### 本卡交付入口\n\n- [交互 HTML](打开交互论文卡.html)\n- [静态分享 PNG](论文卡片_静态分享.png)\n- [分享卡可编辑 HTML](论文卡片_静态分享.html)\n- [来源核验](来源与核验.json)\n",
      "interactive": "lab/打开交互论文卡.html",
      "sourceReview": "pending_publish_review",
      "batch": "MAT-AI-20260811-01"
    },
    {
      "slug": "contact-pinn",
      "major": "机械工程",
      "short": "把接触力学，写进神经网络",
      "summary": "把边界条件和接触约束纳入 PINN，在同一框架中研究正问题、参数反演与代理求解。",
      "methods": [
        "物理融合",
        "逆问题"
      ],
      "method": "PINN · 物理约束",
      "metric": "PINN",
      "metricLabel": "物理信息建模",
      "color": "#806432",
      "tone": "#F4EFE4",
      "id": "paper-fb8ee3ea85de8e56",
      "title": "小变形弹性接触力学的正问题、反问题与快速代理求解",
      "originalTitle": "Solving forward and inverse problems of contact mechanics using physics-informed neural networks",
      "venue": "Advanced Modeling and Simulation in Engineering Sciences",
      "year": 2024,
      "doi": "10.1186/s40323-024-00265-3",
      "sourceUrl": "https://doi.org/10.1186/s40323-024-00265-3",
      "question": "小变形弹性接触力学的正问题、反问题与快速代理求解",
      "data": "Hertz接触等解析/数值基准；同时验证纯PDE求解、数据增强正问题、参数识别和代理模型",
      "dataSource": "公开论文中的Hertz接触基准",
      "dataType": "边界条件 · 位移应力场 · 反演参数",
      "availability": "部分公开",
      "aiMethod": "混合变量PINN以输出变换硬约束边界，用Fischer–Burmeister函数将KKT接触不等式写入损失",
      "pipeline": [
        {
          "title": "接触方程定义",
          "detail": ""
        },
        {
          "title": "边界硬约束",
          "detail": ""
        },
        {
          "title": "KKT损失构建",
          "detail": ""
        },
        {
          "title": "混合优化训练",
          "detail": ""
        },
        {
          "title": "正反问题验证",
          "detail": ""
        }
      ],
      "result": "PINN在Hertz接触上同时完成纯PDE求解、数据增强正问题、参数识别和快速代理；论文还确认损失权重及Adam+L-BFGS-B对精度/时间至关重要。",
      "validation": "",
      "metrics": "位移/应力误差 · KKT残差 · 参数反演误差 · 训练时间",
      "boundary": "基准算例上的求解能力不代表已覆盖复杂摩擦、大变形或材料非线性。",
      "dataUrl": "https://amses-journal.springeropen.com/articles/10.1186/s40323-024-00265-3",
      "codeUrl": "",
      "image": "assets/contact-pinn.png",
      "markdownUrl": "cards/contact-pinn.md",
      "markdown": "# 机械工程 × 物理信息神经网络\n\n## 小变形弹性接触力学的正问题、反问题与快速代理求解\n\n> 状态：`base_cards_complete_no_drawing` / `pending_publish_review`。本文件是可核验基础卡，不代表绘图或发布批准。\n\n### 论文来源\n\n- 原论文：Solving forward and inverse problems of contact mechanics using physics-informed neural networks\n- 期刊/会议：Advanced Modeling and Simulation in Engineering Sciences（2024）\n- 发表日期：2024-05-03\n- DOI：[10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)\n- 正式来源：[https://doi.org/10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)\n- OpenAlex：[https://openalex.org/W4396624511](https://openalex.org/W4396624511)（仅用于发现与元数据；OA=gold）\n- 一手证据：[https://elib.dlr.de/203753/1/s40323-024-00265-3.pdf](https://elib.dlr.de/203753/1/s40323-024-00265-3.pdf)\n- 一手证据类别：`institutional_repository_published_manuscript`\n- 本地原始证据：`E:\\常用工作资料\\11_论文墙文件\\29专业论文检索与制卡_20260830\\批次02_工程与控制\\formal_content_cache\\selected\\fb8ee3ea85de8e56\\attempt-01.pdf`\n- 本地抽取正文：`E:\\常用工作资料\\11_论文墙文件\\29专业论文检索与制卡_20260830\\批次02_工程与控制\\formal_content_cache\\selected\\fb8ee3ea85de8e56\\attempt-01.txt`\n\n### 01 数据与问题\n\n- 数据来源：公开论文中的Hertz接触基准\n- 数据集/样本：Hertzian contact benchmark\n- 数据规模：Hertz接触等解析/数值基准；同时验证纯PDE求解、数据增强正问题、参数识别和代理模型\n- 数据格式：边界条件、位移应力场、反演参数\n- 数据类型：接触力学方程、解析/数值基准\n- 数据状态：部分公开\n- 给模型看什么：边界条件、位移应力场、反演参数\n- 让模型判断/完成什么：小变形弹性接触力学的正问题、反问题与快速代理求解\n- 事实定位：数据情况.json与可读一手证据审计\n\n### 02 AI 怎么参与\n\n- AI技术：物理信息神经网络\n- 核心方法：混合变量PINN以输出变换硬约束边界，用Fischer–Burmeister函数将KKT接触不等式写入损失\n- 实际作用：物理信息神经网络用于小变形弹性接触力学的正问题、反问题与快速代理求解\n- 方法定位：institutional_repository_published_manuscript方法定位；详见evidence_used.json与E:\\常用工作资料\\11_论文墙文件\\29专业论文检索与制卡_20260830\\批次02_工程与控制\\formal_content_cache\\selected\\fb8ee3ea85de8e56\\attempt-01.txt\n\n### 03 论文 Pipeline\n\n1. 接触方程定义\n2. 边界硬约束\n3. KKT损失构建\n4. 混合优化训练\n5. 正反问题验证\n\n### 04 指标与成果\n\n- 重点指标：位移/应力误差、KKT残差、参数反演误差、训练时间\n- 代表结果：PINN在Hertz接触上同时完成纯PDE求解、数据增强正问题、参数识别和快速代理；论文还确认损失权重及Adam+L-BFGS-B对精度/时间至关重要。\n- 结果定位：institutional_repository_published_manuscript结果定位；详见evidence_used.json与E:\\常用工作资料\\11_论文墙文件\\29专业论文检索与制卡_20260830\\批次02_工程与控制\\formal_content_cache\\selected\\fb8ee3ea85de8e56\\attempt-01.txt\n- 使用边界：基准算例上的求解能力不代表已覆盖复杂摩擦、大变形或材料非线性。\n\n### 数据与代码入口\n\n- 数据入口：https://amses-journal.springeropen.com/articles/10.1186/s40323-024-00265-3\n- 代码入口：论文未提供可核实的独立开源入口\n\n### 本地交付物\n\n- 卡面 PNG：[card.png](<E:/常用工作资料/11_论文墙文件/论文卡片存放/机械工程/AI交叉/B02-MECH-20260830/paper-fb8ee3ea85de8e56/v2.0/card.png>)\n- 可编辑 HTML：[card.html](<E:/常用工作资料/11_论文墙文件/论文卡片存放/机械工程/AI交叉/B02-MECH-20260830/paper-fb8ee3ea85de8e56/v2.0/card.html>)\n- 卡片输入：`E:\\常用工作资料\\11_论文墙文件\\论文卡片存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\v2.0\\card-input.json`\n- 证据清单：`E:\\常用工作资料\\11_论文墙文件\\论文卡片存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\v2.0\\evidence_used.json`\n- 本卡正文：`E:\\常用工作资料\\11_论文墙文件\\论文卡片存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\v2.0\\论文卡片描述.md`\n- 布局测量：`E:\\常用工作资料\\11_论文墙文件\\论文卡片存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\v2.0\\layout.json`\n- 逐卡 QA：`E:\\常用工作资料\\11_论文墙文件\\论文卡片存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\v2.0\\qa.json`\n- 数据情况：`E:\\常用工作资料\\11_论文墙文件\\论文存放\\机械工程\\AI交叉\\B02-MECH-20260830\\paper-fb8ee3ea85de8e56\\数据情况.json`\n\n### 证据说明\n\n- 一手证据 SHA-256：`1a32e1c50db376d93b6df68ed3884834b4cf440c9df1a1ccabea53fc1cf4e63e`\n- 可读正文：2892902 bytes / 75893 chars\n- OpenAlex和Crossref仅承担发现与正式身份核验，不承担方法、数据或结果事实证明。\n- 卡面展示语句均为完整语义压缩，未按字符截断，未使用省略号。\n",
      "interactive": "",
      "sourceReview": "pending_publish_review",
      "batch": "B02-MECH-20260830"
    },
    {
      "slug": "spatial-staig",
      "major": "生物科学",
      "short": "STAIG：看见组织的空间结构",
      "summary": "把基因表达、空间坐标与组织图像放在一起，用图对比学习识别空间域与整合切片。",
      "methods": [
        "深度学习",
        "图对比学习"
      ],
      "method": "图对比学习 · 多模态",
      "metric": "12",
      "metricLabel": "DLPFC 脑切片",
      "color": "#367A6D",
      "tone": "#E9F1EC",
      "id": "paper-9502db2708ebc840",
      "title": "STAIG：融合表达、坐标与组织图像识别空间域",
      "originalTitle": "STAIG: Spatial transcriptomics analysis via image-aided graph contrastive learning for domain exploration and alignment-free integration",
      "venue": "Nature Communications",
      "year": 2025,
      "doi": "10.1038/s41467-025-56276-0",
      "sourceUrl": "https://doi.org/10.1038/s41467-025-56276-0",
      "question": "空间域识别既依赖表达和邻域，也受组织形态影响；跨切片整合还常被配准误差限制。",
      "data": "12 张人脑 DLPFC 切片｜多平台空间组学；基因表达｜空间坐标｜H&E 图像｜标签；10x Visium 等 5 类平台",
      "dataSource": "10x Visium 等 5 类平台",
      "dataType": "基因表达｜空间坐标｜H&E 图像｜标签",
      "availability": "公开论文与相关数据资源",
      "aiMethod": "多模态输入：表达矩阵、空间坐标与 H&E 图像；图像特征提取：提取组织形态的高层表示；图对比学习：融合邻域关系与多模态信息；无配准整合：空间域发现与跨切片比较",
      "pipeline": [
        {
          "title": "多模态输入",
          "detail": "表达矩阵、空间坐标与 H&E 图像"
        },
        {
          "title": "图像特征提取",
          "detail": "提取组织形态的高层表示"
        },
        {
          "title": "图对比学习",
          "detail": "融合邻域关系与多模态信息"
        },
        {
          "title": "无配准整合",
          "detail": "空间域发现与跨切片比较"
        }
      ],
      "result": "12 张 DLPFC：ARI 0.69｜NMI 0.71；在人脑皮层切片上取得最高的中位聚类一致性。",
      "validation": "实验/关键验证；跨 5 类平台完成空间域验证；覆盖 10x Visium、Stereo-seq、Slide-seqV2、STARmap 和 MERFISH。",
      "metrics": "",
      "boundary": "",
      "dataUrl": "https://doi.org/10.1038/s41467-025-56276-0",
      "codeUrl": "",
      "image": "assets/spatial-staig.png",
      "markdownUrl": "cards/spatial-staig.md",
      "markdown": "# 空间转录组 + 图对比学习\n\n## STAIG：融合表达、坐标与组织图像识别空间域\n\n### 01 研究问题\n\n空间域识别既依赖表达和邻域，也受组织形态影响；跨切片整合还常被配准误差限制。\n\n### 02 数据基础\n\n- 数据量：12 张人脑 DLPFC 切片｜多平台空间组学\n- 数据类型：基因表达｜空间坐标｜H&E 图像｜标签\n- 数据来源：10x Visium 等 5 类平台\n\n### 03 核心方法 Pipeline\n\n1. 多模态输入：表达矩阵、空间坐标与 H&E 图像\n2. 图像特征提取：提取组织形态的高层表示\n3. 图对比学习：融合邻域关系与多模态信息\n4. 无配准整合：空间域发现与跨切片比较\n\n### 04 代表结果\n\n12 张 DLPFC：ARI 0.69｜NMI 0.71\n\n在人脑皮层切片上取得最高的中位聚类一致性。\n\n### 05 实验/关键验证\n\n跨 5 类平台完成空间域验证\n\n覆盖 10x Visium、Stereo-seq、Slide-seqV2、STARmap 和 MERFISH。\n\n来源：Nature Communications (2025)｜DOI: 10.1038/s41467-025-56276-0\n",
      "interactive": "",
      "sourceReview": "approved_for_publish",
      "batch": "BIO-AI-20260808-01"
    },
    {
      "slug": "ai-learning",
      "major": "教育学",
      "short": "AI 导师，真的帮助学习了吗？",
      "summary": "通过高中数学课堂随机实验，区分 AI 带来的练习表现提升与脱离 AI 后的技能习得。",
      "methods": [
        "生成式AI"
      ],
      "method": "GPT-4 · 现场随机实验",
      "metric": "近 1,000",
      "metricLabel": "参与实验的学生",
      "color": "#536DA0",
      "tone": "#EDF0F7",
      "id": "paper-194533bac8b6300f",
      "title": "生成式AI对高中数学技能习得的现场随机实验",
      "originalTitle": "Generative AI without guardrails can harm learning: Evidence from high school mathematics",
      "venue": "PNAS",
      "year": 2025,
      "doi": "10.1073/pnas.2422633122",
      "sourceUrl": "https://www.pnas.org/doi/10.1073/pnas.2422633122",
      "question": "生成式AI对高中数学技能习得的现场随机实验",
      "data": "High-school mathematics RCT；土耳其一所高中近1,000名9—11年级学生，四次90分钟课堂",
      "dataSource": "",
      "dataType": "高中数学学习、随机实验数据",
      "availability": "公开",
      "aiMethod": "GPT-4基础导师与带教学护栏的GPT Tutor",
      "pipeline": [
        {
          "title": "教学素材",
          "detail": ""
        },
        {
          "title": "提示与护栏",
          "detail": ""
        },
        {
          "title": "内容生成",
          "detail": ""
        },
        {
          "title": "学习实验",
          "detail": ""
        },
        {
          "title": "效果评估",
          "detail": ""
        }
      ],
      "result": "无护栏AI提高练习表现却可能损害脱离AI后的成绩；教师提示护栏缓解该问题",
      "validation": "",
      "metrics": "学习增益、任务表现、体验、内容质量",
      "boundary": "生成式教学内容需由教师复核，并设置教学护栏。",
      "dataUrl": "https://github.com/obastani/GenAICanHarmLearning",
      "codeUrl": "https://github.com/obastani/GenAICanHarmLearning",
      "image": "assets/ai-learning.png",
      "markdownUrl": "cards/ai-learning.md",
      "markdown": "# 教育学 × 生成式AI\n\n## 生成式AI对高中数学技能习得的现场随机实验\n\n- 原论文：Generative AI without guardrails can harm learning: Evidence from high school mathematics\n- 期刊/会议：PNAS（2025）\n- DOI：[10.1073/pnas.2422633122](https://doi.org/10.1073/pnas.2422633122)\n- 正式来源：[https://www.pnas.org/doi/10.1073/pnas.2422633122](https://www.pnas.org/doi/10.1073/pnas.2422633122)\n\n### 01 数据与问题\n\n- 数据基础：High-school mathematics RCT；土耳其一所高中近1,000名9—11年级学生，四次90分钟课堂\n- 数据状态：公开\n- 给模型看什么：高中数学学习、随机实验数据\n- 让模型判断什么：生成式AI对高中数学技能习得的现场随机实验\n\n### 02 AI 怎么参与\n\n- 核心方法：GPT-4基础导师与带教学护栏的GPT Tutor\n- 实际作用：从高中数学学习、随机实验数据中学习关键模式，用于生成式AI对高中数学技能习得的现场随机实验\n\n### 03 论文 Pipeline\n\n- 教学素材 → 提示与护栏 → 内容生成 → 学习实验 → 效果评估\n\n### 04 指标与成果\n\n- 最后得到：生成式AI对高中数学技能习得的现场随机实验结果、比较证据与可复核结论\n- 重点指标：学习增益、任务表现、体验、内容质量\n- 论文报告：无护栏AI提高练习表现却可能损害脱离AI后的成绩；教师提示护栏缓解该问题\n- 使用边界：生成式教学内容需由教师复核，并设置教学护栏。\n\n### 数据与代码\n\n- 数据入口：https://github.com/obastani/GenAICanHarmLearning\n- 代码入口：https://github.com/obastani/GenAICanHarmLearning\n",
      "interactive": "",
      "sourceReview": "pending_publish_review",
      "batch": "EDU-AI-20260822-01"
    },
    {
      "slug": "global-water",
      "major": "环境科学",
      "short": "让过程方程学习全球水循环",
      "summary": "融合物理过程与可微学习，刻画全球水文响应，并诊断长期的水分配与基流变化。",
      "methods": [
        "物理融合"
      ],
      "method": "物理嵌入 · 可微学习",
      "metric": "20 年",
      "metricLabel": "水文变化跨度",
      "color": "#397C8A",
      "tone": "#E9F1F3",
      "id": "paper-9656e52715bfd45f",
      "title": "让过程方程与大数据共同学习全球水循环",
      "originalTitle": "Distinct hydrologic response patterns and trends worldwide revealed by physics-embedded learning",
      "venue": "Nature Communications",
      "year": 2025,
      "doi": "10.1038/s41467-025-64367-1",
      "sourceUrl": "https://www.nature.com/articles/s41467-025-64367-1",
      "question": "全球水文模型对非线性、季节性响应与长期趋势的刻画不足，难以服务局地水管理。",
      "data": "全球｜20 年｜月/日模拟；径流｜蒸散｜基流｜气象；GRDC｜MSWEP/MSWX｜MERIT",
      "dataSource": "GRDC｜MSWEP/MSWX｜MERIT",
      "dataType": "径流｜蒸散｜基流｜气象",
      "availability": "以论文正式页面或数据可用性声明为准",
      "aiMethod": "过程模型：水量平衡与河网路由；可微学习：从多尺度数据学习参数；全球模拟：月尺度与日尺度水文响应；特征诊断：基流、径流弹性与变化趋势",
      "pipeline": [
        {
          "title": "过程模型",
          "detail": "水量平衡与河网路由"
        },
        {
          "title": "可微学习",
          "detail": "从多尺度数据学习参数"
        },
        {
          "title": "全球模拟",
          "detail": "月尺度与日尺度水文响应"
        },
        {
          "title": "特征诊断",
          "detail": "基流、径流弹性与变化趋势"
        }
      ],
      "result": "部分水文响应 20 年变化超过 20%；模型识别全球绿水—蓝水分配和基流比的广泛变化。",
      "validation": "实验/关键验证；月尺度与日尺度更准确；数据、模拟与 δHBV 代码均提供公开入口。",
      "metrics": "",
      "boundary": "",
      "dataUrl": "https://www.nature.com/articles/s41467-025-64367-1",
      "codeUrl": "",
      "image": "assets/global-water.png",
      "markdownUrl": "cards/global-water.md",
      "markdown": "# 全球水文 + 物理嵌入学习\n\n## 让过程方程与大数据共同学习全球水循环\n\n### 01 研究问题\n\n全球水文模型对非线性、季节性响应与长期趋势的刻画不足，难以服务局地水管理。\n\n### 02 数据基础\n\n- 数据量：全球尺度｜过去 20 年｜月/日模拟\n- 数据类型：径流｜蒸散｜基流｜气象驱动\n- 数据来源：公开输入数据｜GRDC｜MSWEP/MSWX｜MERIT-Basins\n\n### 03 核心方法 Pipeline\n\n1. 过程模型：水量平衡与河网路由\n2. 可微学习：从多尺度数据学习参数\n3. 全球模拟：月尺度与日尺度水文响应\n4. 特征诊断：基流、径流弹性与变化趋势\n\n### 04 代表结果\n\n部分水文响应 20 年变化超过 20%\n\n模型识别全球绿水—蓝水分配和基流比的广泛变化。\n\n### 05 实验/关键验证\n\n月尺度与日尺度更准确\n\n数据、模拟与 δHBV 代码均提供公开入口。\n\n来源：Nature Communications 16, 9169 (2025)｜DOI: 10.1038/s41467-025-64367-1\n",
      "interactive": "",
      "sourceReview": "pending_publish_review",
      "batch": "ENV-AI-20260811-01"
    },
    {
      "slug": "soft-robot",
      "major": "控制工程",
      "short": "让软体机械臂学会搬运",
      "summary": "利用视觉感知和无模型强化学习，从真实机器人交互中学习协调驱动与物体搬运。",
      "methods": [
        "强化学习"
      ],
      "method": "视觉感知 · 强化学习",
      "metric": "实机",
      "metricLabel": "物体搬运验证",
      "color": "#6C658D",
      "tone": "#EFEDF5",
      "id": "paper-26681fbe1c1f1ee0",
      "title": "软体机械臂末端轨迹和物体搬运控制",
      "originalTitle": "Vision-based reinforcement learning control of soft robot manipulators",
      "venue": "Robotic Intelligence and Automation",
      "year": 2024,
      "doi": "10.1108/ria-01-2024-0002",
      "sourceUrl": "https://www.sciencedirect.com/org/science/article/pii/S2754696924000320",
      "question": "软体机械臂末端轨迹和物体搬运控制",
      "data": "Physical soft-robot experiments；真实软体机械臂闭环交互采样与物理搬运实验",
      "dataSource": "",
      "dataType": "真实机器人视觉、状态—动作轨迹",
      "availability": "未公开",
      "aiMethod": "视觉感知与无模型强化学习",
      "pipeline": [
        {
          "title": "视觉采集",
          "detail": ""
        },
        {
          "title": "状态编码",
          "detail": ""
        },
        {
          "title": "策略训练",
          "detail": ""
        },
        {
          "title": "轨迹跟踪",
          "detail": ""
        },
        {
          "title": "实机搬运",
          "detail": ""
        }
      ],
      "result": "无需解析模型即可学习协调驱动策略并成功完成物体搬运",
      "validation": "",
      "metrics": "跟踪误差、约束违反、稳定性、控制成本",
      "boundary": "部署前须完成安全约束、异常工况和实机验证。",
      "dataUrl": "",
      "codeUrl": "",
      "image": "assets/soft-robot.png",
      "markdownUrl": "cards/soft-robot.md",
      "markdown": "# 控制工程 × 强化学习\n\n## 软体机械臂末端轨迹和物体搬运控制\n\n- 原论文：Vision-based reinforcement learning control of soft robot manipulators\n- 期刊/会议：Robotic Intelligence and Automation（2024）\n- DOI：[10.1108/ria-01-2024-0002](https://doi.org/10.1108/ria-01-2024-0002)\n- 正式来源：[https://www.sciencedirect.com/org/science/article/pii/S2754696924000320](https://www.sciencedirect.com/org/science/article/pii/S2754696924000320)\n\n### 01 数据与问题\n\n- 数据基础：Physical soft-robot experiments；真实软体机械臂闭环交互采样与物理搬运实验\n- 数据状态：未公开\n- 给模型看什么：真实机器人视觉、状态—动作轨迹\n- 让模型判断什么：软体机械臂末端轨迹和物体搬运控制\n\n### 02 AI 怎么参与\n\n- 核心方法：视觉感知与无模型强化学习\n- 实际作用：从真实机器人视觉、状态—动作轨迹中学习关键模式，用于软体机械臂末端轨迹和物体搬运控制\n\n### 03 论文 Pipeline\n\n- 视觉采集 → 状态编码 → 策略训练 → 轨迹跟踪 → 实机搬运\n\n### 04 指标与成果\n\n- 最后得到：软体机械臂末端轨迹和物体搬运控制结果、比较证据与可复核结论\n- 重点指标：跟踪误差、约束违反、稳定性、控制成本\n- 论文报告：无需解析模型即可学习协调驱动策略并成功完成物体搬运\n- 使用边界：部署前须完成安全约束、异常工况和实机验证。\n\n### 数据与代码\n\n- 数据入口：论文未提供独立公开入口\n- 代码入口：论文未提供独立开源入口\n",
      "interactive": "",
      "sourceReview": "pending_publish_review",
      "batch": "CONTROL-RL-20260822-01"
    },
    {
      "slug": "ai-tutor-learning-gains",
      "major": "教育学",
      "short": "AI 数学辅导：从提示到学习增益",
      "summary": "把预先生成的数学提示放入随机实验，比较 ChatGPT、人类提示与对照条件的学习增益。",
      "methods": [
        "生成式AI",
        "随机实验"
      ],
      "method": "生成式 AI · 随机实验",
      "metric": "17.00",
      "metricLabel": "ChatGPT 组平均增益（百分点）",
      "color": "#176F7A",
      "tone": "#E5F4F2",
      "id": "triptych-tutor",
      "title": "教育学 × 生成式 AI｜AI 提示，真的帮助学习吗？",
      "originalTitle": "ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills",
      "venue": "PLOS ONE 19(5), e0304013 (2024)",
      "year": 2024,
      "doi": "10.1371/journal.pone.0304013",
      "sourceUrl": "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0304013",
      "question": "将 AI 预先生成的数学解题提示放入教学系统，能否带来学习增益？与人工编写的提示和无完整解题提示的对照相比，效果如何？",
      "data": "3 × 4 随机实验设计；三种提示条件与四类数学主题交叉。公开分析数据包含 274 位完成实验的 Mechanical Turk 参与者：对照 90 人、人工提示 86 人、ChatGPT 提示 98 人。题型为初等代数、中等代数、大学代数、统计学。",
      "dataSource": "3 × 4 随机实验设计；三种提示条件与四类数学主题交叉。公开分析数据包含 274 位完成实验的 Mechanical Turk 参与者：对照 90 人、人工提示 86 人、ChatGPT 提示 98 人。题型为初等代数、中等代数、大学代数、统计学。",
      "dataType": "3 × 4 随机实验；274 位参与者",
      "availability": "作者公开参与者数据；固定、预先检查的提示",
      "aiMethod": "ChatGPT 用于预先生成数学问题的解题帮助内容；研究对帮助质量进行检查，并研究自一致性减少错误的方法。AI 并不是从这 274 人的成绩中训练出来的成绩预测器，参与者也不是在实验中与实时聊天机器人自由对话。",
      "pipeline": [
        {
          "title": "从 OpenStax 选定四类数学主题与题目"
        },
        {
          "title": "准备人工编写与 ChatGPT 生成的帮助内容并检查质量"
        },
        {
          "title": "将参与者随机分配到一种提示条件与一个数学主题"
        },
        {
          "title": "完成前测、学习阶段和后测，记录会话时间"
        },
        {
          "title": "比较学习增益、组间差异与提示质量"
        }
      ],
      "result": "公开数据重算：对照、人工提示、ChatGPT 条件的平均学习增益分别为 1.85、11.62、17.00 个百分点；ChatGPT 与对照的事后检验 p = 0.011。",
      "validation": "前测/后测、组间事后检验与提示质量检查。",
      "metrics": "前测 / 后测正确率（%）、learningGain（百分点）、sessionTime（分钟）；提示内容质量检查。网页版按题型、实验组筛选，并查看匿名个体记录。",
      "boundary": "研究使用当时版本的 ChatGPT 和固定、预先检查的提示，样本来自 Mechanical Turk。对照条件仍有答题反馈及可直接给出答案的 bottom-out hint，因此“无提示”不表示完全没有支持。不能由本研究外推为今天所有 AI 导师胜过教师。按题型展示仅作描述统计，页面不重新宣称统计显著。",
      "dataUrl": "https://doi.org/10.6084/m9.figshare.23935269",
      "codeUrl": "https://github.com/CAHLR/OATutor-GPT-Study",
      "image": "creative/originals/tutor.png",
      "markdownUrl": "creative/originals/tutor.md",
      "markdown": "# 三张论文卡片：完整正文与来源追踪\r\n\r\n核验日期：2026-09-12。三篇均选自现有论文卡片库；以下为此次核验后的完整版本。原稿保留在 originals/，不覆盖原交付。\r\n\r\n## 1. 教育学 × 生成式 AI｜AI 提示，真的帮助学习吗？\r\n\r\n呈现形式：交互论文卡；[打开作品](interactive.html)。\r\n\r\n- 原论文：ChatGPT-generated help produces learning gains equivalent to human tutor-authored help on mathematics skills\r\n- 作者：Zachary A. Pardos; Shreya Bhandari\r\n- 出处：PLOS ONE 19(5), e0304013 (2024)\r\n- 发表：2024-05-24\r\n- DOI：[ 10.1371/journal.pone.0304013 ](https://doi.org/10.1371/journal.pone.0304013)\r\n\r\n### 01 数据与问题\r\n\r\n将 AI 预先生成的数学解题提示放入教学系统，能否带来学习增益？与人工编写的提示和无完整解题提示的对照相比，效果如何？\r\n\r\n3 × 4 随机实验设计；三种提示条件与四类数学主题交叉。公开分析数据包含 274 位完成实验的 Mechanical Turk 参与者：对照 90 人、人工提示 86 人、ChatGPT 提示 98 人。题型为初等代数、中等代数、大学代数、统计学。\r\n\r\n### 02 AI 方法\r\n\r\nChatGPT 用于预先生成数学问题的解题帮助内容；研究对帮助质量进行检查，并研究自一致性减少错误的方法。AI 并不是从这 274 人的成绩中训练出来的成绩预测器，参与者也不是在实验中与实时聊天机器人自由对话。\r\n\r\n### 03 五步 Pipeline\r\n\r\n1. 从 OpenStax 选定四类数学主题与题目\r\n2. 准备人工编写与 ChatGPT 生成的帮助内容并检查质量\r\n3. 将参与者随机分配到一种提示条件与一个数学主题\r\n4. 完成前测、学习阶段和后测，记录会话时间\r\n5. 比较学习增益、组间差异与提示质量\r\n\r\n### 04 指标与结果\r\n\r\n前测 / 后测正确率（%）、learningGain（百分点）、sessionTime（分钟）；提示内容质量检查。网页版按题型、实验组筛选，并查看匿名个体记录。\r\n\r\n- 原数据重算：无提示对照平均增益 1.85 个百分点，人工提示 11.62 个百分点，ChatGPT 提示 17.00 个百分点。\r\n- 论文的组间事后检验：ChatGPT 与对照 p = 0.011；人工提示与对照 p = 0.087；ChatGPT 与人工提示 p = 0.416。最后一项表示未检出显著差异，不等于完成严格的等效性证明。\r\n- 原文报告，初始 ChatGPT 帮助的质量检查失败比例为 32%；自一致性可将代数问题降至接近 0%，统计问题降至 13%。这组质量检查数据与参与者学习增益属于不同分析，不混用为一个指标。\r\n\r\n### 05 证据边界\r\n\r\n研究使用当时版本的 ChatGPT 和固定、预先检查的提示，样本来自 Mechanical Turk。对照条件仍有答题反馈及可直接给出答案的 bottom-out hint，因此“无提示”不表示完全没有支持。不能由本研究外推为今天所有 AI 导师胜过教师。按题型展示仅作描述统计，页面不重新宣称统计显著。\r\n\r\n### 06 作品的数据与视觉口径\r\n\r\n直接读取作者 CSV 的 learningGain 字段计算组均值；preTest/postTest 源值保留三位小数，均值相减与 learningGain 可能存在微小舍入差异。分题型与用时探索由同一公开数据计算。个体图的横向错位仅为防止圆点重叠，不编码新变量。\r\n\r\n### 07 论文、数据与代码入口\r\n\r\n- [原论文全文](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0304013)\r\n- [作者公开参与者数据 · CC BY 4.0](https://doi.org/10.6084/m9.figshare.23935269)\r\n- [作者实验系统代码](https://github.com/CAHLR/OATutor-GPT-Study)\r\n- [作者实验系统演示](https://cahlr.github.io/OATutor-GPT-Study)\r\n- [本地原始 CSV](data/Participants.csv)\r\n- [本地重算汇总 CSV](data/tutor-group-summary.csv)\r\n- [原卡完整正文](originals/tutor.md)\r\n- [原卡 PNG](originals/tutor.png)\r\n\r\n### 08 此次补充与修正\r\n\r\n补充了旧卡缺失的独立代码入口；将“AI 从实验成绩中学习关键模式”改为论文实际角色——预先生成解题帮助；补齐组间检验与对照条件边界。\r\n",
      "interactive": "creative/interactive.html",
      "creativeForm": "交互论文卡 · 学习证据实验台",
      "sourceReview": "verified_source",
      "batch": "PAPER-TRIPTYCH-20260912"
    },
    {
      "slug": "mattergen-materials-design",
      "major": "材料科学",
      "short": "MatterGen：从性质约束到候选晶体",
      "summary": "用联合扩散模型生成满足组成、对称性或性质条件的无机晶体，并把生成、计算与实验放在同一条证据链上。",
      "methods": [
        "生成式AI",
        "材料设计"
      ],
      "method": "MatterGen · 条件扩散",
      "metric": "2×",
      "metricLabel": "SUN 生成比例相对提升",
      "color": "#6248AD",
      "tone": "#F0ECFC",
      "id": "triptych-mattergen",
      "title": "材料科学 × 生成式 AI｜让材料，从性质出发。",
      "originalTitle": "A generative model for inorganic materials design",
      "venue": "Nature 639, 624–632 (2025)",
      "year": 2025,
      "doi": "10.1038/s41586-025-08628-5",
      "sourceUrl": "https://www.nature.com/articles/s41586-025-08628-5",
      "question": "能否由目标组成、对称性或材料性质出发，直接生成稳定且多样的候选晶体，从而扩展对已知材料库进行筛选的设计路线？",
      "data": "基础模型在 Alex-MP-20 数据上训练：607,683 个稳定结构，每个结构至多 20 个原子，来源于 Materials Project 与 Alexandria。输入包含原子元素类型、原子坐标和周期性晶格。作者还公开了论文涉及的 CIF、纳米压痕和 X 射线相关数据。",
      "dataSource": "基础模型在 Alex-MP-20 数据上训练：607,683 个稳定结构，每个结构至多 20 个原子，来源于 Materials Project 与 Alexandria。输入包含原子元素类型、原子坐标和周期性晶格。作者还公开了论文涉及的 CIF、纳米压痕和 X 射线相关数据。",
      "dataType": "607,683 个稳定晶体结构；原子、坐标与周期晶格",
      "availability": "作者代码、数据发布目录与候选 CIF 可获取",
      "aiMethod": "MatterGen 将元素类型 A、原子坐标 X、晶格 L 纳入联合扩散过程。先预训练生成稳定、多样结构的基础模型，再借助适配器对组成、对称性及机械/电子/磁性质条件微调。",
      "pipeline": [
        {
          "title": "整理并预训练 Alex-MP-20 晶体数据"
        },
        {
          "title": "对元素、坐标、周期晶格建立联合扩散过程"
        },
        {
          "title": "通过适配器加入组成、对称性或性质约束"
        },
        {
          "title": "采样候选并用弛豫、DFT 与结构匹配评估"
        },
        {
          "title": "选择候选开展实验，检验结构与性质并审查新颖性"
        }
      ],
      "result": "论文报告相较所比较生成模型，稳定、唯一、新颖（SUN）结构比例超过两倍；TaCr₂O₆ 的四次实验估计为 158 ± 11 GPa，最高估值 169 GPa。",
      "validation": "结构弛豫、DFT、结构匹配与实验测量；同时保留 2026 年后续研究提出的新颖性讨论。",
      "metrics": "SUN 比例、弛豫后结构差异、目标性质与实验估值。SVG 中的晶体投影依据作者公开的 TaCr₂O₆.cif，包含 18 个原子位点，单胞长度为 4.63975247、4.63975247、9.10916345 Å。",
      "boundary": "2026 年 Mikkel Juelsholt 在 Materials Horizons 发表后续分析（DOI 10.1039/D6MH00268D），对该实验样本的新颖性和无序晶体归属提出质疑，认为其与已知且进入训练数据的化合物有关。这里并列呈现原文与后续研究，不自行裁决。生成候选、计算稳定、实验合成及确认新颖性是不同证据层次。",
      "dataUrl": "https://github.com/microsoft/mattergen/tree/main/data-release",
      "codeUrl": "https://github.com/microsoft/mattergen",
      "image": "creative/originals/mattergen.png",
      "markdownUrl": "creative/originals/mattergen.md",
      "markdown": "\r\n## 2. 材料科学 × 生成式 AI｜让材料，从性质出发。\r\n\r\n呈现形式：SVG 矢量卡片；[打开作品](vector.html)。\r\n\r\n- 原论文：A generative model for inorganic materials design\r\n- 作者：Claudio Zeni; Robert Pinsler; Daniel Zügner; et al.\r\n- 出处：Nature 639, 624–632 (2025)\r\n- 发表：2025-01-16（在线发表）；2025-03（卷期）\r\n- DOI：[ 10.1038/s41586-025-08628-5 ](https://doi.org/10.1038/s41586-025-08628-5)\r\n\r\n### 01 数据与问题\r\n\r\n能否由目标组成、对称性或材料性质出发，直接生成稳定且多样的候选晶体，从而扩展对已知材料库进行筛选的设计路线？\r\n\r\n基础模型在 Alex-MP-20 数据上训练：607,683 个稳定结构，每个结构至多 20 个原子，来源于 Materials Project 与 Alexandria。输入包含原子元素类型、原子坐标和周期性晶格。作者还公开了论文涉及的 CIF、纳米压痕和 X 射线相关数据。\r\n\r\n### 02 AI 方法\r\n\r\nMatterGen 将元素类型 A、原子坐标 X、晶格 L 纳入联合扩散过程。先预训练生成稳定、多样结构的基础模型，再借助适配器对组成、对称性及机械/电子/磁性质条件微调。\r\n\r\n### 03 五步 Pipeline\r\n\r\n1. 整理并预训练 Alex-MP-20 晶体数据\r\n2. 对元素、坐标、周期晶格建立联合扩散过程\r\n3. 通过适配器加入组成、对称性或性质约束\r\n4. 采样候选并用弛豫、DFT 与结构匹配评估\r\n5. 选择候选开展实验，检验结构与性质并审查新颖性\r\n\r\n### 04 指标与结果\r\n\r\nSUN 比例、弛豫后结构差异、目标性质与实验估值。SVG 中的晶体投影依据作者公开的 TaCr₂O₆.cif，包含 18 个原子位点，单胞长度为 4.63975247、4.63975247、9.10916345 Å。\r\n\r\n- 原论文报告：相较所比较的先前生成模型，稳定、唯一、新颖（SUN）结构的生成比例超过两倍；此结果对应论文的评价定义与基线，不能泛化为所有材料性能提高两倍。\r\n- 原文以目标体积模量 200 GPa 的 TaCr₂O₆ 候选为实验案例。通过纳米压痕估计杨氏模量，并结合 DFT 计算的泊松比 0.30 估算体积模量。四次测量的结果为 158 ± 11 GPa，最高值 169 GPa。\r\n- 原文“与目标相差 20% 以内”的表述对应最高估值 169 GPa；169 不是四次均值，且体积模量并非直接测量。用 169 和 200 重算相对差为 15.5%，用均值 158 重算则为 21%。\r\n\r\n### 05 证据边界\r\n\r\n2026 年 Mikkel Juelsholt 在 Materials Horizons 发表后续分析（DOI 10.1039/D6MH00268D），对该实验样本的新颖性和无序晶体归属提出质疑，认为其与已知且进入训练数据的化合物有关。这里并列呈现原文与后续研究，不自行裁决。生成候选、计算稳定、实验合成及确认新颖性是不同证据层次。\r\n\r\n### 06 作品的数据与视觉口径\r\n\r\n联合去噪图是自绘机制示意，不是实际采样轨迹；晶胞坐标来自作者有序候选 CIF，不是实验精修后的无序结构。所有 SVG 文字保留为可编辑的 text 元素。网页不运行 MatterGen 模型。作者仓库另注明公开权重经过重训，不与论文训练版本完全相同。\r\n\r\n### 07 论文、数据与代码入口\r\n\r\n- [原论文全文](https://www.nature.com/articles/s41586-025-08628-5)\r\n- [作者模型代码与数据](https://github.com/microsoft/mattergen)\r\n- [作者 data-release 目录](https://github.com/microsoft/mattergen/tree/main/data-release)\r\n- [后续研究 · Materials Horizons 2026](https://doi.org/10.1039/D6MH00268D)\r\n- [后续研究的作者摘要 · PubMed](https://pubmed.ncbi.nlm.nih.gov/42007796/)\r\n- [本地作者有序候选 CIF](data/TaCr2O6.cif)\r\n- [可编辑矢量原文件](assets/mattergen.svg)\r\n- [原卡完整正文](originals/mattergen.md)\r\n- [原卡 PNG](originals/mattergen.png)\r\n\r\n### 08 此次补充与修正\r\n\r\n修正旧卡将 169 GPa 当作一般实测值、将实验新颖性作为确定事实的风险；加入均值/最高估值区别、推算口径及 2026 后续研究。\r\n",
      "interactive": "creative/vector.html",
      "creativeForm": "SVG 矢量卡 · 可编辑材料蓝图",
      "sourceReview": "verified_source",
      "batch": "PAPER-TRIPTYCH-20260912"
    },
    {
      "slug": "bird-digital-twin-forecasting",
      "major": "生态学",
      "short": "鸟类数字孪生：从鸟鸣到每日预测",
      "summary": "把公民科学录音、长期调查与环境信息合并为可日更的鸟类分布预测，并以两套验证集检验增益。",
      "methods": [
        "机器学习",
        "数字孪生"
      ],
      "method": "BirdNET · 生态数字孪生",
      "metric": "0.71→0.77",
      "metricLabel": "App 次日预测平均 AUC",
      "color": "#2D7771",
      "tone": "#E7F5F1",
      "id": "triptych-birds",
      "title": "生态学 × 数字孪生｜一声鸟鸣，如何抵达明天？",
      "originalTitle": "A digital twin for real-time biodiversity forecasting with citizen science data",
      "venue": "Nature Ecology & Evolution 10, 481–495 (2026)",
      "year": 2026,
      "doi": "10.1038/s41559-025-02966-3",
      "sourceUrl": "https://www.nature.com/articles/s41559-025-02966-3",
      "question": "如何将公民科学录音不断转化为可更新的鸟类时空分布预测，同时处理识别能力差异、采样偏差和检测概率问题？",
      "data": "芬兰 MK App 两年产生约 1,500 万鸟类检测；精调 BirdNET 识别 263 种鸟。研究结合长期监测、环境变量和公民录音分类数据。实时预测评估涉及 89 个高频物种；独立专家评估包含 1,185 次 5 分钟点计数，其中 73 个物种用于比较。",
      "dataSource": "芬兰 MK App 两年产生约 1,500 万鸟类检测；精调 BirdNET 识别 263 种鸟。研究结合长期监测、环境变量和公民录音分类数据。实时预测评估涉及 89 个高频物种；独立专家评估包含 1,185 次 5 分钟点计数，其中 73 个物种用于比较。",
      "dataType": "两年约 1,500 万鸟类检测；263 种鸟",
      "availability": "网格化开放记录与作者代码可获取；原始音频不公开",
      "aiMethod": "分类器为芬兰鸟类进行精调和校准；长期信息构建分布、迁徙和检测概率等先验；动态部分采用按空间距离加权的局部似然，在网格中更新空间概率，以支持日更新。网页只解释这一流程，不重新训练分类器或运行完整数字孪生。",
      "pipeline": [
        {
          "title": "公民通过手机提交录音与观察信息"
        },
        {
          "title": "校准后的 BirdNET 识别鸟类，分析使用 90% 置信阈值"
        },
        {
          "title": "结合长期调查、环境与迁徙信息构建先验"
        },
        {
          "title": "通过距离加权的局部似然与新增记录逐日更新"
        },
        {
          "title": "用次日 App 数据与独立专家点计数检验预测"
        }
      ],
      "result": "论文图 5 的 89 个高频物种次日 App 预测平均 AUC 由 0.707437 升至 0.769819；73 个物种的独立专家验证由 0.616487 升至 0.672500。",
      "validation": "用次日 App 数据和 1,185 次独立专家点计数验证；不同物种的增益不同。",
      "metrics": "AUC 是二分类区分能力指标，不是正确率。图中的斜线表示新旧 AUC 相等，斜线上方表示该验证下的 AUC 提升；不能将 AUC 增量当作鸟类数量增长。",
      "boundary": "3D 地形、监听点和章节切换为叙事示意，不对应真实地形、观察坐标或重建的预测栅格。原始音频因隐私原因不公开；开放记录经过网格化与敏感物种位置模糊处理。该作品不提供真实鸟鸣音频或个人位置。研究在芬兰数据上验证，迁移到其他区域需另行验证。",
      "dataUrl": "http://tun.fi/HR.6578",
      "codeUrl": "https://doi.org/10.5281/zenodo.15774443",
      "image": "creative/originals/birds.png",
      "markdownUrl": "creative/originals/birds.md",
      "markdown": "\r\n## 3. 生态学 × 数字孪生｜一声鸟鸣，如何抵达明天？\r\n\r\n呈现形式：空间叙事论文卡；[打开作品](spatial.html)。\r\n\r\n- 原论文：A digital twin for real-time biodiversity forecasting with citizen science data\r\n- 作者：Otso Ovaskainen; Steven Winter; Gleb Tikhonov; et al.\r\n- 出处：Nature Ecology & Evolution 10, 481–495 (2026)\r\n- 发表：2026-01-27\r\n- DOI：[ 10.1038/s41559-025-02966-3 ](https://doi.org/10.1038/s41559-025-02966-3)\r\n\r\n### 01 数据与问题\r\n\r\n如何将公民科学录音不断转化为可更新的鸟类时空分布预测，同时处理识别能力差异、采样偏差和检测概率问题？\r\n\r\n芬兰 MK App 两年产生约 1,500 万鸟类检测；精调 BirdNET 识别 263 种鸟。研究结合长期监测、环境变量和公民录音分类数据。实时预测评估涉及 89 个高频物种；独立专家评估包含 1,185 次 5 分钟点计数，其中 73 个物种用于比较。\r\n\r\n### 02 AI 方法\r\n\r\n分类器为芬兰鸟类进行精调和校准；长期信息构建分布、迁徙和检测概率等先验；动态部分采用按空间距离加权的局部似然，在网格中更新空间概率，以支持日更新。网页只解释这一流程，不重新训练分类器或运行完整数字孪生。\r\n\r\n### 03 五步 Pipeline\r\n\r\n1. 公民通过手机提交录音与观察信息\r\n2. 校准后的 BirdNET 识别鸟类，分析使用 90% 置信阈值\r\n3. 结合长期调查、环境与迁徙信息构建先验\r\n4. 通过距离加权的局部似然与新增记录逐日更新\r\n5. 用次日 App 数据与独立专家点计数检验预测\r\n\r\n### 04 指标与结果\r\n\r\nAUC 是二分类区分能力指标，不是正确率。图中的斜线表示新旧 AUC 相等，斜线上方表示该验证下的 AUC 提升；不能将 AUC 增量当作鸟类数量增长。\r\n\r\n- 原文图 5：89 物种的次日 App 预测平均 AUC 从 0.71 提升到 0.77。本次从图 5 源表逐物种重算为 0.707437 → 0.769819，平均差 0.062382。\r\n- 73 物种的独立专家验证平均 AUC 从 0.62 到 0.67。本次重算为 0.616487 → 0.672500，平均差 0.056013。原文两端四舍五入后相减为 0.05；不能用这个差替代未舍入的逐物种平均差。\r\n- 不同物种的提升并不相同，部分物种可能下降。卡片允许切换两种验证集、选择物种并查看实际 prior、posterior 和差值。\r\n\r\n### 05 证据边界\r\n\r\n3D 地形、监听点和章节切换为叙事示意，不对应真实地形、观察坐标或重建的预测栅格。原始音频因隐私原因不公开；开放记录经过网格化与敏感物种位置模糊处理。该作品不提供真实鸟鸣音频或个人位置。研究在芬兰数据上验证，迁移到其他区域需另行验证。\r\n\r\n### 06 作品的数据与视觉口径\r\n\r\n从论文 Fig.5 的 XLSX 提取 panel B（App）和 panel E（专家）的逐物种 AUC.prior 与 Delta.AUC，计算 posterior = prior + delta；分别保留 89、73 行。Fig.1 数据也随包保存，可追踪观测规模。每日录音的三个 duration 字段按秒求和，再除以 3,600 转为小时；鸟类检测数逐类型直接求和。\r\n\r\n### 07 论文、数据与代码入口\r\n\r\n- [原论文全文](https://www.nature.com/articles/s41559-025-02966-3)\r\n- [MK App 开放观测数据 · FinBIF](http://tun.fi/HR.6578)\r\n- [作者数字孪生与先验模型代码 · Zenodo](https://doi.org/10.5281/zenodo.15774443)\r\n- [作者真实预测交互示例](https://mk-app-realtime.projects.earthengine.app/view/mk-app-realtime-test)\r\n- [本地 Fig.5 作者源数据 XLSX](data/birds-source-4.xlsx)\r\n- [本地 Fig.1 作者源数据 XLSX](data/birds-source-3.xlsx)\r\n- [提取后的 89 物种 CSV](data/birds-app-auc.csv)\r\n- [提取后的 73 物种 CSV](data/birds-expert-auc.csv)\r\n- [原卡完整正文](originals/birds.md)\r\n- [原卡 PNG](originals/birds.png)\r\n\r\n### 08 此次补充与修正\r\n\r\n明确正式发表年份为 2026（DOI 中的 025 不等于发表年份）；补齐真实代码与开放数据入口，区分开放检测记录和不公开的原始音频；补充 AUC 的未舍入计算口径。\r\n",
      "interactive": "creative/spatial.html",
      "creativeForm": "空间叙事卡 · 生态数据旅程",
      "sourceReview": "verified_source",
      "batch": "PAPER-TRIPTYCH-20260912"
    }
  ],
  "methodNote": "方法标签为导航分类；图谱连线表示共享标签，不代表引用或效果优劣。"
};
