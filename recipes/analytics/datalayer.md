---
id: datalayer
title: DataLayer 结构（百度统计）
---

在主题中维护统一的数据层，便于百度统计或其他分析工具消费。

```liquid
{% comment %} layout/theme.liquid {% endcomment %}
<script>
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: 'page_view',
    shop_id: '{{ shop.id }}',
    currency: '{{ cart.currency.iso_code }}',
    locale: '{{ request.locale.iso_code }}',
    template: '{{ template }}',
  });
</script>
```

在具体页面（如产品详情）追加业务字段：
```liquid
<script>
  window.dataLayer.push({
    event: 'product_view',
    product_id: '{{ product.id }}',
    variant_id: '{{ product.selected_or_first_available_variant.id }}',
    price: '{{ product.selected_or_first_available_variant.price | money_without_currency }}'
  });
</script>
```

> 与百度统计结合时，可在 HM 初始化后读取 `dataLayer` 并转化为自定义事件。
