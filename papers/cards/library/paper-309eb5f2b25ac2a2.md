# 运筹学 + 深度强化学习

## 带回程车辆路径：用深度强化学习完成VRPB路线构造

> 本地批次：LOCAL-16；源批次：OR-AI-20260814-01；网站状态：待本地确认。

### 论文来源

- 原论文：Deep Reinforcement Learning for Solving Vehicle Routing Problems With Backhauls
- 期刊/会议：IEEE Transactions on Neural Networks and Learning Systems（2025）
- DOI：[10.1109/tnnls.2024.3371781](https://doi.org/10.1109/tnnls.2024.3371781)
- 正式来源：[https://doi.org/10.1109/tnnls.2024.3371781](https://doi.org/10.1109/tnnls.2024.3371781)

### 01 数据与问题

- 研究问题：如何利用深度强化学习完成VRPB路线构造，为带回程车辆路径提供可检验的决策证据？
- 数据来源：车辆路径标准实例
- 数据集/样本：详见论文正文
- 数据规模：不同客户规模与约束的路径实例
- 数据格式：图/实例文件、CSV/JSON
- 数据类型：图结构 · 优化实例 · 求解轨迹
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：深度强化学习
- 核心方法：将深度强化学习用于带回程车辆路径中的VRPB路线构造，并以论文数据和正式验证结果形成从研究问题到决策证据的完整链条。

### 03 论文 Pipeline

1. 整理带回程车辆路径数据：车辆路径标准实例
2. 构建状态与决策环境：状态｜动作｜回报/风险｜深度强化学习
3. 训练深度强化学习：VRPB路线构造
4. 样本外/基准验证：按正式论文的实验、回测、仿真或实证设计评价VRPB路线构造

### 04 指标与成果

- 重点指标：完成VRPB路线构造验证
- 代表结果：端到端策略学习取送顺序，在多规模实例上取得有竞争力的路线成本；该结论来自论文在车辆路径标准实例上的正式实验、回测、仿真或实证比较，并保留原文报告的适用边界。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.sintef.no/projectweb/top/vrptw/solomon-benchmark/](https://www.sintef.no/projectweb/top/vrptw/solomon-benchmark/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
