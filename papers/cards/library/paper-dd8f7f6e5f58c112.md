# 超声医学 + 实时分割与测量网络

## 介入超声测量：用实时分割与测量网络完成消融区自动测量

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Application of Deep Learning for Real-Time Ablation Zone Measurement in Ultrasound Imaging
- 期刊/会议：Cancers（2024）
- DOI：[10.3390/cancers16091700](https://doi.org/10.3390/cancers16091700)
- 正式来源：[https://doi.org/10.3390/cancers16091700](https://doi.org/10.3390/cancers16091700)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：动态超声视频、POCUS队列、EchoNet-Dynamic及多中心临床数据
- 数据集/样本：详见论文正文
- 数据规模：完成308次射频消融实验，获得7,275幅超声图像；按8:1:1划分训练、验证和测试集。
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：消融超声图像
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：实时分割与测量网络
- 核心方法：将实时分割与测量网络用于介入超声测量，把消融超声图像与消融区自动测量连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：消融超声图像
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练实时分割与测量网络：消融区自动测量
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告患者级验证
- 代表结果：实时分割与测量网络完成消融区自动测量；论文报告：The amount of test images used for each tissue type is given by n.Tissue Type n Accuracy [%]Sensitivity [%]Specificity [%]F1-Score [%]Liver39898.588.899.389.7Chicken breast29999.491.999.792.6Notably, the AZ in chicken breast tissue appeared less hyperechoic in US images compared to liver tissue, as depicted in Figure 2.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
