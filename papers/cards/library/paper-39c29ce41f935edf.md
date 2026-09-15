# 系统生物学 × 进化计算

## 空间图案基因调控机制自动设计

> 本地批次：LOCAL-06；源批次：B05-SYSBIO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Automatic design of gene regulatory mechanisms for spatial pattern formation
- 期刊/会议：npj Systems Biology and Applications（2024）
- DOI：[10.1038/s41540-024-00361-5](https://doi.org/10.1038/s41540-024-00361-5)
- 正式来源：[https://doi.org/10.1038/s41540-024-00361-5](https://doi.org/10.1038/s41540-024-00361-5)

### 01 数据与问题

- 研究问题：空间图案基因调控机制自动设计
- 数据来源：由两条正交形态发生素梯度定义的二维目标表达图案
- 数据集/样本：synthetic 2D target patterns
- 数据规模：用多种二维合成表达图案演示，可调容差生成近似或精确方案
- 数据格式：二维目标图案、形态发生素梯度、基因调控网络
- 数据类型：合成发育模式、基因调控机制
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：进化计算
- 核心方法：并行进化计算

### 03 论文 Pipeline

1. 定义目标图案
2. 编码调控网络
3. 并行进化搜索
4. 模拟空间表达
5. 筛选简精方案

### 04 指标与成果

- 重点指标：图案匹配误差、网络复杂度、搜索效率、容差权衡
- 代表结果：论文报告：算法仅解释两条正交梯度即可为多种二维图案自动设计调控机制，并能在简单近似与复杂精确方案间调节。
- 使用边界：计算设计尚需考虑元件可实现性、细胞负担和湿实验安全验证。

### 数据与代码入口

- 数据入口：[https://github.com/lobolab/grm-design](https://github.com/lobolab/grm-design)
- 代码入口：[https://github.com/lobolab/grm-design](https://github.com/lobolab/grm-design)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
