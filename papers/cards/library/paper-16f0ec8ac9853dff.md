# 基因组学 + DNA语言模型

## 跨越806个物种，让DNA语言模型读懂调控元件及其进化

> 本地批次：LOCAL-14；源批次：GENOMICS-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Species-aware DNA language models capture regulatory elements and their evolution
- 期刊/会议：Genome Biology（2024）
- DOI：[10.1186/s13059-024-03221-x](https://doi.org/10.1186/s13059-024-03221-x)
- 正式来源：[https://doi.org/10.1186/s13059-024-03221-x](https://doi.org/10.1186/s13059-024-03221-x)

### 01 数据与问题

- 研究问题：传统序列比对难以整合远缘物种中快速演化的非编码调控序列。论文研究能否仅利用大规模基因组序列，在无需逐物种实验标签的情况下学习共享及物种特异的调控规律。
- 数据来源：Ensembl Fungi 53及论文列出的公开下游数据
- 数据集/样本：详见论文正文
- 数据规模：1,500个真菌基因组｜806个物种｜约1,300万条训练序列
- 数据格式：DNA序列与基因组注释、表达/MPRA表格、模型权重
- 数据类型：5′/3′非编码DNA序列 · 表达与MPRA数据 · 调控基序
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：DNA语言模型
- 核心方法：在DNA语言模型输入中加入物种token，使模型能同时学习跨物种共享规律与物种特异调控语境，并把无比对的序列预训练连接到调控元件发现和表达预测。

### 03 论文 Pipeline

1. 跨物种序列输入：1,500个基因组｜806个物种｜5′与3′调控区域
2. 物种感知预训练：掩码核苷酸建模｜物种token｜DNA Transformer
3. 未见物种检验：留出S. cerevisiae及整个Saccharomyces属｜基序重建
4. 功能任务验证：10折交叉验证｜表达与RNA半衰期｜MPRA｜基序发现

### 04 指标与成果

- 重点指标：806个物种跨越超过5亿年进化距离
- 代表结果：MPRA表达预测的解释方差提高20个百分点；在Shalem等人的3′ MPRA数据上，物种感知模型相对物种无关模型多解释20个百分点的变异，并能恢复具有生物学意义的调控基序。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-53/](https://ftp.ensemblgenomes.ebi.ac.uk/pub/fungi/release-53/)
- 代码入口：[https://github.com/gagneurlab/SpeciesLM](https://github.com/gagneurlab/SpeciesLM)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
