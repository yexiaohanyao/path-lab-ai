# 知识展示台：目录与新增展示

访客看到的瓷砖来自 `knowledge/assets/catalog.json`。`knowledge/assets/showcase.js` 读取这份目录，按板块铺到五个瓷砖岛。GitHub Pages 没有后端。

页头登录只是这台浏览器里的软开关（大约 12 小时），用来暂时打开内部链接和「在 Notion 编辑」。它不是服务器账号。能改仓库的，是管理员自己的 GitHub 令牌。

## 新增一条展示

1. 在 GitHub 创建细粒度个人访问令牌（PAT）：
   - Settings → Developer settings → Personal access tokens → Fine-grained tokens → Generate new token
   - Repository access：只选 `yexiaohanyao/path-lab-ai`
   - Permissions：Contents 设为 **Read and write**
   - 生成后只显示一次。不要发给别人，不要写进仓库、截图或聊天记录。
2. 打开知识展示台，用管理员账号登录。
3. 点「新增展示」。
4. 把令牌粘贴到「仓库写权限令牌」。令牌只留在本次浏览器会话（`sessionStorage`）。退出登录或关闭标签页会清掉。浏览器只把它发给 `api.github.com`，不会写进提交说明、页面地址或目录正文。
5. 填写板块、短名、全名、摘要、详情和徽章。链接、Notion 地址、备注可以留空。封面可以上传（尽量 16:10，存到 `knowledge/covers/`），也可以填写站内已有相对路径。配图可选，存到 `knowledge/gallery/`。
6. 标识 id 留空时按短名生成。纯中文短名会用 `card-日期时间`。id 必须全站唯一，只能是小写英文、数字和短横线。
7. 点「提交到 gh-pages」。封面和每张配图各一次提交，目录 JSON 最后写入。成功后本页会马上多出这块瓷砖。公开站通常几分钟内更新，可以硬刷新查看。

令牌无效或权限不够时，页面会直接写出 GitHub 的 401 / 403。令牌如果泄露，到 GitHub 的令牌设置里立刻撤销。

如果 `gh-pages` 开了分支保护、不允许这个账号直接推送，提交也会失败。需要让令牌对应的账号可以写入该分支。

软登录挡不住拿到密码的人打开这个表单。写仓库的门是令牌，请分开保管，也不要把本站登录密码填进令牌框。

## Notion

已有条目如果带了 `notionEditUrl`，登录后详情里仍会显示「在 Notion 编辑」。这个按钮只打开 Notion，浏览器不会回写 Notion。

在 Notion 里改已有文案之后，公开站不会自动变。要让访客看到修改，需要更新 `knowledge/assets/catalog.json` 并进入 `gh-pages`。新卡片不用再等机器人同步，用上面的「新增展示」即可。

## 目录字段

每条常用字段：`id`、`portal`（`ops` / `product` / `vibe` / `beta` / `fengxu`）、`short`、`title`、`summary`、`detail`、`access`（`internal` / `public` / `pack` / `exhibit` / `beta`）、`href`、`notionEditUrl`、`cover`、`alt`。可选 `gallery`、`remark`、`parts`、`parent`。

徽章文案：`internal` 内部资料，`public` 公共站点，`pack` 资料包，`exhibit` 仅展示，`beta` 内测。
