import React from "react";
import { connect } from "react-redux";

import GameMusic from "./game-music";
import GameSettings from "./game-settings";
import Inventory from "../inventory";
import Snackbar from "../snackbar";
import Stats from "../stats";
import GoogleLogin from "../../components/google-login";
import LeaderBoard from "../../features/game-menus/leaderboard";

import "./styles.scss";

const GameMenus = ({ appState, dialog }) => {
  const { sideMenu, largeView } = appState;
  const { gameOver, gameStart, paused, inventory, settings } = dialog;

  // disable the inventory button when we are in settings or paused and not in the inventory
  const disableInventory = settings || (paused && !inventory);
  // disable the stats view when in game start or game over or settings
  const disableStats = gameStart || gameOver || settings;

  return (
    <div className="flex-row centered">
      <div
        className={`game-menu__container ${
          sideMenu ? "flex-column" : "flex-row"
        }`}
        style={{
          maxWidth: largeView ? 400 : 350,
          paddingLeft: sideMenu ? 4 : 0,
          height: sideMenu ? "380px" : "unset",
          justifyContent: disableInventory ? "flex-end" : "center",
        }}
      >
        <Stats
          largeView={largeView}
          sideMenu={sideMenu}
          disabled={disableStats} />

        <Inventory
          sideMenu={sideMenu}
          disabled={disableInventory} />

        <Snackbar
          largeView={largeView}
          sideMenu={sideMenu} />

        <div className="flex-column2">
          <GameMusic /> &nbsp;
          <GameSettings /> &nbsp;
          <LeaderBoard />
        </div>

        <GoogleLogin 
        largeView={largeView} 
        sideMenu={sideMenu} />
      </div>
    </div>
  );
};

const mapStateToProps = ({ appState, dialog }) => ({ appState, dialog });

export default connect(mapStateToProps)(GameMenus);
