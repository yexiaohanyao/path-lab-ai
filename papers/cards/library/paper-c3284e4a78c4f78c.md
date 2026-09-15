# 临床医学 × 影像机器学习

## 内科ICU患者住院死亡风险预测

> 本地批次：LOCAL-03；源批次：B03-CLIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Mortality Prediction from Patient's First Day PAAC Radiograph in Internal Medicine Intensive Care Unit Using Artificial Intelligence Methods.
- 期刊/会议：Diagnostics（2025）
- DOI：[10.3390/diagnostics15243138](https://doi.org/10.3390/diagnostics15243138)
- 正式来源：[https://doi.org/10.3390/diagnostics15243138](https://doi.org/10.3390/diagnostics15243138)

### 01 数据与问题

- 研究问题：内科ICU患者住院死亡风险预测
- 数据来源：单中心内科ICU首日PAAC胸部X线队列；回顾性510例；增强后3019张用于训练验证，另留100例未增强独立测试
- 数据集/样本：详见论文正文
- 数据规模：回顾性510例；增强后3019张用于训练验证，另留100例未增强独立测试
- 数据格式：胸部X线图像、影像组学特征表、死亡结局标签
- 数据类型：医学影像、重症结局
- 数据状态：未发现可核实的独立公开下载入口

### 02 AI 怎么参与

- AI 技术：影像机器学习
- 核心方法：从入ICU首日PAAC胸片提取74项影像组学特征，筛至10项后比较多种分类器

### 03 论文 Pipeline

1. 收集首日胸片
2. 扩增并提取74特征
3. 筛选10项特征
4. 比较分类模型
5. 独立未增强测试

### 04 指标与成果

- 重点指标：AUC,敏感度,特异度
- 代表结果：独立测试中Subspace KNN达到AUC 0.88、敏感度0.80、特异度0.87。
- 使用边界：单中心胸片模型不能直接用于跨设备分诊，需外部验证和临床复核

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
