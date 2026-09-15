# 康复医学 + 患者级机器学习预后模型

## 住院康复结局：用患者级机器学习预后模型完成出院功能结局预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Prediction of the functional outcome of intensive inpatient rehabilitation after stroke using machine learning methods
- 期刊/会议：Scientific Reports（2025）
- DOI：[10.1038/s41598-025-00781-1](https://doi.org/10.1038/s41598-025-00781-1)
- 正式来源：[https://doi.org/10.1038/s41598-025-00781-1](https://doi.org/10.1038/s41598-025-00781-1)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：共纳入385名卒中康复患者，其中220人用于训练与内部验证，165人构成外部测试集。
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：多中心住院康复记录
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：患者级机器学习预后模型
- 核心方法：将患者级机器学习预后模型用于住院康复结局，把多中心住院康复记录与出院功能结局预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：多中心住院康复记录
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练患者级机器学习预后模型：出院功能结局预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：患者级机器学习预后模型完成出院功能结局预测；论文报告：Some studies have shown an increased diagnostic of ML models in cerebrovascular diseases1 but the actual implementation of these methods in clinical practice seems far from immediate, often due to data reporting heterogeneity and incompleteness8.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
