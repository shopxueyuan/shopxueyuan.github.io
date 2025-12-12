---
id: locale-toggle
title: 多语言切换按钮
---

在主题导航中添加语言切换按钮，自动高亮当前语言。

```liquid
{% comment %} locale-toggle.liquid {% endcomment %}
{% assign locales = shop.enabled_locales %}
{% if locales.size > 1 %}
  <div class="LocaleToggle">
    {% for locale in locales %}
      <a
        href="{{ request.path | within: locale }}"
        class="LocaleToggle__item {% if request.locale.iso_code == locale.iso_code %}is-active{% endif %}"
        hreflang="{{ locale.iso_code }}"
      >
        {{ locale.endonym_name }}
      </a>
    {% endfor %}
  </div>
{% endif %}
```

样式示例：
```css
.LocaleToggle {
  display: inline-flex;
  gap: 8px;
  font-size: 14px;
}
.LocaleToggle__item {
  padding: 4px 8px;
  border-radius: 6px;
  text-decoration: none;
  color: #111827;
  background: #f3f4f6;
}
.LocaleToggle__item.is-active {
  background: #0f172a;
  color: #fff;
}
```
