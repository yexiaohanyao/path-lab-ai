# 机器人控制 × 分层模仿学习

## 可变形电缆穿过多个夹具的多阶段视觉闭环操作

> 本地批次：LOCAL-02；源批次：B02-ROBOTCTRL-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Multistage Cable Routing Through Hierarchical Imitation Learning
- 期刊/会议：IEEE Transactions on Robotics（2024）
- DOI：[10.1109/tro.2024.3353075](https://doi.org/10.1109/tro.2024.3353075)
- 正式来源：[https://doi.org/10.1109/tro.2024.3353075](https://doi.org/10.1109/tro.2024.3353075)

### 01 数据与问题

- 研究问题：可变形电缆穿过多个夹具的多阶段视觉闭环操作
- 数据来源：1,442条低层轨迹、11,915条高层转换、257条端到端轨迹，约27.92 GB
- 数据集/样本：详见论文正文
- 数据规模：1,442条低层穿线轨迹、11,915条高层原语选择转换以及257条端到端轨迹；数据约27.92 GB
- 数据格式：机器人视觉、动作轨迹、原语选择转换
- 数据类型：可变形物体操作、分层示范数据
- 数据状态：公开

### 02 AI 怎么参与

- AI 技术：分层模仿学习
- 核心方法：低层视觉运动原语与高层原语选择策略均从示范学习，支持重试和纠错

### 03 论文 Pipeline

1. 分层示范采集
2. 低层原语学习
3. 高层序列学习
4. 失败重试纠错
5. 变位夹具测试

### 04 指标与成果

- 重点指标：全流程成功率,失败恢复,夹具位姿泛化,阶段完成率
- 代表结果：分层策略能通过重试和纠错补偿低层原语失败，在富挑战的夹具位置变化下仍展现良好泛化。
- 使用边界：公开线缆任务上的泛化不自动迁移到不同材料、尺度和张力的工业线缆

### 数据与代码入口

- 数据入口：[https://sites.google.com/view/cablerouting](https://sites.google.com/view/cablerouting)
- 代码入口：[https://sites.google.com/view/cablerouting](https://sites.google.com/view/cablerouting)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
