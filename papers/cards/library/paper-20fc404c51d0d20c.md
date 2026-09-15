# 中药学 × 多机器学习筛选＋孟德尔随机化

## 老鹳草抗哮喘靶点机制验证

> 本地批次：LOCAL-06；源批次：B06-CHMED-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Multifaceted mechanistic exploration of Geranium wilfordii Maxim. in asthma treatment: integrating network pharmacology, machine learning, Mendelian randomization and experimental validation.
- 期刊/会议：Frontiers in Cell and Developmental Biology（2026）
- DOI：[10.3389/fcell.2026.1761424](https://doi.org/10.3389/fcell.2026.1761424)
- 正式来源：[https://doi.org/10.3389/fcell.2026.1761424](https://doi.org/10.3389/fcell.2026.1761424)

### 01 数据与问题

- 研究问题：中药活性成分、靶点与疗效机制验证
- 数据来源：老鹳草成分、GEO/单细胞数据与动物实验
- 数据集/样本：Geranium wilfordii compound set；asthma bulk and single-cell transcriptomics
- 数据规模：43个老鹳草候选成分，并整合网络、遗传因果、对接、转录组和动物实验
- 数据格式：成分靶点表、基因表达矩阵、遗传工具变量、动物实验数据
- 数据类型：中药成分、转录组与单细胞组、哮喘表型
- 数据状态：正文未发现公开入口。论文引用公共数据来源，但未给出可直接复现的统一数据或代码入口。

### 02 AI 怎么参与

- AI 技术：多机器学习筛选＋孟德尔随机化
- 核心方法：多类机器学习先筛选NOTCH2、HDAC2和MAPK1，再以孟德尔随机化、分子对接、单细胞及动物实验交叉验证。

### 03 论文 Pipeline

1. 整理老鹳草43个成分与候选靶点
2. 融合哮喘疾病基因并用多算法筛选
3. 以孟德尔随机化检验候选因果方向
4. 结合对接和单细胞定位关键细胞
5. 在动物模型验证CD4/Treg及炎症机制

### 04 指标与成果

- 重点指标：候选成分数、核心靶点数、多层实验验证
- 代表结果：机器学习优先确定NOTCH2、HDAC2和MAPK1三个核心靶点；动物和单细胞证据支持其与CD4/Treg免疫调节及抗哮喘作用相关。
- 使用边界：多证据链支持机制假设，但网络、遗传与动物结果不能替代临床疗效验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
