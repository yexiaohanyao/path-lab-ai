# 公共卫生与预防医学 + 预测与因果机器学习

## 精准公共卫生：用预测与因果机器学习完成社区糖尿病驱动因素识别

> 本地批次：LOCAL-15；源批次：PUBLICHEALTH-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Mapping neighbourhood-level drivers of type 2 diabetes for precision public health using predictive and causal machine learning
- 期刊/会议：Scientific Reports（2026）
- DOI：[10.1038/s41598-025-34287-7](https://doi.org/10.1038/s41598-025-34287-7)
- 正式来源：[https://doi.org/10.1038/s41598-025-34287-7](https://doi.org/10.1038/s41598-025-34287-7)

### 01 数据与问题

- 研究问题：人群健康数据具有时空异质性、社会因素混杂和群体公平差异，传统模型难以同时支持风险预测、因果评估与资源配置。
- 数据来源：NHANES
- 数据集/样本：详见论文正文
- 数据规模：使用大多伦多地区1,149个统计区的人口、健康和社会经济数据，覆盖约620万人口，并在独立地理区域验证。
- 数据格式：人群调查表、时空监测序列、EHR/登记数据、社会决定因素与政策变量
- 数据类型：邻里环境与区域糖尿病数据
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：预测与因果机器学习
- 核心方法：将预测与因果机器学习用于精准公共卫生，把邻里环境与区域糖尿病数据与社区糖尿病驱动因素识别连接为可核验的公共卫生与预防医学AI流程。

### 03 论文 Pipeline

1. 汇集人群健康数据：邻里环境与区域糖尿病数据
2. 连接时空与社会因素：地区｜人群亚组｜环境与政策变量
3. 训练预测与因果机器学习：社区糖尿病驱动因素识别
4. 人群层验证：外部地区｜公平性｜干预与资源配置

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：预测与因果机器学习完成社区糖尿病驱动因素识别；论文报告：Each model learns a decision rule to minimize a loss function on the training set, with hyperparameters tuned by five-fold cross-validation.Model performance was evaluated in terms of accuracy, precision, recall, F1-score, and area under the ROC curve (AUC) to provide a comprehensive assessment.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.cdc.gov/nchs/nhanes/](https://www.cdc.gov/nchs/nhanes/)
- 代码入口：[https://github.com/HIVE-UofT/diabetes-analysis](https://github.com/HIVE-UofT/diabetes-analysis)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
