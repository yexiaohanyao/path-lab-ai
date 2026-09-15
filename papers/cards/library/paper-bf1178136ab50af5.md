# 老年医学 × 图网络

## 基于步态和足底压力的肌少症分类

> 本地批次：LOCAL-05；源批次：AGING-AI-20260822-01；网站状态：待本地确认。

### 论文来源

- 原论文：Sarcopenia diagnosis using skeleton-based gait sequence and foot-pressure image datasets
- 期刊/会议：Frontiers in Public Health（2024）
- DOI：[10.3389/fpubh.2024.1443188](https://doi.org/10.3389/fpubh.2024.1443188)
- 正式来源：[https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1443188/full](https://www.frontiersin.org/journals/public-health/articles/10.3389/fpubh.2024.1443188/full)

### 01 数据与问题

- 研究问题：基于步态和足底压力的肌少症分类
- 数据来源：SF3PDB-YU Sarcopenia Gait Dataset；100名受试者；30 fps RGB+D、25点3D骨架与足底压力数据
- 数据集/样本：详见论文正文
- 数据规模：详见论文正文
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：图网络
- 核心方法：ResNet-18与时空图卷积网络

### 03 论文 Pipeline

1. 步态采集
2. 模态对齐
3. 图网络训练
4. 受试者测试
5. 风险分类

### 04 指标与成果

- 重点指标：Accuracy、AUC、敏感度、可解释性
- 代表结果：足压ResNet-18准确率77.16%，骨架ST-GCN准确率78.63%
- 使用边界：风险识别用于研究和辅助筛查，不替代临床诊断。

### 数据与代码入口

- 数据入口：[https://github.com/Hasaren/Sarcopenia-Gait-Dataset](https://github.com/Hasaren/Sarcopenia-Gait-Dataset)
- 代码入口：[https://github.com/Hasaren/Sarcopenia-Gait-Dataset](https://github.com/Hasaren/Sarcopenia-Gait-Dataset)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
