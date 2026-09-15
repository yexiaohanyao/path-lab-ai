# 社会学 × 机器学习

## 人机反馈回路放大社会判断

> 本地批次：LOCAL-08；源批次：SOCIOLOGY-AI-20260830-01；网站状态：待本地确认。

### 论文来源

- 原论文：How human–AI feedback loops alter human perceptual, emotional and social judgements
- 期刊/会议：Nature Human Behaviour（2024）
- DOI：[10.1038/s41562-024-02077-2](https://doi.org/10.1038/s41562-024-02077-2)
- 正式来源：[https://doi.org/10.1038/s41562-024-02077-2](https://doi.org/10.1038/s41562-024-02077-2)

### 01 数据与问题

- 研究问题：人与有偏或准确的AI反复互动时，人的知觉、情绪与社会判断偏差会如何累积和放大。
- 数据来源：1,401名参与者的知觉、情绪与社会判断实验记录，以及人脸阵列、社会判断刺激和AI输出
- 数据集/样本：BiasedHumanAI experimental data
- 数据规模：系列实验共1,401名参与者；核心情绪任务以5,000个人类标注阵列训练CNN，并以300个阵列作样本外测试
- 数据格式：受试者试次记录、图像刺激、AI预测、判断标签
- 数据类型：行为实验数据、图像、模型输出
- 数据状态：公开；研究数据和代码在作者GitHub仓库提供

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：训练CNN并使用Transformer、Stable Diffusion等系统，让新受试者与有偏或准确的AI反复互动，并与人人反馈条件对照。

### 03 论文 Pipeline

1. 收集人类判断：记录知觉、情绪与社会判断基线。
2. 训练偏置模型：用人类标注训练CNN等AI系统。
3. 开展人机互动：让新受试者反复接收AI反馈。
4. 追踪判断累积：比较首区块到末区块的变化。
5. 对照人人反馈：区分AI与人类反馈的放大效应。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：人类初始判断：53.08%：（阵列被判断为更悲伤）
- 代表结果：CNN学习后：65.33%：（放大初始偏差）
- 代表结果：人机互动变化：49.9% → 56.3%：（相对基线）
- 代表结果：区块累积：50.72% → 61.44%：（首区块至末区块）
- 使用边界：实验揭示特定任务中的反馈风险，不代表所有AI或用户都会同幅度变化；部署时应监测反馈回路与群体偏差。

### 数据与代码入口

- 数据入口：[https://github.com/affective-brain-lab/BiasedHumanAI](https://github.com/affective-brain-lab/BiasedHumanAI)
- 代码入口：[https://github.com/affective-brain-lab/BiasedHumanAI](https://github.com/affective-brain-lab/BiasedHumanAI)

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
