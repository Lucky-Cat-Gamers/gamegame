import React from "react";
import { connect } from "react-redux";

import toggleLeaderboard from "../../dialog-manager/actions/toggle-leaderboard";
import toggleSettings from "../../dialog-manager/actions/toggle-settings";

import "./styles.scss";

const LeaderBoard = ({ toggleLeaderboard, toggleSettings }) => {
  function masterToggle() {
    toggleLeaderboard();
    toggleSettings();
  }

  return (
    <button
      onClick={masterToggle}
      className="game-settings__button white-border"
    >
      <i className={`fas fa-trophy game-settings__icon`} />
    </button>
  );
};

const actions = { toggleLeaderboard };

export default connect(null, actions)(LeaderBoard);
