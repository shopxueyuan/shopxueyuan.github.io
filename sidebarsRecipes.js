// @ts-check

const sidebars = {
  recipesSidebar: [
    {
      type: 'doc',
      id: 'intro',
      label: '概览',
    },
    {
      type: 'category',
      label: 'Theme 片段',
      link: {type: 'doc', id: 'theme-snippets/index'},
      items: ['theme-snippets/locale-toggle', 'theme-snippets/cart-badge'],
    },
    {
      type: 'category',
      label: 'App 集成',
      link: {type: 'doc', id: 'app-integrations/index'},
      items: ['app-integrations/webhook-logger'],
    },
    {
      type: 'category',
      label: '数据与监控',
      link: {type: 'doc', id: 'analytics/index'},
      items: ['analytics/datalayer'],
    },
  ],
};

export default sidebars;
