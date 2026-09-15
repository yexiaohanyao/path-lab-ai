# 免疫学 × 随机森林＋SHAP

## 细胞免疫数据预测临床严重度

> 本地批次：LOCAL-06；源批次：B06-IMMUNO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Cellular immunology data enable clinical severity prediction via supervised machine learning.
- 期刊/会议：iScience（2026）
- DOI：[10.1016/j.isci.2026.116343](https://doi.org/10.1016/j.isci.2026.116343)
- 正式来源：[https://doi.org/10.1016/j.isci.2026.116343](https://doi.org/10.1016/j.isci.2026.116343)

### 01 数据与问题

- 研究问题：细胞免疫数据驱动的临床严重度预测
- 数据来源：COVID-19 PBMC高维流式细胞队列
- 数据集/样本：ImmPort SDY2011；Cytobank COVID immune profiling
- 数据规模：157份PBMC样本、193项免疫特征；97例重症、60例较轻；125份开发、32份测试
- 数据格式：流式细胞特征表、临床严重度标签
- 数据类型：外周血免疫细胞表型、临床结局
- 数据状态：研究数据可通过ImmPort SDY2011及论文列出的Cytobank实验访问。

### 02 AI 怎么参与

- AI 技术：随机森林＋SHAP
- 核心方法：随机森林预测疾病严重度，并用SHAP从193项特征中解释核心免疫表型。

### 03 论文 Pipeline

1. 整理157份PBMC高维流式数据
2. 统一193项免疫特征和严重度标签
3. 按125份开发与32份测试划分
4. 训练随机森林并校准分类性能
5. 用SHAP提炼14项关键免疫特征

### 04 指标与成果

- 重点指标：AUROC、AUPRC、核心特征数
- 代表结果：独立测试AUROC=0.8708、AUPRC=0.86；SHAP筛出14项主导临床严重度预测的免疫特征。
- 使用边界：样本来自COVID-19特定队列；模型不能直接作为其他感染或临床人群的通用分级工具。

### 数据与代码入口

- 数据入口：[https://www.immport.org/shared/study/SDY2011](https://www.immport.org/shared/study/SDY2011)
- 代码入口：[https://github.com/dokyoonkimlab/Covid_IH](https://github.com/dokyoonkimlab/Covid_IH)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
