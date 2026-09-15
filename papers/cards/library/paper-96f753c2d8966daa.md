# 麻醉学 × 波形深度学习

## 术中低血压事件提前5分钟预测

> 本地批次：LOCAL-03；源批次：B03-ANES-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Machine Learning Methods for the Prediction of Intraoperative Hypotension with Biosignal Waveforms.
- 期刊/会议：Medicina（2025）
- DOI：[10.3390/medicina61112039](https://doi.org/10.3390/medicina61112039)
- 正式来源：[https://doi.org/10.3390/medicina61112039](https://doi.org/10.3390/medicina61112039)

### 01 数据与问题

- 研究问题：术中低血压事件提前5分钟预测
- 数据来源：VitalDB四类术中波形数据；VitalDB最终2611例；开发2088例16920段，内部验证523例4175段
- 数据集/样本：详见论文正文
- 数据规模：VitalDB最终2611例；开发2088例16920段，内部验证523例4175段
- 数据格式：ABP波形、ECG与PPG波形、ETCO2波形与临床表格
- 数据类型：术中生理波形、低血压事件
- 数据状态：公开VitalDB

### 02 AI 怎么参与

- AI 技术：波形深度学习
- 核心方法：比较GBM与融合CNN-RNN，输入ABP、ECG、PPG、ETCO2波形及术前临床变量

### 03 论文 Pipeline

1. 筛选完整四波形
2. 切分事件时间窗
3. 融合术前临床变量
4. 训练GBM与CNN-RNN
5. 提前5分钟内部验证

### 04 指标与成果

- 重点指标：AUROC,准确率,敏感度,特异度
- 代表结果：GBM与CNN-RNN的AUROC均为0.94、准确率均为0.88；GBM敏感度0.83，CNN-RNN特异度0.93。
- 使用边界：内部验证不能证明跨医院泛化，报警阈值需结合漏报和误报代价设定

### 数据与代码入口

- 数据入口：[https://vitaldb.net/](https://vitaldb.net/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
