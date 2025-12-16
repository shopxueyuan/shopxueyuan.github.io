# Shopify 学院（静态站点）

基于 Docusaurus Classic 的纯静态站点，面向开发者（Developer Track）提供中文文档与 Recipes，部署到 GitHub Pages / Cloudflare Pages，主域名为 `shopxueyuan.cn`。

## 本地开发
```bash
npm install       # 首次安装依赖
npm run start     # http://localhost:3000 预览
```
发布前可本地验证构建：
```bash
npm run build
```

## 文档/写作规范
- 内容放在 `docs/`（文档）与 `recipes/`（代码片段/示例），均使用 Markdown/MDX。
- 目录结构与侧边栏同步维护：`sidebars.js` 对应 docs，`sidebarsRecipes.js` 对应 recipes。
- 使用简体中文，标题保持清晰、可扫描；必要时在 Frontmatter 中写明 `id` 与 `slug`。
- 如需编辑链接，请在 `docusaurus.config.js` 中更新 `editUrl`（目前使用占位 `<ORG>/<REPO>`）。
- Baidu 统计：部署时设置环境变量 `BAIDU_TONGJI_ID`（默认已内置 `e8de8aeb1991604e57e31a55ea8f696d`），生产环境会自动注入 HM 脚本。

## 部署与发布
- 主域名：`https://shopxueyuan.cn`（已在 `static/CNAME` 写入，GitHub Pages 会自动识别；若在 Cloudflare Pages，直接绑定该域名即可）。
- GitHub Pages：推送到 `main` 触发 `.github/workflows/deploy.yml`，执行 `npm ci && npm run build`，并将 `./build` 发布到 `gh-pages` 分支。
- Cloudflare Pages：在 Project → Settings → Environment variables 设置 `BAIDU_TONGJI_ID`、`SITE_URL=https://shopxueyuan.cn`（如需预览域可覆写），保持与生产一致。
- 可选环境变量：`ORGANIZATION_NAME`、`PROJECT_NAME`、`SITE_URL`、`SITE_BASE_URL`、`BAIDU_TONGJI_ID`（填入你的百度统计 ID 后，生产环境会自动加载 hm.js）。
- 首次使用前：在 GitHub 仓库 Settings → Pages 选择 GitHub Actions（或允许使用 `gh-pages` 分支）；Cloudflare Pages 新建 Project 时选择本仓库并配置上述环境变量。

## 目录速览
- `docs/intro.md`：站点介绍与学习入口
- `docs/getting-started/`：环境准备与首个商店
- `docs/theme-engineering/`：主题工程化
- `docs/app-api/`：App / API 实践
- `docs/analytics/`：埋点与数据
- `recipes/`：可复用代码片段与集成示例

欢迎提交 PR 丰富文档与 Recipes！
