# Shopify 学院（静态站点）

基于 Docusaurus Classic 的纯静态站点，面向开发者（Developer Track）提供中文文档与 Recipes，并通过 GitHub Actions 自动部署到 GitHub Pages。

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
- Baidu 统计：部署时设置环境变量 `BAIDU_TONGJI_ID`，生产环境会自动注入 HM 脚本。

## 部署与发布
- GitHub Pages 域名：`https://debingfeng.github.io/shopify/`，`baseUrl` 默认已配置为 `/shopify/`（可用环境变量覆盖）。
- 自动发布：推送到 `main` 会触发 `.github/workflows/deploy.yml`，执行 `npm ci && npm run build`，并将 `./build` 发布到 `gh-pages` 分支。
- 可选环境变量：`ORGANIZATION_NAME`、`PROJECT_NAME`、`BAIDU_TONGJI_ID`（填入你的百度统计 ID 后，生产环境会自动加载 hm.js）。
- 首次使用前，请在仓库 Settings → Pages 选择 GitHub Actions（或允许使用 `gh-pages` 分支）。

## 目录速览
- `docs/intro.md`：站点介绍与学习入口
- `docs/getting-started/`：环境准备与首个商店
- `docs/theme-engineering/`：主题工程化
- `docs/app-api/`：App / API 实践
- `docs/analytics/`：埋点与数据
- `recipes/`：可复用代码片段与集成示例

欢迎提交 PR 丰富文档与 Recipes！
