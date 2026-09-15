# 神经生物学 + 稀疏脉冲解码模型

## 决策神经编码：用稀疏脉冲解码模型完成决策行为解码

> 本地批次：LOCAL-14；源批次：NEUROBIO-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：Decoding decision-making behavior from sparse neural spiking activity
- 期刊/会议：PLOS Computational Biology（2025）
- DOI：[10.1371/journal.pcbi.1013335](https://doi.org/10.1371/journal.pcbi.1013335)
- 正式来源：[https://doi.org/10.1371/journal.pcbi.1013335](https://doi.org/10.1371/journal.pcbi.1013335)

### 01 数据与问题

- 研究问题：神经活动具有高维、非线性和跨个体差异，传统分析难以把信号、连接组和行为统一到可解释的回路机制。
- 数据来源：GitHub
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：神经脉冲序列、钙成像/荧光视频、电生理时序、连接组图
- 数据类型：稀疏神经脉冲与行为
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：稀疏脉冲解码模型
- 核心方法：将稀疏脉冲解码模型用于决策神经编码，把稀疏神经脉冲与行为与决策行为解码连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 采集神经与行为数据：稀疏神经脉冲与行为
2. 形成时空/连接表征：细胞｜回路｜群体动力学
3. 训练稀疏脉冲解码模型：决策行为解码
4. 跨动物/实验验证：行为、回路或信号重建比较

### 04 指标与成果

- 重点指标：完成决策神经编码的专业验证
- 代表结果：稀疏脉冲解码模型完成决策行为解码并通过正式基准验证；论文在决策神经编码任务中比较模型、基线或实验结果，报告该方法能够改善决策行为解码的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/ZhangYH321/CA-BiLSTM/tree/master](https://github.com/ZhangYH321/CA-BiLSTM/tree/master)
- 代码入口：[https://github.com/ZhangYH321/CA-BiLSTM/tree/master](https://github.com/ZhangYH321/CA-BiLSTM/tree/master)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
