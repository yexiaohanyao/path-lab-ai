# 免疫学 × 随机森林临床分类

## 感染性与自身免疫脑炎鉴别

> 本地批次：LOCAL-06；源批次：B06-IMMUNO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Differential Diagnosis of Infectious Versus Autoimmune Encephalitis Using Artificial Intelligence-Based Modeling.
- 期刊/会议：Journal of Clinical Medicine（2025）
- DOI：[10.3390/jcm14228222](https://doi.org/10.3390/jcm14228222)
- 正式来源：[https://doi.org/10.3390/jcm14228222](https://doi.org/10.3390/jcm14228222)

### 01 数据与问题

- 研究问题：感染性与自身免疫性脑炎鉴别
- 数据来源：2016至2024年临床脑炎队列
- 数据集/样本：infectious versus autoimmune encephalitis cohort
- 数据规模：233名感染性或自身免疫性脑炎患者
- 数据格式：临床检验表、诊断标签
- 数据类型：临床指标、免疫与感染诊断
- 数据状态：正文未发现公开入口。未给出可独立访问的数据或代码地址。

### 02 AI 怎么参与

- AI 技术：随机森林临床分类
- 核心方法：比较机器学习分类器，以随机森林完成感染性与自身免疫性脑炎鉴别。

### 03 论文 Pipeline

1. 纳入2016至2024年脑炎病例
2. 整理临床、脑脊液和实验室变量
3. 进行缺失处理和候选特征选择
4. 比较多类模型并选择随机森林
5. 用ROC及分类指标评估病因鉴别

### 04 指标与成果

- 重点指标：AUROC、Accuracy、Sensitivity、Specificity
- 代表结果：随机森林为最佳模型，AUROC=0.966；论文同时报告准确率、敏感度、特异度、F1和精确率。
- 使用边界：回顾性临床队列且无公开复现入口，仍需跨中心前瞻性验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
