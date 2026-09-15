# 结构生物学 + 可解释神经网络

## 蛋白变构与上位性：用可解释神经网络完成能量耦合与变构量化

> 本地批次：LOCAL-14；源批次：STRUCTBIO-AI-20260818-01；网站状态：待本地确认。

### 论文来源

- 原论文：MoCHI: neural networks to fit interpretable models and quantify energies, energetic couplings, epistasis, and allostery from deep mutational scanning data
- 期刊/会议：Genome Biology（2024）
- DOI：[10.1186/s13059-024-03444-y](https://doi.org/10.1186/s13059-024-03444-y)
- 正式来源：[https://doi.org/10.1186/s13059-024-03444-y](https://doi.org/10.1186/s13059-024-03444-y)

### 01 数据与问题

- 研究问题：生物分子存在连续构象变化和结构异质性，静态结构或低信噪实验数据难以完整描述柔性、变构与分子运动。
- 数据来源：GitHub、Zenodo、NCBI
- 数据集/样本：详见论文正文
- 数据规模：论文原文与补充材料已提供实验或基准数据规模；具体样本量以正式论文方法部分为准。
- 数据格式：PDB/mmCIF结构、cryo-EM密度图、分子动力学轨迹、深度突变扫描
- 数据类型：深度突变扫描
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：可解释神经网络
- 核心方法：将可解释神经网络用于蛋白变构与上位性，把深度突变扫描与能量耦合与变构量化连接成可验证的专业AI流程。

### 03 论文 Pipeline

1. 输入结构实验数据：深度突变扫描
2. 编码几何与构象：原子｜残基｜密度｜轨迹
3. 训练可解释神经网络：能量耦合与变构量化
4. 结构与物理验证：PDB/EMDB｜实验密度｜动力学/突变数据

### 04 指标与成果

- 重点指标：完成蛋白变构与上位性的专业验证
- 代表结果：可解释神经网络完成能量耦合与变构量化并通过正式基准验证；论文在蛋白变构与上位性任务中比较模型、基线或实验结果，报告该方法能够改善能量耦合与变构量化的预测、重建或设计表现；精确指标定位于证据文件。
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://github.com/lehner-lab/MoCHI](https://github.com/lehner-lab/MoCHI)
- 代码入口：[https://github.com/lehner-lab/MoCHI](https://github.com/lehner-lab/MoCHI)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
