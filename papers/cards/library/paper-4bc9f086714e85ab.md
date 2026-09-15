# 化学工程 × 强化学习

## 连续搅拌罐反应器设定值跟踪与未见扰动抑制

> 本地批次：LOCAL-02；源批次：B02-CHEMENG-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Control-Informed Reinforcement Learning for Chemical Processes
- 期刊/会议：Industrial & Engineering Chemistry Research（2025）
- DOI：[10.1021/acs.iecr.4c03233](https://doi.org/10.1021/acs.iecr.4c03233)
- 正式来源：[https://doi.org/10.1021/acs.iecr.4c03233](https://doi.org/10.1021/acs.iecr.4c03233)

### 01 数据与问题

- 研究问题：连续搅拌罐反应器设定值跟踪与未见扰动抑制
- 数据来源：作者CSTR仿真与CIRL仓库；非线性CSTR仿真轨迹；含训练设定值、分布外设定值与未见扰动工况
- 数据集/样本：详见论文正文
- 数据规模：非线性CSTR仿真轨迹；含训练设定值、分布外设定值与未见扰动工况
- 数据格式：过程状态时序、控制动作、设定值与扰动轨迹
- 数据类型：化工过程仿真、闭环控制轨迹
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：强化学习
- 核心方法：将PID控制器层嵌入深度强化学习策略，用进化优化持续调节增益

### 03 论文 Pipeline

1. CSTR建模
2. 轨迹采样
3. 嵌入PID层
4. 策略优化
5. 越界扰动测试

### 04 指标与成果

- 重点指标：跟踪误差,扰动抑制,分布外泛化,样本效率
- 代表结果：论文报告CIRL在CSTR上优于纯无模型深度RL和静态PID，对训练分布外设定值的跟踪更好，且对未见扰动更稳健。
- 使用边界：仿真结果不等于工业装置已安全部署，实施前需验证稳定性和联锁约束

### 数据与代码入口

- 数据入口：[https://github.com/OptiMaL-PSE-Lab/CIRL](https://github.com/OptiMaL-PSE-Lab/CIRL)
- 代码入口：[https://github.com/OptiMaL-PSE-Lab/CIRL](https://github.com/OptiMaL-PSE-Lab/CIRL)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
