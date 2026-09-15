# 免疫学 × 堆叠学习＋特征Transformer

## 抗体重链序列的特异性分类

> 本地批次：LOCAL-06；源批次：B06-IMMUNO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Computational models for the classification of antibody specificity using heavy chain features.
- 期刊/会议：PLOS One（2026）
- DOI：[10.1371/journal.pone.0349143](https://doi.org/10.1371/journal.pone.0349143)
- 正式来源：[https://doi.org/10.1371/journal.pone.0349143](https://doi.org/10.1371/journal.pone.0349143)

### 01 数据与问题

- 研究问题：抗体特异性分类
- 数据来源：NCBI Protein抗体重链序列
- 数据集/样本：AbClass五类抗体特异性数据集
- 数据规模：1,111条低冗余抗体重链，5个特异性类别，81项序列特征，按80:20划分
- 数据格式：FASTA序列、序列衍生特征表
- 数据类型：抗体重链氨基酸序列、特异性类别
- 数据状态：原始序列来自NCBI Protein。

### 02 AI 怎么参与

- AI 技术：CatBoost堆叠＋特征Transformer
- 核心方法：五类树模型经CatBoost堆叠，并与基于特征的Transformer比较；SHAP解释分类依据。

### 03 论文 Pipeline

1. 从NCBI整理五类抗体重链序列
2. 去冗余并计算81项序列特征
3. 按80:20构建训练与测试集合
4. 训练五类树模型、堆叠模型和Transformer
5. 用SHAP解释各特异性类别的关键特征

### 04 指标与成果

- 重点指标：Accuracy、macro-AUROC、macro-AUPRC、F1
- 代表结果：堆叠模型准确率0.7803、macro-AUROC 0.9480、macro-AUPRC 0.7582；Transformer准确率0.7399、F1=0.6761。
- 使用边界：数据量有限且类别不平衡；序列预测不能替代实验结合与功能验证。

### 数据与代码入口

- 数据入口：[https://www.ncbi.nlm.nih.gov/protein/](https://www.ncbi.nlm.nih.gov/protein/)
- 代码入口：[https://github.com/LJxp22/AbClass-Classifier](https://github.com/LJxp22/AbClass-Classifier)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
