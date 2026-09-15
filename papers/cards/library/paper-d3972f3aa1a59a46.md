# 电气工程 × 可解释机器学习

## 基于油中溶解气体的变压器故障分类与可解释诊断

> 本地批次：LOCAL-02；源批次：B02-ELECTRICAL-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Transformer fault diagnosis using machine learning: a method combining SHAP feature selection and intelligent optimization of LGBM
- 期刊/会议：Energy Informatics（2025）
- DOI：[10.1186/s42162-025-00519-3](https://doi.org/10.1186/s42162-025-00519-3)
- 正式来源：[https://doi.org/10.1186/s42162-025-00519-3](https://doi.org/10.1186/s42162-025-00519-3)

### 01 数据与问题

- 研究问题：基于油中溶解气体的变压器故障分类与可解释诊断
- 数据来源：论文变压器溶解气体数据；从5种气体浓度构建19个候选特征；测试集有11个样本被误分
- 数据集/样本：详见论文正文
- 数据规模：从5种气体浓度构建19个候选特征；测试集有11个样本被误分
- 数据格式：气体浓度表、工程特征、故障类别
- 数据类型：溶解气体分析、变压器故障标签
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：可解释机器学习
- 核心方法：SHAP特征选择+白头鹰搜索调优LightGBM

### 03 论文 Pipeline

1. 气体特征构建
2. SHAP重要性评估
3. 筛选关键特征
4. BES调优LGBM
5. 测试解释对比

### 04 指标与成果

- 重点指标：Accuracy,F1,误分数,SHAP重要性
- 代表结果：SHAP-BES-LGBM在测试集Accuracy=0.9509、F1=0.9606，仅误分11个样本，同时以SHAP压缩特征并提升解释性。
- 使用边界：溶解气体模型仅作运维辅助，故障处置仍需结合试验、负载和设备历史

### 数据与代码入口

- 数据入口：[https://energyinformatics.springeropen.com/articles/10.1186/s42162-025-00519-3](https://energyinformatics.springeropen.com/articles/10.1186/s42162-025-00519-3)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
