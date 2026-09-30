# 能源材料 × 主动学习

> **副标题：锂金属电池电解液筛选**

## 原论文信息

- **英文题名**：Active learning accelerates electrolyte solvent screening for anode-free lithium metal batteries
- **期刊与年份**：Nature Communications，2025
- **DOI**：10.1038/s41467-025-63303-7
- **正式来源**：https://www.nature.com/articles/s41467-025-63303-7
- **OpenAlex ID**：https://openalex.org/W4414512361
- **OpenAlex API**：https://api.openalex.org/works/W4414512361
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究锂金属电池电解液筛选：利用贝叶斯模型平均与序贯主动学习设计无负极锂金属电池电解液处理作者Cu||LiFePO4电池循环数据和虚拟电解液空间所对应的材料问题。

## 数据基础

- **数据来源**：作者Cu||LiFePO4电池循环数据和虚拟电解液空间
- **数据规模**：初始58组循环数据；约100万种虚拟电解液；7轮各约10种验证
- **数据类型**：电解液组成、容量保持率
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability All experimental cycling data can be found in the Supporting Information and on the accompanying GitHub repository. Source data are provided with this paper.
- **给模型看什么**：作者Cu||LiFePO4电池循环数据和虚拟电解液空间；数据类型为电解液组成、容量保持率。
- **让模型判断什么**：锂金属电池电解液筛选

## 核心 AI 方法

- **论文方法**：贝叶斯模型平均与序贯主动学习设计无负极锂金属电池电解液
- **实际作用**：用于锂金属电池电解液筛选。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **采集初始循环**：用58组无负极电池循环数据启动搜索。
2. **贝叶斯模型平均**：用贝叶斯模型平均处理小数据和有噪声标签。
3. **主动筛选电解液**：在约100万种虚拟电解液中序贯选择候选。
4. **七轮电池验证**：开展7轮、每轮约10种候选的循环验证。
5. **比较容量保持**：发现4种表现接近先进配方的电解液溶剂。

## 指标与代表结果

论文报告：发现4种表现接近先进配方的电解液溶剂。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://www.nature.com/articles/s41467-025-63303-7
- **代码状态**：公开
- **代码入口**：https://github.com/AmanchukwuLab/AL-anode-free

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
