# 麻醉学 × 梯度提升回归

## 全麻术中动脉二氧化碳分压实时估计

> 本地批次：LOCAL-03；源批次：B03-ANES-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Real-Time Estimation of Arterial Partial Pressure of Carbon Dioxide in Patients Undergoing General Anesthesia: Predictive Modeling Study.
- 期刊/会议：JMIR Medical Informatics（2025）
- DOI：[10.2196/64855](https://doi.org/10.2196/64855)
- 正式来源：[https://doi.org/10.2196/64855](https://doi.org/10.2196/64855)

### 01 数据与问题

- 研究问题：全麻术中动脉二氧化碳分压实时估计
- 数据来源：Seoul National University Hospital VitalDB；VitalDB源6388例，最终2304台手术、4651个PaCO2测量事件点
- 数据集/样本：详见论文正文
- 数据规模：VitalDB源6388例，最终2304台手术、4651个PaCO2测量事件点
- 数据格式：无创生理时序、临床变量、血气PaCO2参考值
- 数据类型：术中监测、血气指标
- 数据状态：公开VitalDB，需遵守数据库访问条件

### 02 AI 怎么参与

- AI 技术：梯度提升回归
- 核心方法：CatBoost融合无创生理参数与临床信息，连续估计全麻机械通气患者PaCO2

### 03 论文 Pipeline

1. 筛选VitalDB病例
2. 对齐血气事件点
3. 构建无创特征
4. 嵌套验证CatBoost
5. 分PaCO2区间比较

### 04 指标与成果

- 重点指标：MAE,ICC,误差5 mmHg内比例,大误差率
- 代表结果：平均绝对误差2.38 mmHg、ICC 0.87；90.02%估计误差在正负5 mmHg内，仅1.20%超过正负10 mmHg。
- 使用边界：回顾性估计不能替代必要的动脉血气测量，实时临床影响仍需前瞻验证

### 数据与代码入口

- 数据入口：[https://vitaldb.net/dataset/](https://vitaldb.net/dataset/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
