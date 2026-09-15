# 金融 × 集成学习

## 堆叠式信用风险预测

> 本地批次：LOCAL-02；源批次：B01-FIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A machine learning-based credit risk prediction engine system using a stacked classifier and a filter-based feature selection method
- 期刊/会议：Journal Of Big Data（2024）
- DOI：[10.1186/s40537-024-00882-0](https://doi.org/10.1186/s40537-024-00882-0)
- 正式来源：[https://doi.org/10.1186/s40537-024-00882-0](https://doi.org/10.1186/s40537-024-00882-0)

### 01 数据与问题

- 研究问题：跨多个信用数据集预测违约风险
- 数据来源：三套公开信用风险基准
- 数据集/样本：Australian Credit；German Credit；Taiwan Credit
- 数据规模：在澳大利亚、德国与台湾三套信用数据上统一评测
- 数据格式：借款人属性、信用行为、违约标签
- 数据类型：表格信用数据
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：集成学习
- 核心方法：信息增益特征选择与RF/GB/XGB堆叠分类器

### 03 论文 Pipeline

1. 汇集信用数据
2. 信息增益筛选
3. 训练三个基模型
4. 顺序堆叠输出
5. 跨数据集评测

### 04 指标与成果

- 重点指标：AUC、Accuracy、F1-score、跨数据集稳定性
- 代表结果：论文报告：堆叠模型在澳大利亚、德国、台湾数据上的AUC分别为0.934、0.944、0.870，并优于ANN、DT和KNN等比较模型。
- 使用边界：仅用于金融研究与决策辅助，不构成投资、授信或交易建议。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
