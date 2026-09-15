# 骨科学 × CNN与YOLOv9

## 膝MRI诊断韧带撕裂

> 本地批次：LOCAL-04；源批次：B04-ORTHO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial intelligence-assisted accurate diagnosis of anterior cruciate ligament tears using customized CNN and YOLOv9.
- 期刊/会议：Frontiers in Radiology（2025）
- DOI：[10.3389/fradi.2025.1691048](https://doi.org/10.3389/fradi.2025.1691048)
- 正式来源：[https://doi.org/10.3389/fradi.2025.1691048](https://doi.org/10.3389/fradi.2025.1691048)

### 01 数据与问题

- 研究问题：用手术确认的膝MRI诊断前交叉韧带完整、部分或完全撕裂
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：8,086张矢状位膝MRI切片，关节镜确认完整、部分或完全撕裂
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：CNN与YOLOv9
- 核心方法：CNN与YOLOv9

### 03 论文 Pipeline

1. 收集手术确诊病例
2. 整理矢状位MRI
3. 患者级划分数据
4. 比较十一种网络
5. 评估三类诊断

### 04 指标与成果

- 重点指标：Accuracy、Sensitivity、Specificity、AUC
- 代表结果：CustomCNN准确率91.5%、敏感度92.4%、AUC 0.913，并严格按患者划分
- 使用边界：仅作影像与术前术中辅助，最终诊疗决策由骨科团队负责。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
