# 超声医学 + 实时血管分割深度学习

## 术中超声导航：用实时血管分割深度学习完成肝血管术中识别

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Enhancing Surgical Guidance: Deep Learning-Based Liver Vessel Segmentation in Real-Time Ultrasound Video Frames
- 期刊/会议：Cancers（2024）
- DOI：[10.3390/cancers16213674](https://doi.org/10.3390/cancers16213674)
- 正式来源：[https://doi.org/10.3390/cancers16213674](https://doi.org/10.3390/cancers16213674)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：动态超声视频、POCUS队列、EchoNet-Dynamic及多中心临床数据
- 数据集/样本：详见论文正文
- 数据规模：纳入22名肝脏手术患者的22组术中超声视频；每组视频约6秒、210帧，总计约4,620帧。
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：术中超声视频帧
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：实时血管分割深度学习
- 核心方法：将实时血管分割深度学习用于术中超声导航，把术中超声视频帧与肝血管术中识别连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：术中超声视频帧
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练实时血管分割深度学习：肝血管术中识别
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：实时血管分割深度学习完成肝血管术中识别；论文报告：Several studies [13,14] have showcased the capabilities of AI-based models to recognize hepatic tumors in US images, achieving high sensitivity and specificity.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
