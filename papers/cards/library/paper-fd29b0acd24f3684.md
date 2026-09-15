# 药剂学 × 深度学习

## 粉末床烧结可打印性预测

> 本地批次：LOCAL-08；源批次：PHARMACEUTICS-AI-20260909-01；网站状态：待本地确认。

### 论文来源

- 原论文：Smart laser Sintering: Deep Learning-Powered powder bed fusion 3D printing in precision medicine
- 期刊/会议：International Journal of Pharmaceutics（2024）
- DOI：[10.1016/j.ijpharm.2024.124440](https://doi.org/10.1016/j.ijpharm.2024.124440)
- 正式来源：[https://doi.org/10.1016/j.ijpharm.2024.124440](https://doi.org/10.1016/j.ijpharm.2024.124440)

### 01 数据与问题

- 研究问题：能否在粉末床融合3D打印前，用材料与处方特征预测可打印性，并量化预测不确定性。
- 数据来源：文献挖掘与实验汇总的SLS pharma-ink处方集
- 数据集/样本：SLS pharma-ink printability dataset
- 数据规模：278个处方、115种材料；53.8%的处方成功打印。
- 数据格式：formulation table、molecular fingerprints、particle-size features、binary printability labels
- 数据类型：药物/聚合物组成、Morgan指纹、粒径与粒径分布、可打印性
- 数据状态：论文明确因知识产权限制，具体数据集和代码不公开；可联系作者讨论合作。

### 02 AI 怎么参与

- AI 技术：深度学习
- 核心方法：不确定性校准Deep Ensemble，结合Morgan指纹、粒径/粒径分布和可解释性分析。

### 03 论文 Pipeline

1. 汇总SLS处方：汇集粉末床烧结处方与打印成功记录。
2. 编码材料特征：编码Morgan指纹、粒径和粒径分布等特征。
3. 训练深度集成：训练Deep Ensemble预测可打印性。
4. 校准预测置信：校准不确定性并识别需谨慎解释的预测。
5. 验证可打印性：以论文报告的处方数据评估可打印性预测。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：处方/材料：278个 / 115种：（论文数据集）
- 代表结果：成功打印：53.8%：（数据集内处方）
- 代表结果：准确率：0.9294：（论文报告）
- 代表结果：Brier / AUROC：0.0612 / 0.946：（论文报告）
- 使用边界：仅用于3D打印制剂研发与可打印性研究，不替代个体化处方、生产放行、工艺验证或监管批准。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
