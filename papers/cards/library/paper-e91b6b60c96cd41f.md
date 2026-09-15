# 沿海湿地 + 时序深度学习

## 用 Sentinel-2 时序与 ResNet 精细制图生态修复

> 本地批次：LOCAL-09；源批次：ENV-AI-20260811-01；网站状态：待本地确认。

### 论文来源

- 原论文：Precise mapping of coastal wetlands using time-series remote sensing images and deep learning model
- 期刊/会议：Frontiers in Forests and Global Change（2024）
- DOI：[10.3389/ffgc.2024.1409985](https://doi.org/10.3389/ffgc.2024.1409985)
- 正式来源：[https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1409985/full](https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1409985/full)

### 01 数据与问题

- 研究问题：沿海湿地水文变化快、环境梯度陡，单时相影像难以区分盐沼、芦苇等复杂地类。
- 数据来源：GEE｜辽河口保护区
- 数据集/样本：详见论文正文
- 数据规模：400 景 Sentinel-2｜2017/2022
- 数据格式：多时相光学遥感、时间优化特征、样本点
- 数据类型：时序影像｜TOFs｜样本点
- 数据状态：以论文正式页面或数据可用性声明为准

### 02 AI 怎么参与

- AI 技术：人工智能
- 核心方法：用关键时间点优化特征与 ResNet 融合，实现沿海湿地精细制图与变化分析。

### 03 论文 Pipeline

1. 影像预处理：云掩膜与时序堆栈
2. 时间特征：筛选关键时间点 TOFs
3. ResNet 分类：融合时空特征制图
4. 变化分析：比较 2017 与 2022 修复

### 04 指标与成果

- 重点指标：每类 3,000 样本｜7:3 训练验证
- 代表结果：400 景影像支持精细湿地制图；TOFs 与 ResNet 结合提升时空信息利用。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1409985/full](https://www.frontiersin.org/journals/forests-and-global-change/articles/10.3389/ffgc.2024.1409985/full)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
