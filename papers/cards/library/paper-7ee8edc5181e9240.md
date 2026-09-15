# 代谢组学 × 多模型学习＋SHAP/LIME

## 阿司匹林响应的代谢组预测

> 本地批次：LOCAL-06；源批次：B06-METAB-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：ML-BUSMetab: Machine Learning-Based Metabolomic Profiling for Predicting Aspirin Response in Colorectal Cancer Chemoprevention: A Multi-Model Explainable Artificial Intelligence Approach with External Validation.
- 期刊/会议：Journal of Clinical Medicine（2026）
- DOI：[10.3390/jcm15114287](https://doi.org/10.3390/jcm15114287)
- 正式来源：[https://doi.org/10.3390/jcm15114287](https://doi.org/10.3390/jcm15114287)

### 01 数据与问题

- 研究问题：阿司匹林响应预测
- 数据来源：Metabolomics Workbench公开药物反应代谢组
- 数据集/样本：ST001422；ST001423；PR000730
- 数据规模：训练队列300例、外部队列223例；19,433个原始特征，经共识选择保留300个
- 数据格式：代谢峰强度表、药物反应标签
- 数据类型：血浆代谢组、阿司匹林反应表型
- 数据状态：公开数据位于Metabolomics Workbench项目PR000730。

### 02 AI 怎么参与

- AI 技术：十六类机器学习与深度学习＋SHAP/LIME
- 核心方法：比较16种机器学习与深度学习模型，并通过共识特征选择、SHAP和LIME解释预测。

### 03 论文 Pipeline

1. 读取两套公开阿司匹林反应代谢组
2. 统一质控并从19,433个特征中构建共识集合
3. 在300例训练队列比较16类模型
4. 用SHAP与LIME解释高贡献代谢特征
5. 在223例独立队列评估可迁移性

### 04 指标与成果

- 重点指标：PR-AUC、Brier score、外部验证PR-AUC
- 代表结果：内部验证PR-AUC=0.945、Brier score=0.117；223例外部队列PR-AUC=0.711。
- 使用边界：外部性能低于内部结果，提示跨队列分布差异；代码未提供独立入口。

### 数据与代码入口

- 数据入口：[https://doi.org/10.21228/M89X1C](https://doi.org/10.21228/M89X1C)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
