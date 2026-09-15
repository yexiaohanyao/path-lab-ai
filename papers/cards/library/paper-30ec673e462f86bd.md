# 金融工程 + 前馈网络与LSTM

## 不完全跳扩散市场对冲：用前馈网络与LSTM完成最小方差对冲、期权定价

> 本地批次：LOCAL-16；源批次：FINENG-AI-20260814-01；网站状态：待本地确认。

### 论文来源

- 原论文：Deep learning for quadratic hedging in incomplete jump market
- 期刊/会议：Digital Finance（2024）
- DOI：[10.1007/s42521-024-00112-5](https://doi.org/10.1007/s42521-024-00112-5)
- 正式来源：[https://doi.org/10.1007/s42521-024-00112-5](https://doi.org/10.1007/s42521-024-00112-5)

### 01 数据与问题

- 研究问题：如何利用前馈网络与LSTM解决不完全跳扩散市场对冲中的最小方差对冲、期权定价问题，并通过论文所述数据与实验设计验证？
- 数据来源：论文生成的 Black-Scholes、多布朗运动、Merton 与 Kou 市场路径
- 数据集/样本：详见论文正文
- 数据规模：每项核心性能评估使用 10,000 条模拟样本
- 数据格式：时间序列、模拟路径
- 数据类型：仿真数据
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：前馈网络与LSTM
- 核心方法：将前馈网络与LSTM用于不完全跳扩散市场对冲中的最小方差对冲、期权定价，并以论文数据和正式验证结果形成从研究问题到决策证据的完整链条。

### 03 论文 Pipeline

1. 整理不完全跳扩散市场对冲数据：四类随机市场模型仿真集
2. 构建时序与风险特征：时间窗｜删失/发展路径｜前馈网络与LSTM
3. 训练前馈网络与LSTM：最小方差对冲、期权定价
4. 样本外/基准验证：按正式论文的实验、回测、仿真或实证设计评价最小方差对冲、期权定价

### 04 指标与成果

- 重点指标：完成最小方差对冲、期权定价验证
- 代表结果：前馈网络与LSTM近似不完全跳跃市场中的二次对冲策略，减少高维动态规划负担；该结论来自论文在论文生成的 Black-Scholes、多布朗运动、Merton 与 Kou 市场路径上的正式实验、回测、仿真或实证比较，并保留原文报告的适用边界。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/janrems/DeepLearningQHedging](https://github.com/janrems/DeepLearningQHedging)
- 代码入口：[https://github.com/janrems/DeepLearningQHedging](https://github.com/janrems/DeepLearningQHedging)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
