# 护理学 + 随机森林

## 护理诊断决策：用随机森林完成护理诊断的ICU转入风险排序

> 本地批次：LOCAL-15；源批次：NURSING-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Ranking Nursing Diagnoses by Predictive Relevance for Intensive Care Unit Transfer Risk in Adult and Pediatric Patients: A Machine Learning Approach with Random Forest
- 期刊/会议：Healthcare（2025）
- DOI：[10.3390/healthcare13111339](https://doi.org/10.3390/healthcare13111339)
- 正式来源：[https://doi.org/10.3390/healthcare13111339](https://doi.org/10.3390/healthcare13111339)

### 01 数据与问题

- 研究问题：护理工作流包含连续生命体征、病历文本和照护事件，人工评估难以及时整合多源信号并识别护理敏感风险。
- 数据来源：EHR护理记录、护理诊断、病区预警数据及多中心护理队列
- 数据集/样本：详见论文正文
- 数据规模：最终纳入42,735名患者（40,649名成人、2,086名儿童）及165,898条护理诊断；4,057人住院期间转入ICU。
- 数据格式：护理记录文本、护理诊断与评估表、病区时序事件、护理敏感结局
- 数据类型：成人与儿科护理诊断
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：随机森林
- 核心方法：将随机森林用于护理诊断决策，把成人与儿科护理诊断与护理诊断的ICU转入风险排序连接为可核验的护理学AI流程。

### 03 论文 Pipeline

1. 整合护理工作流数据：成人与儿科护理诊断
2. 形成患者时序表征：生命体征｜护理记录｜照护事件
3. 训练随机森林：护理诊断的ICU转入风险排序
4. 护理结局验证：患者级测试｜临床单元｜安全与工作流边界

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：随机森林完成护理诊断的ICU转入风险排序；论文报告：Delayed ICU transfers have been associated with poorer outcomes, including prolonged length of stay and increased mortality rates [21].
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
