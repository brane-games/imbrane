import React from "react";
import styles from "../master-of-chess.module.css";

export default function Home(): JSX.Element {
  const MasterOfChessBannerUrl =
    require("@site/static/img/master_of_chess/banner.jpg").default;

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
        <h1>Docs</h1>
        <span>
          <b>Master of Chess</b> is a chess player management game in which you
          guide a young prodigy from his first tournaments to chess greatness.
          Develop the skills of your player, play and win exciting matches,
          enter tournaments worldwide, expand your openings repertoire, earn
          chess titles and... blunder occasionally! <br /> <br />
          You slowly climb the ratings ladder with one goal in mind:
          <b> becoming the best chess player in the world!</b>
        </span>
        <h2>Screens</h2>
        <h3>Start menu screen</h3>
        <ul>
          <li>Needs settings modal</li>
          <li>
            Will probably have two more buttons in the Full game: Play Match,
            Solve Puzzles
          </li>
        </ul>
        <img
          className={styles.featureSvg}
          role="img"
          src={MasterOfChessBannerUrl}
        />
      </div>
    </div>
  );
}
