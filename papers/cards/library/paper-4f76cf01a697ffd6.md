# 金属材料 × 深度学习

> **副标题：增材制造激光吸收深度学习**

## 原论文信息

- **英文题名**：Deep learning approaches for instantaneous laser absorptance prediction in additive manufacturing
- **期刊与年份**：npj Computational Materials，2024
- **DOI**：10.1038/s41524-023-01172-8
- **正式来源**：https://www.nature.com/articles/s41524-023-01172-8
- **OpenAlex ID**：https://openalex.org/W4390619325
- **OpenAlex API**：https://api.openalex.org/works/W4390619325
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究增材制造激光吸收深度学习：利用卷积神经网络与语义分割—回归两路线预测激光吸收率处理同步辐射X射线图像及同步激光吸收测量所对应的材料问题。

## 数据基础

- **数据来源**：同步辐射X射线图像及同步激光吸收测量
- **数据规模**：正式摘要未量化总图像数；全文报告局部训练集364帧案例
- **数据类型**：高速X射线图像、瞬时激光吸收率
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability A fragment of the laser energy absorption datasets is openly available at the NIST Public Data Repository 40 under the link https://data.nist.gov/od/id/mds2-2525 . Full absorption datasets can be made available upon reasonable request to B.J.S. The X-ray keyhole image segmentation dataset is openly available at https://rubyjiang18.github.io/keyholeofficial/ .
- **给模型看什么**：同步辐射X射线图像及同步激光吸收测量；数据类型为高速X射线图像、瞬时激光吸收率。
- **让模型判断什么**：增材制造激光吸收深度学习

## 核心 AI 方法

- **论文方法**：卷积神经网络与语义分割—回归两路线预测激光吸收率
- **实际作用**：用于增材制造激光吸收深度学习。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **配对X射线吸收**：将高速X射线蒸汽凹陷图像与瞬时激光吸收率配对。
2. **端到端卷积预测**：卷积网络由X射线图像直接预测激光吸收率。
3. **分割提取几何**：另一流程先语义分割再提取几何特征。
4. **回归瞬时吸收**：用几何特征回归瞬时吸收率。
5. **比较两路线误差**：两路线平均绝对误差均低于3.3%。

## 指标与代表结果

论文报告：端到端和两阶段模型对瞬时激光吸收率的平均绝对误差均低于3.3%。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://data.nist.gov/od/id/mds2-2525
- **代码状态**：公开
- **代码入口**：https://rubyjiang18.github.io/keyholeofficial/

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
