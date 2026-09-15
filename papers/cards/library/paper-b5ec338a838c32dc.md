# 康复医学 + 多重插补集成机器学习

## 卒中步行恢复：用多重插补集成机器学习完成强化康复后步行恢复预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Multiple imputation integrated to machine learning: predicting post-stroke recovery of ambulation after intensive inpatient rehabilitation
- 期刊/会议：Scientific Reports（2024）
- DOI：[10.1038/s41598-024-74537-8](https://doi.org/10.1038/s41598-024-74537-8)
- 正式来源：[https://doi.org/10.1038/s41598-024-74537-8](https://doi.org/10.1038/s41598-024-74537-8)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：A total of 368 patients with the full set of 154 variables, constituting the training set, underwent MImp.Descriptive statistics of the predictors for the overall, training, and test samples can be found in the in Supplementary Table SM.2.
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：住院康复量表与临床记录
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：多重插补集成机器学习
- 核心方法：将多重插补集成机器学习用于卒中步行恢复，把住院康复量表与临床记录与强化康复后步行恢复预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：住院康复量表与临床记录
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练多重插补集成机器学习：强化康复后步行恢复预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：多重插补集成机器学习完成强化康复后步行恢复预测；论文报告：In (B), BA, sensitivity, specificity, and rate of retained patients on the test set are proposed for different classification thresholds.Table 3F1 score, balanced accuracy (BA), sensitivity, specificity and numerosity of the retained set on the test set for the aggregated solution with thresholds varying from 25 to 75%, with a step of 5%.ThresholdsF1 score %BA %Specificity %Sensitivity % N 50%69.075.782.469.08045%73.178.082.973.16740%80.083.991.776.25735%84.287.190.084.24930%81.385.188.981.34325%88.992.091.792.337…
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
