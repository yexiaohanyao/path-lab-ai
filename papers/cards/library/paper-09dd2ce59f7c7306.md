# 生物材料 × 机器学习

> **副标题：核苷水凝胶性质预测**

## 原论文信息

- **英文题名**：Developing a machine learning model for accurate nucleoside hydrogels prediction based on descriptors
- **期刊与年份**：Nature Communications，2024
- **DOI**：10.1038/s41467-024-46866-9
- **正式来源**：https://www.nature.com/articles/s41467-024-46866-9
- **OpenAlex ID**：https://openalex.org/W4393115302
- **OpenAlex API**：https://api.openalex.org/works/W4393115302
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究核苷水凝胶性质预测：利用核苷衍生物水凝胶形成能力分类与实验筛选处理71种已报道核苷衍生物及新验证分子所对应的材料问题。

## 数据基础

- **数据来源**：71种已报道核苷衍生物及新验证分子
- **数据规模**：71种训练衍生物；外推选取24种实验验证
- **数据类型**：核苷结构、凝胶形成标签
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability All relevant data supporting the key findings of this study are available. The existing datasets analyzed as well as datasets generated during the study also have been made available in GitHub ( https://github.com/leescu/NHGPM ). The chemical information of 71 nucleoside derivatives is available at https://www.nhgpm.com . The X-ray crystallographic coordinates for structures reported in this study have been deposited at the Cambridge Crystallographic Data Centre (CCDC), under deposition numbers 2253566. These data can be obtained free of charge from The Cambridge Crystallographic Data Centre via www.ccdc.cam.ac.uk/data_request/cif . Source data to re-create figures has been deposited on zenodo: https://doi.org/10.5281/zenodo.10723552 .
- **给模型看什么**：71种已报道核苷衍生物及新验证分子；数据类型为核苷结构、凝胶形成标签。
- **让模型判断什么**：核苷水凝胶性质预测

## 核心 AI 方法

- **论文方法**：核苷衍生物水凝胶形成能力分类与实验筛选
- **实际作用**：用于核苷水凝胶性质预测。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **整理核苷衍生物**：以71种已报道核苷衍生物建立训练数据。
2. **训练成胶分类器**：由分子描述符预测是否形成水凝胶。
3. **外推筛出二十四**：选出24个分子用于模型外部应用。
4. **实验检验成胶**：对所选分子的成胶能力做实验验证。
5. **发现无阳离子胶**：模型准确率71%，并找到2种无需阳离子的水凝胶。

## 指标与代表结果

论文报告：模型准确率71%（95% CI 0.69—0.73）；找到2种不依赖阳离子的水凝胶。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/leescu/NHGPM
- **代码状态**：公开
- **代码入口**：https://github.com/leescu/NHGPM

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
