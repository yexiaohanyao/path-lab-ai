# 金融工程 + 风险厌恶Actor-Critic

## 动态等风险期权定价：用风险厌恶Actor-Critic完成等风险定价、时序一致对冲

> 本地批次：LOCAL-16；源批次：FINENG-AI-20260814-01；网站状态：待本地确认。

### 论文来源

- 原论文：Deep reinforcement learning for option pricing and hedging under dynamic expectile risk measures
- 期刊/会议：Quantitative Finance（2023）
- DOI：[10.1080/14697688.2023.2244531](https://doi.org/10.1080/14697688.2023.2244531)
- 正式来源：[https://doi.org/10.1080/14697688.2023.2244531](https://doi.org/10.1080/14697688.2023.2244531)

### 01 数据与问题

- 研究问题：如何利用风险厌恶Actor-Critic解决动态等风险期权定价中的等风险定价、时序一致对冲问题，并通过论文所述数据与实验设计验证？
- 数据来源：论文生成的 AAPL 香草期权与多资产篮子期权路径，配套代码仓库
- 数据集/样本：详见论文正文
- 数据规模：香草期权与篮子期权的多期限数值实验；精确配置随代码公开
- 数据格式：时间序列、模拟路径
- 数据类型：仿真数据
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：风险厌恶Actor-Critic
- 核心方法：将风险厌恶Actor-Critic用于动态等风险期权定价中的等风险定价、时序一致对冲，并以论文数据和正式验证结果形成从研究问题到决策证据的完整链条。

### 03 论文 Pipeline

1. 整理动态等风险期权定价数据：Dynamic expectile risk option experiments
2. 构建状态与决策环境：状态｜动作｜回报/风险｜风险厌恶Actor-Critic
3. 训练风险厌恶Actor-Critic：等风险定价、时序一致对冲
4. 样本外/基准验证：按正式论文的实验、回测、仿真或实证设计评价等风险定价、时序一致对冲

### 04 指标与成果

- 重点指标：完成等风险定价、时序一致对冲验证
- 代表结果：风险厌恶Actor-Critic在动态expectile风险度量下联合学习期权价格与对冲策略；该结论来自论文在论文生成的 AAPL 香草期权与多资产篮子期权路径，配套代码仓库上的正式实验、回测、仿真或实证比较，并保留原文报告的适用边界。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/saeedmarzban/ERP-Dynamic-Expectile-RM](https://github.com/saeedmarzban/ERP-Dynamic-Expectile-RM)
- 代码入口：[https://github.com/saeedmarzban/ERP-Dynamic-Expectile-RM](https://github.com/saeedmarzban/ERP-Dynamic-Expectile-RM)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
