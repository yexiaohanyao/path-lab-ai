# 中药学 × RF/SVM＋ResNet光谱分类

## 三七近红外多维光谱产地鉴别

> 本地批次：LOCAL-06；源批次：B06-CHMED-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：FT-NIR Spectra of Different Dimensions Combined with Machine Learning and Image Recognition for Origin Identification: An Example of Panax notoginseng .
- 期刊/会议：ACS Omega（2025）
- DOI：[10.1021/acsomega.4c10816](https://doi.org/10.1021/acsomega.4c10816)
- 正式来源：[https://doi.org/10.1021/acsomega.4c10816](https://doi.org/10.1021/acsomega.4c10816)

### 01 数据与问题

- 研究问题：中药材产地鉴别
- 数据来源：39个产地三七FT-NIR与多维相关光谱实验
- 数据集/样本：Panax notoginseng FT-NIR origin cohort
- 数据规模：378株三七，覆盖39个产地
- 数据格式：FT-NIR一维光谱、2DCOS/3DCOS图像、产地标签
- 数据类型：中药近红外光谱、地理来源
- 数据状态：正文说明数据可向作者合理申请，未提供独立公共数据集入口。

### 02 AI 怎么参与

- AI 技术：RF/SVM＋ResNet光谱分类
- 核心方法：RF与SVM处理一维光谱，ResNet处理同步二维相关光谱图，实现三七产地分类。

### 03 论文 Pipeline

1. 采集39个产地的378株三七
2. 获得FT-NIR并生成2DCOS和3DCOS
3. 以二阶导数和SPA压缩一维光谱
4. 训练RF、SVM及ResNet分类器
5. 比较不同光谱表示的产地识别

### 04 指标与成果

- 重点指标：Accuracy、训练损失、产地数
- 代表结果：二阶导数加SPA分类准确率100%；同步2DCOS的ResNet训练与测试准确率均为100%，损失0.003。
- 使用边界：满分结果需警惕产地批次和光谱划分泄漏；数据未通过独立仓库公开。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
