# 护理学 + 多中心AI风险评估

## 老年跌倒预防：用多中心AI风险评估完成护理场景跌倒风险识别

> 本地批次：LOCAL-15；源批次：NURSING-AI-20260819-01；网站状态：待本地确认。

### 论文来源

- 原论文：The Potential of AI in Nursing Care: Multicenter Evaluation in Fall Risk Assessment
- 期刊/会议：Journal of Medical Internet Research（2025）
- DOI：[10.2196/71034](https://doi.org/10.2196/71034)
- 正式来源：[https://doi.org/10.2196/71034](https://doi.org/10.2196/71034)

### 01 数据与问题

- 研究问题：护理工作流包含连续生命体征、病历文本和照护事件，人工评估难以及时整合多源信号并识别护理敏感风险。
- 数据来源：EHR护理记录、护理诊断、病区预警数据及多中心护理队列
- 数据集/样本：详见论文正文
- 数据规模：两家德国医院共944,499名参与者：大学医院931,726人（10,442人发生跌倒），老年医院12,773人（1,728人发生跌倒）。
- 数据格式：护理记录文本、护理诊断与评估表、病区时序事件、护理敏感结局
- 数据类型：多中心老年护理评估
- 数据状态：未公开

### 02 AI 怎么参与

- AI 技术：多中心AI风险评估
- 核心方法：将多中心AI风险评估用于老年跌倒预防，把多中心老年护理评估与护理场景跌倒风险识别连接为可核验的护理学AI流程。

### 03 论文 Pipeline

1. 整合护理工作流数据：多中心老年护理评估
2. 形成患者时序表征：生命体征｜护理记录｜照护事件
3. 训练多中心AI风险评估：护理场景跌倒风险识别
4. 护理结局验证：患者级测试｜临床单元｜安全与工作流边界

### 04 指标与成果

- 重点指标：论文报告外部验证
- 代表结果：多中心AI风险评估完成护理场景跌倒风险识别；论文报告：In the geriatric hospital, the AI model similarly outperformed the rule-based models, with an AUROC of 0.735 compared with 0.556 for ESFP and 0.606 for WGFP.
- 使用边界：结论仅适用于论文报告的数据、任务与实验条件。

### 数据与代码入口

- 数据入口：论文未提供可核实的独立公开入口
- 代码入口：[https://github.com/shap/shap](https://github.com/shap/shap)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
