# 非遗设计 + RLHF

## 结合专家反馈生成非遗刺绣纹样

### 论文来源

- 原论文：Human–machine collaborative model for dynamic translation of intangible cultural heritage patterns based on generative adversarial network and reinforcement learning from human feedback
- 期刊/会议：Discover Artificial Intelligence（2026）
- DOI：[10.1007/s44163-026-01365-2](https://doi.org/10.1007/s44163-026-01365-2)
- 源批次：ICH-AI-20260923-01

### 01 数据与问题

- 研究问题：根据刺绣内容图、流派风格、文化元数据和专家偏好生成兼顾内容、风格与文化契合度的纹样。
- 数据来源：刺绣内容图、流派风格、文化元数据与专家偏好
- 数据规模：超过30000张刺绣图与内容图；12名设计师交叉实验
- 数据类型：刺绣图像、文化元数据、专家偏好反馈
- 数据状态：数据使用受文化敏感与非商业限制

### 02 AI 怎么参与

- 核心方法：cGAN条件生成，结合多尺度奖励模型与PPO约束优化专家偏好。

### 03 论文 Pipeline

1. 清洗刺绣数据
2. 解耦内容与风格
3. 采集专家偏好
4. 训练奖励模型
5. PPO优化与验证

### 04 指标与成果

- FID＝28.5，LPIPS＝0.162
- LAB相关＝0.857；流派分类准确率89.3%
- 设计时间185→79分钟，迭代9.5→3.0
- 使用边界：不得用于商业开发或分发；须尊重社区权益与意义完整性。

### 数据与代码入口

- 数据入口：数据使用受文化敏感与非商业限制
- 代码入口：成品卡未列出独立代码入口

### 来源说明

本页依据用户提供的 GPT 终稿图片及同批次卡片清单整理；图片未提供的细节不补造。
