# 计算机科学 × 大语言模型

## 硬件RTL代码生成评测

> 本地批次：LOCAL-02；源批次：B01-CS-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Revisiting VerilogEval: A Year of Improvements in Large-Language Models for Hardware Code Generation
- 期刊/会议：ACM Transactions on Design Automation of Electronic Systems（2025）
- DOI：[10.1145/3718088](https://doi.org/10.1145/3718088)
- 正式来源：[https://doi.org/10.1145/3718088](https://doi.org/10.1145/3718088)

### 01 数据与问题

- 研究问题：评测从硬件规格到Verilog RTL的生成能力
- 数据来源：公开VerilogEval代码补全与规格到RTL基准
- 数据集/样本：VerilogEval v2
- 数据规模：比较GPT-4o、Llama3.1、DeepSeek Coder、RTL-Coder等多种模型
- 数据格式：硬件规格、Verilog代码、仿真测试、失败类别
- 数据类型：硬件代码生成基准
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：大语言模型
- 核心方法：改进版VerilogEval、多模型对比与自动失败分类

### 03 论文 Pipeline

1. 扩展硬件基准
2. 配置模型提示
3. 生成Verilog代码
4. 自动仿真测试
5. 归类失败模式

### 04 指标与成果

- 重点指标：规格到RTL通过率、代码补全通过率、失败类别、提示敏感性
- 代表结果：论文报告：规格到RTL任务中GPT-4o通过率63%，Llama3.1 405B为58%，RTL-Coder 6.7B为34%；提示工程仍显著影响结果。
- 使用边界：生成代码与工程判断须经测试、安全审查和人工复核。

### 数据与代码入口

- 数据入口：[https://github.com/NVlabs/verilog-eval](https://github.com/NVlabs/verilog-eval)
- 代码入口：[https://github.com/NVlabs/verilog-eval](https://github.com/NVlabs/verilog-eval)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
