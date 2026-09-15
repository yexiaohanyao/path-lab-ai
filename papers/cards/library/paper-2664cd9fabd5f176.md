# 眼科学 × U-Net

## 眼底照片生成厚度图

> 本地批次：LOCAL-04；源批次：B04-OPHTH-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Deep Learning-Based Generation of Retinal Nerve Fibre Layer Thickness Maps from Fundus Photographs: A Comparative Analysis of U-Net Architectures for Accessible Glaucoma Assessment.
- 期刊/会议：Life（2026）
- DOI：[10.3390/life16040559](https://doi.org/10.3390/life16040559)
- 正式来源：[https://doi.org/10.3390/life16040559](https://doi.org/10.3390/life16040559)

### 01 数据与问题

- 研究问题：从彩色眼底照片生成视网膜神经纤维层厚度图
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：5,000名青光眼患者的5,000对眼底照片与OCT神经纤维层厚度图
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：U-Net
- 核心方法：U-Net

### 03 论文 Pipeline

1. 配对眼底与OCT
2. 预处理视网膜图
3. 训练U-Net族模型
4. 生成厚度分布
5. 比较结构误差

### 04 指标与成果

- 重点指标：MAE、RMSE、相关性、结构相似度
- 代表结果：ResU-Net的MSE 0.00061、MAE 0.01877、SSIM 0.9163、PSNR 32.19 dB
- 使用边界：仅作筛查、分割和风险提示，不能替代眼科医师诊断与随访。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
