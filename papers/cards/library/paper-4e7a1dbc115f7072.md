# 金融 × 可解释AI

## 可解释股票趋势识别

> 本地批次：LOCAL-02；源批次：B01-FIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：An explainable deep learning approach for stock market trend prediction
- 期刊/会议：Heliyon（2024）
- DOI：[10.1016/j.heliyon.2024.e40095](https://doi.org/10.1016/j.heliyon.2024.e40095)
- 正式来源：[https://doi.org/10.1016/j.heliyon.2024.e40095](https://doi.org/10.1016/j.heliyon.2024.e40095)

### 01 数据与问题

- 研究问题：识别五类股票市场趋势并解释关键特征
- 数据来源：Yahoo Finance四大股指历史数据
- 数据集/样本：S&P500；DAX30；FTSE100；Nikkei225
- 数据规模：1990–2022年四套数据，样本数分别为656、613、621、644
- 数据格式：调整收盘价、技术特征、五类趋势标签
- 数据类型：股票指数时序
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：可解释AI
- 核心方法：深度神经网络结合SHAP与LIME

### 03 论文 Pipeline

1. 下载四地股指
2. 构造五类趋势
3. 训练深度网络
4. 比较传统模型
5. 生成SHAP解释

### 04 指标与成果

- 重点指标：Accuracy、Precision、Recall、F1-score、解释重要性
- 代表结果：论文报告：平均准确率94.9%、F1为94.85%，高于RF的85.7%准确率/77.95% F1；SHAP与LIME用于解释关键特征。
- 使用边界：仅用于金融研究与决策辅助，不构成投资、授信或交易建议。

### 数据与代码入口

- 数据入口：[https://finance.yahoo.com/](https://finance.yahoo.com/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
