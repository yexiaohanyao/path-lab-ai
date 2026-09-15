# 神经医学 + Inception-ResNet与XGBoost

## 癫痫发作预警：用Inception-ResNet与XGBoost完成新生儿癫痫检测

> 本地批次：LOCAL-15；源批次：NEUROMED-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Neonatal seizure detection from EEG using inception ResNetV2 feature extraction and XGBoost optimized with particle swarm optimization
- 期刊/会议：Scientific Reports（2025）
- DOI：[10.1038/s41598-025-25361-1](https://doi.org/10.1038/s41598-025-25361-1)
- 正式来源：[https://doi.org/10.1038/s41598-025-25361-1](https://doi.org/10.1038/s41598-025-25361-1)

### 01 数据与问题

- 研究问题：脑电与神经临床信息跨患者差异大、事件稀少且标注成本高，传统判读难以稳定完成连续监测、定位和预后评估。
- 数据来源：Zenodo、MIMIC/PhysioNet
- 数据集/样本：详见论文正文
- 数据规模：The median duration per recording is ~ 74 min (IQR 64–96 min), totaling ~ 112 h across the cohort60.Signals were acquired with a Natus NicOne amplifier at 256 Hz using 19 Ag/AgCl electrodes positioned according to the 10–20 system with a midline reference.
- 数据格式：EEG时序、脑网络连接特征、临床量表与病历、神经结局标签
- 数据类型：新生儿EEG
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：Inception-ResNet与XGBoost
- 核心方法：将Inception-ResNet与XGBoost用于癫痫发作预警，把新生儿EEG与新生儿癫痫检测连接为可核验的神经医学AI流程。

### 03 论文 Pipeline

1. 采集神经临床数据：新生儿EEG
2. 构建时空表征：EEG通道｜连接特征｜病历与量表
3. 训练Inception-ResNet与XGBoost：新生儿癫痫检测
4. 神经结局验证：患者级测试｜跨中心｜临床适用边界

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：Inception-ResNet与XGBoost完成新生儿癫痫检测；论文报告：To enhance clinical relevance, we report a comprehensive set of metrics beyond accuracy (sensitivity, specificity, precision, F1-score, and AUC) and assess robustness across analysis window lengths.Accordingly, this study is guided by the following research questions: (RQ1) Can a hybrid framework integrating Inception-ResNetV2 feature extraction with an optimized XGBoost classifier improve the robustness and accuracy of neonatal seizure detection compared to conventional deep models?
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://zenodo.org/record/2547147](https://zenodo.org/record/2547147)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
