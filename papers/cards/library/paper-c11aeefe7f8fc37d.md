# 康复医学 + fNIRS特征机器学习

## 上肢运动恢复：用fNIRS特征机器学习完成机器人训练后的恢复潜力预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Predicting upper limb motor recovery in subacute stroke patients via fNIRS-measured cerebral functional responses induced by robotic training
- 期刊/会议：Journal of NeuroEngineering and Rehabilitation（2024）
- DOI：[10.1186/s12984-024-01523-6](https://doi.org/10.1186/s12984-024-01523-6)
- 正式来源：[https://doi.org/10.1186/s12984-024-01523-6](https://doi.org/10.1186/s12984-024-01523-6)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：ResultsOf the 94 participants who underwent upper limb robotic rehabilitation treatment, 12 participants were excluded due to accidental discharge, lack of assessment, or incomplete medical records.
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：fNIRS、机器人训练与运动结局
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：fNIRS特征机器学习
- 核心方法：将fNIRS特征机器学习用于上肢运动恢复，把fNIRS、机器人训练与运动结局与机器人训练后的恢复潜力预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：fNIRS、机器人训练与运动结局
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练fNIRS特征机器学习：机器人训练后的恢复潜力预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：fNIRS特征机器学习完成机器人训练后的恢复潜力预测；论文报告：The results showed that task-based classification outperformed baseline measurements (AUC: 0.799–0.862 vs.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
