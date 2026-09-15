# 公共卫生与预防医学 + 因果机器学习

## 健康生活方式干预：用因果机器学习完成识别认知获益异质人群

> 本地批次：LOCAL-15；源批次：PUBLICHEALTH-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Causal machine learning analysis identifies subpopulations most likely to benefit from healthy lifestyles for cognitive outcomes
- 期刊/会议：General Psychiatry（2026）
- DOI：[10.1002/gps3.70013](https://doi.org/10.1002/gps3.70013)
- 正式来源：[https://doi.org/10.1002/gps3.70013](https://doi.org/10.1002/gps3.70013)

### 01 数据与问题

- 研究问题：人群健康数据具有时空异质性、社会因素混杂和群体公平差异，传统模型难以同时支持风险预测、因果评估与资源配置。
- 数据来源：国家监测系统、人口队列、DHS/NHANES及公共卫生开放数据
- 数据集/样本：详见论文正文
- 数据规模：This diagram illustrates the inclusion of participants from the ELSA (n = 8771) and HRS (n = 8531) cohorts after exclusions and their classification into unfavourable, intermediate or favourable lifestyle groups.
- 数据格式：人群调查表、时空监测序列、EHR/登记数据、社会决定因素与政策变量
- 数据类型：人群生活方式与认知结局
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：因果机器学习
- 核心方法：将因果机器学习用于健康生活方式干预，把人群生活方式与认知结局与识别认知获益异质人群连接为可核验的公共卫生与预防医学AI流程。

### 03 论文 Pipeline

1. 汇集人群健康数据：人群生活方式与认知结局
2. 连接时空与社会因素：地区｜人群亚组｜环境与政策变量
3. 训练因果机器学习：识别认知获益异质人群
4. 人群层验证：外部地区｜公平性｜干预与资源配置

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：因果机器学习完成识别认知获益异质人群；论文报告：High‐benefit groups displayed substantially improved cognitive performance (ELSA: mean: 0.27, 95% confidence interval [CI] 0.24–0.30; HRS: mean: 0.51, 95% CI 0.48–0.54) and reduced risk of dementia (ELSA: hazard ratio [HR]: 0.28, 95% CI 0.21–0.34; HRS: HR: 0.22, 95% CI 0.17–0.27).
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
