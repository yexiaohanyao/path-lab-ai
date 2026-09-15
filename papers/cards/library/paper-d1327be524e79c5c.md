# 法律 × 生成式AI

## 法律检索工具的幻觉与可靠性

> 本地批次：LOCAL-01；源批次：LAW-AI-20260830-02；网站状态：待本地确认。

### 论文来源

- 原论文：Hallucination‐Free? Assessing the Reliability of Leading AI Legal Research Tools
- 期刊/会议：Journal of Empirical Legal Studies（2025）
- DOI：[10.1111/jels.12413](https://doi.org/10.1111/jels.12413)
- 正式来源：[https://doi.org/10.1111/jels.12413](https://doi.org/10.1111/jels.12413)

### 01 数据与问题

- 研究问题：主流生成式AI法律研究工具回答法律问题时，仍会以多大比例产生幻觉、不准确或不完整回答。
- 数据来源：面向四种法律研究AI系统的分层法律问题基准与逐项引证核查
- 数据集/样本：Legal research AI hallucination benchmark
- 数据规模：超过200个法律查询；比较Lexis+ AI、Westlaw AI-Assisted Research、Ask Practical Law AI和GPT-4四套系统
- 数据格式：法律查询、系统回答、引证核查、错误类型标注
- 数据类型：法律问题、生成文本、事实/引证核验
- 数据状态：公开；预注册数据与材料有OSF入口

### 02 AI 怎么参与

- AI 技术：生成式AI
- 核心方法：对四套系统进行分层问题测试，逐项核查法律引证和可验证来源，并统计错误与不完整回答。

### 03 论文 Pipeline

1. 设计法律问题：构建超过200个分层法律查询。
2. 调用四类系统：向三套专业工具和GPT-4提交问题。
3. 核验引证来源：逐项检查回答中的法律引证与事实。
4. 标注幻觉类型：区分错误、不支持与不完整回答。
5. 比较工具表现：统计各工具的准确性和幻觉率。

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：专业法律AI幻觉率：17%—33%：（论文报告范围）
- 代表结果：Lexis+ AI准确率：约65%：（论文比较结果）
- 代表结果：Westlaw准确率：约42%：（Ask Practical Law AI超过60%回答不完整）
- 使用边界：仅供法律研究、检索与决策辅助；须由合格法律专业人士核验，不构成法律意见或自动裁判许可。

### 数据与代码入口

- 数据入口：[https://osf.io/etzp2](https://osf.io/etzp2)
- 代码入口：[https://osf.io/etzp2](https://osf.io/etzp2)

### 本地验收状态

- 源卡状态：approved
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
