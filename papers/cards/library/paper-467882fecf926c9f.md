# 多组学 × 生成式Transformer

## 单细胞多组学基础模型

> 本地批次：LOCAL-06；源批次：B05-MULTIOMICS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：scGPT: toward building a foundation model for single-cell multi-omics using generative AI
- 期刊/会议：Nature Methods（2024）
- DOI：[10.1038/s41592-024-02201-0](https://doi.org/10.1038/s41592-024-02201-0)
- 正式来源：[https://doi.org/10.1038/s41592-024-02201-0](https://doi.org/10.1038/s41592-024-02201-0)

### 01 数据与问题

- 研究问题：单细胞多组学基础模型
- 数据来源：大规模单细胞测序仓库及多批次、多组学、扰动任务数据
- 数据集/样本：scGPT pretraining corpus
- 数据规模：预训练仓库超过3,300万细胞
- 数据格式：基因token、表达值、批次/模态/扰动条件
- 数据类型：单细胞转录组、单细胞多组学
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：生成式Transformer
- 核心方法：生成式预训练Transformer

### 03 论文 Pipeline

1. 汇集单细胞库
2. 构建基因token
3. 生成式预训练
4. 任务迁移微调
5. 多任务基准评测

### 04 指标与成果

- 重点指标：细胞注释、批次整合、多组学整合、扰动与网络推断表现
- 代表结果：论文报告：scGPT在超过3,300万细胞上预训练，并可迁移到细胞注释、多组学整合、扰动响应和基因网络推断。
- 使用边界：基础模型输出需按具体数据域重新验证，不能直接替代生物学与临床判断。

### 数据与代码入口

- 数据入口：[https://cellxgene.cziscience.com/](https://cellxgene.cziscience.com/)
- 代码入口：[https://github.com/bowang-lab/scGPT](https://github.com/bowang-lab/scGPT)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
