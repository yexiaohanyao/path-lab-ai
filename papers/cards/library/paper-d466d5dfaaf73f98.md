# 眼科学 × AutoML

## 无代码模型鉴别视盘水肿

> 本地批次：LOCAL-04；源批次：B04-OPHTH-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Clinician-Led Code-Free Deep Learning for Detecting Papilledema and Pseudopapilledema Using Optic Disc Imaging.
- 期刊/会议：Translational Vision Science & Technology（2026）
- DOI：[10.1167/tvst.15.2.25](https://doi.org/10.1167/tvst.15.2.25)
- 正式来源：[https://doi.org/10.1167/tvst.15.2.25](https://doi.org/10.1167/tvst.15.2.25)

### 01 数据与问题

- 研究问题：以视盘近红外影像鉴别乳头水肿与假性乳头水肿
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：289名患者、813张视盘近红外图像：正常185、乳头水肿372、视盘玻璃疣256
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：AutoML
- 核心方法：AutoML

### 03 论文 Pipeline

1. 汇集视盘影像
2. 按诊断分组
3. 训练三类AutoML
4. 评估二分类任务
5. 评估严重度分级

### 04 指标与成果

- 重点指标：AUC、Precision、Recall、F1
- 代表结果：Amazon模型检测乳头水肿AUC 0.90、F1 0.81；严重度分级AUC 0.90、F1 0.79
- 使用边界：仅作筛查、分割和风险提示，不能替代眼科医师诊断与随访。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
