# 妇产科学 × 公平机器学习

## 初产妇重度子痫前期风险预测

> 本地批次：LOCAL-03；源批次：B03-OBGYN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A comprehensive and bias-free machine learning approach for risk prediction of preeclampsia with severe features in a nulliparous study cohort.
- 期刊/会议：BMC Pregnancy and Childbirth（2024）
- DOI：[10.1186/s12884-024-06988-w](https://doi.org/10.1186/s12884-024-06988-w)
- 正式来源：[https://doi.org/10.1186/s12884-024-06988-w](https://doi.org/10.1186/s12884-024-06988-w)

### 01 数据与问题

- 研究问题：初产妇重度子痫前期风险预测
- 数据来源：nuMoM2b八中心初产妇队列1857人；329例发生重度子痫前期或子痫
- 数据集/样本：详见论文正文
- 数据规模：nuMoM2b八中心队列最终1857名初产妇，其中329例重度子痫前期或子痫
- 数据格式：孕期纵向表格、胎盘分析物、超声与血压
- 数据类型：产科队列、子痫前期结局
- 数据状态：nuMoM2b受控访问，分析代码公开

### 02 AI 怎么参与

- AI 技术：公平机器学习
- 核心方法：比较RF、XGBoost、SVM和逻辑回归，融合连续孕期指标、胎盘分析物并校正人群公平阈值

### 03 论文 Pipeline

1. 整理八中心孕期数据
2. 计算胎盘指标MoM
3. 分访视构建特征
4. 训练并比较模型
5. 评估并校正公平性

### 04 指标与成果

- 重点指标：AUC,敏感度,特异度,公平性比率
- 代表结果：随机森林AUC由孕早期0.72升至第三次访视0.77；阈值调整使黑人亚组预测平等比由1.31降至1.14。
- 使用边界：风险模型不能替代ACOG诊断和母胎监测，公平阈值需在本地人群重新验证

### 数据与代码入口

- 数据入口：[https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001149.v1.p1](https://www.ncbi.nlm.nih.gov/projects/gap/cgi-bin/study.cgi?study_id=phs001149.v1.p1)
- 代码入口：[https://github.com/PRAISE-Lab-Repository/PEPrML.git](https://github.com/PRAISE-Lab-Repository/PEPrML.git)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
