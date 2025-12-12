---
id: setup
title: 环境准备
---

1. 注册 Shopify Partner 账户并创建开发商店，开启单点登录（SSO）。
2. 安装依赖：
   - Node.js 20+（`node -v` 验证）
   - Git（保持主干 main）
   - Shopify CLI：`npm install -g @shopify/cli @shopify/theme`。
3. 登录并验证：
   ```bash
   shopify auth login --store <your-dev-store.myshopify.com>
   shopify theme dev
   ```
   若能看到本地预览链接即表示就绪。
4. 推荐 VS Code 扩展：ESLint、Prettier、Liquid、Shopify Liquid Preview。

> 提示：团队协作时统一 Node.js 版本，可使用 `.nvmrc` 固定版本并在 CI 中验证。
