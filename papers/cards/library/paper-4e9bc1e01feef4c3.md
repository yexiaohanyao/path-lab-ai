# 法律 × RAG

## 带法条归因的法律问答的AI实证研究

> 本地批次：LOCAL-05；源批次：LAW-AI-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：Attributed Question Answering for Preconditions in the Dutch Law
- 期刊/会议：NLLP 2024（2024）
- DOI：[10.18653/v1/2024.nllp-1.12](https://doi.org/10.18653/v1/2024.nllp-1.12)
- 正式来源：[https://aclanthology.org/2024.nllp-1.12/](https://aclanthology.org/2024.nllp-1.12/)

### 01 数据与问题

- 研究问题：带法条归因的法律问答
- 数据来源：Dutch law knowledge corpus；22,462篇荷兰法条切为30,803个文本块；102组经法律专家复核的问答
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：RAG
- 核心方法：RAG、检索器与LLM生成器

### 03 论文 Pipeline

1. 法条切分
2. 问题检索
3. 证据重排
4. 答案生成
5. 法条归因

### 04 指标与成果

- 重点指标：准确率、F1、证据归因、人工评审
- 代表结果：构建可追溯法条来源的长答案评测集，验证RAG在高引用要求法律问答中的可行性
- 使用边界：仅用于研究和辅助审阅，不替代法律意见或司法裁量。

### 数据与代码入口

- 数据入口：[https://aclanthology.org/2024.nllp-1.12.pdf](https://aclanthology.org/2024.nllp-1.12.pdf)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
