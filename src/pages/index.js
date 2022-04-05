import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { BiDownload } from "react-icons/bi";
import { FaBook } from "react-icons/fa";

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className={clsx("button button--secondary button--lg", styles.alignMiddle)}
            style={{marginRight: '0.75rem'}}
            to="/docs/home">
            <FaBook style={{marginRight: '0.375rem'}}/>
            點擊查看維基
          </Link>
          <Link
            className={clsx("button button--warning button--lg", styles.alignMiddle)}
            to="https://xmikux.github.io/builds/">
            <BiDownload style={{marginRight: '0.375rem'}}/>建構頁面
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="一個簡單的繁體網站">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
