# 神经医学 + 多维Transformer与RNN融合

## 癫痫发作预警：用多维Transformer与RNN融合完成癫痫发作提前预测

> 本地批次：LOCAL-15；源批次：NEUROMED-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Epileptic seizure prediction via multidimensional transformer and recurrent neural network fusion
- 期刊/会议：Journal of Translational Medicine（2024）
- DOI：[10.1186/s12967-024-05678-7](https://doi.org/10.1186/s12967-024-05678-7)
- 正式来源：[https://doi.org/10.1186/s12967-024-05678-7](https://doi.org/10.1186/s12967-024-05678-7)

### 01 数据与问题

- 研究问题：脑电与神经临床信息跨患者差异大、事件稀少且标注成本高，传统判读难以稳定完成连续监测、定位和预后评估。
- 数据来源：CHB-MIT
- 数据集/样本：详见论文正文
- 数据规模：在Bonn EEG与CHB-MIT两个数据集上评估；Bonn含500段EEG记录，CHB-MIT覆盖23名儿童的24个病例文件夹及约844小时连续EEG。
- 数据格式：EEG时序、脑网络连接特征、临床量表与病历、神经结局标签
- 数据类型：多通道EEG时序
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：多维Transformer与RNN融合
- 核心方法：将多维Transformer与RNN融合用于癫痫发作预警，把多通道EEG时序与癫痫发作提前预测连接为可核验的神经医学AI流程。

### 03 论文 Pipeline

1. 采集神经临床数据：多通道EEG时序
2. 构建时空表征：EEG通道｜连接特征｜病历与量表
3. 训练多维Transformer与RNN融合：癫痫发作提前预测
4. 神经结局验证：患者级测试｜跨中心｜临床适用边界

### 04 指标与成果

- 重点指标：论文报告亚组验证
- 代表结果：多维Transformer与RNN融合完成癫痫发作提前预测；论文报告：The accuracy was 98.75%, sensitivity was 98.24%, specificity was 98.50%, and both precision and F1 score were around 98%.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://physionet.org/content/chbmit/](https://physionet.org/content/chbmit/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
