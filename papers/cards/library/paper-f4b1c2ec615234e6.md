# 超声医学 + 实时动态AI诊断系统

## 乳腺动态超声：用实时动态AI诊断系统完成微小乳腺病灶诊断

> 本地批次：LOCAL-15；源批次：ULTRASOUND-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：Diagnostic Value of Artificial Intelligence in Minimal Breast Lesions Based on Real-Time Dynamic Ultrasound Imaging
- 期刊/会议：International Journal of General Medicine（2024）
- DOI：[10.2147/ijgm.s479969](https://doi.org/10.2147/ijgm.s479969)
- 正式来源：[https://doi.org/10.2147/ijgm.s479969](https://doi.org/10.2147/ijgm.s479969)

### 01 数据与问题

- 研究问题：动态超声依赖操作者经验且图像噪声高、视角变化大，传统流程难以实现稳定的实时识别、分割与定量测量。
- 数据来源：动态超声视频、POCUS队列、EchoNet-Dynamic及多中心临床数据
- 数据集/样本：详见论文正文
- 数据规模：前瞻性研究纳入291个最大径不超过10毫米的乳腺微小病灶，以手术病理作为金标准。
- 数据格式：超声视频与关键帧、DICOM/二维图像、多普勒时序、测量与病理标签
- 数据类型：前瞻性动态超声
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：实时动态AI诊断系统
- 核心方法：将实时动态AI诊断系统用于乳腺动态超声，把前瞻性动态超声与微小乳腺病灶诊断连接为可核验的超声医学AI流程。

### 03 论文 Pipeline

1. 采集动态超声：前瞻性动态超声
2. 定位解剖与时序信息：帧序列｜扫查视角｜测量标注
3. 训练实时动态AI诊断系统：微小乳腺病灶诊断
4. 实时与外部验证：多设备/多中心｜测量误差｜临床工作流

### 04 指标与成果

- 重点指标：论文报告亚组验证
- 代表结果：实时动态AI诊断系统完成微小乳腺病灶诊断；论文报告：The BI-RADS classification system showed low diagnostic efficiency for minimal breast cancers with an AUC of 0.833, and when the Youden index was at its maximum, the optimal threshold value was >BI-RADS 4A, with sensitivity, specificity, PPV, NPV, and overall accuracy respectively at 65.08%, 85.96%, 56.16%, 89.91%, and 81.44%.Our analysis of the pathological results of the 291 minimal breast lesions showed that the malignancy rates for BI-RADS 4A, 4B, and 4C nodules were 18.03%, 53.62%, and 100%, respectively, all…
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
