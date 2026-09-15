# 中医学 × 八类机器学习比较＋GBM

## 病毒性肺炎的寒热证候智能辨识

> 本地批次：LOCAL-06；源批次：B06-TCM-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A Machine Learning Approach to Differentiate Cold and Hot Syndrome in Viral Pneumonia Integrating Traditional Chinese Medicine and Modern Medicine: Machine Learning Model Development and Validation.
- 期刊/会议：JMIR Medical Informatics（2025）
- DOI：[10.2196/64725](https://doi.org/10.2196/64725)
- 正式来源：[https://doi.org/10.2196/64725](https://doi.org/10.2196/64725)

### 01 数据与问题

- 研究问题：寒热证候辨识
- 数据来源：两中心病毒性肺炎中医证候队列
- 数据集/样本：two-center cold-heat syndrome cohort
- 数据规模：1,484名患者，来自2个中心，收集于2021至2022年；最终使用13项特征
- 数据格式：临床症状体征表、中医寒热证标签
- 数据类型：中医四诊与临床变量、证候分类
- 数据状态：补充材料附于正式论文页面，未提供独立数据仓库。

### 02 AI 怎么参与

- AI 技术：八类机器学习比较＋GBM
- 核心方法：比较8种机器学习算法，以梯度提升机识别病毒性肺炎寒证与热证。

### 03 论文 Pipeline

1. 在两中心纳入1,484名病毒性肺炎患者
2. 整理临床症状、体征及寒热证标签
3. 筛选13项稳定预测特征
4. 比较8种机器学习分类器并选出GBM
5. 完成内部与外部中心验证

### 04 指标与成果

- 重点指标：总体AUC、内部AUC、外部AUC
- 代表结果：GBM总体AUC=0.7788，内部验证AUC=0.7645，外部验证AUC=0.8428。
- 使用边界：证候标签与中心实践可能存在差异；补充材料不等于可直接复现的数据集。

### 数据与代码入口

- 数据入口：[https://doi.org/10.2196/64725](https://doi.org/10.2196/64725)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
