# 麻醉学 × 脑电深度学习

## 成人术后谵妄风险预测

> 本地批次：LOCAL-03；源批次：B03-ANES-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Development of a deep learning-based prediction model for postoperative delirium using intraoperative electroencephalogram in adults.
- 期刊/会议：npj Digital Medicine（2025）
- DOI：[10.1038/s41746-025-02033-y](https://doi.org/10.1038/s41746-025-02033-y)
- 正式来源：[https://doi.org/10.1038/s41746-025-02033-y](https://doi.org/10.1038/s41746-025-02033-y)

### 01 数据与问题

- 研究问题：成人术后谵妄风险预测
- 数据来源：单中心术中EEG与术后谵妄队列；35115例手术病例，其中34671例阴性、444例阳性，按患者划分训练与原始比例测试
- 数据集/样本：详见论文正文
- 数据规模：35115例手术病例，其中34671例阴性、444例阳性，按患者划分训练与原始比例测试
- 数据格式：术中EEG、人口学变量、谵妄标签
- 数据类型：麻醉脑电、术后结局
- 数据状态：数据可合理申请，预处理、训练和推理代码公开

### 02 AI 怎么参与

- AI 技术：脑电深度学习
- 核心方法：DELPHI-EEG从术中EEG提取深度时序表征，并融合年龄和性别预测术后谵妄

### 03 论文 Pipeline

1. 整理术中EEG
2. 按患者切分数据
3. 训练DELPHI-EEG
4. 融合年龄与性别
5. 原始患病率测试

### 04 指标与成果

- 重点指标：AUROC,召回率,精确率,校准
- 代表结果：测试AUROC为0.870，高于逻辑回归0.729；召回率0.933，但罕见事件下精确率仅0.013。
- 使用边界：极低精确率提示不能单独触发临床处置，必须结合患病率、阈值和人工评估

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/oskumd2/EEG_Delirium](https://github.com/oskumd2/EEG_Delirium)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
