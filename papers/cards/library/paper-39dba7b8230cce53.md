# 中医学 × 多输入多输出视觉Transformer

## 手部穴位与反射区联合检测

> 本地批次：LOCAL-06；源批次：B06-TCM-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Simultaneous multimodal detection of hand acupoints and reflex zones for acupuncture robots.
- 期刊/会议：iScience（2026）
- DOI：[10.1016/j.isci.2026.114938](https://doi.org/10.1016/j.isci.2026.114938)
- 正式来源：[https://doi.org/10.1016/j.isci.2026.114938](https://doi.org/10.1016/j.isci.2026.114938)

### 01 数据与问题

- 研究问题：手部穴位与反射区多任务检测
- 数据来源：11K Hands公开手部图像与人工穴位标注
- 数据集/样本：11K Hands；1,000-image acupuncture annotation subset
- 数据规模：11K Hands含11,076张图像；精选并标注1,000张，按800/100/100划分，覆盖190名受试者
- 数据格式：手部RGB图像、分割掩膜、穴位坐标
- 数据类型：手部视觉、反射区分割、穴位定位
- 数据状态：原始11K Hands数据集公开；论文使用的穴位标注由研究团队整理。

### 02 AI 怎么参与

- AI 技术：多输入多输出视觉Transformer
- 核心方法：多输入多输出视觉Transformer联合优化反射区分割与穴位坐标回归，并加入拓扑约束。

### 03 论文 Pipeline

1. 从11K Hands筛选并标注1,000张图像
2. 按800/100/100划分并统一手部预处理
3. ViT提取手部全局与局部特征
4. 联合训练反射区分割和穴位坐标回归
5. 比较DeepLabv3和YOLOv8等基线

### 04 指标与成果

- 重点指标：mIoU、RMSE、相对提升
- 代表结果：mIoU=0.7267、定位RMSE=10.33像素；相对DeepLabv3提升14.36%，相对YOLOv8的RMSE降低32.48%。
- 使用边界：标注子集仅1,000张且为手部二维图像，不能直接替代真人取穴和临床操作。

### 数据与代码入口

- 数据入口：[https://sites.google.com/view/11khands](https://sites.google.com/view/11khands)
- 代码入口：[https://gitcode.com/qq_38063965/AcupointMMNet_Hand](https://gitcode.com/qq_38063965/AcupointMMNet_Hand)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
