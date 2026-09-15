# 多组学 × 可解释深度学习

## 癌症复发预测与生物标志物发现

> 本地批次：LOCAL-06；源批次：B05-MULTIOMICS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：DeepKEGG: a multi-omics data integration framework with biological insights for cancer recurrence prediction and biomarker discovery
- 期刊/会议：Briefings in Bioinformatics（2024）
- DOI：[10.1093/bib/bbae185](https://doi.org/10.1093/bib/bbae185)
- 正式来源：[https://doi.org/10.1093/bib/bbae185](https://doi.org/10.1093/bib/bbae185)

### 01 数据与问题

- 研究问题：癌症复发预测与生物标志物发现
- 数据来源：TCGA癌症多组学数据与KEGG基因/miRNA—通路层级
- 数据集/样本：TCGA；KEGG
- 数据规模：在TCGA队列上进行5折交叉验证和病例分析
- 数据格式：多组学特征、复发标签、通路层级
- 数据类型：癌症基因组、转录组、miRNA
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：可解释深度学习
- 核心方法：通路约束深度学习

### 03 论文 Pipeline

1. 整理TCGA组学
2. 映射KEGG通路
3. 训练层级网络
4. 计算通路归因
5. 验证复发标志

### 04 指标与成果

- 重点指标：5折预测性能、相对基线表现、特征归因、病例生物学一致性
- 代表结果：论文报告：DeepKEGG在5折交叉验证中优于先进多组学方法，病例研究亦支持其标志物发现能力。
- 使用边界：复发预测和标志物仅供研究，不替代临床风险分层与诊疗决策。

### 数据与代码入口

- 数据入口：[https://github.com/lanbiolab/DeepKEGG](https://github.com/lanbiolab/DeepKEGG)
- 代码入口：[https://github.com/lanbiolab/DeepKEGG](https://github.com/lanbiolab/DeepKEGG)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
