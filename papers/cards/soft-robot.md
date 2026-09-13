# 控制工程 × 强化学习

## 软体机械臂末端轨迹和物体搬运控制

- 原论文：Vision-based reinforcement learning control of soft robot manipulators
- 期刊/会议：Robotic Intelligence and Automation（2024）
- DOI：[10.1108/ria-01-2024-0002](https://doi.org/10.1108/ria-01-2024-0002)
- 正式来源：[https://www.sciencedirect.com/org/science/article/pii/S2754696924000320](https://www.sciencedirect.com/org/science/article/pii/S2754696924000320)

### 01 数据与问题

- 数据基础：Physical soft-robot experiments；真实软体机械臂闭环交互采样与物理搬运实验
- 数据状态：未公开
- 给模型看什么：真实机器人视觉、状态—动作轨迹
- 让模型判断什么：软体机械臂末端轨迹和物体搬运控制

### 02 AI 怎么参与

- 核心方法：视觉感知与无模型强化学习
- 实际作用：从真实机器人视觉、状态—动作轨迹中学习关键模式，用于软体机械臂末端轨迹和物体搬运控制

### 03 论文 Pipeline

- 视觉采集 → 状态编码 → 策略训练 → 轨迹跟踪 → 实机搬运

### 04 指标与成果

- 最后得到：软体机械臂末端轨迹和物体搬运控制结果、比较证据与可复核结论
- 重点指标：跟踪误差、约束违反、稳定性、控制成本
- 论文报告：无需解析模型即可学习协调驱动策略并成功完成物体搬运
- 使用边界：部署前须完成安全约束、异常工况和实机验证。

### 数据与代码

- 数据入口：论文未提供独立公开入口
- 代码入口：论文未提供独立开源入口
