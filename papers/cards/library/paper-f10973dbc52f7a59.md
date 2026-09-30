# 高分子材料 × 主动学习

> **副标题：聚合物热性能优化**

## 原论文信息

- **英文题名**：Unlocking enhanced thermal conductivity in polymer blends through active learning
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-024-01261-2
- **正式来源**：https://www.nature.com/articles/s41524-024-01261-2
- **OpenAlex ID**：https://openalex.org/W4394845241
- **OpenAlex API**：https://api.openalex.org/works/W4394845241
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究聚合物热性能优化：利用高通量分子动力学结合主动学习处理约600种单组分聚合物、200种共混物的MD热导率计算所对应的材料问题。

## 数据基础

- **数据来源**：约600种单组分聚合物、200种共混物的MD热导率计算
- **数据规模**：初始约800组模拟；主动学习探索约55万未标注共混候选
- **数据类型**：聚合物共混配方、模拟热导率
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The authors declare that the data supporting the findings of this study are available within the article and its supplementary information files or will be available for download from https://github.com/Jiaxin-Xu/PolymerBlendTC-ActiveLearning upon publication.
- **给模型看什么**：约600种单组分聚合物、200种共混物的MD热导率计算；数据类型为聚合物共混配方、模拟热导率。
- **让模型判断什么**：聚合物热性能优化

## 核心 AI 方法

- **论文方法**：高通量分子动力学结合主动学习
- **实际作用**：用于聚合物热性能优化。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **模拟单体共混**：初始分子动力学计算约600种单组分和200种共混聚合物。
2. **编码共混组成**：采用加权和表示不同配比的聚合物共混物。
3. **主动学习探索**：结合机器学习和分子动力学探索约55万未标注共混候选。
4. **筛选高热导率**：寻找热导率优于相应单组分的共混物。
5. **分析增强机制**：对照回转半径、氢键作用与热传输增强的论文分析。

## 指标与代表结果

论文报告：找到热导率优于相应单组分的聚合物共混物，并指出回转半径增加与氢键作用和热传输增强有关。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/Jiaxin-Xu/PolymerBlendTC-ActiveLearning
- **代码状态**：公开
- **代码入口**：https://github.com/Jiaxin-Xu/PolymerBlendTC-ActiveLearning

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
