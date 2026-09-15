# 免疫学 × TreeFARMS可解释规则集

## 小样本疫苗多组学应答预测

> 本地批次：LOCAL-06；源批次：B06-IMMUNO-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Interpretable machine learning for low-sample multi-omics: a case study of ferret vaccine response.
- 期刊/会议：Bioinformatics Advances（2026）
- DOI：[10.1093/bioadv/vbag167](https://doi.org/10.1093/bioadv/vbag167)
- 正式来源：[https://doi.org/10.1093/bioadv/vbag167](https://doi.org/10.1093/bioadv/vbag167)

### 01 数据与问题

- 研究问题：疫苗多组学应答预测
- 数据来源：受控雪貂疫苗重复采样多组学实验
- 数据集/样本：ferret vaccine multi-omics study
- 数据规模：16只成年雄性雪貂，多时间点重复采样；原始模型特征1,338项
- 数据格式：多组学特征矩阵、疫苗应答标签
- 数据类型：免疫多组学、纵向疫苗表型
- 数据状态：正文未发现公开入口。未给出可独立访问的数据或代码地址。

### 02 AI 怎么参与

- AI 技术：TreeFARMS可解释规则集
- 核心方法：TreeFARMS枚举近最优可解释规则集，并与随机森林、LASSO等基线比较。

### 03 论文 Pipeline

1. 对16只雪貂进行疫苗接种与纵向采样
2. 整合多时间点免疫多组学特征
3. 生成候选阈值规则和Rashomon集合
4. 与随机森林、LASSO等模型交叉验证
5. 比较准确率、特征数量与规则稳定性

### 04 指标与成果

- 重点指标：Accuracy、特征数、交叉验证波动
- 代表结果：TreeFARMS平均使用5个特征，准确率86.3±8.4%；随机森林使用1,338个特征，准确率75.3±16.1%。
- 使用边界：仅16只雄性雪貂，结果属于受控动物实验方法验证，不能直接外推至人群。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
