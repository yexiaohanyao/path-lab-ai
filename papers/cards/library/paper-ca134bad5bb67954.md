# 免疫学 × 蛋白语言模型＋图学习＋XGBoost

## 序列结构融合的疫苗抗原优选

> 本地批次：LOCAL-06；源批次：B06-IMMUNO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Integrating protein language and geometric deep learning models for enhanced vaccine antigen prediction.
- 期刊/会议：Nature Communications（2025）
- DOI：[10.1038/s41467-025-67778-2](https://doi.org/10.1038/s41467-025-67778-2)
- 正式来源：[https://doi.org/10.1038/s41467-025-67778-2](https://doi.org/10.1038/s41467-025-67778-2)

### 01 数据与问题

- 研究问题：疫苗抗原优选
- 数据来源：保护性抗原与AlphaFold蛋白结构集合
- 数据集/样本：protective antigen benchmark；AlphaFold structure pretraining set
- 数据规模：600个阳性保护性抗原、6,000个阴性蛋白；结构嵌入预训练使用约805,000个AlphaFold结构
- 数据格式：蛋白FASTA、预测三维结构、抗原标签
- 数据类型：蛋白序列、蛋白结构、保护性抗原标签
- 数据状态：数据处理入口随GitHub仓库公开。

### 02 AI 怎么参与

- AI 技术：蛋白语言模型＋几何图学习＋XGBoost
- 核心方法：ESM2编码序列，图与几何深度学习编码结构，再由XGBoost完成抗原优选。

### 03 论文 Pipeline

1. 构建600:6,000的保护性抗原基准
2. 用ESM2获得蛋白序列表示
3. 80.5万AlphaFold结构预训练几何表征
4. 融合序列和结构特征训练XGBoost
5. 在细菌抗原任务报告不平衡指标

### 04 指标与成果

- 重点指标：Accuracy、PR-AUC、F1、MCC
- 代表结果：细菌抗原任务准确率0.946、PR-AUC 0.660、F1=0.624、MCC=0.598。
- 使用边界：类别高度不平衡，准确率需与PR-AUC、F1和MCC联合解读；候选仍需实验验证。

### 数据与代码入口

- 数据入口：[https://github.com/yunxiangz/PLGDL](https://github.com/yunxiangz/PLGDL)
- 代码入口：[https://github.com/yunxiangz/PLGDL](https://github.com/yunxiangz/PLGDL)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
