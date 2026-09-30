# 金属材料 × 深度学习

> **副标题：高熵合金相分数预测**

## 原论文信息

- **英文题名**：A comparative study of predicting high entropy alloy phase fractions with traditional machine learning and deep neural networks
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-024-01335-1
- **正式来源**：https://www.nature.com/articles/s41524-024-01335-1
- **OpenAlex ID**：https://openalex.org/W4401452192
- **OpenAlex API**：https://api.openalex.org/works/W4401452192
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究高熵合金相分数预测：利用随机森林与深度神经网络对比的CALPHAD相分数代理模型处理自建CALPHAD高熵合金相稳定性数据所对应的材料问题。

## 数据基础

- **数据来源**：自建CALPHAD高熵合金相稳定性数据
- **数据规模**：4.8亿数据点
- **数据类型**：合金成分与温度、相分数
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability All data generated or analyzed during this study will be included in this published article (and its supplementary information files) upon acceptance.
- **给模型看什么**：自建CALPHAD高熵合金相稳定性数据；数据类型为合金成分与温度、相分数。
- **让模型判断什么**：高熵合金相分数预测

## 核心 AI 方法

- **论文方法**：随机森林与深度神经网络对比的CALPHAD相分数代理模型
- **实际作用**：用于高熵合金相分数预测。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **生成相分数数据**：使用CALPHAD产生的4.8亿条合金相分数数据点。
2. **训练随机森林**：建立随机森林相分数代理模型。
3. **训练深度网络**：建立深度神经网络相分数代理模型。
4. **评估同阶插值**：比较训练与测试同阶合金系统的插值误差。
5. **评估跨阶外推**：比较由低阶到高阶系统的外推能力。

## 指标与代表结果

论文报告：随机森林在插值场景误差较小；深度网络对低阶到高阶合金系统的外推更强。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://www.nature.com/articles/s41524-024-01335-1
- **代码状态**：依请求获取
- **代码入口**：未确认公开代码入口

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
