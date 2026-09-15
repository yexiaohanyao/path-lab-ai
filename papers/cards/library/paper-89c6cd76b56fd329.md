# 生物信息学 × 深度学习

## 蛋白质内在无序区预测

> 本地批次：LOCAL-06；源批次：B05-BIOINFO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：AIUPred: combining energy estimation with deep learning for the enhanced prediction of protein disorder
- 期刊/会议：Nucleic Acids Research（2024）
- DOI：[10.1093/nar/gkae385](https://doi.org/10.1093/nar/gkae385)
- 正式来源：[https://doi.org/10.1093/nar/gkae385](https://doi.org/10.1093/nar/gkae385)

### 01 数据与问题

- 研究问题：蛋白质无序区预测
- 数据来源：近期蛋白质无序区基准集与IUPred能量估计框架
- 数据集/样本：recent protein-disorder benchmarks
- 数据规模：在近期基准集评测，并支持整基因组秒级批量分析
- 数据格式：蛋白质序列、无序区标签、能量估计特征
- 数据类型：蛋白质序列
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：深度学习
- 核心方法：能量估计与深度学习融合

### 03 论文 Pipeline

1. 准备序列基准
2. 计算能量特征
3. 融合深度网络
4. 基准方法比较
5. 部署批量预测

### 04 指标与成果

- 重点指标：基准排名、预测性能、稳健性、运行速度
- 代表结果：论文报告：AIUPred在近期基准中位列单序列方法前三，并可在数秒内分析完整基因组。
- 使用边界：无序区预测用于序列注释，结构状态与功能仍需实验或多证据验证。

### 数据与代码入口

- 数据入口：[https://aiupred.elte.hu](https://aiupred.elte.hu)
- 代码入口：[https://aiupred.elte.hu](https://aiupred.elte.hu)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
