# 地理信息 × 随机森林降尺度

## 用随机森林降尺度完成城市地表温度降尺度

> 本地批次：LOCAL-07；源批次：B07-GIS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Downscaling of Urban Land Surface Temperatures Using Geospatial Machine Learning with Landsat 8/9 and Sentinel-2 Imagery
- 期刊/会议：Remote Sensing（2025）
- DOI：[10.3390/rs17142392](https://doi.org/10.3390/rs17142392)
- 正式来源：[https://doi.org/10.3390/rs17142392](https://doi.org/10.3390/rs17142392)

### 01 数据与问题

- 研究问题：城市地表温度高分辨率空间降尺度
- 数据来源：一手全文或作者稿
- 数据集/样本：Sentinel-2与Landsat 8/9地表温度数据
- 数据规模：Sentinel-2与Landsat 8/9地表温度数据
- 数据格式：空间影像、矢量或规划表格
- 数据类型：地理信息研究数据
- 数据状态：一手全文或作者稿已核验；数据与代码入口未单独定位

### 02 AI 怎么参与

- AI 技术：随机森林
- 核心方法：随机森林降尺度

### 03 论文 Pipeline

1. 整理研究数据
2. 构建空间输入
3. 运行核心模型
4. 生成任务输出
5. 核对报告指标

### 04 指标与成果

- 重点指标：Pearson r、RMSE、MAE
- 代表结果：珀斯验证r=0.85，RMSE 2.7°C，MAE<2.2°C
- 使用边界：仅适用于论文数据与验证范围；外部推广需重新验证

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
