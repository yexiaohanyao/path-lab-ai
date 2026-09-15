# 控制工程 × 强化学习

## 聚乙烯流化床反应器温度控制

> 本地批次：LOCAL-05；源批次：CONTROL-RL-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：A reinforcement learning-based temperature control of fluidized bed reactor in gas-phase polyethylene process
- 期刊/会议：Computers & Chemical Engineering（2024）
- DOI：[10.1016/j.compchemeng.2024.108588](https://doi.org/10.1016/j.compchemeng.2024.108588)
- 正式来源：[https://www.sciencedirect.com/science/article/pii/S0098135424000061](https://www.sciencedirect.com/science/article/pii/S0098135424000061)

### 01 数据与问题

- 研究问题：聚乙烯流化床反应器温度控制
- 数据来源：Commercial gas-phase polyethylene process model；3组独立二级回路实验与3组级联控制实验
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：强化学习
- 核心方法：DDPG与PID-DRL级联控制

### 03 论文 Pipeline

1. 过程建模
2. 约束设计
3. 策略训练
4. 仿真对照
5. 安全验证

### 04 指标与成果

- 重点指标：跟踪误差、约束违反、稳定性、控制成本
- 代表结果：PID-DRL在设定值跟踪和抗扰方面均优于传统PID，IAE更低
- 使用边界：部署前须完成安全约束、异常工况和实机验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
