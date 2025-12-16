// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const BAIDU_TONGJI_ID =
  process.env.BAIDU_TONGJI_ID || 'e8de8aeb1991604e57e31a55ea8f696d';
const organizationName = process.env.ORGANIZATION_NAME || 'shopxueyuan';
const projectName = process.env.PROJECT_NAME || 'shopxueyuan.github.io';
const siteUrl = process.env.SITE_URL || 'https://shopxueyuan.cn';
const siteBaseUrl = process.env.SITE_BASE_URL || '/';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shopify 学院',
  tagline: '面向开发者、运营者、中小商家与企业的 Shopify 全套知识与解决方案',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: siteUrl,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: siteBaseUrl,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName, // Usually your GitHub org/user name.
  projectName, // Usually your repo name.
  deploymentBranch: 'gh-pages',

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  customFields: {
    baiduTongjiId: BAIDU_TONGJI_ID,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
          routeBasePath: 'docs',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'recipes',
        path: 'recipes',
        routeBasePath: 'recipes',
        sidebarPath: './sidebarsRecipes.js',
        editUrl: `https://github.com/${organizationName}/${projectName}/edit/main/`,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'Shopify 学院',
        logo: {
          alt: 'Shopify 学院 Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'dropdown',
            label: '角色入口',
            position: 'left',
            items: [
              {label: '商家入口', to: '/for-merchants'},
              {label: '运营者入口', to: '/for-operators'},
              {label: '开发者入口', to: '/for-developers'},
              {label: '企业 / 决策者入口', to: '/for-enterprise'},
            ],
          },
          {
            type: 'dropdown',
            label: '学习路径',
            position: 'left',
            items: [
              {label: '开发者 Developer Track', to: '/docs/tracks/developer/'},
              {label: '运营者 Operator Track', to: '/docs/tracks/operators/'},
              {label: '中小商家 Merchant Track', to: '/docs/tracks/merchants/'},
              {label: '企业 Enterprise Track', to: '/docs/tracks/enterprise/'},
            ],
          },
          {label: '知识库', to: '/docs/topics/', position: 'left'},
          {label: '资源库', to: '/docs/resources/', position: 'left'},
          {label: '社区', to: '/docs/community/', position: 'left'},
          {label: '企业服务', to: '/docs/enterprise-services/', position: 'left'},
          {label: '更新日志', to: '/docs/changelog/', position: 'left'},
          {
            href: `https://github.com/${organizationName}/${projectName}`,
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '学习路径',
            items: [
              {
                label: '开发者 Track',
                to: '/docs/tracks/developer/',
              },
              {
                label: '运营者 Track',
                to: '/docs/tracks/operators/',
              },
              {
                label: '商家 Track',
                to: '/docs/tracks/merchants/',
              },
              {
                label: '企业 Track',
                to: '/docs/tracks/enterprise/',
              },
            ],
          },
          {
            title: '资源与社区',
            items: [
              {
                label: '知识库 Topics',
                to: '/docs/topics/',
              },
              {
                label: '资源库 Resources',
                to: '/docs/resources/',
              },
              {
                label: '社区',
                to: '/docs/community/',
              },
              {
                label: '更新日志',
                to: '/docs/changelog/',
              },
            ],
          },
          {
            title: '企业服务',
            items: [
              {
                label: '解决方案',
                to: '/docs/enterprise-services/solutions',
              },
              {
                label: '预约咨询',
                to: '/docs/enterprise-services/contact',
              },
              {
                label: 'Recipes',
                href: '/recipes',
              },
            ],
          },
          {
            title: '关于',
            items: [
              {
                label: '关于我们',
                href: '/about',
              },
              {
                label: '服务区域',
                href: '/about#service-area',
              },
            ],
          },
          {
            title: '联系',
            items: [
              {
                label: '联系邮箱',
                href: 'mailto:shopxueyuan2025@163.com',
              },
              {
                label: 'GitHub',
                href: `https://github.com/${organizationName}/${projectName}`,
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Shopify 学院`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
