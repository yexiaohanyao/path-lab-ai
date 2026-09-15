# 麻醉学 × 超声卷积网络

## 全麻患者困难喉镜暴露风险预测

> 本地批次：LOCAL-03；源批次：B03-ANES-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：An ultrasound-based artificial intelligence framework for difficult airway prediction: A two-model, three-step decision framework.
- 期刊/会议：PLoS ONE（2026）
- DOI：[10.1371/journal.pone.0342339](https://doi.org/10.1371/journal.pone.0342339)
- 正式来源：[https://doi.org/10.1371/journal.pone.0342339](https://doi.org/10.1371/journal.pone.0342339)

### 01 数据与问题

- 研究问题：全麻患者困难喉镜暴露风险预测
- 数据来源：单中心四平面颈部超声队列；903例择期全麻患者，752例训练验证、151例独立内部测试
- 数据集/样本：详见论文正文
- 数据规模：903例择期全麻患者，752例训练验证、151例独立内部测试
- 数据格式：颈部超声图像、直接与视频喉镜标签、患者级划分
- 数据类型：气道超声、喉镜暴露结局
- 数据状态：公开Zenodo数据包

### 02 AI 怎么参与

- AI 技术：超声卷积网络
- 核心方法：用四个颈部超声平面训练CL-AI初筛和VIDIAC-AI二次分层，构成两模型三步框架

### 03 论文 Pipeline

1. 采集四平面超声
2. 标注两类困难暴露
3. 训练CL-AI初筛
4. 训练VIDIAC-AI分层
5. 内部独立测试

### 04 指标与成果

- 重点指标：AUC,准确率,敏感度,特异度
- 代表结果：内部测试CL-AI的AUC 0.86、准确率0.84、敏感度0.84、特异度0.84；未进行外部验证。
- 使用边界：框架明确只作气道评估辅助，尚无多中心外部验证，不能替代气道预案

### 数据与代码入口

- 数据入口：[https://doi.org/10.5281/zenodo.18140439](https://doi.org/10.5281/zenodo.18140439)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
