import React from "react";
import styles from "./master-of-chess.module.css";

const gameData = {
  description:
    "Octodad: Dadliest Catch is a game about destruction, deception, and fatherhood. The player controls Octodad, a dapper octopus masquerading as a human, as he goes about his life. Octodad's existence is a constant struggle, as he must master mundane tasks with his unwieldy boneless tentacles while simultaneously keeping his cephalopodan nature a secret from his human family.",
};

export default function Home(): JSX.Element {
  const MasterOfChessBannerUrl =
    require("@site/static/img/master_of_chess/master_of_chess_banner.jpg").default;
  const MasterOfChessSmallBannerUrl =
    require("@site/static/img/master_of_chess/small_capsule.png").default;
  const MasterOfChessIconUrl =
    require("@site/static/img/master_of_chess/master_of_chess_icon.png").default;
  const MatchScreenshotUrl =
    require("@site/static/img/master_of_chess/Match3.png").default;
  const ProgressScreenshotUrl =
    require("@site/static/img/master_of_chess/Progress.png").default;
  const OpeningsUrl =
    require("@site/static/img/master_of_chess/Openings2.png").default;
  const CampaignsUrl =
    require("@site/static/img/master_of_chess/Campaigns.png").default;
  const BRANEIconUrl = require("@site/static/img/BRANE.png").default;
  return (
    <div className={styles.centralAlign}>
      <div className={styles.hiddenBg}></div>
      <img
        className={styles.featureSvg}
        role="img"
        src={MasterOfChessBannerUrl}
      />
      <div className={styles.content}>
        <h1>Description</h1>
        <span>
          <b>Master of Chess</b> is a sports simulation game in which you guide
          a young prodigy from his early days to chess greatness. You develop
          the skills of your player, enter chess tournaments worldwide, analyze
          and expand your opening repertoire. <br /> <br />
          You slowly climb the ratings ladder with one goal in mind:
          <i> becoming the best chess player in the world!</i>
        </span>

        <h1>Factsheet</h1>
        <span>
          <ul>
            <li>
              <b>Developer: </b> BRANE
            </li>
            <li>
              <b>Release Date: </b> 2023, Q2
            </li>
            <li>
              <b>Genre: </b> Management, Chess, Simulation
            </li>
            <li>
              <b>Platforms: </b> Windows and Linux
            </li>
            <li>
              <b>Availability: </b>
              {"  "}
              <a href="https://store.steampowered.com/app/2248900/Master_of_Chess">
                <b>{"  STEAM"}</b>
              </a>
            </li>
          </ul>
          <h1>Video Trailer</h1>
          <iframe
            className={styles.youtubeVideo}
            src="https://www.youtube.com/embed/YXlsOy9k1po"
          ></iframe>
          <h1>Screenshots</h1>
          <div style={{ display: "flex", maxWidth: "100%" }}>
            <div>
              <img
                style={{ margin: "auto" }}
                src={MatchScreenshotUrl}
                alt="Match Screenshot"
              ></img>
            </div>
            <div>
              <img
                style={{ margin: "auto" }}
                src={ProgressScreenshotUrl}
                alt="Progress Screnshoot"
              ></img>
            </div>
          </div>
          <div style={{ display: "flex", maxWidth: "100%" }}>
            <div>
              <img
                style={{ margin: "auto" }}
                src={OpeningsUrl}
                alt="Openings Screenshot"
              ></img>
            </div>
            <div>
              <img
                style={{ margin: "auto" }}
                src={CampaignsUrl}
                alt="Campaigns Screenshot"
              ></img>
            </div>
          </div>
          <h1>About developer</h1>
          <span>
            <b>BRANE</b> is online pseudonym of Miloš, a game/software developer
            from Bosnia and Herzegovina, currently living and working in
            Germany. With some award winning game jam games and a lot more
            semi-finished nothing winning games on his portfolio he is the solo
            developer of the exciting chess management game - Master of Chess.
          </span>
          <h1>Logos</h1>
          <div style={{ display: "flex" }}>
            <img
              style={{ margin: "auto" }}
              src={MasterOfChessIconUrl}
              alt="Master of chess icon"
            ></img>
            <img
              style={{ margin: "auto" }}
              src={MasterOfChessSmallBannerUrl}
              alt="Master of chess icon"
            ></img>
            <img
              style={{ margin: "auto" }}
              src={BRANEIconUrl}
              alt="Master of chess icon"
            ></img>
          </div>
        </span>
      </div>
    </div>
  );
}
