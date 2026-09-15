# 肿瘤医学 × 深度超图网络

## 超图融合预测免疫结局

> 本地批次：LOCAL-04；源批次：B04-ONCO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Clinician-deployable deep hypergraph model integrating clinical and CT radiomics predicts immunotherapy outcomes in NSCLC.
- 期刊/会议：PLOS Digital Health（2026）
- DOI：[10.1371/journal.pdig.0001361](https://doi.org/10.1371/journal.pdig.0001361)
- 正式来源：[https://doi.org/10.1371/journal.pdig.0001361](https://doi.org/10.1371/journal.pdig.0001361)

### 01 数据与问题

- 研究问题：融合临床与CT组学预测非小细胞肺癌免疫治疗结局
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：六家医院共1,379例接受免疫治疗的非小细胞肺癌患者
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：深度超图网络
- 核心方法：深度超图网络

### 03 论文 Pipeline

1. 采集临床影像
2. 提取肿瘤组学
3. 构建患者超图
4. 训练结局模型
5. 部署式外部验证

### 04 指标与成果

- 重点指标：AUC、C-index、校准度、临床净获益
- 代表结果：深度超图模型在多组PFS与OS验证中C-index为0.69至0.72，高低分组HR 0.10
- 使用边界：仅作研究与临床决策辅助，不替代病理诊断、分期或治疗方案。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
