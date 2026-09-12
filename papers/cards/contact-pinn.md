# 机械工程 × 物理信息神经网络

## 小变形弹性接触力学的正问题、反问题与快速代理求解

> 状态：`base_cards_complete_no_drawing` / `pending_publish_review`。本文件是可核验基础卡，不代表绘图或发布批准。

### 论文来源

- 原论文：Solving forward and inverse problems of contact mechanics using physics-informed neural networks
- 期刊/会议：Advanced Modeling and Simulation in Engineering Sciences（2024）
- 发表日期：2024-05-03
- DOI：[10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)
- 正式来源：[https://doi.org/10.1186/s40323-024-00265-3](https://doi.org/10.1186/s40323-024-00265-3)
- OpenAlex：[https://openalex.org/W4396624511](https://openalex.org/W4396624511)（仅用于发现与元数据；OA=gold）
- 一手证据：[https://elib.dlr.de/203753/1/s40323-024-00265-3.pdf](https://elib.dlr.de/203753/1/s40323-024-00265-3.pdf)
- 一手证据类别：`institutional_repository_published_manuscript`
- 本地原始证据：`E:\常用工作资料\11_论文墙文件\29专业论文检索与制卡_20260830\批次02_工程与控制\formal_content_cache\selected\fb8ee3ea85de8e56\attempt-01.pdf`
- 本地抽取正文：`E:\常用工作资料\11_论文墙文件\29专业论文检索与制卡_20260830\批次02_工程与控制\formal_content_cache\selected\fb8ee3ea85de8e56\attempt-01.txt`

### 01 数据与问题

- 数据来源：公开论文中的Hertz接触基准
- 数据集/样本：Hertzian contact benchmark
- 数据规模：Hertz接触等解析/数值基准；同时验证纯PDE求解、数据增强正问题、参数识别和代理模型
- 数据格式：边界条件、位移应力场、反演参数
- 数据类型：接触力学方程、解析/数值基准
- 数据状态：部分公开
- 给模型看什么：边界条件、位移应力场、反演参数
- 让模型判断/完成什么：小变形弹性接触力学的正问题、反问题与快速代理求解
- 事实定位：数据情况.json与可读一手证据审计

### 02 AI 怎么参与

- AI技术：物理信息神经网络
- 核心方法：混合变量PINN以输出变换硬约束边界，用Fischer–Burmeister函数将KKT接触不等式写入损失
- 实际作用：物理信息神经网络用于小变形弹性接触力学的正问题、反问题与快速代理求解
- 方法定位：institutional_repository_published_manuscript方法定位；详见evidence_used.json与E:\常用工作资料\11_论文墙文件\29专业论文检索与制卡_20260830\批次02_工程与控制\formal_content_cache\selected\fb8ee3ea85de8e56\attempt-01.txt

### 03 论文 Pipeline

1. 接触方程定义
2. 边界硬约束
3. KKT损失构建
4. 混合优化训练
5. 正反问题验证

### 04 指标与成果

- 重点指标：位移/应力误差、KKT残差、参数反演误差、训练时间
- 代表结果：PINN在Hertz接触上同时完成纯PDE求解、数据增强正问题、参数识别和快速代理；论文还确认损失权重及Adam+L-BFGS-B对精度/时间至关重要。
- 结果定位：institutional_repository_published_manuscript结果定位；详见evidence_used.json与E:\常用工作资料\11_论文墙文件\29专业论文检索与制卡_20260830\批次02_工程与控制\formal_content_cache\selected\fb8ee3ea85de8e56\attempt-01.txt
- 使用边界：基准算例上的求解能力不代表已覆盖复杂摩擦、大变形或材料非线性。

### 数据与代码入口

- 数据入口：https://amses-journal.springeropen.com/articles/10.1186/s40323-024-00265-3
- 代码入口：论文未提供可核实的独立开源入口

### 本地交付物

- 卡面 PNG：[card.png](<E:/常用工作资料/11_论文墙文件/论文卡片存放/机械工程/AI交叉/B02-MECH-20260830/paper-fb8ee3ea85de8e56/v2.0/card.png>)
- 可编辑 HTML：[card.html](<E:/常用工作资料/11_论文墙文件/论文卡片存放/机械工程/AI交叉/B02-MECH-20260830/paper-fb8ee3ea85de8e56/v2.0/card.html>)
- 卡片输入：`E:\常用工作资料\11_论文墙文件\论文卡片存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\v2.0\card-input.json`
- 证据清单：`E:\常用工作资料\11_论文墙文件\论文卡片存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\v2.0\evidence_used.json`
- 本卡正文：`E:\常用工作资料\11_论文墙文件\论文卡片存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\v2.0\论文卡片描述.md`
- 布局测量：`E:\常用工作资料\11_论文墙文件\论文卡片存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\v2.0\layout.json`
- 逐卡 QA：`E:\常用工作资料\11_论文墙文件\论文卡片存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\v2.0\qa.json`
- 数据情况：`E:\常用工作资料\11_论文墙文件\论文存放\机械工程\AI交叉\B02-MECH-20260830\paper-fb8ee3ea85de8e56\数据情况.json`

### 证据说明

- 一手证据 SHA-256：`1a32e1c50db376d93b6df68ed3884834b4cf440c9df1a1ccabea53fc1cf4e63e`
- 可读正文：2892902 bytes / 75893 chars
- OpenAlex和Crossref仅承担发现与正式身份核验，不承担方法、数据或结果事实证明。
- 卡面展示语句均为完整语义压缩，未按字符截断，未使用省略号。
