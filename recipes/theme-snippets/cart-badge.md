---
id: cart-badge
title: Header 购物车数量徽标
---

在 Header 中展示实时购物车商品数量，并监听购物车更新事件。

```liquid
{% comment %} cart-badge.liquid {% endcomment %}
<a href="/cart" class="CartBadge" data-cart-badge>
  🛒 <span data-cart-count>0</span>
</a>
<script>
  window.addEventListener('DOMContentLoaded', () => {
    const countEl = document.querySelector('[data-cart-count]');

    async function refreshCount() {
      const response = await fetch('/cart.js');
      const cart = await response.json();
      countEl.textContent = cart.item_count;
    }

    document.addEventListener('cart:refresh', refreshCount);
    refreshCount();
  });
</script>
```

在 AJAX 加购成功后触发 `cart:refresh` 事件，即可同步徽标数量。
