import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

export default function CurrentFocus(): JSX.Element {
  const MasterOfChessIconUrl =
    require("@site/static/img/master_of_chess_icon.png").default;

  const BookIcon = require("@site/static/img/book.svg").default;
  const SteamIconLogo = require("@site/static/img/Steam_icon_logo.svg").default;

  return (
    <section className={styles.features}>
      <div className={"container " + styles.features}>
        <div className={"row"}>
          <div className={clsx("col col--6") + " text--center"}>
            <div className={styles.focusColumn}>
              <div>
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
                  control over one chess prodigy and guide him to chess
                  greatness.
                </p>
              </div>
            </div>
            <button
              style={{ margin: "auto", marginTop: "20px", height: "90px" }}
              className={styles.button}
            >
              <div className="row">
                <BookIcon style={{ height: "64px" }} role="img" />
                <h1
                  className={styles.darkText}
                  style={{ margin: "auto", marginRight: "30px" }}
                >
                  Blog
                </h1>
              </div>
            </button>
          </div>
          <div className={clsx("col col--6") + " text--center"}>
            <iframe
              className={styles.youtubeVideo}
              src="https://www.youtube.com/embed/tgbNymZ7vqY"
            ></iframe>
            <button
              style={{ margin: "auto", marginTop: "20px", height: "90px" }}
              className={styles.button}
            >
              <div className="row">
                <SteamIconLogo
                  style={{
                    height: "64px",
                    margin: "12px",
                    marginLeft: "30px",
                    marginRight: "30px",
                  }}
                  role="img"
                />
                <h1
                  className={styles.darkText}
                  style={{ margin: "auto", marginRight: "30px" }}
                >
                  Wishlist
                </h1>
              </div>
            </button>
            {/* <a
              target="_blank"
              href="https://store.steampowered.com/app/2248900/Master_of_Chess?from=imbrane"
              className={styles.button}
            >
              <div className="text--center">
                <SteamIconLogo className={styles.featureSvg} role="img" />
              </div>
              <div className="text--center padding-horiz--md">
                <p></p>
              </div>
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
