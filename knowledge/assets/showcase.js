/* 目录在 knowledge/assets/catalog.json。登录后可用「新增展示」提交到 gh-pages。见 knowledge/ADMIN.md。
   页头登录只比对用户名与口令的 SHA-256，这里不写明文口令。仓库令牌只留在 sessionStorage。 */
(function () {
  var ACCESS = {
    internal: "内部资料",
    public: "公共站点",
    pack: "资料包",
    exhibit: "仅展示",
    beta: "内测",
  };

  var SESSION_KEY = "pathlab-knowledge-session";
  var TOKEN_KEY = "pathlab-knowledge-github-token";
  var SESSION_TTL = 12 * 60 * 60 * 1000;
  var ADMIN_USER = "风絮";
  /* UTF-8 SHA-256 of the admin username immediately followed by the password. */
  var ADMIN_DIGEST = "17aa56f9787d2ed3a8af69c4a95419c46151ccc0ab2bc83987aafa4a2d6b801b";
  var NOTION_EMPTY = "登录后可编辑；条目后台在 Notion，改完后让站点刷新";
  var REPO = "yexiaohanyao/path-lab-ai";
  var BRANCH = "gh-pages";
  var CATALOG_REPO_PATH = "knowledge/assets/catalog.json";
  var API_ROOT = "https://api.github.com";
  var PORTAL_IDS = ["ops", "product", "vibe", "beta", "fengxu"];

  var portals = [];
  var items = [];
  var byId = {};
  var portalById = {};
  var publishing = false;

  function indexCatalog(data) {
    if (!data || !Array.isArray(data.portals) || !Array.isArray(data.items)) {
      throw new Error("目录格式不对");
    }
    portals = data.portals;
    items = data.items;
    byId = {};
    items.forEach(function (item) {
      if (item && item.id) byId[item.id] = item;
    });
    portalById = {};
    portals.forEach(function (portal) {
      if (portal && portal.id) portalById[portal.id] = portal;
    });
  }

  function renderCells() {
    document.querySelectorAll(".island").forEach(function (island) {
      var cells = island.querySelector(".cells");
      if (!cells) return;
      var portalId = island.dataset.portal;
      var fragment = document.createDocumentFragment();
      items.forEach(function (item) {
        if (!item || item.portal !== portalId || !item.id) return;
        var button = document.createElement("button");
        button.type = "button";
        button.className = "cell";
        button.dataset.id = item.id;
        button.setAttribute("aria-haspopup", "dialog");
        button.setAttribute("aria-controls", "detail");
        var label = ACCESS[item.access] || item.access || "";
        button.setAttribute("aria-label", (item.title || item.short || item.id) + "，" + label);
        var strong = document.createElement("strong");
        strong.textContent = item.short || item.title || item.id;
        button.append(strong, badge(item.access));
        fragment.append(button);
      });
      cells.replaceChildren(fragment);
    });
  }

  var dialog = document.getElementById("detail");
  var loginDialog = document.getElementById("login");
  var loginForm = document.getElementById("login-form");
  var loginUser = document.getElementById("login-user");
  var loginPass = document.getElementById("login-pass");
  var loginError = document.getElementById("login-error");
  var status = document.getElementById("tiles-status");
  var currentId = null;
  var loginPending = false;

  function coverSrc(file) {
    if (!file) return "";
    if (file.indexOf("gallery/") === 0 || file.indexOf("covers/") === 0) return "./" + file;
    return "./covers/" + file;
  }

  function httpUrl(href) {
    if (typeof href !== "string") return "";
    var value = href.trim();
    if (!/^https?:\/\//i.test(value)) return "";
    return value;
  }

  function sha256Hex(text) {
    if (!window.crypto || !crypto.subtle) return Promise.reject(new Error("no-subtle"));
    var data = new TextEncoder().encode(text);
    return crypto.subtle.digest("SHA-256", data).then(function (buf) {
      return Array.from(new Uint8Array(buf)).map(function (byte) {
        return byte.toString(16).padStart(2, "0");
      }).join("");
    });
  }

  function sameHex(left, right) {
    if (typeof left !== "string" || typeof right !== "string" || left.length !== right.length) return false;
    var diff = 0;
    for (var i = 0; i < left.length; i += 1) diff |= left.charCodeAt(i) ^ right.charCodeAt(i);
    return diff === 0;
  }

  function readSession() {
    try {
      var raw = localStorage.getItem(SESSION_KEY);
      if (!raw) return null;
      var data = JSON.parse(raw);
      if (!data || data.user !== ADMIN_USER || typeof data.exp !== "number" || data.exp < Date.now()) {
        localStorage.removeItem(SESSION_KEY);
        return null;
      }
      return data;
    } catch (error) {
      return null;
    }
  }

  function isLoggedIn() {
    return !!readSession();
  }

  function saveSession() {
    localStorage.setItem(SESSION_KEY, JSON.stringify({
      user: ADMIN_USER,
      exp: Date.now() + SESSION_TTL,
    }));
  }

  function showLoginError(message) {
    loginError.hidden = false;
    loginError.textContent = message;
  }

  function hideLoginError() {
    loginError.hidden = true;
    loginError.textContent = "";
  }

  function renderSession() {
    var slot = document.getElementById("session-slot");
    if (!slot) return;
    slot.replaceChildren();
    if (isLoggedIn()) {
      var who = document.createElement("span");
      who.className = "session-user";
      who.textContent = "已登录·风絮";
      var out = document.createElement("button");
      out.type = "button";
      out.className = "btn btn-ghost btn-sm";
      out.textContent = "退出";
      out.addEventListener("click", logout);
      var add = document.createElement("button");
      add.type = "button";
      add.id = "add-card";
      add.className = "btn btn-ghost btn-sm";
      add.textContent = "新增展示";
      add.addEventListener("click", openComposer);
      slot.append(who, add, out);
      return;
    }
    var open = document.createElement("button");
    open.type = "button";
    open.className = "btn btn-ghost btn-sm";
    open.textContent = "登录";
    open.addEventListener("click", openLogin);
    slot.append(open);
  }

  function refreshOpenDetail() {
    if (!currentId || !dialog.open) return;
    fillDetail(byId[currentId]);
  }

  function clearToken() {
    try { sessionStorage.removeItem(TOKEN_KEY); } catch (error) { /* ignore */ }
    var tokenInput = document.getElementById("composer-token");
    if (tokenInput) tokenInput.value = "";
  }

  function readToken() {
    try {
      return sessionStorage.getItem(TOKEN_KEY) || "";
    } catch (error) {
      return "";
    }
  }

  function writeToken(value) {
    try {
      if (value) sessionStorage.setItem(TOKEN_KEY, value);
      else sessionStorage.removeItem(TOKEN_KEY);
    } catch (error) {
      throw new Error("浏览器禁止了会话存储，令牌无法只留在本次会话。");
    }
  }

  function setComposerStatus(message, kind) {
    var node = document.getElementById("composer-status");
    if (!node) return;
    node.hidden = !message;
    node.textContent = message || "";
    node.classList.toggle("is-ok", kind === "ok");
    node.classList.toggle("is-err", kind === "err");
  }

  function openComposer() {
    if (!isLoggedIn()) return;
    var dialog = document.getElementById("composer");
    if (!dialog) return;
    var tokenInput = document.getElementById("composer-token");
    if (tokenInput) tokenInput.value = readToken();
    setComposerStatus("", "");
    if (!dialog.open) dialog.showModal();
    var portal = document.getElementById("composer-portal");
    if (portal) portal.focus();
  }

  function slugify(text) {
    return String(text || "")
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function allocateId(typed, shortName, title) {
    if (typed) {
      if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(typed)) {
        return { error: "标识只能用小写英文、数字和短横线。" };
      }
      if (byId[typed] || typed === "sop-five") return { error: "标识「" + typed + "」已存在。" };
      return { id: typed };
    }
    var base = slugify(shortName) || slugify(title);
    if (!base) {
      var now = new Date();
      var pad = function (n) { return String(n).padStart(2, "0"); };
      base = "card-" + now.getFullYear() + pad(now.getMonth() + 1) + pad(now.getDate())
        + "-" + pad(now.getHours()) + pad(now.getMinutes()) + pad(now.getSeconds());
    }
    base = base.slice(0, 48).replace(/-+$/g, "");
    var id = base;
    var n = 2;
    while (byId[id] || id === "sop-five") {
      id = base.slice(0, 40).replace(/-+$/g, "") + "-" + n;
      n += 1;
      if (n > 50) return { error: "标识无法生成唯一值，请手填 id。" };
    }
    return { id: id };
  }

  function safeRelativePath(value) {
    var path = String(value || "").trim().replace(/^\.\//, "");
    if (!path) return "";
    if (path.indexOf("..") !== -1 || /[\\?#]|:/.test(path)) return null;
    if (!/^[A-Za-z0-9][A-Za-z0-9._/-]*$/.test(path)) return null;
    if (!/\.(?:png|jpe?g|webp|gif)$/i.test(path)) return null;
    return path;
  }

  function fileExt(name) {
    var safe = String(name || "").split(/[/\\]/).pop().toLowerCase();
    var match = safe.match(/\.([a-z0-9]{1,8})$/);
    var ext = match ? match[1] : "";
    if (ext === "jpeg") ext = "jpg";
    if (!/^(png|jpg|webp|gif)$/.test(ext)) return "";
    return ext;
  }

  function imageProblem(file, label) {
    if (!file) return "";
    if (!fileExt(file.name)) return label + "请用 png、jpg、webp 或 gif。";
    if (file.type && file.type.indexOf("image/") !== 0) return label + "不是图片文件。";
    if (file.size > 8 * 1024 * 1024) return label + "请小于 8MB。";
    return "";
  }

  function bytesToBase64(bytes) {
    var binary = "";
    var chunk = 0x8000;
    for (var i = 0; i < bytes.length; i += chunk) {
      binary += String.fromCharCode.apply(null, bytes.subarray(i, i + chunk));
    }
    return btoa(binary);
  }

  function encodeBase64Utf8(text) {
    return bytesToBase64(new TextEncoder().encode(text));
  }

  function decodeBase64Utf8(b64) {
    var binary = atob(String(b64 || "").replace(/\s/g, ""));
    var bytes = new Uint8Array(binary.length);
    for (var i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i);
    return new TextDecoder().decode(bytes);
  }

  function readFileBase64(file) {
    return file.arrayBuffer().then(function (buffer) {
      return bytesToBase64(new Uint8Array(buffer));
    });
  }

  function assertClean(token, text) {
    if (token && String(text).indexOf(token) !== -1) {
      throw new Error("提交内容里不能包含令牌。请从正文里删掉令牌后再试。");
    }
  }

  function githubErrorMessage(statusCode, data) {
    var raw = data && typeof data.message === "string" ? data.message : "";
    if (/ghp_|github_pat_|bearer\s+\S+/i.test(raw)) raw = "";
    var extra = raw ? "（" + raw + "）" : "";
    if (statusCode === 401) return "令牌无效或已过期。" + extra;
    if (statusCode === 403) return "令牌权限不足。需要本仓库 Contents 读写。" + extra;
    if (statusCode === 404) return "找不到仓库或文件。确认令牌能访问 " + REPO + " 的 " + BRANCH + "。" + extra;
    if (statusCode === 409 || statusCode === 422) return "远程目录刚被更新，请再提交一次。" + extra;
    return "GitHub 返回 " + statusCode + "。" + extra;
  }

  function contentsApiPath(repoPath, query) {
    if (typeof repoPath !== "string" || repoPath.indexOf("knowledge/") !== 0 || repoPath.indexOf("..") !== -1) {
      throw new Error("路径必须在 knowledge/ 下。");
    }
    var encoded = repoPath.split("/").map(function (part) { return encodeURIComponent(part); }).join("/");
    var apiPath = "/repos/" + REPO + "/contents/" + encoded;
    if (query) apiPath += "?" + query;
    return apiPath;
  }

  function github(token, method, apiPath, body) {
    if (apiPath.indexOf("/repos/" + REPO + "/contents/knowledge/") !== 0) {
      return Promise.reject(new Error("只允许写入 knowledge/ 下的文件。"));
    }
    if (apiPath.indexOf(token) !== -1) {
      return Promise.reject(new Error("提交失败。"));
    }
    var headers = {
      Accept: "application/vnd.github+json",
      Authorization: "Bearer " + token,
      "X-GitHub-Api-Version": "2022-11-28",
      "User-Agent": "path-lab-knowledge-showcase",
    };
    var init = {
      method: method,
      headers: headers,
      credentials: "omit",
      referrerPolicy: "no-referrer",
      cache: "no-store",
    };
    if (body) {
      headers["Content-Type"] = "application/json";
      init.body = JSON.stringify(body);
    }
    var controller = typeof AbortController === "function" ? new AbortController() : null;
    var timer = null;
    if (controller) {
      init.signal = controller.signal;
      timer = setTimeout(function () { controller.abort(); }, 45000);
    }
    return fetch(API_ROOT + apiPath, init).then(function (res) {
      if (timer) clearTimeout(timer);
      return res.text().then(function (text) {
        var data = {};
        if (text) {
          try { data = JSON.parse(text); } catch (error) { data = {}; }
        }
        if (!res.ok) {
          var err = new Error(githubErrorMessage(res.status, data));
          err.status = res.status;
          throw err;
        }
        return data;
      });
    }, function (error) {
      if (timer) clearTimeout(timer);
      if (error && error.name === "AbortError") throw new Error("连接 GitHub 超时，请再试一次。");
      if (error && error.name === "TypeError") throw new Error("连不上 api.github.com。请检查网络后重试。");
      throw error;
    });
  }

  function getContents(token, repoPath) {
    return github(token, "GET", contentsApiPath(repoPath, "ref=" + encodeURIComponent(BRANCH))).then(function (data) {
      return data;
    }, function (error) {
      if (error && error.status === 404) return null;
      throw error;
    });
  }

  function putContents(token, repoPath, message, base64, sha) {
    assertClean(token, message);
    var body = { message: message, content: base64, branch: BRANCH };
    if (sha) body.sha = sha;
    return github(token, "PUT", contentsApiPath(repoPath), body);
  }

  function uploadImage(token, repoPath, file, message) {
    return readFileBase64(file).then(function (base64) {
      return getContents(token, repoPath).then(function (existing) {
        return putContents(token, repoPath, message, base64, existing && existing.sha);
      });
    });
  }

  function safeAssetName(name) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*\.(?:png|jpg|webp|gif)$/.test(name)) {
      throw new Error("文件名不安全。");
    }
    return name;
  }

  function parseRemoteCatalog(file) {
    if (!file || !file.content || !file.sha) throw new Error("读不到 knowledge/assets/catalog.json。");
    var catalog;
    try {
      catalog = JSON.parse(decodeBase64Utf8(file.content));
    } catch (error) {
      throw new Error("远程目录无法解析。");
    }
    if (!catalog || !Array.isArray(catalog.items) || !Array.isArray(catalog.portals)) {
      throw new Error("远程目录格式不对。");
    }
    return catalog;
  }

  function fieldValue(id) {
    var node = document.getElementById(id);
    return node && typeof node.value === "string" ? node.value : "";
  }

  function buildItemFromForm() {
    var portal = fieldValue("composer-portal");
    var shortName = fieldValue("composer-short").replace(/\s+/g, " ").trim();
    var title = fieldValue("composer-title").replace(/\s+/g, " ").trim();
    var summary = fieldValue("composer-summary").replace(/\s*\n\s*/g, " ").trim();
    var detail = fieldValue("composer-detail").trim();
    var access = fieldValue("composer-access");
    var href = fieldValue("composer-href").trim();
    var notion = fieldValue("composer-notion").trim();
    var remark = fieldValue("composer-remark").trim();
    var coverPathRaw = fieldValue("composer-cover-path").trim();
    var coverInput = document.getElementById("composer-cover-file");
    var galleryInput = document.getElementById("composer-gallery");
    var coverFile = coverInput && coverInput.files ? coverInput.files[0] || null : null;
    var galleryFiles = galleryInput && galleryInput.files ? Array.prototype.slice.call(galleryInput.files) : [];
    var typedId = fieldValue("composer-id").trim();

    if (PORTAL_IDS.indexOf(portal) === -1) return { error: "请选择板块。" };
    if (!shortName) return { error: "请填写短名。" };
    if (!title) return { error: "请填写全名。" };
    if (!summary) return { error: "请填写一句话摘要。" };
    if (!detail) return { error: "请填写详情。" };
    if (!ACCESS[access]) return { error: "请选择徽章。" };
    if (href && !httpUrl(href)) return { error: "链接需要以 http:// 或 https:// 开头。" };
    if (notion && !httpUrl(notion)) return { error: "Notion 地址需要以 http:// 或 https:// 开头。" };

    var allocated = allocateId(typedId, shortName, title);
    if (allocated.error) return allocated;

    var coverProblem = imageProblem(coverFile, "封面");
    if (coverProblem) return { error: coverProblem };
    if (galleryFiles.length > 8) return { error: "配图最多 8 张。" };
    for (var i = 0; i < galleryFiles.length; i += 1) {
      var galleryProblem = imageProblem(galleryFiles[i], "配图");
      if (galleryProblem) return { error: galleryProblem };
    }

    var coverPath = "";
    if (coverFile) {
      coverPath = safeAssetName(allocated.id + "-cover." + fileExt(coverFile.name));
    } else {
      coverPath = safeRelativePath(coverPathRaw);
      if (!coverPath) return { error: "请上传封面，或填写已有相对路径，例如 covers/demo.png。" };
    }

    var item = {
      id: allocated.id,
      portal: portal,
      title: title,
      short: shortName,
      summary: summary,
      detail: detail,
      access: access,
      href: href,
    };
    if (notion) item.notionEditUrl = notion;
    if (remark) item.remark = remark;
    item.cover = coverPath;
    item.alt = title;
    if (galleryFiles.length) {
      item.gallery = galleryFiles.map(function (file, index) {
        return {
          src: "gallery/" + safeAssetName(allocated.id + "-" + (index + 1) + "." + fileExt(file.name)),
          alt: title,
        };
      });
    }
    return { item: item, coverFile: coverFile, galleryFiles: galleryFiles };
  }

  function publishItem(token, built) {
    var item = built.item;
    return Promise.resolve().then(function () {
      setComposerStatus("正在核对远程目录…", "");
      return getContents(token, CATALOG_REPO_PATH);
    }).then(function (file) {
      var catalog = parseRemoteCatalog(file);
      if (catalog.items.some(function (existing) { return existing && existing.id === item.id; })) {
        throw new Error("标识「" + item.id + "」已在远程目录里，请换一个。");
      }
      var chain = Promise.resolve();
      if (built.coverFile) {
        chain = chain.then(function () {
          setComposerStatus("正在上传封面…", "");
          return uploadImage(
            token,
            "knowledge/covers/" + item.cover,
            built.coverFile,
            "knowledge: add cover for " + item.id
          );
        });
      }
      built.galleryFiles.forEach(function (file, index) {
        var src = item.gallery[index].src;
        chain = chain.then(function () {
          setComposerStatus("正在上传配图 " + (index + 1) + "/" + built.galleryFiles.length + "…", "");
          return uploadImage(
            token,
            "knowledge/" + src,
            file,
            "knowledge: add gallery image for " + item.id
          );
        });
      });
      return chain.then(function () {
        setComposerStatus("正在写入目录…", "");
        return getContents(token, CATALOG_REPO_PATH);
      });
    }).then(function (latest) {
      var catalog = parseRemoteCatalog(latest);
      if (catalog.items.some(function (existing) { return existing && existing.id === item.id; })) {
        throw new Error("标识「" + item.id + "」已在远程目录里，请换一个。");
      }
      catalog.items.push(item);
      var json = JSON.stringify(catalog, null, 2) + "\n";
      assertClean(token, json);
      assertClean(token, item.id);
      return putContents(
        token,
        CATALOG_REPO_PATH,
        "knowledge: add showcase card " + item.id,
        encodeBase64Utf8(json),
        latest.sha
      ).then(function () { return catalog; });
    });
  }

  function setComposerBusy(busy) {
    publishing = busy;
    var submit = document.getElementById("composer-submit");
    if (!submit) return;
    submit.disabled = busy;
    submit.textContent = busy ? "正在提交…" : "提交到 gh-pages";
  }

  function resetComposerFields() {
    ["composer-short", "composer-title", "composer-id", "composer-summary", "composer-detail", "composer-href", "composer-notion", "composer-remark", "composer-cover-path"].forEach(function (id) {
      var node = document.getElementById(id);
      if (node) node.value = "";
    });
    var idInput = document.getElementById("composer-id");
    if (idInput) idInput.dataset.touched = "";
    var portal = document.getElementById("composer-portal");
    var access = document.getElementById("composer-access");
    if (portal) portal.value = "";
    if (access) access.value = "";
    var cover = document.getElementById("composer-cover-file");
    var gallery = document.getElementById("composer-gallery");
    if (cover) cover.value = "";
    if (gallery) gallery.value = "";
  }

  function suggestId() {
    var idInput = document.getElementById("composer-id");
    if (!idInput || idInput.dataset.touched === "1") return;
    var shortName = document.getElementById("composer-short").value;
    var title = document.getElementById("composer-title").value;
    if (!slugify(shortName) && !slugify(title)) return;
    var allocated = allocateId("", shortName, title);
    if (allocated.id) idInput.value = allocated.id;
  }

  function publicError(error, token) {
    var message = error && error.message ? String(error.message) : "提交失败。";
    if (token && message.indexOf(token) !== -1) return "提交失败。";
    return message;
  }

  function markFresh(id) {
    document.querySelectorAll(".cell.is-fresh").forEach(function (node) {
      node.classList.remove("is-fresh");
    });
    var selector = ".cell[data-id='" + id.replace(/'/g, "") + "']";
    var node = document.querySelector(selector);
    if (node) node.classList.add("is-fresh");
  }

  function bindComposer() {
    var form = document.getElementById("composer-form");
    var dialog = document.getElementById("composer");
    if (!form || !dialog) return;

    var tokenInput = document.getElementById("composer-token");
    function unlockToken() {
      tokenInput.removeAttribute("readonly");
    }
    tokenInput.addEventListener("focus", unlockToken);
    tokenInput.addEventListener("pointerdown", unlockToken);
    tokenInput.addEventListener("input", function () {
      var value = tokenInput.value.replace(/\s+/g, "");
      if (value !== tokenInput.value) tokenInput.value = value;
      try { writeToken(value); } catch (error) { setComposerStatus(error.message, "err"); }
    });
    document.getElementById("composer-token-toggle").addEventListener("click", function () {
      var show = tokenInput.type === "password";
      tokenInput.type = show ? "text" : "password";
      this.textContent = show ? "隐藏" : "显示";
    });
    document.getElementById("composer-short").addEventListener("blur", suggestId);
    document.getElementById("composer-title").addEventListener("blur", suggestId);
    document.getElementById("composer-id").addEventListener("input", function () {
      this.dataset.touched = this.value.trim() ? "1" : "";
    });

    form.addEventListener("submit", function (event) {
      event.preventDefault();
      if (publishing) return;
      if (!isLoggedIn()) {
        setComposerStatus("请先登录。", "err");
        return;
      }
      setComposerStatus("", "");
      var built;
      try {
        built = buildItemFromForm();
      } catch (error) {
        setComposerStatus(publicError(error, tokenInput.value), "err");
        return;
      }
      if (built.error) {
        setComposerStatus(built.error, "err");
        return;
      }
      var token = tokenInput.value.replace(/\s+/g, "");
      tokenInput.value = token;
      if (!token || token.length < 20) {
        setComposerStatus("请粘贴仓库写权限令牌。细粒度 PAT 只需本仓库 Contents 读写。", "err");
        tokenInput.focus();
        return;
      }
      try {
        assertClean(token, JSON.stringify(built.item));
        writeToken(token);
      } catch (error) {
        setComposerStatus(publicError(error, token), "err");
        return;
      }
      var idInput = document.getElementById("composer-id");
      idInput.value = built.item.id;
      idInput.dataset.touched = "1";
      setComposerBusy(true);
      publishItem(token, built).then(function (catalog) {
        indexCatalog(catalog);
        renderCells();
        syncTiles();
        syncCounts();
        markFresh(built.item.id);
        var portalLabel = portalById[built.item.portal] && portalById[built.item.portal].short;
        if (!portalLabel) portalLabel = built.item.portal;
        if (status) status.textContent = "已新增「" + built.item.short + "」。";
        setComposerBusy(false);
        resetComposerFields();
        tokenInput.value = token;
        setComposerStatus("已提交，公开站约几分钟内刷新；可硬刷新查看。这条已出现在「" + portalLabel + "」。", "ok");
      }).catch(function (error) {
        setComposerBusy(false);
        setComposerStatus(publicError(error, token), "err");
      });
    });

    document.getElementById("composer-cancel").addEventListener("click", function () {
      if (publishing) return;
      dialog.close();
    });
    dialog.addEventListener("click", function (event) {
      if (event.target !== dialog || publishing) return;
      dialog.close();
    });
    dialog.addEventListener("cancel", function (event) {
      if (publishing) event.preventDefault();
    });
  }


  function logout() {
    try { localStorage.removeItem(SESSION_KEY); } catch (error) { /* ignore */ }
    clearToken();
    var composer = document.getElementById("composer");
    if (composer && composer.open) composer.close();
    renderSession();
    refreshOpenDetail();
  }

  function openLogin() {
    hideLoginError();
    loginPass.value = "";
    if (!loginDialog.open) loginDialog.showModal();
    loginUser.focus();
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

  function appendCallout(actions, text) {
    var note = document.createElement("p");
    note.className = "callout";
    note.textContent = text;
    actions.append(note);
  }

  function appendLink(actions, href, label, title, className) {
    var link = document.createElement("a");
    link.className = className || "btn";
    link.href = href;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.textContent = label;
    var hint = document.createElement("span");
    hint.className = "sr-only";
    hint.textContent = "：" + title + "（新标签页打开）";
    link.append(hint);
    actions.append(link);
  }

  function appendAdmin(actions, item) {
    if (!isLoggedIn()) return;
    var editUrl = httpUrl(item.notionEditUrl);
    if (!editUrl) return;
    appendLink(actions, editUrl, "在 Notion 编辑", item.title, "btn btn-ghost");
    appendCallout(actions, NOTION_EMPTY);
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

    var remark = document.getElementById("detail-remark");
    if (item.remark) {
      remark.hidden = false;
      remark.textContent = item.remark;
    } else {
      remark.hidden = true;
      remark.textContent = "";
    }

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
    var href = item.access === "exhibit" ? "" : httpUrl(item.href);
    var loggedIn = isLoggedIn();

    if (item.access === "public" && href) {
      appendLink(actions, href, "打开页面", item.title);
    } else if (item.access === "beta") {
      appendCallout(actions, "内测 / 中断 · 暂无入口");
    } else if (item.access === "exhibit") {
      /* Remark is already in the dialog body. No outbound link. */
    } else if (!href) {
      appendCallout(actions, "暂无外链");
    } else if (!loggedIn) {
      appendCallout(actions, "内部链接，登录后可打开。");
      var gate = document.createElement("button");
      gate.type = "button";
      gate.className = "btn";
      gate.textContent = "登录";
      gate.addEventListener("click", openLogin);
      actions.append(gate);
    } else {
      appendLink(actions, href, "打开链接", item.title);
    }

    appendAdmin(actions, item);
  }

  var aliases = { "sop-five": "sop-marketing" };

  function openDetail(id, options) {
    var item = byId[aliases[id] || id];
    if (!item) return;
    currentId = item.id;
    pinIsland(item.portal);
    fillDetail(item);
    if (!options || options.updateHash !== false) rememberPortal(item.portal);
    if (!dialog.open) dialog.showModal();
  }

  function syncTiles() {
    document.querySelectorAll(".cell").forEach(function (button) {
      var item = byId[button.dataset.id];
      if (!item) return;
      var label = ACCESS[item.access] || item.access;
      var badgeNode = button.querySelector(".badge");
      if (badgeNode) {
        badgeNode.dataset.access = item.access;
        badgeNode.textContent = label;
      }
      button.setAttribute("aria-label", item.title + "，" + label);
    });
  }

  function syncCounts() {
    var tally = { all: items.length, internal: 0, public: 0, pack: 0, exhibit: 0, beta: 0 };
    items.forEach(function (item) {
      if (tally[item.access] != null) tally[item.access] += 1;
    });
    document.querySelectorAll("[data-count]").forEach(function (node) {
      var key = node.getAttribute("data-count");
      if (tally[key] != null) node.textContent = String(tally[key]);
    });
  }

  document.querySelectorAll(".island").forEach(function (island) {
    island.addEventListener("click", function () {
      pinIsland(island.dataset.portal);
    });
  });

  document.querySelector(".islands").addEventListener("click", function (event) {
    var button = event.target.closest(".cell");
    if (!button) return;
    event.stopPropagation();
    openDetail(button.dataset.id);
  }, true);

  document.getElementById("detail-close").addEventListener("click", function () {
    dialog.close();
  });
  dialog.addEventListener("click", function (event) {
    if (event.target === dialog) dialog.close();
  });
  dialog.addEventListener("close", function () { currentId = null; });

  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    if (loginPending) return;
    var user = loginUser.value.trim();
    var pass = loginPass.value;
    if (!user || !pass) {
      showLoginError("请填写用户名和密码。");
      return;
    }
    if (user !== ADMIN_USER) {
      loginPass.value = "";
      showLoginError("用户名不正确。");
      loginUser.focus();
      return;
    }
    loginPending = true;
    sha256Hex(user + pass).then(function (digest) {
      loginPending = false;
      if (!sameHex(digest, ADMIN_DIGEST)) {
        loginPass.value = "";
        showLoginError("密码不正确，请重试。");
        loginPass.focus();
        return;
      }
      try {
        saveSession();
      } catch (error) {
        showLoginError("浏览器禁止了本地存储，这次登录无法保持。");
        return;
      }
      loginPass.value = "";
      hideLoginError();
      loginDialog.close();
      renderSession();
      refreshOpenDetail();
    }).catch(function () {
      loginPending = false;
      showLoginError("当前浏览器无法完成校验，请换用最新版 Chrome 或 Edge 打开。");
    });
  });

  document.getElementById("login-cancel").addEventListener("click", function () {
    loginDialog.close();
  });
  loginDialog.addEventListener("click", function (event) {
    if (event.target === loginDialog) loginDialog.close();
  });
  loginUser.addEventListener("input", hideLoginError);
  loginPass.addEventListener("input", hideLoginError);

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

  bindComposer();
  renderSession();
  var catalogNote = document.getElementById("catalog-note");
  if (catalogNote) {
    catalogNote.hidden = false;
    catalogNote.textContent = "正在读取目录…";
  }
  fetch("./assets/catalog.json", { cache: "no-store" }).then(function (res) {
    if (!res.ok) throw new Error("HTTP " + res.status);
    return res.json();
  }).then(function (data) {
    indexCatalog(data);
    renderCells();
    syncTiles();
    syncCounts();
    if (catalogNote) catalogNote.hidden = true;
    applyHash();
  }).catch(function () {
    if (catalogNote) {
      catalogNote.hidden = false;
      catalogNote.textContent = "目录没有载入，瓷砖暂时无法显示。";
    }
  });
})();
