# 护理学 + 对话文本机器学习

## 远程护理随访：用对话文本机器学习完成急诊就诊风险预测

> 本地批次：LOCAL-15；源批次：NURSING-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Using telecommunication dialogue and nursing documentation to predict the risk of emergency room visit in a web-based telehealth programme
- 期刊/会议：European Heart Journal - Digital Health（2025）
- DOI：[10.1093/ehjdh/ztaf076](https://doi.org/10.1093/ehjdh/ztaf076)
- 正式来源：[https://doi.org/10.1093/ehjdh/ztaf076](https://doi.org/10.1093/ehjdh/ztaf076)

### 01 数据与问题

- 研究问题：护理工作流包含连续生命体征、病历文本和照护事件，人工评估难以及时整合多源信号并识别护理敏感风险。
- 数据来源：EHR护理记录、护理诊断、病区预警数据及多中心护理队列
- 数据集/样本：详见论文正文
- 数据规模：纳入130名患者的1,857段语音文件（4.48 GB）；病例组94人、585段记录，对照组36人、396段记录，并按患者划分训练、测试和验证集。
- 数据格式：护理记录文本、护理诊断与评估表、病区时序事件、护理敏感结局
- 数据类型：远程护理对话与护理文档
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：对话文本机器学习
- 核心方法：将对话文本机器学习用于远程护理随访，把远程护理对话与护理文档与急诊就诊风险预测连接为可核验的护理学AI流程。

### 03 论文 Pipeline

1. 整合护理工作流数据：远程护理对话与护理文档
2. 形成患者时序表征：生命体征｜护理记录｜照护事件
3. 训练对话文本机器学习：急诊就诊风险预测
4. 护理结局验证：患者级测试｜临床单元｜安全与工作流边界

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：对话文本机器学习完成急诊就诊风险预测；论文报告：However, the overall performance of these models, as measured by accuracy and F1-scores, varied.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
