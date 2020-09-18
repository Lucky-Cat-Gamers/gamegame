import React, { useState } from "react";

import Dialog from "../../../../components/dialog";
import LeaderBoardScreen from "../../../../components/LeaderBoardScreen";
import "./styles.scss";

const LeaderboardDialog = () => {
  return (
    <Dialog>
      <LeaderBoardScreen />
    </Dialog>
  );
};

export default LeaderboardDialog;
