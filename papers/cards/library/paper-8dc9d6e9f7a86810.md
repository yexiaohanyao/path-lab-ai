# 康复医学 + 集成机器学习

## 卒中步态评估：用集成机器学习完成步态偏差指数预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Application of Isokinetic Dynamometry Data in Predicting Gait Deviation Index Using Machine Learning in Stroke Patients: A Cross-Sectional Study
- 期刊/会议：Sensors（2024）
- DOI：[10.3390/s24227258](https://doi.org/10.3390/s24227258)
- 正式来源：[https://doi.org/10.3390/s24227258](https://doi.org/10.3390/s24227258)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：Methods: This study was a cross-sectional, observational study that included a cohort of 150 post-stroke hemiplegic patients.
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：等速肌力与三维步态
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：集成机器学习
- 核心方法：将集成机器学习用于卒中步态评估，把等速肌力与三维步态与步态偏差指数预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：等速肌力与三维步态
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练集成机器学习：步态偏差指数预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：集成机器学习完成步态偏差指数预测；论文报告：The Vicon system was calibrated and validated before testing to ensure data capture accuracy, as shown in Figure 2B.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
