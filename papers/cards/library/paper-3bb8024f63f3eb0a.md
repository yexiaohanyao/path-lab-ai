# 多组学 × 无监督深度学习

## 癌细胞系多组学合成增强

> 本地批次：LOCAL-06；源批次：B05-MULTIOMICS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Synthetic augmentation of cancer cell line multi-omic datasets using unsupervised deep learning
- 期刊/会议：Nature Communications（2024）
- DOI：[10.1038/s41467-024-54771-4](https://doi.org/10.1038/s41467-024-54771-4)
- 正式来源：[https://doi.org/10.1038/s41467-024-54771-4](https://doi.org/10.1038/s41467-024-54771-4)

### 01 数据与问题

- 研究问题：癌细胞系多组学数据合成增强
- 数据来源：Cancer Dependency Map多组学与癌细胞系药物/基因依赖数据
- 数据集/样本：DepMap；CCLE；MOSA augmented datasets
- 数据规模：多组学档案数增加32.7%，补全1,523条癌细胞系档案
- 数据格式：多组学矩阵、药物反应、CRISPR依赖、细胞系标签
- 数据类型：转录组、蛋白组、代谢组、药物与基因依赖
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：无监督深度学习
- 核心方法：无监督深度生成增强

### 03 论文 Pipeline

1. 汇集DepMap数据
2. 训练无监督模型
3. 重建缺失组学
4. 下游依赖验证
5. SHAP解释特征

### 04 指标与成果

- 重点指标：档案增幅、重建相关性、统计功效、下游聚类与依赖关联
- 代表结果：论文报告：MOSA将多组学档案数量提高32.7%，生成覆盖1,523个癌细胞系的完整DepMap，并增强遗传关联发现能力。
- 使用边界：合成档案不是实测数据，关键药物和基因依赖结论必须实验复核。

### 数据与代码入口

- 数据入口：[https://doi.org/10.6084/m9.figshare.24562765](https://doi.org/10.6084/m9.figshare.24562765)
- 代码入口：[https://github.com/QuantitativeBiology/PhenPred](https://github.com/QuantitativeBiology/PhenPred)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
