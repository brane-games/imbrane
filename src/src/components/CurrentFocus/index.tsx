import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CurrentFocus(): JSX.Element {
  const MasterOfChessIconUrl =
    require("@site/static/img/master_of_chess_icon.png").default;

  const SteamIconLogo = require("@site/static/img/Steam_icon_logo.svg").default;
  console.log(MasterOfChessIconUrl);
  return (
    <section className={styles.features}>
      <div className={"container " + styles.features}>
        <div className={"row " + styles.focusRow}>
          <div className={clsx("col col--4")}>
            <iframe
              className={styles.youtubeVideo}
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
          </div>

          <div className={clsx("col col--4")}>
            <div className="text--center">
              <img
                className={styles.featureSvg}
                role="img"
                src={MasterOfChessIconUrl}
              />
            </div>
            <div
              className={"text--center padding-horiz--md " + styles.focusDesc}
            >
              <h1 className={styles.darkText}>Master of Chess</h1>
              <p>
                My current project is a chess player simulation game. You take
                control over one chess prodigy and guide him to chess greatness.
              </p>
            </div>
          </div>

          <a
            target="_blank"
            href="https://store.steampowered.com/app/2248900/Master_of_Chess?from=imbrane"
            className={clsx("col col--4") + " " + styles.button}
          >
            <div style={{ height: "32px" }}></div>
            <div className="text--center">
              <SteamIconLogo className={styles.featureSvg} role="img" />
            </div>
            <div className="text--center padding-horiz--md">
              <h1 className={styles.darkText}>Wishlist on Steam</h1>
              <p></p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
