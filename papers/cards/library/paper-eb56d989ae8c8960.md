# 老年学 × 可解释AI

## 中国老年人孤独风险评估的AI实证研究

> 本地批次：LOCAL-05；源批次：AGING-AI-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：Development of a machine learning-based risk assessment model for loneliness among elderly Chinese: a cross-sectional study based on Chinese longitudinal healthy longevity survey
- 期刊/会议：BMC Geriatrics（2024）
- DOI：[10.1186/s12877-024-05443-x](https://doi.org/10.1186/s12877-024-05443-x)
- 正式来源：[https://link.springer.com/article/10.1186/s12877-024-05443-x](https://link.springer.com/article/10.1186/s12877-024-05443-x)

### 01 数据与问题

- 研究问题：中国老年人孤独风险评估
- 数据来源：Chinese Longitudinal Healthy Longevity Survey；CLHLS 2018共15,874人；训练11,112人、验证…
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：可解释AI
- 核心方法：MLP、随机森林、SVM、KNN等七种模型与SHAP

### 03 论文 Pipeline

1. 访谈清洗
2. 语言编码
3. 模型训练
4. 受试者验证
5. 特征解释

### 04 指标与成果

- 重点指标：Accuracy、AUC、敏感度、可解释性
- 代表结果：MLP综合表现最佳，SHAP显示婚姻状况为最重要因素
- 使用边界：风险识别用于研究和辅助筛查，不替代临床诊断。

### 数据与代码入口

- 数据入口：[https://opendata.pku.edu.cn/dataverse/CHADS](https://opendata.pku.edu.cn/dataverse/CHADS)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
