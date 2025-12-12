// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  docsSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '站点介绍',
    },
    {
      type: 'category',
      label: '入门',
      link: {type: 'doc', id: 'getting-started/index'},
      items: [
        'getting-started/setup',
        'getting-started/first-store',
      ],
    },
    {
      type: 'category',
      label: 'Theme 工程化',
      link: {type: 'doc', id: 'theme-engineering/index'},
      items: [
        'theme-engineering/tooling',
        'theme-engineering/workflow',
      ],
    },
    {
      type: 'category',
      label: 'App / API',
      link: {type: 'doc', id: 'app-api/index'},
      items: [
        'app-api/app-scaffold',
        'app-api/storefront-api',
      ],
    },
    {
      type: 'category',
      label: '埋点 / 数据',
      link: {type: 'doc', id: 'analytics/index'},
      items: [
        'analytics/event-design',
        'analytics/verify',
      ],
    },
  ],
};

export default sidebars;
