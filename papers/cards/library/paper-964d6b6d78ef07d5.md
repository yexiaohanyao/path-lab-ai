# 生物医学工程 × 卷积神经网络

## 心震图估计心排量

> 本地批次：LOCAL-04；源批次：B04-BME-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Deep Learning Predicts Cardiac Output from Seismocardiographic Signals in Heart Failure.
- 期刊/会议：The American Journal of Cardiology（2025）
- DOI：[10.1016/j.amjcard.2025.09.037](https://doi.org/10.1016/j.amjcard.2025.09.037)
- 正式来源：[https://doi.org/10.1016/j.amjcard.2025.09.037](https://doi.org/10.1016/j.amjcard.2025.09.037)

### 01 数据与问题

- 研究问题：由心震图与心电信号估计心衰患者心排量
- 数据来源：论文正式全文所述研究队列与数据集
- 数据集/样本：详见论文正文
- 数据规模：73名心衰患者含同步右心导管、SCG和ECG，64人进入嵌套验证
- 数据格式：详见论文正文
- 数据类型：详见论文正文
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：卷积神经网络
- 核心方法：卷积神经网络

### 03 论文 Pipeline

1. 同步导管测量
2. 采集心震心电
3. 训练卷积网络
4. 嵌套留对验证
5. 分析一致性界限

### 04 指标与成果

- 重点指标：Bias、Limits of agreement、MAE、相关性
- 代表结果：心排量低于6 L/min时偏倚为-0.01 L/min，95%一致性界限为-0.88至0.87
- 使用边界：研究级原型不等同于获批医疗器械，临床使用须另行验证。

### 数据与代码入口

- 数据入口：[https://doi.org/10.1016/j.amjcard.2025.09.037](https://doi.org/10.1016/j.amjcard.2025.09.037)
- 代码入口：[https://doi.org/10.1016/j.amjcard.2025.09.037](https://doi.org/10.1016/j.amjcard.2025.09.037)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
