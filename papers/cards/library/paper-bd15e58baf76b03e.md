# 高分子材料 × 主动学习

> **副标题：天然替塑材料发现**

## 原论文信息

- **英文题名**：Machine intelligence-accelerated discovery of all-natural plastic substitutes
- **期刊与年份**：Nature Nanotechnology，2024
- **DOI**：10.1038/s41565-024-01635-z
- **正式来源**：https://www.nature.com/articles/s41565-024-01635-z
- **OpenAlex ID**：https://openalex.org/W4392919047
- **OpenAlex API**：https://api.openalex.org/works/W4392919047
- **OA 状态**：is_oa=true；oa_status=hybrid

## 研究问题

论文研究天然替塑材料发现：利用机器人实验、支持向量机、主动学习与人工神经网络处理作者制备的全天然纳米复合薄膜实验所对应的材料问题。

## 数据基础

- **数据来源**：作者制备的全天然纳米复合薄膜实验
- **数据规模**：初始286片薄膜；14轮主动学习另制备135片
- **数据类型**：薄膜配方、光学/热学/力学性质
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability The data that used for model training are available from the Zenodo repository Data for: Machine Intelligence-Accelerated Discovery of All-Natural Plastic Substitutes, accessible via https://doi.org/10.5281/zenodo.7916360 . The data that support the plots within this paper and other findings of this study are available from the corresponding authors upon reasonable request.
- **给模型看什么**：作者制备的全天然纳米复合薄膜实验；数据类型为薄膜配方、光学/热学/力学性质。
- **让模型判断什么**：天然替塑材料发现

## 核心 AI 方法

- **论文方法**：机器人实验、支持向量机、主动学习与人工神经网络
- **实际作用**：用于天然替塑材料发现。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **机器人制备薄膜**：自动移液机器人先制备286片天然组分纳米复合薄膜。
2. **训练支持向量机**：以初始薄膜性能数据训练支持向量机分类器。
3. **主动学习迭代**：经14轮主动学习分阶段另制备135片薄膜。
4. **建立性能预测**：使用扩充数据建立人工神经网络预测模型。
5. **正反向设计检验**：比较配方到性能预测及目标性能反向设计得到的全天然替塑样品。

## 指标与代表结果

论文报告：模型支持由配方预测性能及按目标性能反向生成全天然替塑材料；作者制备了具有与部分石化塑料相近性质的样品。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://doi.org/10.5281/zenodo.7916360
- **代码状态**：公开
- **代码入口**：https://github.com/chentl/MatAL

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
