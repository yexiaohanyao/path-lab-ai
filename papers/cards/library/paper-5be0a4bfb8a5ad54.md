# 蛋白质组学 + 深度离子序列分类

## 碎片离子解析：用深度离子序列分类完成高精度从头测序

> 本地批次：LOCAL-14；源批次：PROTEOMICS-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Deep learning-driven fragment ion series classification enables highly precise and sensitive de novo peptide sequencing
- 期刊/会议：Nature Communications（2024）
- DOI：[10.1038/s41467-023-44323-7](https://doi.org/10.1038/s41467-023-44323-7)
- 正式来源：[https://doi.org/10.1038/s41467-023-44323-7](https://doi.org/10.1038/s41467-023-44323-7)

### 01 数据与问题

- 研究问题：质谱信号高维、碎片不完整且实验批次差异明显，传统规则难以同时提高肽段鉴定、谱图解析和蛋白定量的灵敏度。
- 数据来源：EMBL-EBI/Europe PMC、MassIVE、Zenodo、GitHub
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：mzML/mzXML、质谱峰表、肽段序列、蛋白定量矩阵
- 数据类型：MS/MS碎片离子谱
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：深度离子序列分类
- 核心方法：将深度离子序列分类用于碎片离子解析，把MS/MS碎片离子谱与高精度从头测序连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 采集与整理质谱：MS/MS碎片离子谱
2. 编码峰与碎片关系：m/z｜强度｜肽段/糖链约束
3. 训练深度离子序列分类：高精度从头测序
4. 鉴定与定量验证：谱图库/数据库｜基线｜独立实验

### 04 指标与成果

- 重点指标：完成碎片离子解析的专业验证
- 代表结果：深度离子序列分类完成高精度从头测序并通过正式基准验证；论文在碎片离子解析任务中比较模型、基线或实验结果，报告该方法能够改善高精度从头测序的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.ebi.ac.uk/pride/archive/projects/PXD010154](https://www.ebi.ac.uk/pride/archive/projects/PXD010154)
- 代码入口：[https://github.com/gagneurlab/spectralis](https://github.com/gagneurlab/spectralis)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
