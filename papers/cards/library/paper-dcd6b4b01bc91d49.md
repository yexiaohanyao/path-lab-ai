# 骨科学 × 深度学习

## 常规X线筛查骨脆弱性

> 本地批次：LOCAL-04；源批次：B04-ORTHO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Validation of a deep learning model for bone fragility detection from conventional radiographs: an international cohort study.
- 期刊/会议：EClinicalMedicine（2026）
- DOI：[10.1016/j.eclinm.2026.103974](https://doi.org/10.1016/j.eclinm.2026.103974)
- 正式来源：[https://doi.org/10.1016/j.eclinm.2026.103974](https://doi.org/10.1016/j.eclinm.2026.103974)

### 01 数据与问题

- 研究问题：由常规X线直接识别高骨脆弱性与骨折风险人群
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：五个国际临床点共18,858对X线-DXA数据，来自11,138名成人
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：深度学习
- 核心方法：深度学习

### 03 论文 Pipeline

1. 配对X线与DXA
2. 标准化腰椎区域
3. 训练深度模型
4. 跨国多中心验证
5. 评估骨折风险

### 04 指标与成果

- 重点指标：AUROC、Sensitivity、Specificity、风险分层
- 代表结果：外部特异度依次为0.88、0.94、0.96，外部敏感度范围0.53至0.64
- 使用边界：仅作影像与术前术中辅助，最终诊疗决策由骨科团队负责。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
