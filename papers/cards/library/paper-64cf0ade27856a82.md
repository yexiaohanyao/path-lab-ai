# 多组学 × 图学习

## 单细胞多组学调控网络推断

> 本地批次：LOCAL-06；源批次：B05-MULTIOMICS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Inferring gene regulatory networks from single-cell multiome data using atlas-scale external data
- 期刊/会议：Nature Biotechnology（2024）
- DOI：[10.1038/s41587-024-02182-7](https://doi.org/10.1038/s41587-024-02182-7)
- 正式来源：[https://doi.org/10.1038/s41587-024-02182-7](https://doi.org/10.1038/s41587-024-02182-7)

### 01 数据与问题

- 研究问题：单细胞多组学基因调控网络推断
- 数据来源：配对单细胞RNA/ATAC、PBMC与SNARE-seq数据及图谱级外部bulk数据
- 数据集/样本：10x PBMC multiome；SNARE-seq GSE126074；atlas-scale bulk data
- 数据规模：融合配对单细胞数据和跨细胞情境的图谱级外部数据
- 数据格式：RNA表达、ATAC可及性、TF基序、bulk图谱
- 数据类型：单细胞multiome、bulk转录组/表观组
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：图学习
- 核心方法：图模型与跨数据集知识迁移

### 03 论文 Pipeline

1. 整理配对multiome
2. 引入图谱先验
3. 学习调控网络
4. 估计TF活性
5. 解释疾病变异

### 04 指标与成果

- 重点指标：网络推断准确性、相对基线增益、TF活性、疾病变异解释
- 代表结果：论文报告：LINGER相对已有方法实现4至7倍的准确性提升，并增强GWAS变异和基因的调控解释。
- 使用边界：推断网络和TF活性属于模型证据，因果调控需扰动实验验证。

### 数据与代码入口

- 数据入口：[http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE126074](http://www.ncbi.nlm.nih.gov/geo/query/acc.cgi?acc=GSE126074)
- 代码入口：[https://github.com/Durenlab/LINGER](https://github.com/Durenlab/LINGER)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
