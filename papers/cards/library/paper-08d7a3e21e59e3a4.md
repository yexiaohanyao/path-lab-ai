# 系统生物学 × 图神经网络

## 分子结构到嗅觉感知预测

> 本地批次：LOCAL-06；源批次：B05-SYSBIO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：A deep position-encoding model for predicting olfactory perception from molecular structures and electrostatics
- 期刊/会议：npj Systems Biology and Applications（2024）
- DOI：[10.1038/s41540-024-00401-0](https://doi.org/10.1038/s41540-024-00401-0)
- 正式来源：[https://doi.org/10.1038/s41540-024-00401-0](https://doi.org/10.1038/s41540-024-00401-0)

### 01 数据与问题

- 研究问题：分子结构到嗅觉感知预测
- 数据来源：Pyrfume等来源的气味分子、118个气味描述符及DREAM外部测试集
- 数据集/样本：Mol-PECO odor dataset；DREAM olfaction dataset
- 数据规模：8,503个分子、118个描述符；训练/验证/测试为6,802/864/837
- 数据格式：库仑矩阵、原子坐标与电荷、多标签气味描述
- 数据类型：分子结构、嗅觉感知标签
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：图神经网络
- 核心方法：库仑矩阵位置编码图神经网络

### 03 论文 Pipeline

1. 整理气味分子
2. 构建库仑矩阵
3. 编码原子位置
4. 训练图神经网络
5. DREAM外部测试

### 04 指标与成果

- 重点指标：AUROC、AUPRC、外部测试、描述符检索
- 代表结果：论文报告：Mol-PECO总体AUROC 0.813、AUPRC 0.181，高于最佳基线的0.761和0.144，并在DREAM数据上外部测试。
- 使用边界：嗅觉感知受浓度、个体与语境影响，结构预测不能替代感官实验。

### 数据与代码入口

- 数据入口：[https://github.com/pyrfume/pyrfume-data](https://github.com/pyrfume/pyrfume-data)
- 代码入口：[https://github.com/Q-bio-at-IIS/Mol-PECO](https://github.com/Q-bio-at-IIS/Mol-PECO)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
