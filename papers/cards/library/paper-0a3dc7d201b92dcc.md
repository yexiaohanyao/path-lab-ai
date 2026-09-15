# 微生物学 + 多视图对比学习

## 宏基因组分箱：用多视图对比学习完成宏基因组contig分箱

> 本地批次：LOCAL-14；源批次：MICROBIO-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Effective binning of metagenomic contigs using contrastive multi-view representation learning
- 期刊/会议：Nature Communications（2024）
- DOI：[10.1038/s41467-023-44290-z](https://doi.org/10.1038/s41467-023-44290-z)
- 正式来源：[https://doi.org/10.1038/s41467-023-44290-z](https://doi.org/10.1038/s41467-023-44290-z)

### 01 数据与问题

- 研究问题：宏基因组序列碎片化、物种组成复杂且标签有限，传统方法难以稳定解析群落、耐药基因和病毒—宿主关系。
- 数据来源：EMBL-EBI/Europe PMC、GitHub、NCBI
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：微生物基因组/宏基因组序列、丰度矩阵、耐药表型、宿主多组学
- 数据类型：contig序列与覆盖度
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：多视图对比学习
- 核心方法：将多视图对比学习用于宏基因组分箱，把contig序列与覆盖度与宏基因组contig分箱连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 整理微生物数据：contig序列与覆盖度
2. 编码序列与群落关系：contig｜基因组｜丰度/宿主图
3. 训练多视图对比学习：宏基因组contig分箱
4. 功能与生态验证：基准数据｜实验注释｜跨群落比较

### 04 指标与成果

- 重点指标：完成宏基因组分箱的专业验证
- 代表结果：多视图对比学习完成宏基因组contig分箱并通过正式基准验证；论文在宏基因组分箱任务中比较模型、基线或实验结果，报告该方法能够改善宏基因组contig分箱的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.ebi.ac.uk/ena/browser/view/PRJEB1775](https://www.ebi.ac.uk/ena/browser/view/PRJEB1775)
- 代码入口：[https://github.com/ziyewang/COMEBin_benchmark](https://github.com/ziyewang/COMEBin_benchmark)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
