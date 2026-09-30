# 高分子材料 × 贝叶斯优化

> **副标题：聚合物自动化设计**

## 原论文信息

- **英文题名**：SPACIER: on-demand polymer design with fully automated all-atom classical molecular dynamics integrated into machine learning pipelines
- **期刊与年份**：npj Computational Materials，2025
- **DOI**：10.1038/s41524-024-01492-3
- **正式来源**：https://www.nature.com/articles/s41524-024-01492-3
- **OpenAlex ID**：https://openalex.org/W4406916876
- **OpenAlex API**：https://api.openalex.org/works/W4406916876
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究聚合物自动化设计：利用RadonPy全原子分子动力学与贝叶斯优化的SPACIER闭环处理自动化模拟与光学聚合物实验所对应的材料问题。

## 数据基础

- **数据来源**：自动化模拟与光学聚合物实验
- **数据规模**：正式摘要未量化实验样本数
- **数据类型**：聚合物结构、模拟与实验光学性质
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability The experimental and computational datasets are available at GitHub .
- **给模型看什么**：自动化模拟与光学聚合物实验；数据类型为聚合物结构、模拟与实验光学性质。
- **让模型判断什么**：聚合物自动化设计

## 核心 AI 方法

- **论文方法**：RadonPy全原子分子动力学与贝叶斯优化的SPACIER闭环
- **实际作用**：用于聚合物自动化设计。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **设定光学目标**：以折射率与阿贝数的权衡为光学聚合物设计目标。
2. **全原子自动模拟**：RadonPy执行全原子分子动力学性质计算。
3. **贝叶斯优化选材**：SPACIER将自动模拟与贝叶斯优化联成闭环。
4. **合成概念验证**：合成闭环设计的光学聚合物作为概念验证。
5. **比较帕累托边界**：验证候选越过折射率与阿贝数的既有帕累托边界。

## 指标与代表结果

论文报告：概念验证合成的光学聚合物越过了折射率与阿贝数的既有帕累托边界。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/s-nanjo/Spacier/tree/main/Optical_Polymer_Dataset
- **代码状态**：公开
- **代码入口**：https://github.com/s-nanjo/Spacier/

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
