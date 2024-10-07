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
          <a className={styles.myBlogLink} href="/blog">
            <BookIcon width="40px" color={"var(--ifm-heading-color)"} />
            <span style={{ marginLeft: "16px", marginBottom: "8px" }}>
              My blog
            </span>
          </a>
          <h3>I make games.</h3>
        </div>
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
          <iframe
            src="https://store.steampowered.com/widget/2248900/?t=Master%20of%20Chess%20is%20sports%20simulation%20game%20where%20you%20manage%20a%20chess%20prodigy%20from%20his%20first%20tournament%20to%20World%20Chess%20Champion%20title!%20Play%20tournaments%20worldwide%2C%20develop%20your%20opening%20repertoire%2C%20apply%20the%20right%20strategies%20and%20win%20chess%20matches%20as%20you%20slowly%20rise%20to%20chess%20stardom."
            width="646"
            height="190"
          ></iframe>
        </div>
      </main>
      <div className={styles.paperOverlay} />
      <div id="background" className={styles.hiddenBg} />
    </div>
  );
}
