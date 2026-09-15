# 基因组学 + 自监督序列学习

## RNA剪接：用自监督序列学习完成剪接预测

> 本地批次：LOCAL-14；源批次：GENOMICS-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Self-supervised learning on millions of primary RNA sequences from 72 vertebrates improves sequence-based RNA splicing prediction
- 期刊/会议：Briefings in Bioinformatics（2024）
- DOI：[10.1093/bib/bbae163](https://doi.org/10.1093/bib/bbae163)
- 正式来源：[https://doi.org/10.1093/bib/bbae163](https://doi.org/10.1093/bib/bbae163)

### 01 数据与问题

- 研究问题：基因组序列长、调控语境复杂且跨物种差异明显，传统特征和局部比对难以统一支持调控、剪接与变异效应预测。
- 数据来源：GitHub、ENCODE
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：DNA/RNA序列、组学矩阵、变异注释、模型基准
- 数据类型：脊椎动物RNA序列
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：自监督序列学习
- 核心方法：将自监督序列学习用于RNA剪接，把脊椎动物RNA序列与剪接预测连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 组织序列与组学：脊椎动物RNA序列
2. 编码基因组语境：序列token｜位置/物种/组织信息
3. 训练自监督序列学习：剪接预测
4. 基准与功能验证：跨数据集｜消融｜调控/剪接/变异任务

### 04 指标与成果

- 重点指标：完成RNA剪接的专业验证
- 代表结果：自监督序列学习完成剪接预测并通过正式基准验证；论文在RNA剪接任务中比较模型、基线或实验结果，报告该方法能够改善剪接预测的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/biomed-AI/SpliceBERT](https://github.com/biomed-AI/SpliceBERT)
- 代码入口：[https://github.com/biomed-AI/SpliceBERT](https://github.com/biomed-AI/SpliceBERT)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
