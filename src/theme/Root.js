import React from 'react';
import Head from '@docusaurus/Head';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Root({children}) {
  const {siteConfig} = useDocusaurusContext();
  const baiduTongjiId = siteConfig.customFields?.baiduTongjiId;
  const description =
    'Shopify 学院：面向商家、运营、开发与企业决策者的中文实践平台，涵盖选品与转化、运营增长、主题与 App 工程、架构与治理，以及可复用的 Recipes 与清单。';
  const keywords =
    'Shopify 学院,Shopify 商家,Shopify 运营,Shopify 开发,Shopify 企业,Shopify Theme,Shopify App,Shopify API,Shopify 转化率,Shopify 架构';
  const isProd = process.env.NODE_ENV === 'production';

  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta property="og:site_name" content={siteConfig.title} />
        <meta property="og:locale" content="zh_CN" />
        <meta property="og:description" content={description} />
        <meta
          name="360-site-verification"
          content="d7f774275e636e94cba07661e4b40229"
        />
        {isProd && baiduTongjiId && (
          <>
            <script
              dangerouslySetInnerHTML={{
                __html: 'window._hmt = window._hmt || [];',
              }}
            />
            <script src={`https://hm.baidu.com/hm.js?${baiduTongjiId}`} />
          </>
        )}
      </Head>
      {children}
    </>
  );
}
