# 控制工程 × 强化学习

## 软体机械臂末端轨迹和物体搬运控制

> 本地批次：LOCAL-05；源批次：CONTROL-RL-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：Vision-based reinforcement learning control of soft robot manipulators
- 期刊/会议：Robotic Intelligence and Automation（2024）
- DOI：[10.1108/ria-01-2024-0002](https://doi.org/10.1108/ria-01-2024-0002)
- 正式来源：[https://www.sciencedirect.com/org/science/article/pii/S2754696924000320](https://www.sciencedirect.com/org/science/article/pii/S2754696924000320)

### 01 数据与问题

- 研究问题：软体机械臂末端轨迹和物体搬运控制
- 数据来源：Physical soft-robot experiments；真实软体机械臂闭环交互采样与物理搬运实验
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：强化学习
- 核心方法：视觉感知与无模型强化学习

### 03 论文 Pipeline

1. 视觉采集
2. 状态编码
3. 策略训练
4. 轨迹跟踪
5. 实机搬运

### 04 指标与成果

- 重点指标：跟踪误差、约束违反、稳定性、控制成本
- 代表结果：无需解析模型即可学习协调驱动策略并成功完成物体搬运
- 使用边界：部署前须完成安全约束、异常工况和实机验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
