# 中药学 × 双多尺度卷积神经网络

## 白芷激光诱导光谱的产地溯源

> 本地批次：LOCAL-06；源批次：B06-CHMED-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：DMC-LIBSAS: A Laser-Induced Breakdown Spectroscopy Analysis System with Double-Multi Convolutional Neural Network for Accurate Traceability of Chinese Medicinal Materials.
- 期刊/会议：Sensors (Basel, Switzerland)（2025）
- DOI：[10.3390/s25072104](https://doi.org/10.3390/s25072104)
- 正式来源：[https://doi.org/10.3390/s25072104](https://doi.org/10.3390/s25072104)

### 01 数据与问题

- 研究问题：中药材产地溯源
- 数据来源：两产地白芷片LIBS实验光谱
- 数据集/样本：Angelica dahurica LIBS origin dataset
- 数据规模：40片白芷，两产地各20片；每个产地1,000条光谱，共2,000条
- 数据格式：LIBS光谱序列、产地标签
- 数据类型：药材元素光谱、地理来源
- 数据状态：数据包含在论文及作者保存的实验记录中，可按论文条件联系作者。

### 02 AI 怎么参与

- AI 技术：双多尺度卷积神经网络
- 核心方法：双多尺度CNN同时提取窄窗口和宽窗口光谱模式，完成白芷产地分类。

### 03 论文 Pipeline

1. 采集两产地共40片白芷样品
2. 获得2,000条LIBS光谱并完成校正
3. 构造不同尺度的光谱卷积分支
4. 融合双分支特征训练DMCNN
5. 在留出光谱上评估产地分类

### 04 指标与成果

- 重点指标：Accuracy、样本片数、光谱数
- 代表结果：双多尺度CNN产地分类准确率95.25%；实验覆盖40片药材和2,000条LIBS光谱。
- 使用边界：物理样品仅40片且来自两个产地，按光谱划分时需警惕同一样品信息泄漏。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
