import React, { useState } from "react";

import Dialog from "../../../../components/dialog";
import LeaderboardScreen from "../../../../components/LeaderBoardScreen";
import "./styles.scss";

const LeaderboardDialog = () => {
  return (
    <Dialog>
      <LeaderboardScreen />
    </Dialog>
  );
};

export default LeaderboardDialog;
