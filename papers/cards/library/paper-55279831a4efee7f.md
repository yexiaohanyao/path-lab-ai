# 生物医学工程 × Transformer

## 单导联重建十二导联

> 本地批次：LOCAL-04；源批次：B04-BME-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：From one to twelve: feasibility and clinical utility of deep learning-derived 12-lead ECGs for remote cardiac monitoring.
- 期刊/会议：Frontiers in Cardiovascular Medicine（2026）
- DOI：[10.3389/fcvm.2026.1856637](https://doi.org/10.3389/fcvm.2026.1856637)
- 正式来源：[https://doi.org/10.3389/fcvm.2026.1856637](https://doi.org/10.3389/fcvm.2026.1856637)

### 01 数据与问题

- 研究问题：由单导联心电重建十二导联并保留诊断信息
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：PTB-XL含21,837条十二导联ECG，Chapman-Shaoxing外部验证含43,559条记录
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：Transformer
- 核心方法：Transformer

### 03 论文 Pipeline

1. 读取单导联
2. 编码局部波形
3. 建模全局时序
4. 联合重建分类
5. 独立数据评测

### 04 指标与成果

- 重点指标：PCC、MSE、AUROC、诊断一致性
- 代表结果：PTB-XL测试集PCC 0.673、宏AUROC 0.821；外部队列PCC 0.612，优于线性回归0.498
- 使用边界：研究级原型不等同于获批医疗器械，临床使用须另行验证。

### 数据与代码入口

- 数据入口：[https://doi.org/10.3389/fcvm.2026.1856637](https://doi.org/10.3389/fcvm.2026.1856637)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
