# 神经医学 + 多任务预训练Transformer

## 意识障碍：用多任务预训练Transformer完成意识状态分类

> 本地批次：LOCAL-15；源批次：NEUROMED-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：MutaPT: A Multi-Task Pre-Trained Transformer for Classifying State of Disorders of Consciousness Using EEG Signal
- 期刊/会议：Brain Sciences（2024）
- DOI：[10.3390/brainsci14070688](https://doi.org/10.3390/brainsci14070688)
- 正式来源：[https://doi.org/10.3390/brainsci14070688](https://doi.org/10.3390/brainsci14070688)

### 01 数据与问题

- 研究问题：脑电与神经临床信息跨患者差异大、事件稀少且标注成本高，传统判读难以稳定完成连续监测、定位和预后评估。
- 数据来源：TUH EEG、CHB-MIT、PhysioNet及论文临床神经队列
- 数据集/样本：详见论文正文
- 数据规模：多任务预训练覆盖DEAP 32人、SEED 15人、SEED-IV 15人；意识障碍下游数据集含285名患者。
- 数据格式：EEG时序、脑网络连接特征、临床量表与病历、神经结局标签
- 数据类型：多源临床EEG
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：多任务预训练Transformer
- 核心方法：将多任务预训练Transformer用于意识障碍，把多源临床EEG与意识状态分类连接为可核验的神经医学AI流程。

### 03 论文 Pipeline

1. 采集神经临床数据：多源临床EEG
2. 构建时空表征：EEG通道｜连接特征｜病历与量表
3. 训练多任务预训练Transformer：意识状态分类
4. 神经结局验证：患者级测试｜跨中心｜临床适用边界

### 04 指标与成果

- 重点指标：论文报告临床边界
- 代表结果：多任务预训练Transformer完成意识状态分类；论文报告：The corresponding formulas are listed as follows:(11)Accuracy =TP + TNTP + TN + FP + FN,(12)Specificity =TNTN + FP,(13)Sensitivity =TPTP + FN, where TP, TN, FP, and FN denote true positive, true negative, false positive, and false negative, respectively.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
