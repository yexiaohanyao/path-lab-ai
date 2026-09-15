# 金融工程 + 深度BSDE

## SPX期权市场定价：用深度BSDE完成期权定价、市场机制学习

> 本地批次：LOCAL-16；源批次：FINENG-AI-20260814-01；网站状态：待本地确认。

### 论文来源

- 原论文：Option pricing mechanisms driven by backward stochastic differential equations
- 期刊/会议：Financial Innovation（2025）
- DOI：[10.1186/s40854-024-00714-3](https://doi.org/10.1186/s40854-024-00714-3)
- 正式来源：[https://doi.org/10.1186/s40854-024-00714-3](https://doi.org/10.1186/s40854-024-00714-3)

### 01 数据与问题

- 研究问题：如何利用深度BSDE解决SPX期权市场定价中的期权定价、市场机制学习问题，并通过论文所述数据与实验设计验证？
- 数据来源：WRDS OptionMetrics SPX 日频期权数据；GitHub 提供合成样例与代码
- 数据集/样本：详见论文正文
- 数据规模：100,521 条记录；训练 75,540 条，验证 24,981 条
- 数据格式：表格、时间序列
- 数据类型：商业数据库 · 仿真数据
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：深度BSDE
- 核心方法：将深度BSDE用于SPX期权市场定价中的期权定价、市场机制学习，并以论文数据和正式验证结果形成从研究问题到决策证据的完整链条。

### 03 论文 Pipeline

1. 整理SPX期权市场定价数据：OptionMetrics SPX options；Synthetic SPX option sample
2. 特征构建与模型输入：表格、时间序列｜商业数据库、仿真数据｜深度BSDE
3. 训练深度BSDE：期权定价、市场机制学习
4. 样本外/基准验证：按正式论文的实验、回测、仿真或实证设计评价期权定价、市场机制学习

### 04 指标与成果

- 重点指标：完成期权定价、市场机制学习验证
- 代表结果：深度BSDE把期权定价机制转化为可学习的随机控制问题，并在SPX期权数据上完成验证；该结论来自论文在WRDS OptionMetrics SPX 日频期权数据；GitHub 提供合成样例与代码上的正式实验、回测、仿真或实证比较，并保留原文报告的适用边界。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/TENGBINN/g-pricing](https://github.com/TENGBINN/g-pricing)
- 代码入口：[https://github.com/TENGBINN/g-pricing](https://github.com/TENGBINN/g-pricing)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
