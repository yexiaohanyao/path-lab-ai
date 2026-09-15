# 多组学 × Transformer

## 通路约束的癌症多组学预测

> 本地批次：LOCAL-06；源批次：B05-MULTIOMICS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：DeePathNet: A Transformer-Based Deep Learning Model Integrating Multiomic Data with Cancer Pathways
- 期刊/会议：Cancer Research Communications（2024）
- DOI：[10.1158/2767-9764.crc-24-0285](https://doi.org/10.1158/2767-9764.crc-24-0285)
- 正式来源：[https://doi.org/10.1158/2767-9764.crc-24-0285](https://doi.org/10.1158/2767-9764.crc-24-0285)

### 01 数据与问题

- 研究问题：多组学癌症分类与生存分析
- 数据来源：ProCan-DepMapSanger、CCLE、TCGA与CPTAC公开癌症数据
- 数据集/样本：ProCan-DepMapSanger；CCLE；TCGA；CPTAC
- 数据规模：在多套大型细胞系和患者队列上训练、比较与外部验证
- 数据格式：多组学矩阵、药物反应、癌种/亚型标签、通路网络
- 数据类型：癌症多组学、药物反应
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：Transformer
- 核心方法：Transformer与通路网络融合

### 03 论文 Pipeline

1. 汇集癌症组学
2. 编码通路知识
3. 训练Transformer
4. 多任务外部验证
5. 解释通路标志

### 04 指标与成果

- 重点指标：药物反应预测、癌种分类、亚型分类、通路解释
- 代表结果：论文报告：DeePathNet在多套大型数据上优于传统方法，覆盖药物反应以及癌种和亚型分类。
- 使用边界：模型用于研究和候选优先级，不替代临床分型或用药判断。

### 数据与代码入口

- 数据入口：[https://doi.org/10.6084/m9.figshare.24137619](https://doi.org/10.6084/m9.figshare.24137619)
- 代码入口：[https://github.com/CMRI-ProCan/DeePathNet](https://github.com/CMRI-ProCan/DeePathNet)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
