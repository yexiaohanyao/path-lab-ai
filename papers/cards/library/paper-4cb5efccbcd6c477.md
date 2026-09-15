# 药剂学 × 生成式AI

## 可电离脂质生成与递送

> 本地批次：LOCAL-08；源批次：PHARMACEUTICS-AI-20260909-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial intelligence-driven rational design of ionizable lipids for mRNA delivery
- 期刊/会议：Nature Communications（2024）
- DOI：[10.1038/s41467-024-55072-6](https://doi.org/10.1038/s41467-024-55072-6)
- 正式来源：[https://doi.org/10.1038/s41467-024-55072-6](https://doi.org/10.1038/s41467-024-55072-6)

### 01 数据与问题

- 研究问题：能否用分子生成、性质预测和虚拟筛选缩小可电离脂质候选范围，并以小鼠实验检验mRNA递送表现。
- 数据来源：论文实验数据、AI生成可电离脂质库与Figshare
- 数据集/样本：AI-generated ionizable lipid library；Mouse validation Source Data
- 数据规模：两轮AI生成与筛选评估近2000万个可电离脂质，分别得到3个和6个候选分子并开展小鼠验证。
- 数据格式：molecular representations、property predictions、mouse expression assays、Source Data
- 数据类型：脂质结构、表观pKa、mRNA递送效率、小鼠体内表达
- 数据状态：实验Source Data随文并存入Figshare；生成脂质库全部预测结果与代码由通讯作者按请求提供。

### 02 AI 怎么参与

- AI 技术：生成式AI
- 核心方法：生成式分子设计、LightGBM性质预测、虚拟筛选和SHAP结构—活性解释。

### 03 论文 Pipeline

1. 生成脂质结构：以生成式分子设计产生可电离脂质候选。
2. 预测pKa性质：用LightGBM预测候选脂质的pKa和相关性质。
3. 筛选递送候选：在大规模虚拟库中筛选可开展实验的脂质。
4. 小鼠验证表达：以小鼠实验比较候选的mRNA递送表现。
5. SHAP解释结构：解释结构特征与递送表现的关系。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：虚拟评估规模：近2,000万个脂质：（两轮生成与筛选）
- 代表结果：候选数：第一轮3个；第二轮6个：（并开展小鼠验证）
- 代表结果：第二轮表现：6个均≥MC3：（论文报告）
- 代表结果：接近对照：1个接近SM-102：（论文报告）
- 使用边界：结果服务于递送材料研发；小鼠递送结果不能直接外推为人体疗效、安全性或临床给药方案。

### 数据与代码入口

- 数据入口：[https://figshare.com/s/ad928807e1b4795b9b5e](https://figshare.com/s/ad928807e1b4795b9b5e)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
