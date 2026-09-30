# 纳米材料 × 深度学习

> **副标题：电子显微图像复原**

## 原论文信息

- **英文题名**：Deep convolutional neural networks to restore single-shot electron microscopy images
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-023-01188-0
- **正式来源**：https://www.nature.com/articles/s41524-023-01188-0
- **OpenAlex ID**：https://openalex.org/W4390744083
- **OpenAlex API**：https://api.openalex.org/works/W4390744083
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究电子显微图像复原：利用卷积神经网络校正电镜图像畸变处理模拟与实验TEM/STEM图像所对应的材料问题。

## 数据基础

- **数据来源**：模拟与实验TEM/STEM图像
- **数据规模**：论文提供6个训练模型；正式摘要未量化图像数
- **数据类型**：TEM/STEM图像、结构表征
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The trained models for the six distinct neural networks described in this study are openly accessible. These models, together with illustrative scripts demonstrating their utilization, are provided to facilitate replication and further exploration. In addition, the script used for training these models is also included. All these resources are hosted in a dedicated GitHub repository, ensuring easy accessibility and version control. The repository can be accessed at the following URL: https://github.com/Ivanlh20/tk_r_em .
- **给模型看什么**：模拟与实验TEM/STEM图像；数据类型为TEM/STEM图像、结构表征。
- **让模型判断什么**：电子显微图像复原

## 核心 AI 方法

- **论文方法**：卷积神经网络校正电镜图像畸变
- **实际作用**：用于电子显微图像复原。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **描述电镜畸变**：分析TEM与S(T)EM图像的仪器和环境畸变。
2. **构建校正模型**：以卷积神经网络学习电镜图像校正。
3. **复原单帧图像**：模型对单次采集图像进行畸变复原。
4. **模拟实验验证**：在模拟与实验电镜图像上验证。
5. **比较结构提取**：检验信噪比提升与定量结构信息提取的可靠性。

## 指标与代表结果

论文报告：在模拟及实验图像验证中提高信噪比，使结构信息的定量提取更可靠；正式摘要未给统一增幅。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/Ivanlh20/tk_r_em
- **代码状态**：正式页未确认公开代码
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
