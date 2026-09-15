# 网络安全 × 大语言模型

## 提示与微调钓鱼检测

> 本地批次：LOCAL-02；源批次：B01-CYBER-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Prompt Engineering or Fine-Tuning? A Case Study on Phishing Detection with Large Language Models
- 期刊/会议：Machine Learning and Knowledge Extraction（2024）
- DOI：[10.3390/make6010018](https://doi.org/10.3390/make6010018)
- 正式来源：[https://doi.org/10.3390/make6010018](https://doi.org/10.3390/make6010018)

### 01 数据与问题

- 研究问题：比较提示工程与微调的钓鱼URL检测效果
- 数据来源：Mendeley公开钓鱼网址数据
- 数据集/样本：Phishing Websites Dataset
- 数据规模：共11,430个URL样本；其中1,000个作为统一测试集
- 数据格式：原始URL文本、87项衍生特征、合法/钓鱼标签
- 数据类型：网址字符串、二分类样本
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：大语言模型
- 核心方法：GPT-3.5/Claude提示工程与GPT-2/Bloom等模型微调

### 03 论文 Pipeline

1. 获取平衡URL
2. 划分训练测试
3. 设计三类提示
4. 微调小型LLM
5. 统一指标比较

### 04 指标与成果

- 重点指标：Accuracy、Precision、Recall、F1-score、AUC
- 代表结果：论文报告：提示工程最高F1为92.74%；任务微调最高F1为97.29%、AUC为99.56%，优于提示式通用模型。
- 使用边界：用于检测研究与安全辅助；上线前须验证漂移、对抗与隐私风险。

### 数据与代码入口

- 数据入口：[https://data.mendeley.com/datasets/c2gw7fy2j4/3](https://data.mendeley.com/datasets/c2gw7fy2j4/3)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
