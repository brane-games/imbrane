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
      <p>♟️ In 2024 I've released Master of Chess to Steam Early Access. <a href="https://store.steampowered.com/app/2248900/Master_of_Chess/">Link to Steam</a> / <a href="/master-of-chess">Link to presskit</a></p> 
      <p>📕 You can check out my blog here. <a href="/blog">Link to blog</a></p>
      <p>🔵 Sometimes I post on socials: <a href="https://twitter.com/GamesBrane">X</a> / <a href="https://bsky.app/profile/branegames.bsky.social">Bluesky</a></p>
      <p>🫂 Connect with me on my Discord Channel: <a href="https://discord.gg/HYV8Zz8V2Q">Link to Discord</a></p>
      <p>🕹️ Check out my other games on itch.io <a href="https://branegames.itch.io/">Link to itch.io</a></p>
    </section>
  );
}
