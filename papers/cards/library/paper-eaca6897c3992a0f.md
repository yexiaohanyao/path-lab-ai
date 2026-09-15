# 临床医学 × 自然语言处理

## 精神科急诊临床记录的焦虑与适应障碍分类

> 本地批次：LOCAL-03；源批次：B03-CLIN-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Classification of psychiatry clinical notes by diagnosis: a deep learning and machine learning approach.
- 期刊/会议：PeerJ Computer Science（2025）
- DOI：[10.7717/peerj-cs.3045](https://doi.org/10.7717/peerj-cs.3045)
- 正式来源：[https://doi.org/10.7717/peerj-cs.3045](https://doi.org/10.7717/peerj-cs.3045)

### 01 数据与问题

- 研究问题：精神科急诊临床记录的焦虑与适应障碍分类
- 数据来源：西班牙语精神科急诊记录与Zenodo数据集；2017至2022年西班牙语精神科急诊12921份临床记录
- 数据集/样本：详见论文正文
- 数据规模：2017至2022年西班牙语精神科急诊12921份临床记录
- 数据格式：匿名临床文本、诊断类别、训练测试划分
- 数据类型：电子病历文本、精神科诊断标签
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：自然语言处理
- 核心方法：比较传统分类器与DistilBERT、SciBERT，并评估无过采样、随机过采样和SMOTE及调参

### 03 论文 Pipeline

1. 匿名整理病历
2. 清洗西班牙文本
3. 划分并平衡样本
4. 训练传统与Transformer
5. 调参后统一评测

### 04 指标与成果

- 重点指标：准确率,F1,过采样影响,调参收益
- 代表结果：调参后的决策树、XGBoost、DistilBERT和SciBERT均达到96%准确率，最佳模型F1约0.97。
- 使用边界：二分类模型不覆盖其他精神障碍，不能替代精神科医生的完整诊断

### 数据与代码入口

- 数据入口：[https://doi.org/10.5281/zenodo.14872650](https://doi.org/10.5281/zenodo.14872650)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
