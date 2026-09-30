# 水泥材料 + LIIF

## 超分辨率重建并量化水泥显微相

### 论文来源

- 原论文：Resolution enhancement of cementitious microstructure images and phases quantification using deep learning
- 期刊/会议：Construction and Building Materials（2025）
- DOI：[10.1016/j.conbuildmat.2025.139909](https://doi.org/10.1016/j.conbuildmat.2025.139909)
- 源批次：CEMENT-AI-20260923-01

### 01 数据与问题

- 研究问题：从低分辨率BSE显微图恢复细节，分割并量化孔隙、未水化水泥和水化产物。
- 数据来源：不同配比、倍率和分辨率的BSE图像
- 数据规模：全尺度图像2400张，裁剪后258818张
- 数据类型：低／高分辨率BSE显微图及物相标注
- 数据状态：原始BSE数据未见公开仓库

### 02 AI 怎么参与

- 核心方法：LIIF超分重建，再以SegFormer分割显微物相。

### 03 论文 Pipeline

1. 采集BSE图像
2. 构造分辨率对
3. LIIF超分重建
4. SegFormer分相
5. 实验交叉验证

### 04 指标与成果

- 最高30倍超分
- mIoU优于U-Net与DeepLabv3+
- 物相定量与实验一致
- 使用边界：跨设备、跨实验室稳定性仍需复核；成品卡说明图片数量在不同来源有差异。

### 数据与代码入口

- 数据入口：原始BSE数据未见公开仓库
- 代码入口：成品卡未列出独立代码入口

### 来源说明

本页依据用户提供的 GPT 终稿图片及同批次卡片清单整理；图片未提供的细节不补造。
