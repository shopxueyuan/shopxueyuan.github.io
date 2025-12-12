---
id: workflow
title: 推荐的开发流程
---

1. 从 main 创建分支，拉取主题配置：`shopify theme pull --config`。
2. 开发并本地预览：`shopify theme dev`，将 URL 提供给评审人员。
3. 提交 PR：运行 `npm test`/`npm run lint`，在 PR 中附加预览链接与变更截图。
4. 合并后自动发布：CI 打包并推送到 theme 环境，或使用 GitHub Actions 调用 Admin API 部署。
5. 观察：合并后通过埋点验证关键事件（加入购物车、下单）。

> 若需要热修复，请在 main 打 tag 记录主题版本，方便快速回滚。
