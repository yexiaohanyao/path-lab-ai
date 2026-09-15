# 社会学 × 大语言模型

## 方言触发的隐性种族偏见

> 本地批次：LOCAL-08；源批次：SOCIOLOGY-AI-20260830-01；网站状态：待本地确认。

### 论文来源

- 原论文：AI generates covertly racist decisions about people based on their dialect
- 期刊/会议：Nature（2024）
- DOI：[10.1038/s41586-024-07856-5](https://doi.org/10.1038/s41586-024-07856-5)
- 正式来源：[https://doi.org/10.1038/s41586-024-07856-5](https://doi.org/10.1038/s41586-024-07856-5)

### 01 数据与问题

- 研究问题：大语言模型是否会把非裔美国英语方言当作隐性种族信号，并据此形成就业与刑事司法判断偏见。
- 数据来源：AAE/SAE配对语料、TwitterAAE、Princeton Trilogy人类刻板印象评分、职业声望数据与并行英语方言语料
- 数据集/样本：AAE-SAE matched guise corpus；TwitterAAE；Princeton Trilogy stereotype scores；Occupational prestige data
- 数据规模：比较5个模型家族的12个版本；核心方言语料含2,019条AAE推文，并在主实验中配对抽样2,000条AAE与2,000条SAE文本
- 数据格式：方言文本、模型生成词与概率、职业分配、刑事判断、人类刻板印象评分
- 数据类型：社会语言学文本、模型输出、社会评价基准
- 数据状态：公开；论文所用方言语料、刻板印象评分和职业声望数据均给出公开来源

### 02 AI 怎么参与

- AI 技术：大语言模型
- 核心方法：对GPT-2、RoBERTa、T5、GPT-3.5、GPT-4等12个版本实施matched guise probing，对AAE/SAE配对文本输出作对照。

### 03 论文 Pipeline

1. 配对方言文本：控制语义内容，仅切换AAE与SAE表达。
2. 调用十二模型：覆盖5个模型家族的12个版本。
3. 探测隐性联想：比较模型生成词与概率中的刻板印象。
4. 比较社会判断：评估职业分配、判罪与死刑判断。
5. 审核对齐影响：比较人类偏好对齐前后的偏见差距。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：隐性刻板印象：AAE评价更负面：（比历史人类实验记录更负面）
- 代表结果：职业分配：更偏向低声望工作：（AAE说话者条件）
- 代表结果：刑事判断：更倾向判罪与死刑：（AAE说话者条件）
- 代表结果：对齐影响：显性—隐性偏见差距扩大：（人类偏好对齐后）
- 使用边界：结果用于模型偏见审计；不得据方言推断个人种族，也不得据此自动作出就业、定罪或量刑决定。

### 数据与代码入口

- 数据入口：[https://aclanthology.org/2020.emnlp-main.473/](https://aclanthology.org/2020.emnlp-main.473/)
- 代码入口：[https://github.com/valentinhofmann/dialect-prejudice](https://github.com/valentinhofmann/dialect-prejudice)

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
