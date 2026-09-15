# 妇产科学 × 可解释集成学习

## 妊娠期糖尿病不良妊娠结局预测

> 本地批次：LOCAL-03；源批次：B03-OBGYN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Interpretable Machine Learning for Predicting Adverse Pregnancy Outcomes in Gestational Diabetes: Retrospective Cohort Study.
- 期刊/会议：JMIR Medical Informatics（2025）
- DOI：[10.2196/71539](https://doi.org/10.2196/71539)
- 正式来源：[https://doi.org/10.2196/71539](https://doi.org/10.2196/71539)

### 01 数据与问题

- 研究问题：妊娠期糖尿病不良妊娠结局预测
- 数据来源：GDM临床数据与Jinniu外部验证队列；主队列1670名、200例不良结局；独立医院外部验证159名
- 数据集/样本：详见论文正文
- 数据规模：主队列1670名、200例不良结局；独立医院外部验证159名
- 数据格式：孕妇临床表格、血糖与孕产史、不良结局标签
- 数据类型：妊娠期糖尿病、母婴结局
- 数据状态：公开Figshare数据集

### 02 AI 怎么参与

- AI 技术：可解释集成学习
- 核心方法：以ADASYN处理不平衡，融合逻辑回归、RF、SVM和XGBoost堆叠模型，并用SHAP解释

### 03 论文 Pipeline

1. 清洗GDM队列
2. 选择并重编码特征
3. ADASYN平衡样本
4. 训练堆叠模型
5. SHAP与外部验证

### 04 指标与成果

- 重点指标：AUC,准确率,敏感度,特异度
- 代表结果：测试集准确率85.6%、敏感度57.8%、特异度95.9%、AUC 0.82；外部AUC降至0.67。
- 使用边界：外部性能明显下降且敏感度有限，不能单独排除不良妊娠结局

### 数据与代码入口

- 数据入口：[https://figshare.com/articles/dataset/GDM_Dataset_xlsx/21806472?file=38695140](https://figshare.com/articles/dataset/GDM_Dataset_xlsx/21806472?file=38695140)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
