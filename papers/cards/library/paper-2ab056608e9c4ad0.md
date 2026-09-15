# 超声医学 + 实时AI扫查引导

## 肺部床旁超声：用实时AI扫查引导完成非专家肺超声采集与诊断支持

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial Intelligence–Guided Lung Ultrasound by Nonexperts
- 期刊/会议：JAMA Cardiology（2025）
- DOI：[10.1001/jamacardio.2024.4991](https://doi.org/10.1001/jamacardio.2024.4991)
- 正式来源：[https://doi.org/10.1001/jamacardio.2024.4991](https://doi.org/10.1001/jamacardio.2024.4991)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：MIMIC/PhysioNet
- 数据集/样本：详见论文正文
- 数据规模：四中心前瞻验证共入组188人，176人完成AI引导检查并进入主要分析，163人同时具备专家对照检查。
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：POCUS视频与操作者研究
- 数据状态：部分公开

### 02 AI 怎么参与

- AI 技术：实时AI扫查引导
- 核心方法：将实时AI扫查引导用于肺部床旁超声，把POCUS视频与操作者研究与非专家肺超声采集与诊断支持连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：POCUS视频与操作者研究
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练实时AI扫查引导：非专家肺超声采集与诊断支持
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：实时AI扫查引导完成非专家肺超声采集与诊断支持；论文报告：STARD 2015: an updated list of essential items for reporting diagnostic accuracy studies.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：[https://physionet.org/content/mimiciv/](https://physionet.org/content/mimiciv/)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
