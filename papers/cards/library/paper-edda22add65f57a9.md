# 超声医学 + 标准切面机器学习

## 盆底动态超声：用标准切面机器学习完成正中矢状面实时识别

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Artificial Intelligence to Determine Correct Midsagittal Plane in Dynamic Transperineal Ultrasound
- 期刊/会议：Journal of Clinical Ultrasound（2025）
- DOI：[10.1002/jcu.24050](https://doi.org/10.1002/jcu.24050)
- 正式来源：[https://doi.org/10.1002/jcu.24050](https://doi.org/10.1002/jcu.24050)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：动态超声视频、POCUS队列、EchoNet-Dynamic及多中心临床数据
- 数据集/样本：详见论文正文
- 数据规模：2024), that aims to identify organ positions on images (frames) extracted from ultrasound videos, was used to generate segmentations of the 90 new videos.
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：动态经会阴超声
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：标准切面机器学习
- 核心方法：将标准切面机器学习用于盆底动态超声，把动态经会阴超声与正中矢状面实时识别连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：动态经会阴超声
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练标准切面机器学习：正中矢状面实时识别
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：标准切面机器学习完成正中矢状面实时识别；论文报告：However, by using windows of N frames, multiple rows were generated per patient and organ, which increased the dataset's size to 1816 rows.At the end of this stage, the final dataset had been built and split into training and test datasets.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
