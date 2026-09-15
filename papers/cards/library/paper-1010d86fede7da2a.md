# 心血管医学 + 噪声鲁棒集成深度学习

## 结构性心脏病：用噪声鲁棒集成深度学习完成结构性心脏病检测与发病预测

> 本地批次：LOCAL-15；源批次：CARDIO-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Development and multinational validation of an ensemble deep learning algorithm for detecting and predicting structural heart disease using noisy single-lead electrocardiograms
- 期刊/会议：European Heart Journal - Digital Health（2025）
- DOI：[10.1093/ehjdh/ztaf034](https://doi.org/10.1093/ehjdh/ztaf034)
- 正式来源：[https://doi.org/10.1093/ehjdh/ztaf034](https://doi.org/10.1093/ehjdh/ztaf034)

### 01 数据与问题

- 研究问题：心电、可穿戴信号与长期结局具有高维时序和跨设备差异，传统评分难以同时捕捉短期事件与长期心血管风险。
- 数据来源：UK Biobank
- 数据集/样本：详见论文正文
- 数据规模：训练集含93,693名患者的261,228份ECG；验证集5,512份、留出测试集11,023份ECG，另在65,988名外部患者及3,014名ELSA-Brasil参与者中验证。
- 数据格式：12导联/单导联ECG、PPG与可穿戴时序、临床结局表、生存随访数据
- 数据类型：单导联ECG、超声标签与外部队列
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：噪声鲁棒集成深度学习
- 核心方法：将噪声鲁棒集成深度学习用于结构性心脏病，把单导联ECG、超声标签与外部队列与结构性心脏病检测与发病预测连接为可核验的心血管医学AI流程。

### 03 论文 Pipeline

1. 整理心血管数据：单导联ECG、超声标签与外部队列
2. 编码连续生理信号：ECG/PPG｜临床变量｜随访结局
3. 训练噪声鲁棒集成深度学习：结构性心脏病检测与发病预测
4. 临床队列验证：患者级划分｜外部队列｜校准与亚组

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：噪声鲁棒集成深度学习完成结构性心脏病检测与发病预测；论文报告：The model’s performance was presented using AUROC, along with sensitivity, specificity, positive predictive value (PPV), negative predictive value (NPV), and F1 score of the model across the thresholds and specifically for the threshold corresponding to a sensitivity of 90% using the internal validation set.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.ukbiobank.ac.uk/enable-your-research/apply-for-access](https://www.ukbiobank.ac.uk/enable-your-research/apply-for-access)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
