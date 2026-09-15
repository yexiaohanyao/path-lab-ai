# 心血管医学 + 跨模态对比学习与生成模型

## 可穿戴多模态心脏信号：用跨模态对比学习与生成模型完成PPG心血管筛查与ECG重建

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：AI modeling photoplethysmography to electrocardiography useful for predicting cardiovascular disease
- 期刊/会议：npj Digital Medicine（2025）
- DOI：[10.1038/s41746-025-02228-3](https://doi.org/10.1038/s41746-025-02228-3)
- 正式来源：[https://doi.org/10.1038/s41746-025-02228-3](https://doi.org/10.1038/s41746-025-02228-3)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：MIMIC/PhysioNet
- 数据集/样本：详见论文正文
- 数据规模：预训练数据含PulseDB-MIMIC 2,423人、PulseDB-VitalDB 2,938人和MESA 2,056人，共11,710,322个10秒片段；质控后保留8,942,348个配对PPG-ECG片段，另有86例外部房颤样本。
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：配对PPG、ECG与疾病标签
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：跨模态对比学习与生成模型
- 核心方法：将跨模态对比学习与生成模型用于可穿戴多模态心脏信号，把配对PPG、ECG与疾病标签与PPG心血管筛查与ECG重建连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：配对PPG、ECG与疾病标签
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练跨模态对比学习与生成模型：PPG心血管筛查与ECG重建
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：跨模态对比学习与生成模型完成PPG心血管筛查与ECG重建；论文报告：More detailed experimental results—including 95% confidence intervals for sensitivity, specificity, accuracy (ACC), area under the curve (AUC), positive predictive value (PPV), negative predictive value (NPV), F1-score, and Cohen’s kappa—are provided in the Supplementary Table 2.Fig.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://physionet.org/content/mimiciv/](https://physionet.org/content/mimiciv/)
- 代码入口：[https://github.com/pulselabteam/PulseDB](https://github.com/pulselabteam/PulseDB)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
