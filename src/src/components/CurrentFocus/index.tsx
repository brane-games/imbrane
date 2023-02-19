import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";
import { DetailsIcon } from "../Icons/DetailsIcon";

export default function CurrentFocus(): JSX.Element {
  const MasterOfChessIconUrl =
    require("@site/static/img/master_of_chess/master_of_chess_icon.png").default;
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
                <p
                  style={{
                    maxWidth: "500px",
                    margin: "auto",
                    paddingBottom: "12px",
                  }}
                >
                  My current project is a chess player simulation game. You take
                  control over one chess prodigy and guide him to chess
                  greatness.
                </p>
              </div>
              <div
                style={{
                  width: "200px",
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  paddingRight: "16px",
                }}
              >
                <a
                  href="https://store.steampowered.com/app/2248900/Master_of_Chess"
                  target={"_blank"}
                >
                  <button
                    style={{ margin: "auto", marginTop: "0px", height: "70px" }}
                    className={styles.button}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        margin: "auto",
                        width: "130px",
                      }}
                    >
                      <SteamIconLogo
                        style={{
                          height: "40px",
                        }}
                        role="img"
                      />
                      <span style={{ margin: "auto" }}>Wishlist</span>
                    </div>
                  </button>
                </a>
                <button
                  style={{ margin: "auto", marginTop: "0px", height: "70px" }}
                  className={styles.button}
                  onClick={() => {
                    (window as any).location =
                      window.location + "master-of-chess";
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "auto",
                      width: "130px",
                    }}
                  >
                    <DetailsIcon
                      style={{
                        height: "40px",
                      }}
                      role="img"
                    />
                    <span style={{ margin: "auto", marginLeft: "8px" }}>
                      Presskit
                    </span>
                  </div>
                </button>
              </div>
            </div>
          </div>
          <div className={clsx("col col--6") + " text--center"}>
            <iframe
              className={styles.youtubeVideo}
              src="https://www.youtube.com/embed/YXlsOy9k1po"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
