# 无机材料 × 深度学习

> **副标题：硫系玻璃性质建模**

## 原论文信息

- **英文题名**：Deep learning-assisted attribute prediction of chalcogenide glasses based on graph classification
- **期刊与年份**：Scientific Reports，2025
- **DOI**：10.1038/s41598-025-04391-9
- **正式来源**：https://www.nature.com/articles/s41598-025-04391-9
- **OpenAlex ID**：https://openalex.org/W4411008832
- **OpenAlex API**：https://api.openalex.org/works/W4411008832
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究硫系玻璃性质建模：利用基于图分类的玻璃多性质深度学习预测处理公开SciGlass数据库中的硫系玻璃实验记录所对应的材料问题。

## 数据基础

- **数据来源**：公开SciGlass数据库中的硫系玻璃实验记录
- **数据规模**：正式摘要未量化收集的样本数
- **数据类型**：硫系玻璃成分、光电和热学性质
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability The data that support the findings of this study are available upon reasonable request from Shaoyun Liu (2465493353@qq.com).Chalcogenide glasses data can be found on SciGlass database.(https://github.com/epam/SciGlass).
- **给模型看什么**：公开SciGlass数据库中的硫系玻璃实验记录；数据类型为硫系玻璃成分、光电和热学性质。
- **让模型判断什么**：硫系玻璃性质建模

## 核心 AI 方法

- **论文方法**：基于图分类的玻璃多性质深度学习预测
- **实际作用**：用于硫系玻璃性质建模。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **汇集玻璃数据库**：从公开SciGlass数据库收集硫系玻璃实验数据。
2. **构建玻璃图表示**：以图表示玻璃组成与性质关系。
3. **训练图深度模型**：训练图分类基础的多性质深度学习模型。
4. **预测关键性质**：同时预测硫系玻璃多项关键属性。
5. **系统评估稳定**：正式摘要报告预测稳定，未给统一量化指标。

## 指标与代表结果

论文报告：正式摘要报告模型在关键硫系玻璃性质预测中表现稳定；未给统一量化指标。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://www.nature.com/articles/s41598-025-04391-9
- **代码状态**：正式页未确认公开代码
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
