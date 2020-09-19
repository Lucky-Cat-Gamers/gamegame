import React, { useState } from "react";
import { connect } from "react-redux";
import GameMusic from "../../../game-menus/game-music";

import Button from "../../../../components/button";
import ConfirmDialog from "../../../../components/confirm-dialog";
import Dialog from "../../../../components/dialog";
import closeSettings from "../../actions/close-settings";
import LeaderBoard from "../../../game-menus/leaderboard";
import resetGameState from "../../../world/actions/reset-game-state";
import SaveButton from "../../../../components/save-button";

import "./settings-dialog.scss";

const SettingsDialog = ({ resetGameState, closeSettings }) => {
  const [confirmQuit, setConfirmQuit] = useState(false);

  return (
    <Dialog>
      <div className="flex-column settings-dialog__container">
        <span className="settings-dialog__title">{"Settings"}</span>

        <Button
          onClick={() => setConfirmQuit(true)}
          icon="caret-square-left"
          title="Return to Menu"
        />

        <SaveButton />

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
