# 机械工程 × 物理信息神经网络

## 小变形弹性接触力学的正问题、反问题与快速代理求解

> 本地批次：LOCAL-02；源批次：B02-MECH-20260830；网站状态：待本地确认。

### 论文来源

- 原论文：Solving forward and inverse problems of contact mechanics using physics-informed neural networks
- 期刊/会议：Advanced Modeling and Simulation in Engineering Sciences（2024）
- DOI：[10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)
- 正式来源：[https://doi.org/10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)

### 01 数据与问题

- 研究问题：小变形弹性接触力学的正问题、反问题与快速代理求解
- 数据来源：公开论文中的Hertz接触基准；Hertz接触等解析/数值基准；同时验证纯PDE求解、数据增强正问题、参数识别和代理模型
- 数据集/样本：详见论文正文
- 数据规模：Hertz接触等解析/数值基准；同时验证纯PDE求解、数据增强正问题、参数识别和代理模型
- 数据格式：边界条件、位移应力场、反演参数
- 数据类型：接触力学方程、解析/数值基准
- 数据状态：作者在期刊可用性声明中公开数据与源代码。

### 02 AI 怎么参与

- AI 技术：物理信息神经网络
- 核心方法：混合变量PINN以输出变换硬约束边界，用Fischer–Burmeister函数将KKT接触不等式写入损失

### 03 论文 Pipeline

1. 接触方程定义
2. 边界硬约束
3. KKT损失构建
4. 混合优化训练
5. 正反问题验证

### 04 指标与成果

- 重点指标：位移/应力误差,KKT残差,参数反演误差,训练时间
- 代表结果：PINN在Hertz接触上同时完成纯PDE求解、数据增强正问题、参数识别和快速代理；论文还确认损失权重及Adam+L-BFGS-B对精度/时间至关重要。
- 使用边界：基准算例上的求解能力不代表已覆盖复杂摩擦、大变形或材料非线性

### 数据与代码入口

- 数据入口：[https://github.com/imcs-compsim/pinns_for_comp_mech](https://github.com/imcs-compsim/pinns_for_comp_mech)
- 代码入口：[https://github.com/imcs-compsim/pinns_for_comp_mech](https://github.com/imcs-compsim/pinns_for_comp_mech)

### 本地验收状态

- 源卡状态：pending_publish_review
- 网站状态：待本地逐卡确认；当前未进入公开发布包。
