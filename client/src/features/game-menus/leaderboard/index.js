import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";

import toggleLeaderboard from "../../dialog-manager/actions/toggle-leaderboard";

import "./styles.scss";

const LeaderBoard = ({ toggleLeaderboard }) => {
  return (
    <button
      onClick={toggleLeaderboard}
      className="game-settings__button"
    >
      <i className={`fas fa-trophy game-settings__icon`} />
    </button>
  );
};

const actions = { toggleLeaderboard };

export default connect(null, actions)(LeaderBoard);
