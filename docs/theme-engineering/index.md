---
id: index
title: Theme 工程化概览
---

本章聚焦主题开发的工程实践，确保多人协作、质量可控、可快速回滚。

## 核心思路
- Git 驱动：把主题代码纳入 Git，使用 Pull Request + 预览环境。
- 自动化：CI 检查（Lint、单元测试、可选视觉回归），CD 自动发布。
- 配置管理：区分 theme 配置数据与代码，使用 `shopify theme pull --config` 维护。

接下来将介绍工具链建议与推荐的日常开发流程。
