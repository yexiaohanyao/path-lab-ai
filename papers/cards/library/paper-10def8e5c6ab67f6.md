# 妇产科学 × 梯度提升

## 心电宫缩图胎儿健康状态三分类

> 本地批次：LOCAL-03；源批次：B03-OBGYN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Clinical utility assessment framework for machine learning-based fetal health classification in cardiotocography: an observational study.
- 期刊/会议：Obstetrics & Gynecology Science（2026）
- DOI：[10.5468/ogs.25376](https://doi.org/10.5468/ogs.25376)
- 正式来源：[https://doi.org/10.5468/ogs.25376](https://doi.org/10.5468/ogs.25376)

### 01 数据与问题

- 研究问题：心电宫缩图胎儿健康状态三分类
- 数据来源：Kaggle Fetal Health Classification；公开Kaggle共2126条CTG记录、21项参数，80%训练、20%测试
- 数据集/样本：详见论文正文
- 数据规模：公开Kaggle共2126条CTG记录、21项参数，80%训练、20%测试
- 数据格式：CTG参数表、三类胎儿状态、特征重要性
- 数据类型：胎心监护、胎儿健康分类
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：梯度提升
- 核心方法：在Kaggle CTG 21项参数上比较五类机器学习并以类别权重处理三分类不平衡

### 03 论文 Pipeline

1. 下载CTG数据
2. 分层划分训练测试
3. 按类别频率加权
4. 比较五类模型
5. 评估临床效用与安全

### 04 指标与成果

- 重点指标：准确率,F1,病理假阴性率,特征重要性
- 代表结果：加权梯度提升准确率89.67%，但病理病例假阴性率35.3%，论文明确要求医师监督。
- 使用边界：病理假阴性率高，不能独立承担胎儿监护判读或紧急处置

### 数据与代码入口

- 数据入口：[https://www.kaggle.com/datasets/andrewmvd/fetal-health-classification](https://www.kaggle.com/datasets/andrewmvd/fetal-health-classification)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
