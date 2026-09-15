# 网络安全 × 机器学习

## 不平衡流量入侵检测

> 本地批次：LOCAL-02；源批次：B01-CYBER-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Machine learning-based network intrusion detection for big and imbalanced data using oversampling, stacking feature embedding and feature extraction
- 期刊/会议：Journal Of Big Data（2024）
- DOI：[10.1186/s40537-024-00886-w](https://doi.org/10.1186/s40537-024-00886-w)
- 正式来源：[https://doi.org/10.1186/s40537-024-00886-w](https://doi.org/10.1186/s40537-024-00886-w)

### 01 数据与问题

- 研究问题：在大规模不平衡流量中检测网络入侵
- 数据来源：三套公开网络入侵基准
- 数据集/样本：UNSW-NB15；CIC-IDS-2017；CIC-IDS-2018
- 数据规模：覆盖UNSW-NB15、CIC-IDS-2017、CIC-IDS-2018三套大规模基准
- 数据格式：网络流量特征、攻击标签、降维向量
- 数据类型：网络流量、多类别攻击
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：随机过采样、堆叠特征嵌入、PCA与树模型

### 03 论文 Pipeline

1. 汇集攻击流量
2. 随机过采样
3. 构造堆叠嵌入
4. PCA降维训练
5. 跨基准评测

### 04 指标与成果

- 重点指标：Accuracy、Precision、Recall、F1-score
- 代表结果：论文报告：UNSW-NB15上RF与ET准确率99.59%和99.95%；CIC-IDS-2017上多模型达到99.99%，CIC-IDS-2018上DT/RF达到99.94%。
- 使用边界：用于检测研究与安全辅助；上线前须验证漂移、对抗与隐私风险。

### 数据与代码入口

- 数据入口：[https://research.unsw.edu.au/projects/unsw-nb15-dataset](https://research.unsw.edu.au/projects/unsw-nb15-dataset)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
