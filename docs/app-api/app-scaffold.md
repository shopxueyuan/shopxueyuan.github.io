---
id: app-scaffold
title: 使用 Shopify CLI 搭建 App
---

1. 选择模板（示例：Remix）：
   ```bash
   npm create @shopify/app@latest -- --template remix --name my-shopify-app
   ```
2. 本地开发：
   ```bash
   cd my-shopify-app
   npm install
   npm run dev
   ```
   使用 CLI 提供的隧道链接完成安装并触发 OAuth。
3. 配置 Session Storage：生产环境不要使用内存存储，可选 Redis/PostgreSQL；在 `shopify.app.toml` 中更新。
4. 必备中间件：请求日志、错误捕获、Webhook 验证、Rate Limit 重试。

完成以上步骤后，你将得到可登录的 App 骨架，可继续对接 Admin 或 Storefront API。
