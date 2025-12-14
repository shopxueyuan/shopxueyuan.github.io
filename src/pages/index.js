// src/pages/index.js
import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Heading from "@theme/Heading";
import styles from "./index.module.css";

function Section({ title, subtitle, children }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2">{title}</Heading>
          {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
        </div>
        {children}
      </div>
    </section>
  );
}

function CardGrid({ items }) {
  return (
    <div className={styles.grid}>
      {items.map((it) => (
        <div key={it.title} className={styles.card}>
          <Heading as="h3">{it.title}</Heading>
          <p className={styles.cardDesc}>{it.desc}</p>
          <div className={styles.cardActions}>
            <Link className="button button--primary" to={it.to}>
              {it.cta || "进入"}
            </Link>
            {it.secondaryTo ? (
              <Link className="button button--secondary" to={it.secondaryTo}>
                {it.secondaryCta || "查看"}
              </Link>
            ) : null}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function Home() {
  const tracks = [
    {
      title: "开发者 Developer Track",
      desc: "Theme / Liquid、App & API、Webhook、性能与工程规范。当前重点建设。",
      to: "/docs/tracks/developer/",
      cta: "从这里开始",
      secondaryTo: "/docs/resources/recipes/",
      secondaryCta: "看 Recipes",
    },
    {
      title: "运营者 Operator Track",
      desc: "转化漏斗、PDP/Cart/Checkout 优化、归因与 AB Test、AI 辅助运营。",
      to: "/docs/tracks/operators/",
      cta: "进入路径",
      secondaryTo: "/docs/topics/cro-growth",
      secondaryCta: "看增长知识库",
    },
    {
      title: "中小商家 Merchant Track",
      desc: "快速上线、选主题插件、支付物流税务、上线清单与避坑指南。",
      to: "/docs/tracks/merchants/",
      cta: "进入路径",
      secondaryTo: "/docs/resources/checklists",
      secondaryCta: "看清单",
    },
    {
      title: "企业 Enterprise Track",
      desc: "多店铺/多市场、数据与 BI、系统集成、团队协同与规模化增长。",
      to: "/docs/tracks/enterprise/",
      cta: "进入路径",
      secondaryTo: "/docs/enterprise-services/solutions",
      secondaryCta: "解决方案",
    },
  ];

  const topics = [
    { title: "Shopify 基础", desc: "平台认知、关键概念、选型与边界。", to: "/docs/topics/shopify-basics", cta: "查看" },
    { title: "转化与增长", desc: "PDP/Cart/Checkout、实验方法、增长框架。", to: "/docs/topics/cro-growth", cta: "查看" },
    { title: "技术与开发", desc: "Theme 工程、App/API、性能与安全。", to: "/docs/topics/engineering", cta: "查看" },
    { title: "数据与分析", desc: "事件模型、归因、数据流与报表。", to: "/docs/topics/data-analytics", cta: "查看" },
    { title: "AI & 自动化", desc: "工作流自动化、内容生成、运营提效。", to: "/docs/topics/ai-automation", cta: "查看" },
  ];

  const resources = [
    { title: "Checklist", desc: "上线/改版/性能/数据等可执行清单。", to: "/docs/resources/checklists", cta: "打开" },
    { title: "Templates", desc: "PRD、规范、埋点方案、评审模板。", to: "/docs/resources/templates", cta: "打开" },
    { title: "Recipes", desc: "可复制的实战方案（含代码与步骤）。", to: "/docs/resources/recipes", cta: "打开" },
    { title: "Snippets", desc: "高频代码片段库（可直接粘贴）。", to: "/docs/resources/snippets", cta: "打开" },
    { title: "Diagrams", desc: "架构图、数据流、协作流程图。", to: "/docs/resources/diagrams", cta: "打开" },
    { title: "术语表", desc: "概念统一，避免沟通成本。", to: "/docs/resources/glossary", cta: "打开" },
  ];

  return (
    <Layout
      title="Shopify 学院"
      description="面向中文地区的 Shopify 生态实践平台：学习路径、知识库、资源库与企业服务。"
    >
      <header className={styles.hero}>
        <div className="container">
          <Heading as="h1" className={styles.heroTitle}>
            Shopify 学院
          </Heading>
          <p className={styles.heroSubtitle}>
            面向中文地区的 Shopify 生态实践平台。当前重点建设 Developer Track，其余方向逐步完善。
          </p>

          <div className={styles.heroActions}>
            <Link className="button button--primary button--lg" to="/docs/tracks/developer/">
              从开发者路径开始
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/enterprise-services/">
              企业服务与咨询
            </Link>
          </div>

          <div className={styles.heroMeta}>
            <span>✅ 学习路径</span>
            <span>✅ 知识库</span>
            <span>✅ 资源库</span>
            <span>✅ 社区共建</span>
          </div>
        </div>
      </header>

      <main>
        <Section title="学习路径" subtitle="按人群进入：运营 / 商家 / 企业 / 开发者（同一套知识骨架，不割裂）">
          <CardGrid items={tracks} />
        </Section>

        <Section title="知识库" subtitle="按主题横向检索：从基础、增长到工程与数据">
          <CardGrid items={topics} />
        </Section>

        <Section title="资源库" subtitle="把“经验”沉淀成可复用资产：清单、模板、方案、代码片段与架构图">
          <CardGrid items={resources} />
        </Section>

        <Section title="企业服务" subtitle="提供架构评审 / 性能优化 / 数据体系 / 内训等企业级落地支持">
          <div className={styles.ctaRow}>
            <Link className="button button--primary button--lg" to="/docs/enterprise-services/solutions">
              查看解决方案
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/enterprise-services/contact">
              预约咨询
            </Link>
          </div>
        </Section>

        <Section title="社区" subtitle="先轻社区：讨论、问答与内容共建（初期建议接入 GitHub Discussions）">
          <div className={styles.ctaRow}>
            <Link className="button button--primary" to="/docs/community/discussions">
              进入讨论
            </Link>
            <Link className="button button--secondary" to="/docs/community/contribute">
              如何贡献内容
            </Link>
          </div>
        </Section>

        <Section title="更新日志" subtitle="建立持续建设的信任：每周更新、可追溯版本">
          <div className={styles.ctaRow}>
            <Link className="button button--primary" to="/docs/changelog/">
              查看更新
            </Link>
          </div>
        </Section>
      </main>
    </Layout>
  );
}
