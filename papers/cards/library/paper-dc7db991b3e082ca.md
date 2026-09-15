# 化学工程 × 离线强化学习

## 工业园区污水处理的达标排放与能耗联合优化

> 本地批次：LOCAL-02；源批次：B02-CHEMENG-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：The practice of reinforcement learning algorithm in dynamic regulation and energy efficiency Optimization of wastewater treatment system in industrial parks
- 期刊/会议：Australian Journal of Electrical & Electronics Engineering（2025）
- DOI：[10.1080/1448837x.2025.2553950](https://doi.org/10.1080/1448837x.2025.2553950)
- 正式来源：[https://doi.org/10.1080/1448837x.2025.2553950](https://doi.org/10.1080/1448837x.2025.2553950)

### 01 数据与问题

- 研究问题：工业园区污水处理的达标排放与能耗联合优化
- 数据来源：Kaggle全规模污水厂数据；含pH、COD、BOD与能耗传感器时序
- 数据集/样本：详见论文正文
- 数据规模：Kaggle Full Scale Waste Water Treatment Plant Data；状态含pH、COD、BOD和能耗等传感器时序
- 数据格式：传感器时序、运行表格、状态-动作轨迹
- 数据类型：污水水质、能耗与控制操作
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：离线强化学习
- 核心方法：将深度Q网络与批量约束Q学习组合，在历史传感器数据上学习加药与曝气策略

### 03 论文 Pipeline

1. 时序清洗
2. 状态特征扩展
3. 构建MDP
4. 离线策略学习
5. 达标能耗对比

### 04 指标与成果

- 重点指标：达标率,能耗,累积奖励,收敛速度
- 代表结果：混合离线RL在10个episode内稳定收敛，奖励641.2，达标率94.3%，能耗下降25.6%并降至128.6 kWh。
- 使用边界：实厂上线前须校核排放法规、安全联锁和不同厂站的分布偏移

### 数据与代码入口

- 数据入口：[https://www.kaggle.com/datasets/d4rklucif3r/full-scale-waste-water-treatment-plant-data](https://www.kaggle.com/datasets/d4rklucif3r/full-scale-waste-water-treatment-plant-data)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
