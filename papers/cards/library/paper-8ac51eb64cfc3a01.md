# 肿瘤医学 × 转录组深度学习

## 转录组预测化疗响应

> 本地批次：LOCAL-04；源批次：B04-ONCO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Transcriptome-based Deep Learning Model for Predicting Gemcitabine and Cisplatin Chemotherapy Response in Urothelial Carcinoma: Development and External Validation.
- 期刊/会议：Cancer Genomics & Proteomics（2026）
- DOI：[10.21873/cgp.20589](https://doi.org/10.21873/cgp.20589)
- 正式来源：[https://doi.org/10.21873/cgp.20589](https://doi.org/10.21873/cgp.20589)

### 01 数据与问题

- 研究问题：由转录组预测尿路上皮癌吉西他滨联合顺铂响应
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：94份转录组用于训练，其中TCGA 81份、GEO 13份；外部验证10例
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：转录组深度学习
- 核心方法：转录组深度学习

### 03 论文 Pipeline

1. 整理转录组队列
2. 筛选表达特征
3. 训练深度模型
4. 计算响应概率
5. 外部队列验证

### 04 指标与成果

- 重点指标：AUC、Accuracy、F1、外部验证表现
- 代表结果：训练准确率94.7%、外部准确率90.0%，外部AUROC 0.90
- 使用边界：仅作研究与临床决策辅助，不替代病理诊断、分期或治疗方案。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
