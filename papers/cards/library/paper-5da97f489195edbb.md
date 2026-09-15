# 临床医学 × 可解释深度学习

## 阿尔茨海默病、额颞叶痴呆与健康对照分类

> 本地批次：LOCAL-03；源批次：B03-CLIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：An explainable and efficient deep learning framework for EEG-based diagnosis of Alzheimer's disease and frontotemporal dementia.
- 期刊/会议：Frontiers in Medicine（2025）
- DOI：[10.3389/fmed.2025.1590201](https://doi.org/10.3389/fmed.2025.1590201)
- 正式来源：[https://doi.org/10.3389/fmed.2025.1590201](https://doi.org/10.3389/fmed.2025.1590201)

### 01 数据与问题

- 研究问题：阿尔茨海默病、额颞叶痴呆与健康对照分类
- 数据来源：OpenNeuro ds004504 EEG数据集；OpenNeuro共88名受试者：36例AD、23例FTD、29名健康对照，19电极、500 Hz EEG
- 数据集/样本：详见论文正文
- 数据规模：OpenNeuro共88名受试者：36例AD、23例FTD、29名健康对照，19电极、500 Hz EEG
- 数据格式：多导EEG时序、诊断标签、分段样本
- 数据类型：神经电生理、痴呆类别
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：可解释深度学习
- 核心方法：以ICA清洗19导EEG，融合TCN与LSTM学习时序特征，并用解释方法展示关键模式

### 03 论文 Pipeline

1. 下载开放EEG
2. ICA清洗并分段
3. 构建TCN-LSTM
4. 平衡并训练分类
5. 评测并生成解释

### 04 指标与成果

- 重点指标：准确率,AUC,F1,精确率
- 代表结果：三分类准确率0.8034；类别AUC分别为AD 0.88、FTD 1.00、健康0.85，FTD类别F1为1.00。
- 使用边界：样本量小且分段数量远大于受试者数，不能把分段指标当作独立人群验证

### 数据与代码入口

- 数据入口：[https://doi.org/10.18112/openneuro.ds004504.v1.0.5](https://doi.org/10.18112/openneuro.ds004504.v1.0.5)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
