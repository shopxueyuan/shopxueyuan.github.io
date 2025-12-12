// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

const BAIDU_TONGJI_ID = process.env.BAIDU_TONGJI_ID || 'YOUR_BAIDU_TONGJI_ID';
const organizationName = process.env.ORGANIZATION_NAME || 'debingfeng';
const projectName = process.env.PROJECT_NAME || 'shopify';
const siteUrl = `https://${organizationName}.github.io`;
const siteBaseUrl = `/${projectName}/`;

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Shopify 学院',
  tagline: '面向开发者的 Shopify 学习与实践指南',
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

  scripts:
    process.env.NODE_ENV === 'production' &&
    BAIDU_TONGJI_ID !== 'YOUR_BAIDU_TONGJI_ID'
      ? [
          {
            id: 'baidu-tongji',
            content: `
              var _hmt = _hmt || [];
              (function() {
                var hm = document.createElement("script");
                hm.src = "https://hm.baidu.com/hm.js?${BAIDU_TONGJI_ID}";
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(hm, s);
              })();
            `,
          },
        ]
      : [],

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
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: '文档',
          },
          {
            type: 'docSidebar',
            sidebarId: 'recipesSidebar',
            docsPluginId: 'recipes',
            position: 'left',
            label: 'Recipes',
          },
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
            title: '文档',
            items: [
              {
                label: '站点介绍',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: '更多',
            items: [
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
