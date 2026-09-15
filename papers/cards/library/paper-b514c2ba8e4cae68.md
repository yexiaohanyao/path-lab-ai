# 控制工程 × 强化学习

## 孤岛微电网频率与经济性协同控制

> 本地批次：LOCAL-05；源批次：CONTROL-RL-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：Deep reinforcement learning for adaptive frequency control of island microgrid considering control performance and economy
- 期刊/会议：Frontiers in Energy Research（2024）
- DOI：[10.3389/fenrg.2024.1361869](https://doi.org/10.3389/fenrg.2024.1361869)
- 正式来源：[https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1361869/full](https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1361869/full)

### 01 数据与问题

- 研究问题：孤岛微电网频率与经济性协同控制
- 数据来源：Zhuzhou Island microgrid model；珠洲岛微电网参数；两类案例、24小时随机扰动；含风光储柴实际容量参数
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：强化学习
- 核心方法：优先经验回放Soft Actor-Critic

### 03 论文 Pipeline

1. 工况建模
2. 奖惩设计
3. SAC训练
4. 扰动仿真
5. 频差评估

### 04 指标与成果

- 重点指标：频差、发电成本
- 代表结果：案例1频差相对其他方法下降2.45%—78.92%，同时降低发电成本
- 使用边界：部署前须完成安全约束、异常工况和实机验证。

### 数据与代码入口

- 数据入口：[https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1361869/full#supplementary-material](https://www.frontiersin.org/journals/energy-research/articles/10.3389/fenrg.2024.1361869/full#supplementary-material)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
