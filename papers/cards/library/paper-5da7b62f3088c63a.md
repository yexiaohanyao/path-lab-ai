# 纳米材料 × 机器学习

> **副标题：量子点合成与光学性能**

## 原论文信息

- **英文题名**：Machine learning-guided realization of full-color high-quantum-yield carbon quantum dots
- **期刊与年份**：Nature Communications，2024
- **DOI**：10.1038/s41467-024-49172-6
- **正式来源**：https://www.nature.com/articles/s41467-024-49172-6
- **OpenAlex ID**：https://openalex.org/W4399394644
- **OpenAlex API**：https://api.openalex.org/works/W4399394644
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究量子点合成与光学性能：利用多目标机器学习闭环引导水热合成处理碳量子点水热合成实验所对应的材料问题。

## 数据基础

- **数据来源**：碳量子点水热合成实验
- **数据规模**：63次实验
- **数据类型**：合成参数、发光波长与量子产率
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability Data that supports the findings of this study have been deposited in the GitHub repository and can be found with the following link: https://github.com/MS-w-ML/MOO-data.git . The data shown in Figs. 2 – 4 and Supplementary Figs. 3 – 24 are provided in the Source Data file. Source data are provided in this paper.
- **给模型看什么**：碳量子点水热合成实验；数据类型为合成参数、发光波长与量子产率。
- **让模型判断什么**：量子点合成与光学性能

## 核心 AI 方法

- **论文方法**：多目标机器学习闭环引导水热合成
- **实际作用**：用于量子点合成与光学性能。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **设定发光目标**：同时优化碳量子点发光颜色与光致发光量子产率。
2. **构建多目标模型**：机器学习关联水热合成条件和多项光学目标。
3. **闭环建议条件**：模型依据已有实验建议后续水热合成条件。
4. **实施水热实验**：闭环总计实施63次实验。
5. **核验全色产率**：获得全色荧光且各颜色量子产率均超过60%。

## 指标与代表结果

论文报告：通过63次实验获得全色荧光碳量子点，各颜色光致发光量子产率均超过60%。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/MS-w-ML/MOO-data.git
- **代码状态**：公开
- **代码入口**：https://github.com/MS-w-ML/MOO-code.git

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
