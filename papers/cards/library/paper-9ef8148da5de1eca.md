# 无机材料 × 迁移学习

> **副标题：钙钛矿氧化物转移学习**

## 原论文信息

- **英文题名**：Transfer learning guided discovery of efficient perovskite oxide for alkaline water oxidation
- **期刊与年份**：Nature Communications，2024
- **DOI**：10.1038/s41467-024-50605-5
- **正式来源**：https://www.nature.com/articles/s41467-024-50605-5
- **OpenAlex ID**：https://openalex.org/W4401011715
- **OpenAlex API**：https://api.openalex.org/works/W4401011715
- **OA 状态**：is_oa=true；oa_status=gold

## 研究问题

论文研究钙钛矿氧化物转移学习：利用预训练模型、集成学习和主动学习的迁移学习框架处理钙钛矿氧化物组成空间与电化学实验所对应的材料问题。

## 数据基础

- **数据来源**：钙钛矿氧化物组成空间与电化学实验
- **数据规模**：筛选16050种组成；合成36种新氧化物，其中13种纯钙钛矿
- **数据类型**：氧化物组成、析氧反应电化学测量
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：Data availability All data supporting our findings are available in this paper and its associated supplementary materials (Supplementary Information and Supplementary Data 1 ). Source data for the figures, including Supplementary figures, can be found in the Source Data file. Source data are provided with this paper.
- **给模型看什么**：钙钛矿氧化物组成空间与电化学实验；数据类型为氧化物组成、析氧反应电化学测量。
- **让模型判断什么**：钙钛矿氧化物转移学习

## 核心 AI 方法

- **论文方法**：预训练模型、集成学习和主动学习的迁移学习框架
- **实际作用**：用于钙钛矿氧化物转移学习。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **预训练氧化物模型**：用预训练模型迁移钙钛矿氧化物知识。
2. **集成主动学习**：结合集成学习和主动学习预测候选组成。
3. **筛选组成一万六**：共筛查16050种钙钛矿氧化物组成。
4. **合成三十六种**：合成36种新氧化物，其中13种为纯钙钛矿。
5. **电化学测过电位**：两种代表组成在10 mA cm⁻²下测得327和315 mV。

## 指标与代表结果

论文报告：两种代表组成在10 mA cm⁻²下分别获得327 mV和315 mV过电位。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://www.nature.com/articles/s41467-024-50605-5
- **代码状态**：公开
- **代码入口**：https://github.com/helaoer/Transfer-learning-guided-the-discovery-of-efficient-perovskite-oxide-for-alkaline-water-oxidation

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
