# 舞蹈 × 时序深度学习

## 舞蹈动作认知负荷时序评估

> 本地批次：HOLD-17；源批次：DANCE-AI-20260831-01；网站状态：待本地确认。

### 论文来源

- 原论文：T2W-CogLoadNet: a framework for cognitive load assessment of dance movements based on deep learning-powered human pose estimation
- 期刊/会议：Frontiers in Psychology（2026）
- DOI：[10.3389/fpsyg.2025.1707539](https://doi.org/10.3389/fpsyg.2025.1707539)
- 正式来源：[https://doi.org/10.3389/fpsyg.2025.1707539](https://doi.org/10.3389/fpsyg.2025.1707539)

### 01 数据与问题

- 研究问题：基于舞蹈姿态序列估计动作认知负荷。
- 数据来源：AIST++舞蹈数据集与Kinetics-400动作视频数据集。
- 数据集/样本：AIST++；Kinetics-400
- 数据规模：按AIST++与Kinetics-400正式数据集规模使用；论文报告跨两数据集评估。
- 数据格式：video、pose sequences、action labels
- 数据类型：舞蹈动作、人体姿态、动作视频
- 数据状态：使用公开AIST++与Kinetics-400；正式全文与数据集入口可核验。

### 02 AI 怎么参与

- AI 技术：时序深度学习
- 核心方法：TCN与Transformer融合的人体姿态时序网络，并以鲸鱼优化算法调参。

### 03 论文 Pipeline

1. 提取姿态序列
2. 构建时序特征
3. 融合时序网络
4. 鲸鱼算法调参
5. 跨数据集评估

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：AIST++：MAE 0.23 / RMSE 0.26 / MPJPE 0.45：（论文报告）
- 代表结果：Kinetics-400：MAE 0.25 / RMSE 0.28 / MPJPE 0.48：（论文报告）
- 使用边界：模型指标来自公开数据集任务，不等同于对真实课堂学习负荷的临床或心理诊断。

### 数据与代码入口

- 数据入口：[https://google.github.io/aistplusplus_dataset/](https://google.github.io/aistplusplus_dataset/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
