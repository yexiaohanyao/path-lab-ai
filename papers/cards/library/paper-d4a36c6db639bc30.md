# 舞蹈 × 多模态学习

## 舞动治疗中的表情姿态情绪识别

> 本地批次：HOLD-17；源批次：DANCE-AI-20260831-01；网站状态：待本地确认。

### 论文来源

- 原论文：Emotion recognition in dance therapy driven by DanceEmoNet: a deep learning model based on facial expression and pose estimation
- 期刊/会议：Frontiers in Psychology（2026）
- DOI：[10.3389/fpsyg.2026.1707417](https://doi.org/10.3389/fpsyg.2026.1707417)
- 正式来源：[https://doi.org/10.3389/fpsyg.2026.1707417](https://doi.org/10.3389/fpsyg.2026.1707417)

### 01 数据与问题

- 研究问题：融合舞者面部表情与身体姿态识别舞动治疗中的情绪状态。
- 数据来源：FER-2013面部表情与Human3.6M人体姿态数据。
- 数据集/样本：FER-2013；Human3.6M
- 数据规模：按FER-2013与Human3.6M正式规模使用。
- 数据格式：face images、pose sequences、emotion labels
- 数据类型：面部表情、人体姿态、情绪
- 数据状态：使用公开FER-2013与Human3.6M；论文称数据在正文/补充材料中，进一步材料可联系作者。

### 02 AI 怎么参与

- AI 技术：多模态学习
- 核心方法：YOLOv11面部/姿态检测、TriBAN、CNN-LSTM与GCNC多模态融合。

### 03 论文 Pipeline

1. 读取表情姿态
2. 检测人脸骨架
3. 编码时空特征
4. 融合多模态信息
5. 识别情绪状态

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：准确率：80.3% / 83.9%：（两数据集）
- 代表结果：F1：74.8% / 79.4%：（两数据集）
- 代表结果：AUC：0.91 / 0.94：（两数据集）
- 使用边界：情绪识别仅辅助舞动治疗研究，不构成心理诊断、治疗效果判断或临床决策。

### 数据与代码入口

- 数据入口：[https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1707417/full](https://www.frontiersin.org/journals/psychology/articles/10.3389/fpsyg.2026.1707417/full)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
