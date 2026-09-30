# 能源材料 × 生成式AI

> **副标题：储能介电材料发现**

## 原论文信息

- **英文题名**：AI-assisted discovery of high-temperature dielectrics for energy storage
- **期刊与年份**：Nature Communications，2024
- **DOI**：10.1038/s41467-024-50413-x
- **正式来源**：https://www.nature.com/articles/s41467-024-50413-x
- **OpenAlex ID**：https://openalex.org/W4400805295
- **OpenAlex API**：https://api.openalex.org/works/W4400805295
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究储能介电材料发现：利用AI聚合物结构生成与性质预测辅助电介质发现处理polyVERSE聚合物结构库及电介质实验所对应的材料问题。

## 数据基础

- **数据来源**：polyVERSE聚合物结构库及电介质实验
- **数据规模**：正式摘要未量化生成结构数；论文测试多种聚降冰片烯/聚酰亚胺
- **数据类型**：聚合物结构、介电储能与热稳定性
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：部分公开
- **数据可得性原文/核实口径**：Data availability The polymer chemical structures generated in this work may be found at https://github.com/Ramprasad-Group/polyVERSE/tree/main/Virtual-Polymer/VFS/ROMP_and_polyimide 50 . This represents the first version of the polyVERSE database. The database will grow in future versions, to include polymers and reaction templates beyond those considered in this work. Source data are provided in this paper.
- **给模型看什么**：polyVERSE聚合物结构库及电介质实验；数据类型为聚合物结构、介电储能与热稳定性。
- **让模型判断什么**：储能介电材料发现

## 核心 AI 方法

- **论文方法**：AI聚合物结构生成与性质预测辅助电介质发现
- **实际作用**：用于储能介电材料发现。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **设定高温储能**：兼顾聚合物电介质的高温稳定和高能量密度。
2. **AI生成聚合物**：以AI、聚合物化学与分子工程提出候选结构。
3. **筛选两类家族**：重点研究聚降冰片烯与聚酰亚胺家族。
4. **测试高温性能**：对候选电介质进行高温储能测试。
5. **对照商业介质**：某材料200°C下8.3 J cm⁻³，为同温商业介质11倍。

## 指标与代表结果

论文报告：某电介质在200°C储能密度8.3 J cm⁻³，为同温商业聚合物电介质的11倍。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：部分公开
- **数据入口**：https://github.com/Ramprasad-Group/polyVERSE/tree/main/Virtual-Polymer/VFS/ROMP_and_polyimide
- **代码状态**：公开
- **代码入口**：https://github.com/Ramprasad-Group/polyVERSE/tree/main/Virtual-Polymer/VFS/ROMP_and_polyimide

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
