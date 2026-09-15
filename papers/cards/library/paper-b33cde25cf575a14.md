# 临床医学 × 目标检测

## 抗酸染色涂片结核分枝杆菌自动检测

> 本地批次：LOCAL-03；源批次：B03-CLIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Automated detection of mycobacterium tuberculosis based on cloud computing.
- 期刊/会议：BMC Infectious Diseases（2025）
- DOI：[10.1186/s12879-025-11899-y](https://doi.org/10.1186/s12879-025-11899-y)
- 正式来源：[https://doi.org/10.1186/s12879-025-11899-y](https://doi.org/10.1186/s12879-025-11899-y)

### 01 数据与问题

- 研究问题：抗酸染色涂片结核分枝杆菌自动检测
- 数据来源：Kaggle Tuberculosis Image Datasets；Kaggle共1265张涂片图像、9963个标注菌体框，按7比3训练验证并比较训练轮次
- 数据集/样本：详见论文正文
- 数据规模：Kaggle共1265张涂片图像、9963个标注菌体框，按7比3训练验证并比较训练轮次
- 数据格式：显微图像、目标框标注、检测预测
- 数据类型：抗酸染色涂片、病原体目标
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：目标检测
- 核心方法：在云平台训练YOLOv5系列模型，定位抗酸染色痰涂片中的结核分枝杆菌

### 03 论文 Pipeline

1. 下载染色涂片
2. 标注菌体目标框
3. 划分训练验证集
4. 云端训练YOLOv5
5. 比较检测指标

### 04 指标与成果

- 重点指标：mAP50,准确率,召回率
- 代表结果：最佳模型mAP50为94.80%、准确率93.72%、召回率91.24%。
- 使用边界：公开图像上的检测只作显微镜辅助，阳性判断仍需实验室规范和人工复核

### 数据与代码入口

- 数据入口：[https://www.kaggle.com/datasets/saife245/tuberculosis-image-datasets](https://www.kaggle.com/datasets/saife245/tuberculosis-image-datasets)
- 代码入口：[https://github.com/Sharpiless/Yolov5-Flask-VUE](https://github.com/Sharpiless/Yolov5-Flask-VUE)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
