# 体育 × 计算机视觉

## 花样游泳腾跃高度测量验证

> 本地批次：HOLD-17；源批次：SPORTS-AI-20260831-01；网站状态：待本地确认。

### 论文来源

- 原论文：Advancing Artistic Swimming Officiating and Performance Assessment: A Computer Vision Study Using MediaPipe
- 期刊/会议：International Journal of Computer Science in Sport（2024）
- DOI：[10.2478/ijcss-2024-0010](https://doi.org/10.2478/ijcss-2024-0010)
- 正式来源：[https://doi.org/10.2478/ijcss-2024-0010](https://doi.org/10.2478/ijcss-2024-0010)

### 01 数据与问题

- 研究问题：验证MediaPipe对花样游泳腾跃高度测量的效度与可靠性，用于裁判与表现评估。
- 数据来源：花样游泳运动员腾跃动作视频与三种软件测量结果。
- 数据集/样本：artistic swimming boost-height trials
- 数据规模：20名有经验的花样游泳运动员（15±2岁），36次试验。
- 数据格式：video、pose landmarks、measurement table
- 数据类型：动作视频、姿态估计、裁判测量
- 数据状态：正式全文公开；研究测量表与统计结果在正文呈现，未提供独立数据仓库。

### 02 AI 怎么参与

- AI 技术：计算机视觉
- 核心方法：MediaPipe计算机视觉姿态估计，与Kinovea视频分析及AutoCAD基准测量比较。

### 03 论文 Pipeline

1. 采集腾跃试验
2. 运行姿态估计
3. 计算腾跃高度
4. 对照基准软件
5. 检验效度信度

### 04 指标与成果

- 重点指标：详见论文正文
- 代表结果：相关性：r=0.93：（MediaPipe与AutoCAD）
- 代表结果：信度：ICC=0.92：（95%CI 0.85–0.95）
- 代表结果：均值比较：7.80 vs 7.83：（三软件间无显著差异）
- 使用边界：计算机视觉只辅助裁判与表现测量，不构成自动评分或替代正式竞赛裁判。

### 数据与代码入口

- 数据入口：[https://doi.org/10.2478/ijcss-2024-0010](https://doi.org/10.2478/ijcss-2024-0010)
- 代码入口：论文未提供可核实的独立开源入口

### 本地验收状态

- 源卡状态：未标注
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
