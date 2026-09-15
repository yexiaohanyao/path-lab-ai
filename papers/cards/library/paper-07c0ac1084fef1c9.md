# 体育 × 机器学习

## 多感觉指标辅助跳水人才分类

> 本地批次：HOLD-17；源批次：SPORTS-AI-20260831-01；网站状态：待本地确认。

### 论文来源

- 原论文：Multisensory assessment and machine learning for athlete classification in talent identification
- 期刊/会议：Journal of Science and Medicine in Sport（2026）
- DOI：[10.1016/j.jsams.2026.03.011](https://doi.org/10.1016/j.jsams.2026.03.011)
- 正式来源：[https://doi.org/10.1016/j.jsams.2026.03.011](https://doi.org/10.1016/j.jsams.2026.03.011)

### 01 数据与问题

- 研究问题：融合多感觉视觉评估指标并用机器学习进行奥运跳水人才分类。
- 数据来源：跳水人才识别项目的多感觉功能评估。
- 数据集/样本：Olympic diving multisensory talent-identification cohort
- 数据规模：60名奥运跳水人才识别参与者。
- 数据格式：tabular sensory assessments、classification labels
- 数据类型：视觉、前庭、本体感觉、人才分类
- 数据状态：非OA正式论文；正式摘要披露样本、方法和主要结果，未发现公共数据入口。

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：岭惩罚逻辑回归，对视觉—前庭—本体感觉指标进行分类与特征筛选。

### 03 论文 Pipeline

1. 采集感觉指标
2. 整理人才标签
3. 筛选关键特征
4. 训练岭逻辑回归
5. 评估分类表现

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：准确率：94.4%：（论文报告）
- 代表结果：AUC：0.889：（论文报告）
- 代表结果：显著特征：踝关节本体感觉、平滑追踪：（模型筛选）
- 使用边界：结果用于人才识别研究辅助，不得作为运动员选拔或淘汰的唯一依据。

### 数据与代码入口

- 数据入口：[https://doi.org/10.1016/j.jsams.2026.03.011](https://doi.org/10.1016/j.jsams.2026.03.011)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
