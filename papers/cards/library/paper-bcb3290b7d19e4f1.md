# 蛋白质组学 + 双向Transformer

## 双向肽段测序：用双向Transformer完成肽段序列生成

> 本地批次：LOCAL-14；源批次：PROTEOMICS-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Bidirectional de novo peptide sequencing using a transformer model
- 期刊/会议：PLOS Computational Biology（2024）
- DOI：[10.1371/journal.pcbi.1011892](https://doi.org/10.1371/journal.pcbi.1011892)
- 正式来源：[https://doi.org/10.1371/journal.pcbi.1011892](https://doi.org/10.1371/journal.pcbi.1011892)

### 01 数据与问题

- 研究问题：质谱信号高维、碎片不完整且实验批次差异明显，传统规则难以同时提高肽段鉴定、谱图解析和蛋白定量的灵敏度。
- 数据来源：GitHub、EMBL-EBI/Europe PMC
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：mzML/mzXML、质谱峰表、肽段序列、蛋白定量矩阵
- 数据类型：MS/MS谱图
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：双向Transformer
- 核心方法：将双向Transformer用于双向肽段测序，把MS/MS谱图与肽段序列生成连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 采集与整理质谱：MS/MS谱图
2. 编码峰与碎片关系：m/z｜强度｜肽段/糖链约束
3. 训练双向Transformer：肽段序列生成
4. 鉴定与定量验证：谱图库/数据库｜基线｜独立实验

### 04 指标与成果

- 重点指标：完成双向肽段测序的专业验证
- 代表结果：双向Transformer完成肽段序列生成并通过正式基准验证；论文在双向肽段测序任务中比较模型、基线或实验结果，报告该方法能够改善肽段序列生成的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/ProteomeTeam/NovoB](https://github.com/ProteomeTeam/NovoB)
- 代码入口：[https://github.com/ProteomeTeam/NovoB](https://github.com/ProteomeTeam/NovoB)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
