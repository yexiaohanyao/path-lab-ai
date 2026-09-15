# 网络安全 × 神经网络

## 生产环境钓鱼URL检测

> 本地批次：LOCAL-02；源批次：B01-CYBER-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Phishing URL detection with neural networks: an empirical study
- 期刊/会议：Scientific Reports（2024）
- DOI：[10.1038/s41598-024-74725-6](https://doi.org/10.1038/s41598-024-74725-6)
- 正式来源：[https://doi.org/10.1038/s41598-024-74725-6](https://doi.org/10.1038/s41598-024-74725-6)

### 01 数据与问题

- 研究问题：识别短网址与长网址中的钓鱼链接
- 数据来源：公开威胁源与EasyDMARC生产数据
- 数据集/样本：Alexa；PhishTank；OpenPhish；EasyDMARC production URLs
- 数据规模：联合多套公开URL源和真实生产数据，并做每日外部验证
- 数据格式：URL字符串、工程特征、每日验证标签
- 数据类型：公开网址、生产环境网址
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：神经网络
- 核心方法：确定性与概率神经网络URL分类

### 03 论文 Pipeline

1. 汇集多源URL
2. 构造无依赖特征
3. 训练概率网络
4. 接入生产数据
5. 每日滚动验证

### 04 指标与成果

- 重点指标：Accuracy、短URL表现、长URL表现、生产验证稳定性
- 代表结果：论文报告：在PhishTank、OpenPhish及EasyDMARC可标注的每日验证数据上，模型平均准确率达到97%，并在短、长URL上保持高准确度。
- 使用边界：用于检测研究与安全辅助；上线前须验证漂移、对抗与隐私风险。

### 数据与代码入口

- 数据入口：[https://phishtank.org/](https://phishtank.org/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
