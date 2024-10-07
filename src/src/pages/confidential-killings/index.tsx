import React from "react";
import styles from "./confidential-killings.module.css";

export default function Home(): JSX.Element {
  const MasterOfChessBannerUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEzMC5wbmc=/original/IVqHa5.png";
  //   const MasterOfChessSmallBannerUrl =
  //     require("@site/static/img/master_of_chess/small_capsule.png").default;
  //   const MasterOfChessIconUrl =
  //     require("@site/static/img/master_of_chess/master_of_chess_icon.png").default;
  const MatchScreenshotUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEyOS5wbmc=/original/gzjCQ%2B.png";
  const OpeningsUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEzMi5wbmc=/original/M3EQly.png";
  const MatchVersusScreenUrl =
    "https://img.itch.zone/aW1hZ2UvMTgwMDAyMC8xNTQ3MDQ0NC5wbmc=/original/t2Cprv.png";
  const matchAnalysisUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEyOC5wbmc=/original/ji7hDF.png";
  const tournamentsUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEzMS5wbmc=/original/%2BSgHfD.png";
  const tournamentDetailsUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MjAyNi5wbmc=/original/h4ZVas.png";
  const createPlayerUrl =
    "https://img.itch.zone/aW1hZ2UvMzAyMTQzMi8xODA4MTEzMy5wbmc=/original/cvNwzX.png";

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
          Set in the glitzy world of Hollywood in the late '70s,{" "}
          <b>Confidential Killings</b> have you investigate a series of gruesome
          murders that seem connected. There are rumours about a mysterious cult
          behind them... Explore the crime scenes, use your detective skills to
          deduce what's going on!
        </span>

        <h1>Factsheet</h1>
        <span>
          <ul>
            <li>
              <b>Developer: </b> BRANE
            </li>
            <li>
              <b>Release Date: </b>Q4 2025
            </li>
            <li>
              <b>Genre: </b> Puzzle, Adventure, Detective
            </li>
            <li>
              <b>Platforms: </b> Windows
            </li>
            <li>
              <b>Availability: </b>
              {"  "}
              <a href="https://branegames.itch.io/confidential-killings">
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
                  alt="pedro closeup"
                ></img>
              </a>
            </div>
            <div>
              <a href={OpeningsUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={OpeningsUrl}
                  alt="bradley"
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
                  alt="mansion"
                ></img>
              </a>
            </div>
            <div>
              <a href={createPlayerUrl} target="_blank">
                <img
                  style={{ margin: "auto" }}
                  src={tournamentDetailsUrl}
                  alt="solving case"
                ></img>
              </a>
            </div>
          </div>
          <div style={{ display: "flex", width: "100%" }}>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={matchAnalysisUrl} target="_blank">
                <img src={matchAnalysisUrl} alt="policeman"></img>
              </a>
            </div>
            <div style={{ margin: "auto", width: "50%" }}>
              <a href={tournamentsUrl} target="_blank">
                <img src={tournamentsUrl} alt="garage"></img>
              </a>
            </div>
          </div>

          <h1>About developer</h1>
          <span>
            <b>BRANE</b> is the online pseudonym of Miloš, a game developer from
            Bosnia and Herzegovina, now living in Germany. After winning a few
            game jams and failing at many more, he developed a chess career
            simulation game - Master of Chess. While working on that project, he
            teamed up with Lorenzo Boni, a game developer from Italy. Both
            shared a love for point-and-click adventures and hardboiled
            detective novels, inspiring them to collaborate on their next
            project: the detective game <b>Confidential Killings</b>.
          </span>
          <h1>Fonts used</h1>
          <span>Kalam</span>
          <br />
          <span>Komika</span>
          <div style={{ display: "flex", flexWrap: "wrap" }}>
            <img
              style={{ margin: "auto", padding: "16px" }}
              src={BRANEIconUrl}
              alt="Master of chess icon"
            ></img>
          </div>
        </span>
      </div>
    </div>
  );
}
