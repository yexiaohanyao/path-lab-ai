# 环境公平 + 可解释机器学习

## 从饮用水预测中审计模型选择带来的偏差

> 本地批次：LOCAL-09；源批次：ENV-AI-20260811-01；网站状态：待本地确认。

### 论文来源

- 原论文：Machine learning for environmental justice: Dissecting an algorithmic approach to predict drinking water quality in California
- 期刊/会议：Science of The Total Environment（2024）
- DOI：[10.1016/j.scitotenv.2024.175730](https://doi.org/10.1016/j.scitotenv.2024.175730)
- 正式来源：[https://www.sciencedirect.com/science/article/pii/S0048969724058868](https://www.sciencedirect.com/science/article/pii/S0048969724058868)

### 01 数据与问题

- 研究问题：环境监测模型可能把历史数据的不均衡编码为预测偏差，进而影响不同社区的饮用水风险判断。
- 数据来源：饮用水与环境公平案例数据
- 数据集/样本：详见论文正文
- 数据规模：加州饮用水｜社区变量
- 数据格式：水质标签、模型阈值、社区特征
- 数据类型：水质标签｜阈值｜社区特征
- 数据状态：以论文正式页面或数据可用性声明为准

### 02 AI 怎么参与

- AI 技术：人工智能
- 核心方法：将模型选择、优化参数和分类阈值纳入环境公平的可解释审计。

### 03 论文 Pipeline

1. 问题定义：饮用水风险预测
2. 模型配置：比较算法与优化选择
3. 阈值审计：检查分类阈值影响
4. 公平解释：识别预测偏差来源

### 04 指标与成果

- 重点指标：透明化决策作为关键验证
- 代表结果：模型选择会改变公平结果；优化参数与分类阈值会影响不同群体的预测偏差。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.sciencedirect.com/science/article/pii/S0048969724058868](https://www.sciencedirect.com/science/article/pii/S0048969724058868)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
