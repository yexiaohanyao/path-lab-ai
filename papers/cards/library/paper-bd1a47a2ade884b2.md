# 代谢组学 × 卷积神经网络＋分子嵌入

## 串联质谱驱动的代谢物结构鉴定

> 本地批次：LOCAL-06；源批次：B06-METAB-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：ChemEmbed: a deep learning framework for metabolite identification using enhanced MS/MS data and multidimensional molecular embeddings.
- 期刊/会议：Briefings in Bioinformatics（2026）
- DOI：[10.1093/bib/bbag054](https://doi.org/10.1093/bib/bbag054)
- 正式来源：[https://doi.org/10.1093/bib/bbag054](https://doi.org/10.1093/bib/bbag054)

### 01 数据与问题

- 研究问题：串联质谱代谢物结构鉴定
- 数据来源：NIST20、MS-DIAL、GNPS与Agilent METLIN谱库
- 数据集/样本：NIST20；MS-DIAL；GNPS；Agilent METLIN；CASMI；ARUS
- 数据规模：汇总38,472个化合物，并在CASMI和ARUS任务上外部评估
- 数据格式：MS/MS谱图、分子结构与嵌入向量
- 数据类型：串联质谱、化学结构
- 数据状态：整理后的数据发布于Zenodo。

### 02 AI 怎么参与

- AI 技术：卷积神经网络＋分子嵌入
- 核心方法：CNN编码谱图与中性丢失，并融合Mol2vec或ChemBERTa表示完成候选结构排序。

### 03 论文 Pipeline

1. 汇总四大谱库的38,472个化合物
2. 统一碰撞能量并提取中性丢失
3. 生成Mol2vec与ChemBERTa分子表示
4. 训练CNN进行谱图到结构候选匹配
5. 在CASMI和ARUS上验证并确认未知物

### 04 指标与成果

- 重点指标：Top-1准确率、Top-5准确率、确认未知物数量
- 代表结果：Top-1正确率超过42%，Top-5超过76%；在ARUS样本中确认25个此前未鉴定化合物，并优于SIRIUS 6。
- 使用边界：模型输出为候选排序，仍需标准品或正交实验完成最终结构确认。

### 数据与代码入口

- 数据入口：[https://zenodo.org/records/17534670](https://zenodo.org/records/17534670)
- 代码入口：[https://github.com/massspecdl/ChemEmbed](https://github.com/massspecdl/ChemEmbed)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
