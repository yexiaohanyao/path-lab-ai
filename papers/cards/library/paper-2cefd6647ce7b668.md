# 公共卫生与预防医学 + 可复现集成机器学习

## 传染病预警：用可复现集成机器学习完成登革热暴发预测

> 本地批次：LOCAL-15；源批次：PUBLICHEALTH-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：A reproducible ensemble machine learning approach to forecast dengue outbreaks
- 期刊/会议：Scientific Reports（2024）
- DOI：[10.1038/s41598-024-52796-9](https://doi.org/10.1038/s41598-024-52796-9)
- 正式来源：[https://doi.org/10.1038/s41598-024-52796-9](https://doi.org/10.1038/s41598-024-52796-9)

### 01 数据与问题

- 研究问题：人群健康数据具有时空异质性、社会因素混杂和群体公平差异，传统模型难以同时支持风险预测、因果评估与资源配置。
- 数据来源：国家监测系统、人口队列、DHS/NHANES及公共卫生开放数据
- 数据集/样本：详见论文正文
- 数据规模：覆盖巴西27个联邦单位的登革热发病率时序；训练期为2001—2016年，验证期为2017—2019年。
- 数据格式：人群调查表、时空监测序列、EHR/登记数据、社会决定因素与政策变量
- 数据类型：全国时空病例与气象数据
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：可复现集成机器学习
- 核心方法：将可复现集成机器学习用于传染病预警，把全国时空病例与气象数据与登革热暴发预测连接为可核验的公共卫生与预防医学AI流程。

### 03 论文 Pipeline

1. 汇集人群健康数据：全国时空病例与气象数据
2. 连接时空与社会因素：地区｜人群亚组｜环境与政策变量
3. 训练可复现集成机器学习：登革热暴发预测
4. 人群层验证：外部地区｜公平性｜干预与资源配置

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：可复现集成机器学习完成登革热暴发预测；论文报告：These plots shows that the model has a much higher confidence interval than the ensemble model, a tendency to overestimating or underestimating DIR (based on the FU under analysis) and in some cases shows a constant bias.Figure 5Forecasting results of the dummy and ensemble model: (a) Bahia, (b) Piauí and (c) Roraima.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/ESA-PhiLab/ESA-UNICEF_DengueForecastProject](https://github.com/ESA-PhiLab/ESA-UNICEF_DengueForecastProject)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
