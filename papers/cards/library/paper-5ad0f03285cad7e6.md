# 法律 × 机器学习

## 行政法院先例相似度发现

> 本地批次：LOCAL-01；源批次：LAW-AI-20260830-02；网站状态：待本地确认。

### 论文来源

- 原论文：Textual similarity for legal precedents discovery: Assessing the performance of machine learning techniques in an administrative court
- 期刊/会议：International Journal of Information Management Data Insights（2024）
- DOI：[10.1016/j.jjimei.2024.100247](https://doi.org/10.1016/j.jjimei.2024.100247)
- 正式来源：[https://doi.org/10.1016/j.jjimei.2024.100247](https://doi.org/10.1016/j.jjimei.2024.100247)

### 01 数据与问题

- 研究问题：在行政法院裁判中，哪些文本表示与机器学习组合更适合发现可援引的相似先例。
- 数据来源：巴西SUSEP行政法院处罚案件与专家相似性标注
- 数据集/样本：SUSEP administrative court infraction cases
- 数据规模：1,109条处罚记录，可组成614,386个案件对；抽取50案形成1,225个案件对，由3名法律专家独立评分；比较106种组合
- 数据格式：法律文书、案件对、专家相似度评分
- 数据类型：法律文本、先例相似性标注
- 数据状态：原始法院数据未公开；代码公开

### 02 AI 怎么参与

- AI 技术：机器学习
- 核心方法：比较Word2Vec、TF-IDF、BERT等文本表示与多种相似度、机器学习组合，共评估106种方案。

### 03 论文 Pipeline

1. 整理处罚记录：整理1,109条行政法院处罚记录。
2. 生成案件配对：形成案件对并抽取50案的1,225个配对。
3. 标注先例相似：由3名法律专家独立给出相似度评分。
4. 构建文本表示：生成Word2Vec、TF-IDF、BERT等表示。
5. 比较检索组合：比较106种技术组合的先例发现表现。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：比较规模：106种组合：（文本表示、相似度与机器学习方案）
- 代表结果：整体最佳口径：细粒度Word2Vec/TF-IDF：（论文比较结论）
- 代表结果：BERT结论：未稳定领先：（相对传统文本表示）
- 使用边界：仅供法律研究、检索与决策辅助；须由合格法律专业人士核验，不构成法律意见或自动裁判许可。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/hugosaisse/textualSimilarityPrecedents](https://github.com/hugosaisse/textualSimilarityPrecedents)

### 本地验收状态

- 源卡状态：approved
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
