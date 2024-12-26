import React from "react";
import clsx from "clsx";
import styles from "./index.module.css";
import CurrentFocus from "../components/CurrentFocus";
import EmailSubscription from "../components/EmailSubscription";

function HomepageHeader() {
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className={"container " + styles.heroStuff}>
        <div style={{ margin: "auto" }}>
          <h1 className={clsx("hero--title", styles.imbrane)}>
            <img
              className={clsx("img--primary", styles.imgPrimary)}
              src="/img/BRANE.png"
            />
          </h1>
          <p>I'm BRANE. I make games.</p>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  return (
    <div style={{ "height": "100%", "display": "flex", "flexDirection": "column" }}>
      <HomepageHeader />
      <main style={{"flex": 1}}>
        <div className={styles.indexContent}>
          <CurrentFocus />
          <EmailSubscription />
        </div>
      </main>
      <div style={{ "height": 70, "padding": 20, "display": 'flex', "justifyContent": 'center' }}>BRANE | 2024</div>
    </div>
  );
}
