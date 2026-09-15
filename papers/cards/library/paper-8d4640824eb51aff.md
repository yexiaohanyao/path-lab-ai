# 康复医学 + XGBoost、SVM与随机森林

## 卒中步行恢复：用XGBoost、SVM与随机森林完成独立行走预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Prediction of poststroke independent walking using machine learning: a retrospective study
- 期刊/会议：BMC Neurology（2024）
- DOI：[10.1186/s12883-024-03849-z](https://doi.org/10.1186/s12883-024-03849-z)
- 正式来源：[https://doi.org/10.1186/s12883-024-03849-z](https://doi.org/10.1186/s12883-024-03849-z)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：共纳入778名卒中患者，按患者划分为训练集622人和测试集156人。
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：卒中康复临床量表
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：XGBoost、SVM与随机森林
- 核心方法：将XGBoost、SVM与随机森林用于卒中步行恢复，把卒中康复临床量表与独立行走预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：卒中康复临床量表
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练XGBoost、SVM与随机森林：独立行走预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：XGBoost、SVM与随机森林完成独立行走预测；论文报告：The test set was used to validate and compare the performance of the four models in terms of area under the curve (AUC), accuracy, sensitivity, specificity, positive predictive value (PPV), negative predictive value (NPV), and F1 score.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
