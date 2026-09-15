# 网络安全 × Transformer

## 轻量隐私威胁检测

> 本地批次：LOCAL-02；源批次：B01-CYBER-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Revolutionizing Cyber Threat Detection With Large Language Models: A Privacy-Preserving BERT-Based Lightweight Model for IoT/IIoT Devices
- 期刊/会议：IEEE Access（2024）
- DOI：[10.1109/access.2024.3363469](https://doi.org/10.1109/access.2024.3363469)
- 正式来源：[https://doi.org/10.1109/access.2024.3363469](https://doi.org/10.1109/access.2024.3363469)

### 01 数据与问题

- 研究问题：在受限IoT设备上识别多类网络攻击
- 数据来源：Edge-IIoTset真实物联网/工业物联网流量
- 数据集/样本：Edge-IIoTset
- 数据规模：在Edge-IIoTset上识别14类攻击，并测试CPU端推理
- 数据格式：网络流量、定长隐私编码、字节级token、14类攻击标签
- 数据类型：IoT/IIoT威胁流量
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：Transformer
- 核心方法：SecurityBERT、PPFLE隐私编码与BBPE分词

### 03 论文 Pipeline

1. 清洗网络流量
2. 执行隐私编码
3. 字节级分词
4. 训练SecurityBERT
5. 边缘端测速

### 04 指标与成果

- 重点指标：Accuracy、模型大小、CPU时延、攻击类别覆盖
- 代表结果：论文报告：SecurityBERT总体准确率98.2%，模型仅16.7MB，普通CPU推理时间低于0.15秒。
- 使用边界：用于检测研究与安全辅助；上线前须验证漂移、对抗与隐私风险。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
