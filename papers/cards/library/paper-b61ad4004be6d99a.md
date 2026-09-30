# 无机材料 × 生成式AI

> **副标题：无机晶体生成基线**

## 原论文信息

- **英文题名**：Establishing baselines for generative discovery of inorganic crystals
- **期刊与年份**：Materials Horizons，2025
- **DOI**：10.1039/d5mh00010f
- **正式来源**：https://pubs.rsc.org/en/content/articlehtml/2025/mh/d5mh00010f
- **OpenAlex ID**：https://openalex.org/W4412032218
- **OpenAlex API**：https://api.openalex.org/works/W4412032218
- **OA 状态**：is_oa=false；oa_status=closed

## 研究问题

论文研究无机晶体生成基线：利用电荷平衡原型随机枚举、离子交换与生成模型的DFT基准比较处理Materials Project、AFLOW原型及生成晶体结构所对应的材料问题。

## 数据基础

- **数据来源**：Materials Project、AFLOW原型及生成晶体结构
- **数据规模**：6种方法各抽取500种MP中未出现的材料作DFT计算
- **数据类型**：晶体结构CIF、DFT分解能
- **数据格式**：具体文件格式以正式数据入口为准
- **数据状态**：公开
- **数据可得性原文/核实口径**：正式全文Data availability提供生成结构、预训练模型及代码的公开GitHub。
- **给模型看什么**：Materials Project、AFLOW原型及生成晶体结构；数据类型为晶体结构CIF、DFT分解能。
- **让模型判断什么**：无机晶体生成基线

## 核心 AI 方法

- **论文方法**：电荷平衡原型随机枚举、离子交换与生成模型的DFT基准比较
- **实际作用**：用于无机晶体生成基线。

## 五步论文 Pipeline

以下是依据交接包和数据档案归纳的研究链条，不代替论文全文中的逐项实验协议。

1. **建立六法候选**：比较两种传统基线和四种生成式晶体生成方法。
2. **各抽五百结构**：每法抽取500种Materials Project未出现的材料。
3. **筛查稳定性质**：对生成结构作稳定性和目标性质筛选。
4. **DFT复核结构**：用DFT计算比较候选晶体的稳定性。
5. **比较生成基线**：离子交换稳定比例9.2%，随机枚举为1.4%。

## 指标与代表结果

论文报告：在每法500个新材料的比较中，离子交换生成的热力学稳定比例9.2%，随机枚举为1.4%。

未披露的样本数或统一量化指标不补造。

## 数据与代码入口

- **数据状态**：公开
- **数据入口**：https://github.com/Bartel-Group/matgen_baselines
- **代码状态**：公开
- **代码入口**：https://github.com/Bartel-Group/matgen_baselines

## 边界说明

结论限于论文所述材料、数据与实验条件；实际材料开发仍需独立实验验证。

## 证据口径

方法、数据与结果来自已批准交接包及核实数据档案登记的一手来源；OpenAlex仅支持书目与OA状态。

**源制卡阶段记录（历史）：基础卡完成，待第二审核；当时未请求发布。**

**本站发布记录：用户已于 2026-09-30 确认本批 64 张 GPT 终稿可公开部署；源第二审核记录保持原样。**
