import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const description =
    'Shopify 学院：面向中文开发者的 Shopify 学习与实践指南，覆盖 Theme 工程化、App/API、埋点与可复用 Recipes。';
  const keywords =
    'Shopify 学院,Shopify 开发,Shopify 中文文档,Shopify Theme,Shopify App,Shopify API,Shopify 埋点,Shopify 数据分析';

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:description" content={description} />
      </Head>
      {children}
    </>
  );
}
