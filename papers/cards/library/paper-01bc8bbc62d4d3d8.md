# 无机材料 × 生成式AI

> **副标题：非晶结构数据库**

## 原论文信息

- **英文题名**：The ab initio non-crystalline structure database: empowering machine learning to decode diffusivity
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-024-01469-2
- **正式来源**：https://www.nature.com/articles/s41524-024-01469-2
- **OpenAlex ID**：https://openalex.org/W4405566600
- **OpenAlex API**：https://api.openalex.org/works/W4405566600
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究非晶结构数据库：利用从头算分子动力学非晶结构库与锂离子扩散机器学习模型处理作者生成的非晶结构与AIMD轨迹数据库所对应的材料问题。

## 数据基础

- **数据来源**：作者生成的非晶结构与AIMD轨迹数据库
- **数据规模**：正式摘要称为当时规模最大的计算非晶结构库，未在摘要给出条目数
- **数据类型**：非晶结构、AIMD轨迹、离子扩散率
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The non-crystalline structures and diffusivity are made accessible to the public via the Material Project’s MPContribs 42 website https://contribs.materialsproject.org/projects/amorphous_diffusivity and advanced application programming interface (API) with a dedicated Python client 43 . The zipped json files are also available at Figshare https://figshare.com/s/30601968f9244d8dffaa .
- **给模型看什么**：作者生成的非晶结构与AIMD轨迹数据库；数据类型为非晶结构、AIMD轨迹、离子扩散率。
- **让模型判断什么**：非晶结构数据库

## 核心 AI 方法

- **论文方法**：从头算分子动力学非晶结构库与锂离子扩散机器学习模型
- **实际作用**：用于非晶结构数据库。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **从头算非晶库**：以从头算分子动力学生成计算非晶结构数据库。
2. **编码组成结构**：从数据库连接非晶材料组成、结构和性质。
3. **训练性质模型**：用机器学习模型预测锂离子扩散率。
4. **预测锂离子扩散**：在非晶材料上进行扩散率预测。
5. **对照DFT成本**：与昂贵DFT计算比较速度与预测表现。

## 指标与代表结果

论文报告：基于数据库训练的模型可更快速预测锂离子扩散率，作为高成本DFT计算的替代。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://contribs.materialsproject.org/projects/amorphous_diffusivity
- **代码状态**：公开
- **代码入口**：https://github.com/materialsproject/mpmorph

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
