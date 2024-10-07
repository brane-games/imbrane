import React from "react";
import styles from "./confidential-killings.module.css";

export default function Home(): JSX.Element {
  const MasterOfChessBannerUrl =
    require("@site/static/img/master_of_chess/banner.jpg").default;
  const MasterOfChessSmallBannerUrl =
    require("@site/static/img/master_of_chess/small_capsule.png").default;
  const MasterOfChessIconUrl =
    require("@site/static/img/master_of_chess/master_of_chess_icon.png").default;
  const MatchScreenshotUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0NS5wbmc=/original/Xm0dkp.png";
  const OpeningsUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0OC5wbmc=/original/bOd0gf.png";
  const MatchVersusScreenUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0NC5wbmc=/original/t2Cprv.png";
  const matchAnalysisUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0OS5wbmc=/original/8cWhg0.png";
  const tournamentsUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0My5wbmc=/original/G%2BwwHR.png";
  const tournamentDetailsUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0Mi5wbmc=/original/x76gQU.png";
  const createPlayerUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDUxMi5wbmc=/original/AWGz31.png";
  const puzzlesUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0Ni5wbmc=/original/3d9PQS.png";
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
          <b>Master of Chess</b> is a first & only chess career simulation game.
          Become a world chess champion, join tournaments world-wide, conquer
          grandmaster-rated AI opponents, solve chess puzzles, create a powerful
          opening repertoire and… blunder occasionally - it’s part of the game!
        </span>

        <h1>Factsheet</h1>
        <span>
          <ul>
            <li>
              <b>Developer: </b> BRANE
            </li>
            <li>
              <b>Release Date: </b>12th June 2024
            </li>
            <li>
              <b>Genre: </b> Simulation, Management, Chess
            </li>
            <li>
              <b>Platforms: </b> Windows and Linux
            </li>
            <li>
              <b>Availability: </b>
              {"  "}
              <a href="https://store.steampowered.com/app/2248900/Master_of_Chess">
                <b>{"  Steam"}</b>
              </a>
              <span> /</span>
              <a href="https://branegames.itch.io/master-of-chess">
                <b>{"  Itch.io"}</b>
              </a>
            </li>
          </ul>
          {/* <h1>Video Trailer</h1>
          <iframe
            className={styles.youtubeVideo}
            src="https://www.youtube.com/embed/ivoAyILPGIQ"
          ></iframe> */}
          <h1>Screenshots</h1>
          <div style={{ display: "flex", maxWidth: "100%" }}>
            <div>
              <a href={MatchScreenshotUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={MatchScreenshotUrl}
                  alt="Match Screenshot"
                ></img>
              </a>
            </div>
            <div>
              <a href={OpeningsUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={OpeningsUrl}
                  alt="Openings Screenshot"
                ></img>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", maxWidth: "100%" }}>
            <div>
              <a href={createPlayerUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={createPlayerUrl}
                  alt="Tournaments Screenshot"
                ></img>
              </a>
            </div>
            <div>
              <a href={puzzlesUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={puzzlesUrl}
                  alt="Campaigns Screenshot"
                ></img>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={MatchVersusScreenUrl} target="_blank">
                <img
                  src={MatchVersusScreenUrl}
                  alt="Create Player Screenshot"
                ></img>
              </a>
            </div>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={tournamentsUrl} target="_blank">
                <img src={tournamentsUrl} alt="Puzzles Screenshot"></img>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={tournamentDetailsUrl} target="_blank">
                <img
                  src={tournamentDetailsUrl}
                  alt="Create Player Screenshot"
                ></img>
              </a>
            </div>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={matchAnalysisUrl} target="_blank">
                <img src={matchAnalysisUrl} alt="Puzzles Screenshot"></img>
              </a>
            </div>
          </div>
          <h1>About developer</h1>
          <span>
            <b>BRANE</b> is online pseudonym of Miloš, a game developer from
            Bosnia and Herzegovina, currently living and working in Germany.
            With some award winning game jam games and a lot more semi-finished
            nothing winning games on his portfolio he is the solo developer of
            the exciting chess career simulation game - Master of Chess.
          </span>
          <h1>Assets</h1>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img
              style={{ margin: "auto" }}
              src={MasterOfChessIconUrl}
              alt="Master of chess icon"
            ></img>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={MasterOfChessSmallBannerUrl}
              alt="Master of chess icon"
            ></img>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={BRANEIconUrl}
              alt="Master of chess icon"
            ></img>
            <div style={{ display: "flex", padding: "16px" }}>
              <img
                style={{ margin: "auto", maxWidth: "50%", padding: "16px" }}
                src={
                  require("@site/static/img/master_of_chess/title2.png").default
                }
                alt="Master of chess title 2"
              ></img>
              <img
                style={{ margin: "auto", maxWidth: "50%", padding: "16px" }}
                src={
                  require("@site/static/img/master_of_chess/title1.png").default
                }
                alt="Master of chess title 1"
              ></img>
            </div>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={
                require("@site/static/img/master_of_chess/master.png").default
              }
              alt="Master of chess"
            ></img>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={require("@site/static/img/master_of_chess/bg.png").default}
              alt="background"
            ></img>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={
                require("@site/static/img/master_of_chess/banner.jpg").default
              }
              alt="background"
            ></img>
          </div>
          <h1>Fonts used</h1>
          <span>Paralines</span>
          <br />
          <span>Mr Dafoe</span>
          <p>Montserrat</p>
        </span>
      </div>
    </div>
  );
}
