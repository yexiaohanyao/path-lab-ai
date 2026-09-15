# 公共卫生与预防医学 + 分层公平性评估框架

## 医疗AI公平评估：用分层公平性评估框架完成量化模型在人群亚组中的性能公平

> 本地批次：LOCAL-15；源批次：PUBLICHEALTH-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Health equity assessment of machine learning performance (HEAL): a framework and dermatology AI model case study
- 期刊/会议：eClinicalMedicine（2024）
- DOI：[10.1016/j.eclinm.2024.102479](https://doi.org/10.1016/j.eclinm.2024.102479)
- 正式来源：[https://doi.org/10.1016/j.eclinm.2024.102479](https://doi.org/10.1016/j.eclinm.2024.102479)

### 01 数据与问题

- 研究问题：人群健康数据具有时空异质性、社会因素混杂和群体公平差异，传统模型难以同时支持风险预测、因果评估与资源配置。
- 数据来源：NCBI
- 数据集/样本：详见论文正文
- 数据规模：研究共纳入14,303幅临床图像，并按患者与多亚组设置开发和验证分析。
- 数据格式：人群调查表、时空监测序列、EHR/登记数据、社会决定因素与政策变量
- 数据类型：皮肤科多亚组临床数据
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：分层公平性评估框架
- 核心方法：将分层公平性评估框架用于医疗AI公平评估，把皮肤科多亚组临床数据与量化模型在人群亚组中的性能公平连接为可核验的公共卫生与预防医学AI流程。

### 03 论文 Pipeline

1. 汇集人群健康数据：皮肤科多亚组临床数据
2. 连接时空与社会因素：地区｜人群亚组｜环境与政策变量
3. 训练分层公平性评估框架：量化模型在人群亚组中的性能公平
4. 人群层验证：外部地区｜公平性｜干预与资源配置

### 04 指标与成果

- 重点指标：论文报告亚组验证
- 代表结果：分层公平性评估框架完成量化模型在人群亚组中的性能公平；论文报告：Efforts should be taken to map the dynamic and complex relationship between the societal factors influencing health inequities.34 Note that factors of inequity may vary by medical domain and the conditions of interest, so this step needs to be repeated when the HEAL framework is applied to a novel context.Tool performance metrics should be chosen according to the task for which the AI tool is designed to assist (e.g., accuracy, sensitivity, specificity).
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.ncbi.nlm.nih.gov/pubmed/33390696](https://www.ncbi.nlm.nih.gov/pubmed/33390696)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
