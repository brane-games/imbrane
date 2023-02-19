import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import CurrentFocus from "../components/CurrentFocus";
import { BookIcon } from "../components/Icons/BookIcon";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={"container " + styles.heroStuff}>
        <div style={{ margin: "auto" }}>
          <h1 className={clsx("hero--title", styles.imbrane)}>
            <img
              className={clsx("img--primary", styles.imgPrimary)}
              src="/img/imbrane.png"
            />
          </h1>
          <h3>I make games.</h3>
          <a className={styles.myBlogLink} href="/blog">
            <BookIcon width="40px" color={"var(--ifm-heading-color)"} />
            <span style={{ marginLeft: "16px", marginBottom: "8px" }}>
              My blog
            </span>
          </a>
        </div>
        {/* <p>Right now, that's <span style={{ fontWeight: 600 }}>👑 Master Of Chess ⬅️.</span></p> */}
        <img
          style={{ margin: "auto" }}
          className={clsx("img--primary", styles.imgPrimary)}
          src="/img/avatar.png"
        />
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <div>
      <HomepageHeader />
      <main>
        <div className={styles.indexContent}>
          <CurrentFocus />
        </div>
      </main>
      <div className={styles.paperOverlay} />
      <div id="background" className={styles.hiddenBg} />
    </div>
  );
}
