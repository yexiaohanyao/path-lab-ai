(function () {
  var ACCESS = {
    public: "公开可看",
    request: "申请查看",
    beta: "内测",
    site: "当前站点",
  };

  var portals = [
    {
      id: "ops",
      index: "01",
      title: "流量运营知识库",
      short: "流量运营",
      blurb: "SOP、名单、资料库、复盘、运营资料，以及提示词方法。",
    },
    {
      id: "product",
      index: "02",
      title: "产品 | 可视化库",
      short: "产品可视化",
      blurb: "两本产品手册。这里只展示封面。",
    },
    {
      id: "vibe",
      index: "03",
      title: "vibecoding工具与站点",
      short: "工具站点",
      blurb: "实验室本站、论文交互馆，和素材采集器。",
    },
    {
      id: "beta",
      index: "04",
      title: "测试中功能",
      short: "测试中",
      blurb: "两则公开演示，一则内测暂缓。",
    },
    {
      id: "fengxu",
      index: "05",
      title: "风絮资源",
      short: "风絮",
      blurb: "外部学习资源，圈子精选，对内展示目录。",
    },
  ];

  var items = [
    {
      id: "ops-materials",
      portal: "ops",
      title: "运营使用的资料",
      short: "运营资料",
      summary: "可以作为引流的内容，也可以作为引流后置的交付。",
      detail: "可以作为引流的内容，也可以作为引流后置的交付。具体内容在 CRM 系统的资料里面。",
      access: "request",
      cover: "ops-materials.jpg",
      alt: "运营使用的资料：可作引流内容，也可作引流后的交付。具体内容在 CRM 系统资料里。",
    },
    {
      id: "prompt-skill",
      portal: "ops",
      title: "提示词 vs 上下文 vs Skill",
      short: "提示词",
      summary: "BROKE、上下文和 Skill 各管一块。",
      detail: "提示词用 BROKE 写清楚。上下文是知识、记忆、规则和目标。Skill 把提示词、上下文、案例和图片收成可复用的一套。",
      access: "request",
      cover: "prompt-context-skill.png",
      alt: "提示词 BROKE、上下文四块和 Skill 组成，下面是一条多模态路径",
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
      summary: "账号问题、动作和选项收在一张复盘表。",
      detail: "用来回看本周执行。这里只留表的预览。",
      access: "request",
      cover: "data-review.jpg",
      alt: "数据复盘表格预览：账号问题分析与本周执行动作",
    },
    {
      id: "material-lib",
      portal: "ops",
      title: "素材库",
      short: "素材库",
      summary: "本地创作台和云端素材表，两面一起看。",
      detail: "左面是本地创作台，右面是云端素材表。申请后查看。页面不放内部地址。",
      access: "request",
      cover: "material-lib.jpg",
      alt: "素材库两面：左侧本地创作台，右侧云端素材表",
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
      id: "sop-five",
      portal: "ops",
      title: "五套运营 SOP",
      short: "五套 SOP",
      summary: "运营、选题、话术、进阶和营销，五套动作在一张图里。",
      detail: "每一套都写了要解决的问题，和要形成的能力。完整正文需申请。",
      access: "request",
      cover: "sop-five.jpg",
      alt: "五套运营 SOP 并排：运营、选题、话术、进阶运营、营销",
    },
    {
      id: "v7-manual",
      portal: "product",
      title: "V7.0 系统班产品手册",
      short: "系统班",
      summary: "系统班 V7.0 的产品手册。",
      detail: "从 AI 系统入门到实验室项目产出。这里是手册封面，正文需申请。",
      access: "request",
      cover: "v7-manual.jpg",
      alt: "点头人工智能课程 V7.0 产品手册封面",
    },
    {
      id: "employment-manual",
      portal: "product",
      title: "就业班产品手册 / AI职通车",
      short: "就业班",
      summary: "就业班的产品手册，主线是 AI 职通车。",
      detail: "封面写着产品手册。正文需申请。",
      access: "request",
      cover: "employment-manual.jpg",
      alt: "点头就业班 AI 职通车产品手册封面",
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
      summary: "从一篇论文走到一个方法，公开可看。",
      detail: "这是站内页面的截图。用来发现不同学科里的共同方法。",
      access: "public",
      href: "https://yexiaohanyao.github.io/path-lab-ai/papers/index.html",
      cover: "papers-atlas.jpg",
      alt: "论文交互馆页面：从真实研究出发，发现不同学科的共同方法",
    },
    {
      id: "material-collector",
      portal: "vibe",
      title: "多平台素材采集器",
      short: "素材采集",
      summary: "把多平台帖子收成可保存的素材包。",
      detail: "采集、选图、再打包。这里只留界面预览，申请后查看。页面不放内部地址。",
      access: "request",
      cover: "material-collector.jpg",
      alt: "多平台素材采集器界面：已读取帖子、图片素材和保存素材包",
    },
    {
      id: "jev",
      portal: "beta",
      title: "jev 接量助手",
      short: "jev",
      summary: "内测中，目前暂缓。只展示状态，没有入口。",
      detail: "内测暂缓。这张图只说明状态，没有链接，也不能从这里打开。",
      access: "beta",
      cover: "jev.jpg",
      alt: "Jev 智能接量助手项目基线：核心定位、标准流程、判断体系和关键边界",
    },
    {
      id: "shuishou",
      portal: "beta",
      title: "水手｜红书制帖师 Agent 演示站",
      short: "水手",
      summary: "把一个专业方向做成一套可审阅的图文。",
      detail: "公开演示。选题、画面和文案收成一套，不自动发布。",
      access: "public",
      href: "https://shuishou-xhs-image-maker-20260820.b348894768.chatgpt.site",
      cover: "shuishou.jpg",
      alt: "水手红书制帖师演示站首页：把专业方向做成可审阅的小红书图文",
    },
    {
      id: "six",
      portal: "beta",
      title: "AI 运营六维能力测试",
      short: "六维测试",
      summary: "六维雷达，做完能看见自己落在哪一块。",
      detail: "公开测试。从运营洞察到 Agent 工作流，大约四分钟。",
      access: "public",
      href: "https://ai-ops-six-dim-test.b348894768.chatgpt.site",
      cover: "six-hero.jpg",
      alt: "AI 运营六维能力测试首页：雷达图和开始测试",
      gallery: [{ src: "six-dims.jpg", alt: "六维能力测试列出的六个维度" }],
    },
    {
      id: "dedao-ai",
      portal: "fengxu",
      title: "得到AI圈",
      short: "得到AI",
      summary: "得到 AI 圈学习内容。",
      detail: "得到 AI 圈学习内容。这里只展示目录，暂无公开链接。",
      access: "request",
      cover: "dedao-ai.jpg",
      alt: "得到AI圈：学习内容",
    },
    {
      id: "shengcai",
      portal: "fengxu",
      title: "生财有术",
      short: "生财",
      summary: "生财有术圈子学习内容。",
      detail: "生财有术圈子学习内容。这里只展示目录，暂无公开链接。",
      access: "request",
      cover: "shengcai.jpg",
      alt: "生财有术：圈子学习内容",
    },
  ];

  var byId = {};
  items.forEach(function (item) { byId[item.id] = item; });
  var portalById = {};
  portals.forEach(function (portal) { portalById[portal.id] = portal; });

  var dialog = document.getElementById("detail");
  var status = document.getElementById("tiles-status");

  function coverSrc(file) {
    return "./covers/" + file;
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
    if (item.access === "public" && item.href) {
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
    } else if (item.access === "beta") {
      var held = document.createElement("p");
      held.className = "callout";
      held.textContent = "内测 / 暂缓 · 暂无入口";
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

  function openDetail(id, options) {
    var item = byId[id];
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

  document.querySelectorAll(".cell, .card-open").forEach(function (button) {
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
      var item = byId[hash.slice(5)];
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
