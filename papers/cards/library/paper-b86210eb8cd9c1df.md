# 超声医学 + 全病灶视频网络

## 乳腺动态超声：用全病灶视频网络完成乳腺癌风险评估

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Whole-lesion-aware network based on freehand ultrasound video for breast cancer assessment: a prospective multicenter study
- 期刊/会议：Cancer Imaging（2025）
- DOI：[10.1186/s40644-025-00892-y](https://doi.org/10.1186/s40644-025-00892-y)
- 正式来源：[https://doi.org/10.1186/s40644-025-00892-y](https://doi.org/10.1186/s40644-025-00892-y)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：动态超声视频、POCUS队列、EchoNet-Dynamic及多中心临床数据
- 数据集/样本：详见论文正文
- 数据规模：MethodsThe WAUVE was developed using 2912 videos (2912 lesions) of 2771 patients retrospectively collected from May 2020 to August 2022 in two hospitals.
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：多中心自由扫查超声视频
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：全病灶视频网络
- 核心方法：将全病灶视频网络用于乳腺动态超声，把多中心自由扫查超声视频与乳腺癌风险评估连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：多中心自由扫查超声视频
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练全病灶视频网络：乳腺癌风险评估
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：全病灶视频网络完成乳腺癌风险评估；论文报告：The area under the receiver operating characteristic curve (AUC), sensitivity, specificity, positive predictive value (PPV), and negative predictive value (NPV), accuracy, and F1 score of WAUVE, 2D-ResNet50, and TimeSformer models were calculated in the internal validation set.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
