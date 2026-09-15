# NMR 解析 + 多任务深度学习

## 仅用一维 ¹H/¹³C NMR 直接生成候选分子结构

> 本地批次：LOCAL-09；源批次：CHEM-AI-20260810-01；网站状态：待本地确认。

### 论文来源

- 原论文：Accurate and Efficient Structure Elucidation from Routine One-Dimensional NMR Spectra Using Multitask Machine Learning
- 期刊/会议：ACS Central Science（2024）
- DOI：[10.1021/acscentsci.4c01132](https://doi.org/10.1021/acscentsci.4c01132)
- 正式来源：[https://doi.org/10.1021/acscentsci.4c01132](https://doi.org/10.1021/acscentsci.4c01132)

### 01 数据与问题

- 研究问题：常规 NMR 结构解析耗时且依赖专家经验，分子规模增大时候选结构空间会组合爆炸。
- 数据来源：SpectraBase + GDB-17｜模拟谱
- 数据集/样本：详见论文正文
- 数据规模：约 310 万分子｜957 个子结构｜≤19 个重原子
- 数据格式：一维 ¹H/¹³C NMR、子结构标签、SMILES
- 数据类型：¹H/¹³C NMR｜子结构｜SMILES
- 数据状态：以论文正式页面和补充材料声明为准

### 02 AI 怎么参与

- AI 技术：人工智能
- 核心方法：仅用一维 ¹H/¹³C NMR 直接生成候选分子结构

### 03 论文 Pipeline

1. 原始谱图输入：最少预处理的 ¹H/¹³C NMR
2. CNN 提取谱特征：同时预测分子子结构
3. Transformer 解码：由谱特征逐 token 生成 SMILES
4. 束搜索排序：输出多个候选分子结构

### 04 指标与成果

- 重点指标：将 >2 万亿候选压缩到 15 个
- 代表结果：69.6% 的正确结构进入 top-15；仅凭一维谱图，在不提供分子式时解析至多 19 个重原子的分子。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://doi.org/10.1021/acscentsci.4c01132](https://doi.org/10.1021/acscentsci.4c01132)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
