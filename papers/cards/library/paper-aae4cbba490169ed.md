# 康复医学 + 机器学习预后模型

## 脊髓损伤康复：用机器学习预后模型完成步行能力恢复预测

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Prediction of gait recovery using machine learning algorithms in patients with spinal cord injury
- 期刊/会议：Medicine（2024）
- DOI：[10.1097/md.0000000000038286](https://doi.org/10.1097/md.0000000000038286)
- 正式来源：[https://doi.org/10.1097/md.0000000000038286](https://doi.org/10.1097/md.0000000000038286)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：Demographics of the participantsA total of 363 adult patients with acute SCI were enrolled in this study, and their medical records were retrospectively reviewed.
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：脊髓损伤临床与康复数据
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：机器学习预后模型
- 核心方法：将机器学习预后模型用于脊髓损伤康复，把脊髓损伤临床与康复数据与步行能力恢复预测连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：脊髓损伤临床与康复数据
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练机器学习预后模型：步行能力恢复预测
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：机器学习预后模型完成步行能力恢复预测；论文报告：In addition, we attempted to predict multiclass outcomes, FAC 0 to 5, which is statistically more challenging than previous binary classification tasks.[7,14,44] In the DSS results, the common key predictors were initial FAC and NLI.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
