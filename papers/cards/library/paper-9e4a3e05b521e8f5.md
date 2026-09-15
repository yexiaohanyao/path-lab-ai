# 心血管医学 + 多任务深度学习

## 主要心血管事件：用多任务深度学习完成MACE与死亡预测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：A multitask deep learning model utilizing electrocardiograms for major cardiovascular adverse events prediction
- 期刊/会议：npj Digital Medicine（2025）
- DOI：[10.1038/s41746-024-01410-3](https://doi.org/10.1038/s41746-024-01410-3)
- 正式来源：[https://doi.org/10.1038/s41746-024-01410-3](https://doi.org/10.1038/s41746-024-01410-3)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：MIMIC-IV-ECG、UK Biobank、PTB-XL及论文临床队列
- 数据集/样本：详见论文正文
- 数据规模：The initial cohort included 4,932,544 ECGs from 1,684,294 individuals, with exclusions for those under 30 years old (given the age distribution of severe congenital heart disease mainly below this age)39, subjects with pacemakers, those without medical records in our system in the following one year after ECG, and those with a history of HF, MI, or IS.
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：大规模12导联ECG与结局
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：多任务深度学习
- 核心方法：将多任务深度学习用于主要心血管事件，把大规模12导联ECG与结局与MACE与死亡预测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：大规模12导联ECG与结局
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练多任务深度学习：MACE与死亡预测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：多任务深度学习完成MACE与死亡预测；论文报告：The model’s performance including AUROC, sensitivity, and specificity are detailed in Table 2.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
