# 舞蹈 × 姿态估计

## 群舞姿态异常修复与整齐度

> 本地批次：HOLD-17；源批次：DANCE-AI-20260831-01；网站状态：待本地确认。

### 论文来源

- 原论文：DanceFix: An Exploration in Group Dance Neatness Assessment Through Fixing Abnormal Challenges of Human Pose
- 期刊/会议：Proceedings of the AAAI Conference on Artificial Intelligence（2025）
- DOI：[10.1609/aaai.v39i8.32959](https://doi.org/10.1609/aaai.v39i8.32959)
- 正式来源：[https://doi.org/10.1609/aaai.v39i8.32959](https://doi.org/10.1609/aaai.v39i8.32959)

### 01 数据与问题

- 研究问题：检测并修复群舞姿态异常，建立可解释的整齐度量化指标。
- 数据来源：DNV群舞视频、Dancer Parts片段与JHMDB动作数据集。
- 数据集/样本：DNV；Dancer Parts；JHMDB
- 数据规模：DNV含50段群舞视频（25虚拟、25真人）共5,300帧；Dancer Parts含65段、13,666帧；JHMDB含928段。
- 数据格式：video、image frames、2D pose annotations
- 数据类型：群舞视频、姿态关键点、整齐度
- 数据状态：AAAI正式全文公开；使用公开JHMDB，并构建DNV与Dancer Parts数据集。

### 02 AI 怎么参与

- AI 技术：姿态估计
- 核心方法：DanceFix框架，包含BOFC与PETD模块，对现有人体姿态估计结果进行异常修复并计算群舞整齐度。

### 03 论文 Pipeline

1. 汇集群舞视频
2. 估计人体姿态
3. 定位异常关键点
4. 修复姿态误差
5. 计算整齐指标

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：Neatness Score：85.74 → 94.25：（AlphaPose+DanceFix，DNV）
- 代表结果：R-MPJAE：15.64 → 7.94：（DNV）
- 代表结果：R-MPJPE：7.91 → 6.39：（DNV）
- 使用边界：整齐度指标辅助训练和研究，不替代编导、教师或评审对艺术表现的综合判断。

### 数据与代码入口

- 数据入口：[https://ojs.aaai.org/index.php/AAAI/article/view/32959](https://ojs.aaai.org/index.php/AAAI/article/view/32959)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
