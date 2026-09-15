# 神经医学 + 生物物理约束深度网络

## 癫痫手术评估：用生物物理约束深度网络完成头皮EEG发作源成像

> 本地批次：LOCAL-15；源批次：NEUROMED-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Seizure Sources Can Be Imaged from Scalp EEG by Means of Biophysically Constrained Deep Neural Networks
- 期刊/会议：Advanced Science（2024）
- DOI：[10.1002/advs.202405246](https://doi.org/10.1002/advs.202405246)
- 正式来源：[https://doi.org/10.1002/advs.202405246](https://doi.org/10.1002/advs.202405246)

### 01 数据与问题

- 研究问题：脑电与神经临床信息跨患者差异大、事件稀少且标注成本高，传统判读难以稳定完成连续监测、定位和预后评估。
- 数据来源：TUH EEG、CHB-MIT、PhysioNet及论文临床神经队列
- 数据集/样本：详见论文正文
- 数据规模：2.3Patient Data AnalysisThe DeepSIF performance for imaging real ictal signals was evaluated in a cohort of 33 focal DRE patients.
- 数据格式：EEG时序、脑网络连接特征、临床量表与病历、神经结局标签
- 数据类型：头皮EEG与颅内/影像参照
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：生物物理约束深度网络
- 核心方法：将生物物理约束深度网络用于癫痫手术评估，把头皮EEG与颅内/影像参照与头皮EEG发作源成像连接为可核验的神经医学AI流程。

### 03 论文 Pipeline

1. 采集神经临床数据：头皮EEG与颅内/影像参照
2. 构建时空表征：EEG通道｜连接特征｜病历与量表
3. 训练生物物理约束深度网络：头皮EEG发作源成像
4. 神经结局验证：患者级测试｜跨中心｜临床适用边界

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：生物物理约束深度网络完成头皮EEG发作源成像；论文报告：Modified spatial sensitivity and specificity[ 15 , 62 ] were used to evaluate the extent estimation accuracy.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/bfinl/DeepSIF](https://github.com/bfinl/DeepSIF)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
