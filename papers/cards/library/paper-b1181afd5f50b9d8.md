# 心血管医学 + 单导联ECG深度网络

## 心衰血流动力学：用单导联ECG深度网络完成左心房压升高检测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial intelligence for hemodynamic monitoring with a wearable electrocardiogram monitor
- 期刊/会议：Communications Medicine（2025）
- DOI：[10.1038/s43856-024-00730-5](https://doi.org/10.1038/s43856-024-00730-5)
- 正式来源：[https://doi.org/10.1038/s43856-024-00730-5](https://doi.org/10.1038/s43856-024-00730-5)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：MIMIC-IV-ECG、UK Biobank、PTB-XL及论文临床队列
- 数据集/样本：详见论文正文
- 数据规模：We initially pre-train the model to regress the PR, QRS, and QT intervals and the heart rate from the 12-lead ECG, using a cohort of 242,216 patients at MGH.
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：可穿戴ECG与侵入性血流动力学
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：单导联ECG深度网络
- 核心方法：将单导联ECG深度网络用于心衰血流动力学，把可穿戴ECG与侵入性血流动力学与左心房压升高检测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：可穿戴ECG与侵入性血流动力学
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练单导联ECG深度网络：左心房压升高检测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：单导联ECG深度网络完成左心房压升高检测；论文报告：2Model performance on internal-holdout set.a Calculated specificity as a function of the sensitivity using the internal-holdout set.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/mit-ccrg/CHAIS](https://github.com/mit-ccrg/CHAIS)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
