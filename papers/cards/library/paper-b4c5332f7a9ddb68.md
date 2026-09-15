# 中医学 × 多算法特征筛选＋列线图

## 体质融合的轻度认知障碍筛查

> 本地批次：LOCAL-06；源批次：B06-TCM-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A Machine Learning and Traditional Chinese Medicine Constitution-Based Prediction Model for Mild Cognitive Impairment in Community-Dwelling Older Adults.
- 期刊/会议：Neuropsychiatric Disease and Treatment（2026）
- DOI：[10.2147/ndt.s608660](https://doi.org/10.2147/ndt.s608660)
- 正式来源：[https://doi.org/10.2147/ndt.s608660](https://doi.org/10.2147/ndt.s608660)

### 01 数据与问题

- 研究问题：中医体质驱动的轻度认知障碍预测
- 数据来源：社区老年人中医体质与认知队列
- 数据集/样本：community older adult MCI cohort
- 数据规模：1,503名社区老年人；1,052名训练、451名验证；MCI患病率24.1%
- 数据格式：体质问卷、临床变量、认知结局
- 数据类型：中医体质、人口学与临床特征、MCI标签
- 数据状态：正文未发现公开入口。未给出可独立访问的数据或代码地址。

### 02 AI 怎么参与

- AI 技术：多算法特征筛选＋列线图
- 核心方法：四类机器学习筛选变量，并将稳定特征组合为可解释列线图。

### 03 论文 Pipeline

1. 纳入1,503名社区老年人并评估认知
2. 采集中医体质及人口临床变量
3. 用四类算法筛选稳定特征
4. 在1,052人训练集构建列线图
5. 在451人验证集评估区分度

### 04 指标与成果

- 重点指标：训练AUC、验证AUC、MCI患病率
- 代表结果：MCI患病率24.1%；训练集AUC=0.813，验证集AUC=0.747。
- 使用边界：社区横断面数据不支持因果解释，外部地区泛化仍需验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
