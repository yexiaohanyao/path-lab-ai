# 心血管医学 + 深度神经网络

## 智能手表心律筛查：用深度神经网络完成房性心律失常检测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial intelligence–based electrocardiogram analysis improves atrial arrhythmia detection from a smartwatch electrocardiogram
- 期刊/会议：European Heart Journal - Digital Health（2024）
- DOI：[10.1093/ehjdh/ztae047](https://doi.org/10.1093/ehjdh/ztae047)
- 正式来源：[https://doi.org/10.1093/ehjdh/ztae047](https://doi.org/10.1093/ehjdh/ztae047)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：MIMIC-IV-ECG、UK Biobank、PTB-XL及论文临床队列
- 数据集/样本：详见论文正文
- 数据规模：Three subjects were excluded from the analysis as they had missing data (2 12L and 1 AW ECGs missing), resulting in 393 patients with simultaneous 12L and SW ECGs included in the analyses (see Supplementary material online, Figure S1).Demographics and clinical characteristics are summarized in Table 1.
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：智能手表单导联ECG
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：深度神经网络
- 核心方法：将深度神经网络用于智能手表心律筛查，把智能手表单导联ECG与房性心律失常检测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：智能手表单导联ECG
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练深度神经网络：房性心律失常检测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：深度神经网络完成房性心律失常检测；论文报告：The deep neural network correctly diagnosed atrial arrhythmia with 91% sensitivity (95% confidence interval 85–95%) and 95% specificity (95% confidence interval 91–97%).
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
