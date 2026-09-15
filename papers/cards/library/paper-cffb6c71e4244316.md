# 药剂学 × 贝叶斯优化

## 生物制剂多目标处方优化

> 本地批次：LOCAL-08；源批次：PHARMACEUTICS-AI-20260909-01；网站状态：待本地确认。

### 论文来源

- 原论文：Bayesian Optimization for Efficient Multiobjective Formulation Development of Biologics
- 期刊/会议：Molecular Pharmaceutics（2025）
- DOI：[10.1021/acs.molpharmaceut.5c00591](https://doi.org/10.1021/acs.molpharmaceut.5c00591)
- 正式来源：[https://doi.org/10.1021/acs.molpharmaceut.5c00591](https://doi.org/10.1021/acs.molpharmaceut.5c00591)

### 01 数据与问题

- 研究问题：能否在有限生物制剂实验下，利用多目标贝叶斯优化探索pH、辅料与多项生物物理性质之间的折中。
- 数据来源：bococizumab-IgG1处方迭代实验
- 数据集/样本：Multiobjective biologics formulation screen
- 数据规模：33次处方实验，并对9个代表处方追加高浓度性质表征。
- 数据格式：formulation compositions、biophysical assay tables、Supporting Information PDF
- 数据类型：pH/辅料浓度、Tm、kD、振荡后单体保留率、渗透压
- 数据状态：免费Supporting Information提供实验细节、材料方法、数据分析、详细测量结果和处方组成；论文未声明完整原始数据仓库。

### 02 AI 怎么参与

- AI 技术：贝叶斯优化
- 核心方法：多目标贝叶斯优化、独立高斯过程代理模型、超体积采集和迭代实验筛选。

### 03 论文 Pipeline

1. 设定多项目标：确定Tm、kD、单体保持率和渗透压等目标。
2. 训练高斯代理：为各性质训练独立高斯过程代理模型。
3. 选择超体积候选：以超体积采集准则选择下一轮候选处方。
4. 迭代处方实验：执行候选实验并将测量结果回写模型。
5. 比较多目标折中：比较不同pH和辅料组合的多属性折中。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：处方实验：33次：（bococizumab-IgG1）
- 代表结果：高浓度表征：9个代表处方：（论文报告）
- 代表结果：优化性质：3项生物物理性质：（论文实际结论）
- 代表结果：关键折中：pH对Tm与kD影响相反：（论文实际结论）
- 使用边界：结果用于处方研发决策支持，不替代临床使用、生产工艺确认、质量放行或监管批准。

### 数据与代码入口

- 数据入口：[https://pubs.acs.org/doi/10.1021/acs.molpharmaceut.5c00591](https://pubs.acs.org/doi/10.1021/acs.molpharmaceut.5c00591)
- 代码入口：[https://zenodo.org/records/13758883](https://zenodo.org/records/13758883)

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
