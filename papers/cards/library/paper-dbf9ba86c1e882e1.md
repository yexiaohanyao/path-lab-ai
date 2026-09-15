# 系统生物学 × 图注意力网络

## 通路网络驱动的前列腺癌分层

> 本地批次：LOCAL-06；源批次：B05-SYSBIO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：GraphPath: a graph attention model for molecular stratification with interpretability based on the pathway–pathway interaction network
- 期刊/会议：Bioinformatics（2024）
- DOI：[10.1093/bioinformatics/btae165](https://doi.org/10.1093/bioinformatics/btae165)
- 正式来源：[https://doi.org/10.1093/bioinformatics/btae165](https://doi.org/10.1093/bioinformatics/btae165)

### 01 数据与问题

- 研究问题：可解释分子分层
- 数据来源：前列腺癌患者多组学、通路—通路交互网络及两个外部队列
- 数据集/样本：prostate cancer multi-omics cohorts
- 数据规模：主队列训练，并在2个外部队列验证
- 数据格式：患者多组学、癌症状态、通路网络
- 数据类型：癌症多组学、生物通路
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：图注意力网络
- 核心方法：通路网络图注意力模型

### 03 论文 Pipeline

1. 汇集患者多组学
2. 构建通路交互图
3. 训练图注意力
4. 外部队列验证
5. 解释关键通路

### 04 指标与成果

- 重点指标：分类性能、相对P-NET增益、外部泛化、通路解释
- 代表结果：论文报告：GraphPath优于P-NET及其他基线，并在两个外部队列保持对未见样本的预测能力。
- 使用边界：分层结果用于研究，不替代病理诊断、预后判断或治疗选择。

### 数据与代码入口

- 数据入口：[https://github.com/amazingma/GraphPath](https://github.com/amazingma/GraphPath)
- 代码入口：[https://github.com/amazingma/GraphPath](https://github.com/amazingma/GraphPath)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
