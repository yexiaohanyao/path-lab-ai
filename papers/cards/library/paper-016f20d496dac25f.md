# 系统生物学 × 机器学习

## 药物响应增强子识别

> 本地批次：LOCAL-06；源批次：B05-SYSBIO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Identification of drug responsive enhancers by predicting chromatin accessibility change from perturbed gene expression profiles
- 期刊/会议：npj Systems Biology and Applications（2024）
- DOI：[10.1038/s41540-024-00388-8](https://doi.org/10.1038/s41540-024-00388-8)
- 正式来源：[https://doi.org/10.1038/s41540-024-00388-8](https://doi.org/10.1038/s41540-024-00388-8)

### 01 数据与问题

- 研究问题：药物响应增强子识别
- 数据来源：ENCODE/ROADMAP配对RNA-seq与DNase-seq，以及CMAP和CDS-DB扰动表达
- 数据集/样本：ENCODE；Roadmap Epigenomics；CMAP；CDS-DB
- 数据规模：ENCODE 167对样本（110交叉验证、57测试），Roadmap外部70对；CMAP含6,100条表达谱、4种细胞系与1,309种小分子
- 数据格式：RNA-seq、DNase-seq、药物扰动表达、增强子坐标
- 数据类型：转录组、染色质可及性、药物扰动
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：扰动表达驱动的机器学习预测

### 03 论文 Pipeline

1. 配对表达与染色质
2. 训练可及性模型
3. 输入药物扰动
4. 筛选响应增强子
5. 关联药理遗传学

### 04 指标与成果

- 重点指标：可及性预测、外部数据泛化、差异增强子显著性、PGx关联
- 代表结果：论文报告：PERD利用ENCODE/ROADMAP训练表达—可及性模型，并在CMAP与CDS-DB扰动签名中识别药物响应增强子。
- 使用边界：增强子响应和药物因果链需在匹配细胞背景中做功能实验验证。

### 数据与代码入口

- 数据入口：[https://www.broadinstitute.org/connectivity-map-cmap](https://www.broadinstitute.org/connectivity-map-cmap)
- 代码入口：[https://github.com/wangyc82/PERD](https://github.com/wangyc82/PERD)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
