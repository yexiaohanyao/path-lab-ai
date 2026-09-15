# 口腔医学 × 迁移学习CNN

## 迁移学习分类口腔癌

> 本地批次：LOCAL-04；源批次：B04-DENT-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Improved classification of oral cancer through a personalized transfer learning CNN architecture.
- 期刊/会议：Journal of Oral Biology and Craniofacial Research（2025）
- DOI：[10.1016/j.jobcr.2025.10.002](https://doi.org/10.1016/j.jobcr.2025.10.002)
- 正式来源：[https://doi.org/10.1016/j.jobcr.2025.10.002](https://doi.org/10.1016/j.jobcr.2025.10.002)

### 01 数据与问题

- 研究问题：用个性化迁移学习卷积网络分类口腔癌图像
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：口腔癌与非癌图像按80:20划分，留出测试集含188张标注图像
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：迁移学习CNN
- 核心方法：迁移学习CNN

### 03 论文 Pipeline

1. 整理口腔图像
2. 执行数据增强
3. 迁移卷积特征
4. 训练分类头
5. 多指标留出评估

### 04 指标与成果

- 重点指标：Accuracy、Precision、Recall、ROC-AUC
- 代表结果：测试集准确率81.38%、精确率84.62%、召回率78.57%、F1 81.48%、AUC 0.9082
- 使用边界：仅作口腔筛查与治疗规划辅助，不替代牙医检查和病理诊断。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
