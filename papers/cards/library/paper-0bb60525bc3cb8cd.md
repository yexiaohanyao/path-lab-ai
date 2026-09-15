# 心血管医学 + 概念约束深度学习

## 结构性心脏病：用概念约束深度学习完成儿童先天性心脏病检测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Congenital heart disease detection by pediatric electrocardiogram based deep learning integrated with human concepts
- 期刊/会议：Nature Communications（2024）
- DOI：[10.1038/s41467-024-44930-y](https://doi.org/10.1038/s41467-024-44930-y)
- 正式来源：[https://doi.org/10.1038/s41467-024-44930-y](https://doi.org/10.1038/s41467-024-44930-y)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：MIMIC-IV-ECG、UK Biobank、PTB-XL及论文临床队列
- 数据集/样本：详见论文正文
- 数据规模：使用65,869例儿科ECG训练；内部测试集12,000例，两个外部测试集分别为7,137例和8,121例。
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：儿科ECG与临床诊断
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：概念约束深度学习
- 核心方法：将概念约束深度学习用于结构性心脏病，把儿科ECG与临床诊断与儿童先天性心脏病检测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：儿科ECG与临床诊断
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练概念约束深度学习：儿童先天性心脏病检测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：概念约束深度学习完成儿童先天性心脏病检测；论文报告：Developed on 65,869 cases, CHDdECG achieved ROC-AUC of 0.915 and specificity of 0.881 on a real-world test set covering 12,000 cases.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/shuaih720/CHDdECG](https://github.com/shuaih720/CHDdECG)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
