# 心血管医学 + AI心电年龄模型

## 智能手表心律筛查：用AI心电年龄模型完成房颤消融后复发预测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial intelligence estimated electrocardiographic age as a recurrence predictor after atrial fibrillation catheter ablation
- 期刊/会议：npj Digital Medicine（2024）
- DOI：[10.1038/s41746-024-01234-1](https://doi.org/10.1038/s41746-024-01234-1)
- 正式来源：[https://doi.org/10.1038/s41746-024-01234-1](https://doi.org/10.1038/s41746-024-01234-1)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：UK Biobank
- 数据集/样本：详见论文正文
- 数据规模：Finally, a total of 5,466 and 1,564 patients were analyzed from the YUHS discovery and KUAH evaluation cohorts, respectively.All participants provided written informed consent.
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：术前12导联ECG与复发随访
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：AI心电年龄模型
- 核心方法：将AI心电年龄模型用于智能手表心律筛查，把术前12导联ECG与复发随访与房颤消融后复发预测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：术前12导联ECG与复发随访
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练AI心电年龄模型：房颤消融后复发预测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：AI心电年龄模型完成房颤消融后复发预测；论文报告：Sixth, we examined the hazard ratios and its associated 95% confidence intervals as well as the 5-year cumulative incidence curves for AF recurrence after catheter ablation using different cut-off thresholds for the aged ECG versus normal ECG age as a sensitivity analysis.All analyses were performed using R statistics, version 4.0.2 software (R Foundation for Statistical Computing); and a two-sided p-value < 0.05 was considered statistically significant.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.ukbiobank.ac.uk/enable-your-research/apply-for-access](https://www.ukbiobank.ac.uk/enable-your-research/apply-for-access)
- 代码入口：[https://github.com/antonior92/ecg-age-prediction](https://github.com/antonior92/ecg-age-prediction)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
