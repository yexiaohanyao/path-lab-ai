# 金属材料 × 生成式AI

> **副标题：金属微结构衍射表征**

## 原论文信息

- **英文题名**：Learning metal microstructural heterogeneity through spatial mapping of diffraction latent space features
- **期刊与年份**：npj Computational Materials，2025
- **DOI**：10.1038/s41524-025-01770-8
- **正式来源**：https://www.nature.com/articles/s41524-025-01770-8
- **OpenAlex ID**：https://openalex.org/W4413892895
- **OpenAlex API**：https://api.openalex.org/works/W4413892895
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究金属微结构衍射表征：利用衍射数据变分自编码器或对比学习与空间潜变量映射处理轧制与增材制造金属合金的衍射数据所对应的材料问题。

## 数据基础

- **数据来源**：轧制与增材制造金属合金的衍射数据
- **数据规模**：2类工艺来源合金案例；正式摘要未量化衍射点数
- **数据类型**：衍射数据、显微组织空间映射
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability Binned and preprocessed data are available through the Dryad Digital Repository ( https://doi.org/10.5061/dryad.zcrjdfnr9 ). The full-resolution raw data will be provided upon request to the corresponding author. The architectures used in this study were implemented on MATLAB and the associated code will be made available upon request to the corresponding author.
- **给模型看什么**：轧制与增材制造金属合金的衍射数据；数据类型为衍射数据、显微组织空间映射。
- **让模型判断什么**：金属微结构衍射表征

## 核心 AI 方法

- **论文方法**：衍射数据变分自编码器或对比学习与空间潜变量映射
- **实际作用**：用于金属微结构衍射表征。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **采集金属衍射**：使用两类工艺来源金属合金案例的点衍射数据。
2. **编码衍射特征**：用变分自编码器或对比学习获得衍射潜变量。
3. **映射空间位置**：把潜变量映射到样品真实空间位置。
4. **比较工艺案例**：在不同工艺来源合金的显微组织上展示方法。
5. **识别组织异质**：揭示传统离散物理描述符难辨的空间异质性。

## 指标与代表结果

论文报告：潜变量空间映射揭示传统物理描述符无法直接辨认的显微组织异质性。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://doi.org/10.5061/dryad.zcrjdfnr9
- **代码状态**：依请求获取
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
