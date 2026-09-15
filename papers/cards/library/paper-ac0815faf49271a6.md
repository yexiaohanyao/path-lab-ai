# 代谢组学 × OPLS-DA＋六类机器学习＋SHAP

## 脂肪肝血清代谢标志物筛选

> 本地批次：LOCAL-06；源批次：B06-METAB-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Serum biomarker screening and metabolic profiling analysis of nonalcoholic fatty liver disease patients using untargeted metabolomics and machine learning techniques.
- 期刊/会议：Frontiers in Molecular Biosciences（2026）
- DOI：[10.3389/fmolb.2026.1730023](https://doi.org/10.3389/fmolb.2026.1730023)
- 正式来源：[https://doi.org/10.3389/fmolb.2026.1730023](https://doi.org/10.3389/fmolb.2026.1730023)

### 01 数据与问题

- 研究问题：脂肪肝血清代谢标志物筛选
- 数据来源：成都郫都区中医医院前瞻性血清队列
- 数据集/样本：NAFLD血清非靶向代谢组队列
- 数据规模：191人：165例NAFLD、26名健康对照；共筛得942个差异代谢物
- 数据格式：LC-MS峰表、临床分组表
- 数据类型：血清代谢组、临床标签
- 数据状态：正文未发现公开入口。数据与代码均未给出可独立访问的公共地址。

### 02 AI 怎么参与

- AI 技术：OPLS-DA＋六类机器学习＋SHAP
- 核心方法：先用OPLS-DA压缩差异代谢物，再比较KNN、RF、SVM、GNB、LR和DT，并以SHAP解释四个核心代谢物。

### 03 论文 Pipeline

1. 采集191份空腹血清并完成LC-MS检测
2. 由OPLS-DA筛出差异代谢物并做通路分析
3. 按8:2划分训练集与独立测试集
4. 训练六类分类器并进行多策略交叉验证
5. 用SHAP锁定四个诊断代谢物并解释方向

### 04 指标与成果

- 重点指标：R²Y、Q²、AUC、五折交叉验证
- 代表结果：阳离子模式R²Y=0.952、Q²=0.863，阴离子模式R²Y=0.979、Q²=0.827；确定maresin 1、canavaninosuccinate、paraxanthine和1-methyluric acid四个标志物。
- 使用边界：单中心、小样本且组间性别和转氨酶存在差异；未报告外部队列验证。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
