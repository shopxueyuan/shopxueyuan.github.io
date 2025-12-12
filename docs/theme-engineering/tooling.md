---
id: tooling
title: 工具链与规范
---

- 包管理：推荐使用 `npm` 或 `pnpm`，锁定 Node.js 版本并开启 `engine` 校验。
- 代码质量：
  - Liquid：`@shopify/theme-check` 本地与 CI 一致运行。
  - JS/CSS：`eslint` + `stylelint` + `prettier`，在提交前执行 `lint-staged`。
- 组件化：把可复用块拆为 snippet/section，保持 schema 描述与翻译同步。
- 资产优化：使用 `@shopify/cli-hydrogen` 的 `assets upload` 或构建管线生成压缩资源。

示例 CI 片段：
```yaml
- name: Theme Check
  run: npm run theme-check
```
