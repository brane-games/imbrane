import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className={"container " + styles.heroStuff}>
        <h1 className={clsx('hero--title', styles.imbrane)}>
          <img className={clsx('img--primary', styles.imgPrimary)} src="/img/imbrane.png" />
        </h1>
        <p>Аctually, my name is Milos and I make stuff I think are cool.</p>
        {/* <p>Right now, that's <span style={{ fontWeight: 600 }}>👑 Master Of Chess ⬅️.</span></p> */}
        {/* <img className={clsx('img--primary', styles.imgPrimary)} src="/img/avatar.png" /> */}
        <a href="/blog">My Blog</a><a>My Games</a>
      </div>

    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <div>
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </div>
  );
}
