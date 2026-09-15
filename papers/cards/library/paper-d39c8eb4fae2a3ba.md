# 水利工程 × XGBoost＋SHAP

## 用XGBoost＋SHAP完成实时水质监测解释

> 本地批次：LOCAL-07；源批次：B07-WATER-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：SHAP-based explainable machine learning for district-wise real-time water quality monitoring in bihar using IoT sensors
- 期刊/会议：Engineering Research Express（2026）
- DOI：[10.1088/2631-8695/ae5ec0](https://doi.org/10.1088/2631-8695/ae5ec0)
- 正式来源：[https://doi.org/10.1088/2631-8695/ae5ec0](https://doi.org/10.1088/2631-8695/ae5ec0)

### 01 数据与问题

- 研究问题：IoT传感器驱动的行政区实时水质监测与解释
- 数据来源：正式JATS摘要
- 数据集/样本：10万余条IoT水样与6项理化参数
- 数据规模：10万余条IoT水样与6项理化参数
- 数据格式：水文水质时序或监测数据
- 数据类型：水利工程研究数据
- 数据状态：正式JATS摘要已核验；数据与代码入口未单独定位

### 02 AI 怎么参与

- AI 技术：随机森林、XGBoost、多层感知机或人工神经网络、SHAP可解释分析
- 核心方法：XGBoost＋SHAP

### 03 论文 Pipeline

1. 整理研究数据
2. 构建水文输入
3. 运行核心模型
4. 生成任务输出
5. 核对报告指标

### 04 指标与成果

- 重点指标：R²、MAE、RMSE、ROC-AUC
- 代表结果：XGBoost的R²为0.23–0.52，pH分类AUC达0.98
- 使用边界：仅限正式摘要披露事实；未披露参数与入口不扩写

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
