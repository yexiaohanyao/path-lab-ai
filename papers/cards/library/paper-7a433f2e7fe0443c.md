# 法律 × Transformer

## 就业法庭案件结果预测的AI实证研究

> 本地批次：LOCAL-05；源批次：LAW-AI-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：The CLC-UKET Dataset: Benchmarking Case Outcome Prediction for the UK Employment Tribunal
- 期刊/会议：NLLP 2024（2024）
- DOI：[10.18653/v1/2024.nllp-1.7](https://doi.org/10.18653/v1/2024.nllp-1.7)
- 正式来源：[https://aclanthology.org/2024.nllp-1.7/](https://aclanthology.org/2024.nllp-1.7/)

### 01 数据与问题

- 研究问题：就业法庭案件结果预测
- 数据来源：Cambridge Law Corpus / CLC-UKET；19,090件UKET案件带详细标注；其中14,582件用于结果预测
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：Transformer
- 核心方法：LLM自动标注与Transformer

### 03 论文 Pipeline

1. 案件清洗
2. 要素标注
3. 文本编码
4. 结果预测
5. 专家比较

### 04 指标与成果

- 重点指标：准确率、F1、证据归因、人工评审
- 代表结果：微调Transformer优于零样本和少样本LLM，并以人类预测作参照
- 使用边界：仅用于研究和辅助审阅，不替代法律意见或司法裁量。

### 数据与代码入口

- 数据入口：[https://www.law.cam.ac.uk/clc-uket-dataset-benchmarking-case-outcome-prediction-uk-employment-tribunal](https://www.law.cam.ac.uk/clc-uket-dataset-benchmarking-case-outcome-prediction-uk-employment-tribunal)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
