# 合成生物学 + 机器学习引导筛选

## 无细胞酶工程：用机器学习引导筛选完成酶活优化

> 本地批次：LOCAL-14；源批次：SYNBIO-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Accelerated enzyme engineering by machine-learning guided cell-free expression
- 期刊/会议：Nature Communications（2025）
- DOI：[10.1038/s41467-024-55399-0](https://doi.org/10.1038/s41467-024-55399-0)
- 正式来源：[https://doi.org/10.1038/s41467-024-55399-0](https://doi.org/10.1038/s41467-024-55399-0)

### 01 数据与问题

- 研究问题：生物设计空间巨大而湿实验成本高，逐轮试错难以高效找到兼顾活性、稳定性与可构建性的序列或工艺。
- 数据来源：GitHub
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：DNA/蛋白序列、酶活与适应度表、培养与产量数据、实验迭代记录
- 数据类型：序列、无细胞表达与活性测量
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：机器学习引导筛选
- 核心方法：将机器学习引导筛选用于无细胞酶工程，把序列、无细胞表达与活性测量与酶活优化连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 建立序列—功能数据：序列、无细胞表达与活性测量
2. 学习设计空间：机器学习引导筛选｜适应度/活性/稳定性
3. 选择并构建候选：酶活优化
4. 实验反馈迭代：设计—构建—测试—学习闭环

### 04 指标与成果

- 重点指标：完成无细胞酶工程的专业验证
- 代表结果：机器学习引导筛选完成酶活优化并通过正式基准验证；论文在无细胞酶工程任务中比较模型、基线或实验结果，报告该方法能够改善酶活优化的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/debbiemarkslab/EVcouplings/blob/develop/notebooks/model_parameters_mutation_effects.ipynb](https://github.com/debbiemarkslab/EVcouplings/blob/develop/notebooks/model_parameters_mutation_effects.ipynb)
- 代码入口：[https://github.com/debbiemarkslab/EVcouplings/blob/develop/notebooks/model_parameters_mutation_effects.ipynb](https://github.com/debbiemarkslab/EVcouplings/blob/develop/notebooks/model_parameters_mutation_effects.ipynb)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
