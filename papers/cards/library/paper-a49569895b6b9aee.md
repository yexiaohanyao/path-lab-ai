# 护理学 + 监督机器学习

## 围术期护理预警：用监督机器学习完成护理量表术后谵妄预测

> 本地批次：LOCAL-15；源批次：NURSING-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Predicting postoperative delirium assessed by the Nursing Screening Delirium Scale in the recovery room for non-cardiac surgeries without craniotomy: A retrospective study using a machine learning approach
- 期刊/会议：PLOS Digital Health（2024）
- DOI：[10.1371/journal.pdig.0000414](https://doi.org/10.1371/journal.pdig.0000414)
- 正式来源：[https://doi.org/10.1371/journal.pdig.0000414](https://doi.org/10.1371/journal.pdig.0000414)

### 01 数据与问题

- 研究问题：护理工作流包含连续生命体征、病历文本和照护事件，人工评估难以及时整合多源信号并识别护理敏感风险。
- 数据来源：doi.org、NCBI、MIMIC/PhysioNet、出版社补充材料
- 数据集/样本：详见论文正文
- 数据规模：Multiple surgeries during one hospitalization were treated as individual samples.Fig 1 summarizes the inclusion criteria yielding the cohort of 61,187 patients with 69,974 hospital stays and 73,181 performed surgeries.
- 数据格式：护理记录文本、护理诊断与评估表、病区时序事件、护理敏感结局
- 数据类型：围术期记录与Nu-DESC
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：监督机器学习
- 核心方法：将监督机器学习用于围术期护理预警，把围术期记录与Nu-DESC与护理量表术后谵妄预测连接为可核验的护理学AI流程。

### 03 论文 Pipeline

1. 整合护理工作流数据：围术期记录与Nu-DESC
2. 形成患者时序表征：生命体征｜护理记录｜照护事件
3. 训练监督机器学习：护理量表术后谵妄预测
4. 护理结局验证：患者级测试｜临床单元｜安全与工作流边界

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：监督机器学习完成护理量表术后谵妄预测；论文报告：Both non-linear models variants—MLPs and trees—clearly outperformed baseline models.Table 6Performance metrics (mean, [95% confidence interval]) on bootstrapped test sets for trained logistic regression (lr), multi-layer-perceptron (mlp), tree-based models (tree), or pre-trained (pretr) models.The best baseline models according to the AUROC and AUPRC metrics (Wassenaar and Boogaard) are also included.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://doi.org/10.5061/dryad.1vhhmgr2g](https://doi.org/10.5061/dryad.1vhhmgr2g)
- 代码入口：[https://github.com/ngiesa/icdep](https://github.com/ngiesa/icdep)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
