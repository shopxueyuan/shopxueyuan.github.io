---
id: storefront-api
title: Storefront API 示例
---

以下示例演示如何从 Node 环境调用 Storefront GraphQL API 获取产品列表。

```bash
npm install @shopify/storefront-api-client
```

```js
// storefront-client.js
import {createStorefrontApiClient} from '@shopify/storefront-api-client';

const client = createStorefrontApiClient({
  storeDomain: '<your-dev-store.myshopify.com>',
  apiVersion: '2024-07',
  publicAccessToken: process.env.SHOPIFY_STOREFRONT_TOKEN,
});

export async function listProducts() {
  const query = `#graphql
    query products($first: Int!) {
      products(first: $first) {
        nodes {
          id
          title
          priceRange {
            minVariantPrice { amount currencyCode }
          }
        }
      }
    }
  `;

  const {data} = await client.request(query, {variables: {first: 10}});
  return data.products.nodes;
}
```

> 建议：在应用层实现缓存与速率控制，避免触发 Storefront API 限流；敏感密钥请使用环境变量管理。
