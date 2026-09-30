# 高分子材料 × 贝叶斯优化

> **副标题：生物降解聚合物优化**

## 原论文信息

- **英文题名**：Bayesian optimization of biodegradable polymers via machine learning driven features from low-field NMR data
- **期刊与年份**：npj Materials Degradation，2025
- **DOI**：10.1038/s41529-025-00613-7
- **正式来源**：https://www.nature.com/articles/s41529-025-00613-7
- **OpenAlex ID**：https://openalex.org/W4411410027
- **OpenAlex API**：https://api.openalex.org/works/W4411410027
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究生物降解聚合物优化：利用低场NMR弛豫曲线CNN特征提取与贝叶斯优化处理聚乳酸加工条件与低场NMR弛豫实验所对应的材料问题。

## 数据基础

- **数据来源**：聚乳酸加工条件与低场NMR弛豫实验
- **数据规模**：正式摘要未量化样本数
- **数据类型**：NMR弛豫曲线、聚乳酸加工条件与性质
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability All data and code used in this study are publicly available. The datasets and source code can be accessed on GitHub ( https://github.com/neko166/Python-Code-for-NMR-denoising-and-analysis/tree/main ).
- **给模型看什么**：聚乳酸加工条件与低场NMR弛豫实验；数据类型为NMR弛豫曲线、聚乳酸加工条件与性质。
- **让模型判断什么**：生物降解聚合物优化

## 核心 AI 方法

- **论文方法**：低场NMR弛豫曲线CNN特征提取与贝叶斯优化
- **实际作用**：用于生物降解聚合物优化。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **获取低场NMR**：使用低场NMR弛豫曲线表征聚合物状态。
2. **CNN提取特征**：卷积神经网络从弛豫曲线提取学习特征并重建去噪曲线。
3. **关联材料性质**：分析学习特征与材料性质的联系。
4. **优化工艺条件**：以学习特征驱动贝叶斯优化选择工艺条件。
5. **比较优化速率**：与直接使用材料性质值优化的速率比较；摘要未量化样本数。

## 指标与代表结果

论文报告：使用NMR学习特征优化工艺条件的速率，与直接使用材料性质值进行优化相当。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/neko166/Python-Code-for-NMR-denoising-and-analysis/tree/main
- **代码状态**：正式页未确认公开代码
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
