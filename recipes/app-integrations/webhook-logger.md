---
id: webhook-logger
title: Webhook 日志记录（Node）
---

在 Node App 中把 Webhook 请求记录到文件或外部服务，便于调试与重放。

```js
// webhook-logger.js
import fs from 'node:fs/promises';
import path from 'node:path';

export async function logWebhook(topic, shop, payload) {
  const logLine = JSON.stringify({
    ts: new Date().toISOString(),
    topic,
    shop,
    payload,
  });

  const target = path.join(process.cwd(), 'storage', 'webhook.log');
  await fs.mkdir(path.dirname(target), {recursive: true});
  await fs.appendFile(target, `${logLine}\n`);
}
```

在处理器中调用：
```js
shopify.webhooks.addHandlers({
  PRODUCTS_CREATE: {
    deliveryMethod: DeliveryMethod.Http,
    callbackUrl: '/webhooks/products/create',
    callback: async (topic, shop, body) => {
      await logWebhook(topic, shop, body);
    },
  },
});
```

上线后可替换为对象存储或日志服务（S3、Logtail 等），确保不阻塞主流程。
