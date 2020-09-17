import React, { useState } from "react";
import { connect } from "react-redux";
import GameMusic from "../../../game-menus/game-music";
import axios from "axios";

import Button from "../../../../components/button";
import ConfirmDialog from "../../../../components/confirm-dialog";
import Dialog from "../../../../components/dialog";
import closeSettings from "../../actions/close-settings";
import resetGameState from "../../../world/actions/reset-game-state";

import "./settings-dialog.scss";

const SettingsDialog = ({ resetGameState, closeSettings }) => {
  const [confirmQuit, setConfirmQuit] = useState(false);

  const SaveScore = () => {
    return (dispatch, getState) => {
      const { level, gold } = getState().stats;

      axios
        .post("/save", {
          level: level,
          gold: gold,
        })
        .then((resp) => {
          console.log("Save request successful");
        });

      console.log("Ran save score");
    };
  };

  return (
    <Dialog>
      <div className="flex-column settings-dialog__container">
        <span className="settings-dialog__title">{"Settings"}</span>

        <Button
          onClick={() => setConfirmQuit(true)}
          icon="caret-square-left"
          title="Return to Menu"
        />

        <Button
          onClick={SaveScore}
          icon="pen-nib"
          title="Save Your Current Score"
        />

        <GameMusic />

        <Button onClick={closeSettings} icon="times" title="Close" />
      </div>

      <ConfirmDialog
        open={confirmQuit}
        text="Are you sure you want to quit? You will lose all progress..."
        onClose={() => setConfirmQuit(false)}
        confirm={resetGameState}
      />
    </Dialog>
  );
};

const actions = { resetGameState, closeSettings };

export default connect(null, actions)(SettingsDialog);
