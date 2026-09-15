# 康复医学 + 可解释传感器机器学习

## 卒中跌倒风险：用可解释传感器机器学习完成双任务跌倒风险分层

> 本地批次：LOCAL-15；源批次：REHAB-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Fall Risk Assessment in Stroke Survivors: A Machine Learning Model Using Detailed Motion Data from Common Clinical Tests and Motor-Cognitive Dual-Tasking
- 期刊/会议：Sensors（2024）
- DOI：[10.3390/s24030812](https://doi.org/10.3390/s24030812)
- 正式来源：[https://doi.org/10.3390/s24030812](https://doi.org/10.3390/s24030812)

### 01 数据与问题

- 研究问题：功能恢复具有长期、个体化和多维变化特征，传统量表与单次评估难以连续量化动作质量并预测康复结局。
- 数据来源：多中心康复队列、可穿戴传感器、动作视频及论文补充数据
- 数据集/样本：详见论文正文
- 数据规模：The relatively small sample size of 21 participants may restrict the generalizability of the findings, emphasizing the need for larger and more diverse cohorts to validate and refine the models.
- 数据格式：动作视频与骨架序列、IMU/压力中心时序、康复量表、肌电与运动学数据
- 数据类型：IMU动作与临床测试
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：可解释传感器机器学习
- 核心方法：将可解释传感器机器学习用于卒中跌倒风险，把IMU动作与临床测试与双任务跌倒风险分层连接为可核验的康复医学AI流程。

### 03 论文 Pipeline

1. 采集功能与动作数据：IMU动作与临床测试
2. 提取数字生物标志物：姿态｜步态｜IMU｜量表
3. 训练可解释传感器机器学习：双任务跌倒风险分层
4. 康复结局验证：患者级测试｜随访｜功能改善

### 04 指标与成果

- 重点指标：论文报告亚组验证
- 代表结果：可解释传感器机器学习完成双任务跌倒风险分层；论文报告：The model without motion-related features yielded accuracy, sensitivity, and specificity of 67%, 64%, and 70%, respectively.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
