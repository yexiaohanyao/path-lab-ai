# 眼科学 × nnU-Net

## OCT分割视网膜病理结构

> 本地批次：LOCAL-04；源批次：B04-OPHTH-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Identifying Retinal Features Using a Self-Configuring CNN for Clinical Intervention.
- 期刊/会议：Investigative Ophthalmology & Visual Science（2025）
- DOI：[10.1167/iovs.66.6.55](https://doi.org/10.1167/iovs.66.6.55)
- 正式来源：[https://doi.org/10.1167/iovs.66.6.55](https://doi.org/10.1167/iovs.66.6.55)

### 01 数据与问题

- 研究问题：分割OCT中的解剖与病理结构以支持临床干预
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：训练198个OCT体数据、3,762张B-scan；外部验证221个体数据、4,109张B-scan
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：nnU-Net
- 核心方法：nnU-Net

### 03 论文 Pipeline

1. 构建OCTAVE数据
2. 像素级专家标注
3. 训练自配置网络
4. 四数据集外部验证
5. 评估干预相关特征

### 04 指标与成果

- 重点指标：Dice、Sensitivity、Specificity、外部泛化
- 代表结果：外部病理结构敏感度：HRM 0.70、SRM 0.53、HTD 0.64、积液0.71、伪影高于0.99
- 使用边界：仅作筛查、分割和风险提示，不能替代眼科医师诊断与随访。

### 数据与代码入口

- 数据入口：[https://doi.org/10.1167/iovs.66.6.55](https://doi.org/10.1167/iovs.66.6.55)
- 代码入口：[https://doi.org/10.1167/iovs.66.6.55](https://doi.org/10.1167/iovs.66.6.55)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
