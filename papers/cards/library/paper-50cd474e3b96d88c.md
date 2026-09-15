# 中药学 × 电子鼻舌＋九类机器学习

## 白术气味味觉质量等级判别

> 本地批次：LOCAL-06；源批次：B06-CHMED-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A Novel Strategy for Rapid Quantification of Multiple Quality Indicators and Grade Discrimination of Atractylodis macrocephalae Rhizoma Based on Electronic Nose, Electronic Tongue and Machine-Learning Algorithms.
- 期刊/会议：Molecules（2026）
- DOI：[10.3390/molecules31050881](https://doi.org/10.3390/molecules31050881)
- 正式来源：[https://doi.org/10.3390/molecules31050881](https://doi.org/10.3390/molecules31050881)

### 01 数据与问题

- 研究问题：中药质量指标定量与等级判别
- 数据来源：180批白术电子鼻、电子舌与化学成分实验
- 数据集/样本：Atractylodis macrocephalae Rhizoma sensory-chemistry cohort
- 数据规模：180批白术；电子鼻15项特征，联合电子舌信号和8种化学成分
- 数据格式：电子鼻传感器矩阵、电子舌信号、成分含量与等级标签
- 数据类型：气味指纹、味觉指纹、中药质量等级
- 数据状态：正文未发现公开入口。未给出可独立访问的数据或代码地址。

### 02 AI 怎么参与

- AI 技术：电子鼻舌＋九类机器学习
- 核心方法：比较9种机器学习模型完成质量等级分类，并回归预测8种化学成分。

### 03 论文 Pipeline

1. 采集180批白术并完成质量分级
2. 获取电子鼻15项和电子舌特征
3. 检测8种代表性化学成分
4. 比较9类分类与回归模型
5. 联合评价等级准确率和成分预测R²

### 04 指标与成果

- 重点指标：KNN Accuracy、R²_test、批次数
- 代表结果：KNN质量等级准确率95.56%；电子舌模型对多数成分的测试集R²超过0.80。
- 使用边界：数据来自特定批次和设备，跨产地、年份及仪器迁移需要重新校准。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
