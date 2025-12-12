---
id: first-store
title: 创建首个可访问的商店
---

1. 在开发商店中创建示例产品和系列，开启支付测试模式。
2. 选择参考主题：
   - 直接使用 Dawn 主题，快速验证上线流程。
   - 或基于 Dawn Fork，新建 Git 仓库并配置 GitHub Actions（参考本项目）。
3. 主题本地预览：
   ```bash
   shopify theme pull
   shopify theme dev
   ```
4. 发布：在 Shopify 后台把预览主题设为「已发布」，并记录发布版本号（commit hash 或 tag）。

完成后，你已具备一个可访问的测试店铺，后续模块的实验都基于它进行。
