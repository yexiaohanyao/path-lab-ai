# 光电材料 × 深度学习

> **副标题：量子点生长实时调控**

## 原论文信息

- **英文题名**：Machine-learning-assisted and real-time-feedback-controlled growth of InAs/GaAs quantum dots
- **期刊与年份**：Nature Communications，2024
- **DOI**：10.1038/s41467-024-47087-w
- **正式来源**：https://www.nature.com/articles/s41467-024-47087-w
- **OpenAlex ID**：https://openalex.org/W4393309191
- **OpenAlex API**：https://api.openalex.org/works/W4393309191
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究量子点生长实时调控：利用3D ResNet50解析RHEED视频并实时反馈控制量子点外延生长处理InAs/GaAs量子点分子束外延RHEED视频与量子点密度测量所对应的材料问题。

## 数据基础

- **数据来源**：InAs/GaAs量子点分子束外延RHEED视频与量子点密度测量
- **数据规模**：正式摘要未给视频样本数；报告不同目标密度的生长实验
- **数据类型**：RHEED视频、量子点密度
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The datasets generated during and/or analyzed during the current study are available in the Figshare repository, https://doi.org/10.6084/m9.figshare.24347053 61 . Source data are provided with this paper.
- **给模型看什么**：InAs/GaAs量子点分子束外延RHEED视频与量子点密度测量；数据类型为RHEED视频、量子点密度。
- **让模型判断什么**：量子点生长实时调控

## 核心 AI 方法

- **论文方法**：3D ResNet50解析RHEED视频并实时反馈控制量子点外延生长
- **实际作用**：用于量子点生长实时调控。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **采集原位衍射**：采集量子点外延生长期间的RHEED视频。
2. **训练三维视频网**：3D ResNet50以视频而非单帧图像学习表面形貌。
3. **实时预测密度**：由既有生长数据预测量子点生长后密度。
4. **反馈调整外延**：模型反馈用于近实时控制外延生长。
5. **核验密度范围**：将密度由1.5×10¹⁰ cm⁻²调至3.8×10⁸或1.4×10¹¹ cm⁻²。

## 指标与代表结果

论文报告：将密度从1.5×10¹⁰ cm⁻²调至3.8×10⁸或1.4×10¹¹ cm⁻²。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://doi.org/10.6084/m9.figshare.24347053
- **代码状态**：依请求获取
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
