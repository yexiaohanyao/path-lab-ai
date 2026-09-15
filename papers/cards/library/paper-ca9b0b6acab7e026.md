# 药剂学 × 机器学习

## 微流控脂质体处方预测

> 本地批次：LOCAL-08；源批次：PHARMACEUTICS-AI-20260909-01；网站状态：待本地确认。

### 论文来源

- 原论文：Leveraging machine learning to streamline the development of liposomal drug delivery systems
- 期刊/会议：Journal of Controlled Release（2024）
- DOI：[10.1016/j.jconrel.2024.10.065](https://doi.org/10.1016/j.jconrel.2024.10.065)
- 正式来源：[https://doi.org/10.1016/j.jconrel.2024.10.065](https://doi.org/10.1016/j.jconrel.2024.10.065)

### 01 数据与问题

- 研究问题：能否从微流控制备过程和配方记录预测脂质体形成、粒径和流速比，以减少递送系统开发的试错。
- 数据来源：跨研究汇总的微流控制备脂质体数据＋作者实验数据
- 数据集/样本：micro_fluidic_Liposome dataset
- 数据规模：汇总阶段含811条形成/粒径记录与571条流速比记录；质量筛查后分别形成575条与357条建模记录。
- 数据格式：CSV、Python notebooks/scripts、molecular descriptors
- 数据类型：脂质身份与描述符、微流控参数、脂质体形成标签、粒径、流速比
- 数据状态：论文作者官方GitHub公开训练数据、代码与环境说明。

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：XGBoost等监督学习、交叉验证、SHAP解释和外部实验验证。

### 03 论文 Pipeline

1. 汇总微流控记录：汇集形成/粒径记录与流速比记录。
2. 清洗结构参数：质量筛查后整理处方、材料与工艺特征。
3. 训练预测模型：用XGBoost等监督模型训练形成、粒径和流速比预测。
4. SHAP解释因素：解释材料结构和过程变量的贡献。
5. 实验验证输出：以外部实验检验模型区分形成、预测粒径和目标流速比的能力。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：汇总记录：811条形成/粒径；571条流速比：（汇总阶段）
- 代表结果：建模记录：575条；357条：（质量筛查后）
- 代表结果：验证结论：形成、粒径和流速比可预测：（论文实际结论）
- 代表结果：解释：SHAP揭示结构/过程作用：（不补造未核实指标）
- 使用边界：模型用于微流控制剂研发辅助；仍需在具体原料、设备和工艺条件下进行实验确认与质量验证。

### 数据与代码入口

- 数据入口：[https://github.com/Luciani-Group/micro_fluidic_Liposome](https://github.com/Luciani-Group/micro_fluidic_Liposome)
- 代码入口：[https://github.com/Luciani-Group/micro_fluidic_Liposome](https://github.com/Luciani-Group/micro_fluidic_Liposome)

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
