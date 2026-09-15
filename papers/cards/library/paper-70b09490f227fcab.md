# 电气工程 × 深度学习

## 基于气温、湿度、风速和风向的风机功率预测

> 本地批次：LOCAL-02；源批次：B02-ELECTRICAL-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Evaluating Machine Learning and Deep Learning models for predicting Wind Turbine power output from environmental factors
- 期刊/会议：PLoS ONE（2025）
- DOI：[10.1371/journal.pone.0317619](https://doi.org/10.1371/journal.pone.0317619)
- 正式来源：[https://doi.org/10.1371/journal.pone.0317619](https://doi.org/10.1371/journal.pone.0317619)

### 01 数据与问题

- 研究问题：基于气温、湿度、风速和风向的风机功率预测
- 数据来源：论文风机功率数据；40,000条风机环境与功率观测
- 数据集/样本：详见论文正文
- 数据规模：40,000条风机环境与功率观测
- 数据格式：多变量表格、环境时序、功率连续值
- 数据类型：气象变量、风机输出功率
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：深度学习
- 核心方法：系统对比ET、RF、XGBoost等ML与ANN、LSTM、RNN、CNN等DL模型

### 03 论文 Pipeline

1. 环境数据整理
2. 特征缩放
3. ML/DL并行训练
4. 调参与测试
5. 误差横向对比

### 04 指标与成果

- 重点指标：R²,MAE,RMSE,模型比较
- 代表结果：ET在ML中R²=0.7231、RMSE=0.1512；ANN在DL中最优，R²=0.7248、RMSE=0.1516，仅略优于最佳ML。
- 使用边界：功率预测结果不直接代表极端天气和新机组上的泛化能力

### 数据与代码入口

- 数据入口：[https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317619](https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0317619)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
