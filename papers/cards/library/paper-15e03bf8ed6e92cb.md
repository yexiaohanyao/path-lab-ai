# 纳米材料 × 生成式AI

> **副标题：纳米材料电镜合成数据表征**

## 原论文信息

- **英文题名**：A robust synthetic data generation framework for machine learning in high-resolution transmission electron microscopy (HRTEM)
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-024-01336-0
- **正式来源**：https://www.nature.com/articles/s41524-024-01336-0
- **OpenAlex ID**：https://openalex.org/W4401100781
- **OpenAlex API**：https://api.openalex.org/works/W4401100781
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究纳米材料电镜合成数据表征：利用Construction Zone合成原子结构数据生成与神经网络图像分割处理模拟HRTEM图像与真实纳米材料电镜基准所对应的材料问题。

## 数据基础

- **数据来源**：模拟HRTEM图像与真实纳米材料电镜基准
- **数据规模**：3个实验HRTEM基准数据集
- **数据类型**：合成及实验HRTEM图像、像素分割标签
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The original atomic structures and the processed images used to train segmentation models in this study have been made available via Zenodo at https://zenodo.org/doi/10.5281/zenodo.11554183 ; we also include a series of trained model weights, from models trained on the baseline, substrate varying, and optimized datasets.
- **给模型看什么**：模拟HRTEM图像与真实纳米材料电镜基准；数据类型为合成及实验HRTEM图像、像素分割标签。
- **让模型判断什么**：纳米材料电镜合成数据表征

## 核心 AI 方法

- **论文方法**：Construction Zone合成原子结构数据生成与神经网络图像分割
- **实际作用**：用于纳米材料电镜合成数据表征。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **生成原子结构**：Construction Zone生成多样纳米尺度原子结构。
2. **构建合成图像**：以模拟结构创建HRTEM训练数据。
3. **训练分割网络**：仅以合成数据库训练神经网络分割模型。
4. **分割实验图像**：将模型用于实验原子分辨HRTEM图像。
5. **核验三个基准**：在3个实验HRTEM基准集上报告分割表现。

## 指标与代表结果

论文报告：仅以合成数据库训练的模型在3个实验基准上达到论文所称的先进分割表现。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://zenodo.org/doi/10.5281/zenodo.11554183
- **代码状态**：公开
- **代码入口**：https://github.com/ScottLabUCB/HRTEM-robust-synthetic-data

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
