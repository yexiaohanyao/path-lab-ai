(function () {
  var ACCESS = {
    public: "公开可看",
    request: "申请查看",
    team: "让团队知道",
    internal: "仅内部",
    beta: "内测",
    site: "当前站点",
  };

  var portals = [
    {
      id: "ops",
      index: "01",
      title: "流量运营知识库",
      short: "流量运营",
      blurb: "运营资料、两套 SOP、复盘、素材，以及两套引流入门包。",
    },
    {
      id: "product",
      index: "02",
      title: "产品 | 可视化库",
      short: "产品可视化",
      blurb: "系统班、就业班，和单独的转化产品介绍。",
    },
    {
      id: "vibe",
      index: "03",
      title: "vibecoding工具与站点",
      short: "工具站点",
      blurb: "实验室本站、论文交互馆、AI 论文包，以及工作台和素材工具。",
    },
    {
      id: "beta",
      index: "04",
      title: "测试中功能",
      short: "测试中",
      blurb: "两则公开演示。jev 中断，内测保留。",
    },
    {
      id: "fengxu",
      index: "05",
      title: "风絮资源",
      short: "风絮",
      blurb: "外部学习资源。入口由风絮提供，这里不做成可点链接。",
    },
  ];

  var items = [
    {
      id: "ops-materials",
      portal: "ops",
      title: "运营使用的资料",
      short: "运营资料",
      summary: "可作为引流内容，也可作为引流后置交付。",
      detail: "可作为引流内容，也可作为引流后置交付。具体内容在 CRM 资料里。小红书运营工作全景图收在详情里，从内容生产看到账号运营。申请后查看。",
      access: "request",
      cover: "cover-ops-materials.png",
      alt: "运营资料：小红书运营资料库和工作全景",
      gallery: [
        { src: "gallery/ops-panorama.png", alt: "小红书运营工作全景图：从账号搭建到聚流" },
        { src: "gallery/ops-library-map.png", alt: "小红书运营资料库 2.0：流程和数据库模块" },
      ],
    },
    {
      id: "prompt-skill",
      portal: "ops",
      title: "提示词 vs 上下文 vs Skill",
      short: "提示词",
      summary: "对照说明提示词、上下文与 Skill 三者差异与用法边界。",
      detail: "写给写提示词、搭 Agent 或 Skill 的运营与创作者。对照三者的差异和用法边界。申请后查看。",
      access: "request",
      cover: "prompt-context-skill.png",
      alt: "提示词、上下文与 Skill 的对照",
      gallery: [
        { src: "gallery/prompt-skill.png", alt: "提示词、上下文与 Skill 信息图" },
      ],
    },
    {
      id: "juguang-risk",
      portal: "ops",
      title: "聚光风险表达",
      short: "聚光风险",
      summary: "投放表达按类型、等级和规避词整理。",
      detail: "写稿时用来避开高风险说法。出处不放在这页。",
      access: "request",
      cover: "juguang-risk.jpg",
      alt: "聚光风险表达表：类型、风险等级和规避词",
    },
    {
      id: "data-review",
      portal: "ops",
      title: "数据复盘表格",
      short: "数据复盘",
      summary: "帖子制作、模板、钩子与跟进的模板记录表，方便协作推进。",
      detail: "用来回看帖子制作、模板、钩子和跟进。详情只放已打码的预览，申请后查看。",
      access: "request",
      cover: "gallery/followup-L-redacted.png",
      alt: "已打码的帖子测试复盘表，测试人和账号已遮盖",
      gallery: [
        { src: "gallery/followup-M-redacted.png", alt: "已打码的素材截图表，运营人已遮盖" },
      ],
    },
    {
      id: "material-lib",
      portal: "ops",
      title: "素材库",
      short: "素材库",
      summary: "积累小红书各类帖子素材，方便复用与参考。",
      detail: "飞书素材库里的小红书帖子，方便复用与参考。申请后查看。页面不放内部地址。",
      access: "request",
      cover: "material-lib.jpg",
      alt: "素材库：小红书帖子素材",
      gallery: [
        { src: "gallery/material-cards.png", alt: "飞书素材库里的小红书帖子卡片" },
        { src: "gallery/material-table.png", alt: "素材库表视图：封面、互动和原链" },
      ],
    },
    {
      id: "xhs-library",
      portal: "ops",
      title: "小红书资料库 2.0",
      short: "资料库",
      summary: "用资料库串起内容、选题、账号和协作。",
      detail: "二十二个模块收在一张总览里。页面不提供内部文档。",
      access: "request",
      cover: "xhs-library.jpg",
      alt: "小红书运营资料库 2.0 总览：工作流程连向数据库模块",
    },
    {
      id: "major-list",
      portal: "ops",
      title: "专业列表（三版本）",
      short: "专业列表",
      summary: "三版用途不同：爆款优先、精准用户、专业探索。另有学员参考画像和 AI 用 MD。",
      detail: "这是一套，不是一张表。三个版本系列各管一种选专业的方式。现行可见的是专业探索版 Ver 3.4（2026.8）。同一套里还有学员参考画像，以及给 AI 用的 MD 文件。正文需申请。",
      parts: [
        { title: "Ver 1.0｜爆款优先版", text: "专业较少，多有历史数据。还没有明确爆款方向时，用来快筛稳定、好做的专业。" },
        { title: "Ver 2.0｜精准用户版", text: "以研究领域、技术方向和细分关键词为主。适合计算机、AI 和技术类垂直账号。" },
        { title: "Ver 3.0｜专业探索版", text: "现行可见 Ver 3.4（2026.8）。覆盖最全，带评分和参考标准。部分方向偏小众、数据待验证，用来测新专业。" },
        { title: "学员参考画像", text: "和列表放在同一套里，用来对照学员是谁。" },
        { title: "AI用 MD 文件", text: "给 AI 读取的 Markdown。和运营列表、画像一起申请。" },
      ],
      access: "request",
      cover: "major-list.png",
      alt: "专业列表三版本：爆款优先、精准用户、专业探索，以及学员参考画像和 AI 用 MD",
    },
    {
      id: "sop-marketing",
      portal: "ops",
      title: "营销 SOP ver2.0",
      short: "营销 SOP",
      summary: "系统班营销流程 SOP（ver2.0），规范从策划到执行的标准步骤。",
      detail: "给负责系统班和营销执行的运营。申请后查看。详情用营销流程页。",
      access: "request",
      cover: "gallery/sop-marketing.png",
      alt: "营销 SOP ver2.0：从策划到执行的流程页",
    },
    {
      id: "sop-xhs",
      portal: "ops",
      title: "小红书运营 SOP",
      short: "小红书运营 SOP",
      summary: "飞书资料库中的小红书运营 SOP，覆盖内容生产与发布流程。",
      detail: "给负责小红书等内容运营的同学。申请后查看。详情是流程总览和选题、话术、进阶页。",
      access: "request",
      cover: "gallery/sop-banner.png",
      alt: "小红书运营 SOP 流程总览：运营、选题、话术、进阶、营销",
      gallery: [
        { src: "gallery/sop-topic.png", alt: "选题 SOP：专业方向和笔记逻辑" },
        { src: "gallery/sop-script.png", alt: "话术 SOP：评论区和私信" },
        { src: "gallery/sop-advanced.png", alt: "运营 SOP 进阶：素人进阶、聚光和数据分析" },
      ],
    },
    {
      id: "topic-pack",
      portal: "ops",
      title: "AI+专业课题入门包",
      short: "课题入门包",
      summary: "给学生准备的 AI 交叉课题入门资料，比 AI 论文包更有针对性。",
      detail: "让团队知道有这套引流资料。适合内容运营了解。入口由内部提供，这里不放可点链接。",
      access: "team",
      cover: "gallery/topic-pack-intro.png",
      alt: "AI+专业课题入门资料：交叉课题能做什么",
      gallery: [
        { src: "gallery/topic-pack-case.png", alt: "AI+专业课题入门资料中的分割案例" },
      ],
    },
    {
      id: "algo-pack",
      portal: "ops",
      title: "AI算法入门包",
      short: "算法入门包",
      summary: "给学生准备的 AI 算法入门资料。",
      detail: "让团队知道有这套引流资料。适合内容运营了解。这里不放可点链接。",
      access: "team",
      cover: "gallery/algo-pack.png",
      alt: "AI 算法入门资料",
    },
    {
      id: "v7-manual",
      portal: "product",
      title: "V7.0 系统班产品手册",
      short: "系统班",
      summary: "从 AI 通识到影像、时序和 AI+ 实验室项目产出的系统班产品说明：定位、路径、服务与交付。",
      detail: "给转化、招生和需要对外讲清课程价值的同事。详情是手册封面和目录。敏感价格与内部条款不放在这页。申请后查看。",
      access: "request",
      cover: "v7-manual.jpg",
      alt: "点头人工智能课程 V7.0 产品手册封面",
      gallery: [
        { src: "gallery/v7-cover.png", alt: "系统班 V7.0 产品手册封面" },
        { src: "gallery/v7-toc.png", alt: "系统班手册目录：市场定位、产品定位、产品介绍" },
        { src: "gallery/v7-overview.png", alt: "系统班产品定位和阶段结构" },
      ],
    },
    {
      id: "employment-manual",
      portal: "product",
      title: "就业班产品手册 / AI职通车",
      short: "就业班",
      summary: "就业班宣传版课纲：零代码入门，到 AI 写代码、应用进阶、手搓 WorkBuddy、就业冲刺。",
      detail: "给转化和就业方向咨询。详情是手册封面和课纲页。申请后查看，不公开内部草案口径。",
      access: "request",
      cover: "employment-manual.jpg",
      alt: "点头就业班 AI 职通车产品手册封面",
      gallery: [
        { src: "gallery/employment-cover.png", alt: "就业班 AI 职通车产品手册封面" },
        { src: "gallery/employment-syllabus.png", alt: "就业班三期课纲：零代码入门与 AI 写代码" },
      ],
    },
    {
      id: "conversion",
      portal: "product",
      title: "转化产品介绍",
      short: "转化产品介绍",
      summary: "转化相关产品介绍。需登录后查看，这里不直接外链。",
      detail: "给转化、销售和想快速了解产品的运营。单独成卡。申请后查看。",
      access: "request",
      cover: "gallery/conversion-intro.png",
      alt: "转化产品介绍文档",
      gallery: [
        { src: "gallery/conversion-stages.png", alt: "转化产品介绍中的阶段大纲" },
      ],
    },
    {
      id: "path-lab",
      portal: "vibe",
      title: "AI路径实验室",
      short: "路径实验室",
      summary: "就是现在这个站点。论文交互馆挂在它下面。",
      detail: "实验室把路径、论文和工具收在一处。你正在看的瓷砖岛就是它的展示窗口。子节点论文交互馆可以公开打开。",
      access: "site",
      cover: "path-lab.jpg",
      alt: "AI 路径实验室首页：让灵感，找到下一步",
    },
    {
      id: "papers",
      portal: "vibe",
      parent: "path-lab",
      title: "论文交互馆",
      short: "论文馆",
      summary: "路线规划加论文墙的公开站点，展示 AI 与论文、科研路径相关内容。",
      detail: "公开可看。这是交互馆，和 AI 论文包是两个入口。",
      access: "public",
      href: "https://yexiaohanyao.github.io/path-lab-ai/papers/index.html",
      cover: "papers-atlas.jpg",
      alt: "论文交互馆页面：从真实研究出发，发现不同学科的共同方法",
      gallery: [
        { src: "gallery/papers-home.png", alt: "论文交互馆首页：论文墙和领域" },
        { src: "gallery/papers-detail.png", alt: "论文交互馆里的一篇论文详情" },
      ],
    },
    {
      id: "material-collector",
      portal: "vibe",
      title: "多平台素材采集器",
      short: "素材采集",
      summary: "多平台素材采集工具和流程。",
      detail: "给需要跨平台采集素材的运营。申请后查看。页面不放内部地址。",
      access: "request",
      cover: "material-collector.jpg",
      alt: "多平台素材采集器界面：已读取帖子、图片素材和保存素材包",
      gallery: [
        { src: "gallery/collector-doc.png", alt: "素材收集器的说明和界面" },
        { src: "gallery/collector-ui.png", alt: "多平台素材收集器工作台" },
      ],
    },
    {
      id: "workbench-daily",
      portal: "vibe",
      title: "每日工作台",
      short: "每日工作台",
      summary: "本地每日工作台，暂不对外展示完整能力。",
      detail: "给团队内部使用的本地作品。仅内部，没有对外入口。预览里的个人链接已遮盖。",
      access: "internal",
      cover: "gallery/workbench-daily.png",
      alt: "每日工作台：今日任务和推进事项。记事里的个人链接已遮盖",
    },
    {
      id: "workbench-creator",
      portal: "vibe",
      title: "素材创作台",
      short: "素材创作台",
      summary: "本地素材创作工作台，飞书侧有分享入口。",
      detail: "给内容创作和运营同学。申请后查看。页面不放内部地址。",
      access: "request",
      cover: "gallery/creator-wall.png",
      alt: "素材创作台：本地素材库",
      gallery: [
        { src: "gallery/creator-copy.png", alt: "素材创作台的文案创作" },
      ],
    },
    {
      id: "workbench-research",
      portal: "vibe",
      title: "科研工作台",
      short: "科研工作台",
      summary: "给科研人准备的工作台内容。",
      detail: "让团队知道有这个工作台。适合内容运营和学生科研方向了解。这里不提供公开入口。",
      access: "team",
      cover: "gallery/research-desk.png",
      alt: "科研工作台：探索方向和文献助手",
      gallery: [
        { src: "gallery/research-skill.png", alt: "科研工作台里的学术 Skill" },
      ],
    },
    {
      id: "papers-pack",
      portal: "vibe",
      title: "AI 论文包",
      short: "AI 论文包",
      summary: "多学科 AI 论文资料包，存放在内部 CRM 与网盘。",
      detail: "给教研、转化和需要论文资料的同事申请查看。和论文交互馆是两个入口。地址留在内部。",
      access: "request",
      cover: "gallery/papers-pack-guide.png",
      alt: "AI 论文包中的阅读路线",
      gallery: [
        { src: "gallery/papers-pack-paper.png", alt: "AI 论文包中的一篇论文页面" },
      ],
    },
    {
      id: "jev",
      portal: "beta",
      title: "jev 接量助手",
      short: "jev",
      summary: "接量助手仍在测试中，目前中断，内测保留，暂不对外展示。",
      detail: "中断、内测。只展示状态，没有链接，也不能从这里打开。",
      access: "beta",
      cover: "jev.jpg",
      alt: "Jev 智能接量助手：中断、内测，没有入口",
      gallery: [
        { src: "gallery/jev-flow.png", alt: "Jev 接量助手示意：判断、可选模型和人工审核" },
      ],
    },
    {
      id: "shuishou",
      portal: "beta",
      title: "水手｜红书制帖师 Agent 演示站",
      short: "水手",
      summary: "演示 Agent 和 Skill 如何辅助小红书制帖，说明能力边界与用法。",
      detail: "公开演示。给想了解运营向 Agent 的同事和访客。选题、画面和文案收成一套，不自动发布。",
      access: "public",
      href: "https://shuishou-xhs-image-maker-20260820.b348894768.chatgpt.site",
      cover: "shuishou.jpg",
      alt: "水手红书制帖师演示站首页：把专业方向做成可审阅的小红书图文",
      gallery: [
        { src: "gallery/shuishou-landing.png", alt: "水手演示站落地页" },
        { src: "gallery/shuishou-flow.png", alt: "水手 Agent 的工作流和质量标准" },
      ],
    },
    {
      id: "six",
      portal: "beta",
      title: "AI 运营六维能力测试",
      short: "六维测试",
      summary: "趣味向 AI 运营六维能力测试小站，体验用。",
      detail: "公开测试。给想快速体验互动小站的人。封面是落地页。",
      access: "public",
      href: "https://ai-ops-six-dim-test.b348894768.chatgpt.site",
      cover: "six-landing.png",
      alt: "AI 运营六维能力测试落地页：六维雷达和开始测试",
      gallery: [{ src: "six-dims.jpg", alt: "六维能力测试列出的六个维度" }],
    },
    {
      id: "dedao-ai",
      portal: "fengxu",
      title: "得到AI圈",
      short: "得到AI",
      summary: "风絮侧学习资源，申请后查看。",
      detail: "适合需要得到 AI 圈学习内容的同事。入口由风絮提供，这里不是可点链接。",
      access: "request",
      cover: "cover-dedao.png",
      alt: "得到AI圈",
      gallery: [
        { src: "gallery/dedao-circle.png", alt: "得到·AI学习圈：广播站、热榜和对话" },
      ],
    },
    {
      id: "shengcai",
      portal: "fengxu",
      title: "生财有术",
      short: "生财",
      summary: "风絮侧学习资源，申请后查看。",
      detail: "适合需要学习最新商业技术的同事。入口由风絮提供，这里不是可点链接。",
      access: "request",
      cover: "cover-shengcai.png",
      alt: "生财有术",
      gallery: [
        { src: "gallery/shengcai-projects.png", alt: "生财有术航海项目列表" },
        { src: "gallery/shengcai-handbook.png", alt: "生财有术手册中的航海介绍" },
        { src: "gallery/shengcai-community.png", alt: "生财有术社区信息流" },
      ],
    },
  ];

  var byId = {};
  items.forEach(function (item) { byId[item.id] = item; });
  var portalById = {};
  portals.forEach(function (portal) { portalById[portal.id] = portal; });

  var dialog = document.getElementById("detail");
  var status = document.getElementById("tiles-status");

  function coverSrc(file) {
    if (!file) return "";
    if (file.indexOf("gallery/") === 0 || file.indexOf("covers/") === 0) return "./" + file;
    return "./covers/" + file;
  }

  function isPublicUrl(href) {
    return typeof href === "string" && href.indexOf("https://") === 0;
  }

  function badge(access) {
    var node = document.createElement("span");
    node.className = "badge";
    node.dataset.access = access;
    node.textContent = ACCESS[access] || access;
    return node;
  }

  function shot(file, alt) {
    var frame = document.createElement("div");
    frame.className = "shot";
    var img = document.createElement("img");
    img.src = coverSrc(file);
    img.alt = alt || "";
    img.width = 1600;
    img.height = 1000;
    img.addEventListener("error", function () {
      var fallback = document.createElement("span");
      fallback.className = "shot-fallback";
      fallback.textContent = alt || "封面";
      img.replaceWith(fallback);
    });
    frame.append(img);
    return frame;
  }

  function pinIsland(id) {
    var portal = portalById[id];
    if (!portal) return;
    document.querySelectorAll(".island").forEach(function (island) {
      var on = island.dataset.portal === id;
      island.classList.toggle("is-pinned", on);
      if (on) island.setAttribute("aria-current", "true");
      else island.removeAttribute("aria-current");
    });
    if (status) status.textContent = "已点亮 " + portal.index + " " + portal.short + "。" + portal.blurb;
  }

  function clearPin() {
    document.querySelectorAll(".island.is-pinned").forEach(function (island) {
      island.classList.remove("is-pinned");
      island.removeAttribute("aria-current");
    });
    if (status) status.textContent = "";
  }

  function rememberPortal(id) {
    var next = "#" + id;
    if (location.hash.startsWith("#item-") || location.hash === next) return;
    history.replaceState(null, "", next);
  }

  function fillDetail(item) {
    var portal = portalById[item.portal];
    var frame = document.getElementById("detail-shot");
    var cover = shot(item.cover, item.alt);
    frame.replaceChildren(cover.firstChild);

    var kicker = document.getElementById("detail-kicker");
    kicker.replaceChildren(badge(item.access));
    var where = document.createElement("span");
    where.className = "child-tag";
    where.textContent = portal.index + " " + portal.title;
    kicker.append(where);
    if (item.parent && byId[item.parent]) {
      var child = document.createElement("span");
      child.className = "child-tag";
      child.textContent = "子节点 · " + byId[item.parent].title;
      kicker.append(child);
    }

    document.getElementById("detail-title").textContent = item.title;
    document.getElementById("detail-summary").textContent = item.summary;
    document.getElementById("detail-copy").textContent = item.detail;

    var parts = document.getElementById("detail-parts");
    parts.replaceChildren();
    if (item.parts && item.parts.length) {
      parts.hidden = false;
      item.parts.forEach(function (part) {
        var li = document.createElement("li");
        var strong = document.createElement("strong");
        strong.textContent = part.title;
        var text = document.createElement("span");
        text.textContent = part.text;
        li.append(strong, text);
        parts.append(li);
      });
    } else {
      parts.hidden = true;
    }

    var gallery = document.getElementById("detail-gallery");
    gallery.replaceChildren();
    (item.gallery || []).forEach(function (image) {
      gallery.append(shot(image.src, image.alt));
    });

    var actions = document.getElementById("detail-actions");
    actions.replaceChildren();
    if (item.access === "public" && isPublicUrl(item.href)) {
      var link = document.createElement("a");
      link.className = "btn";
      link.href = item.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "打开页面";
      var hint = document.createElement("span");
      hint.className = "sr-only";
      hint.textContent = "：" + item.title + "（新标签页打开）";
      link.append(hint);
      actions.append(link);
    } else if (item.access === "request") {
      var ask = document.createElement("p");
      ask.className = "callout";
      ask.textContent = "申请查看";
      actions.append(ask);
    } else if (item.access === "team") {
      var team = document.createElement("p");
      team.className = "callout";
      team.textContent = "让团队知道。团队可见，这里不提供公开入口。";
      actions.append(team);
    } else if (item.access === "internal") {
      var internal = document.createElement("p");
      internal.className = "callout";
      internal.textContent = "仅内部 · 无外链";
      actions.append(internal);
    } else if (item.access === "beta") {
      var held = document.createElement("p");
      held.className = "callout";
      held.textContent = "内测 / 中断 · 暂无入口";
      actions.append(held);
    } else {
      var here = document.createElement("p");
      here.className = "callout";
      here.textContent = "你正在浏览的就是这个站点。";
      actions.append(here);
      var childItem = items.find(function (entry) { return entry.parent === item.id; });
      if (childItem) {
        var openChild = document.createElement("button");
        openChild.type = "button";
        openChild.className = "btn btn-ghost";
        openChild.textContent = "打开子节点：" + childItem.title;
        openChild.addEventListener("click", function () { openDetail(childItem.id); });
        actions.append(openChild);
      }
    }
  }

  var aliases = { "sop-five": "sop-marketing" };

  function openDetail(id, options) {
    var item = byId[aliases[id] || id];
    if (!item) return;
    pinIsland(item.portal);
    fillDetail(item);
    if (!options || options.updateHash !== false) rememberPortal(item.portal);
    if (!dialog.open) dialog.showModal();
  }

  document.querySelectorAll(".island").forEach(function (island) {
    island.addEventListener("click", function () {
      pinIsland(island.dataset.portal);
    });
  });

  document.querySelectorAll(".cell").forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      openDetail(button.dataset.id);
    });
  });

  document.getElementById("detail-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });

  function applyHash() {
    var hash = decodeURIComponent((location.hash || "").replace(/^#/, ""));
    if (portalById[hash]) {
      pinIsland(hash);
      return;
    }
    if (hash.indexOf("item-") === 0) {
      var item = byId[aliases[hash.slice(5)] || hash.slice(5)];
      if (!item) return;
      var island = document.getElementById(item.portal);
      if (island) island.scrollIntoView({ block: "start" });
      openDetail(item.id, { updateHash: false });
      return;
    }
    if (hash === "graph" || hash === "tiles" || hash === "") clearPin();
  }

  window.addEventListener("hashchange", applyHash);

  var links = Array.from(document.querySelectorAll(".nav a"));
  var watched = links
    .map(function (link) {
      return { link: link, el: document.getElementById((link.getAttribute("href") || "").slice(1)) };
    })
    .filter(function (entry) { return entry.el; });
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        watched.forEach(function (item) {
          if (item.el === entry.target) item.link.setAttribute("aria-current", "true");
          else item.link.removeAttribute("aria-current");
        });
      });
    }, { rootMargin: "-45% 0px -45% 0px", threshold: 0 });
    watched.forEach(function (item) { observer.observe(item.el); });
  }

  document.querySelectorAll(".shot img").forEach(function (img) {
    img.addEventListener("error", function () {
      var fallback = document.createElement("span");
      fallback.className = "shot-fallback";
      fallback.textContent = img.alt || "封面";
      img.replaceWith(fallback);
    });
  });

  applyHash();
})();
