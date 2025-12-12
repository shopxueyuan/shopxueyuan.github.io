---
id: event-design
title: 事件设计与命名
---

- 命名风格：`对象_动作`，示例 `product_view`, `cart_add`, `checkout_complete`。
- 公共属性：`shop_id`、`customer_id`（匿名则为空）、`session_id`、`currency`、`locale`。
- 业务属性：产品类事件包含 `product_id`、`variant_id`、`collection_id`；订单事件包含 `order_id`、`total_price`、`discount_total`。
- 版本管理：在 README 或数据字典中维护事件 schema 版本，埋点变更需 PR 评审。

推荐使用 TypeScript 定义事件类型，生成追踪器的类型提示，减少埋点错误。
