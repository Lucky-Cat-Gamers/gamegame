import React from "react";
import axios from "axios";

import "../button/styles.scss";

const SaveButton = () => {
  function SaveScore() {
    console.log("Ran save score");

    return (dispatch, getState) => {
      const { level, gold } = getState().stats;

      console.log(getState().stats);

      axios
        .post("/save", {
          level: level,
          gold: gold,
        })
        .then((resp) => {
          console.log("Save request successful");
        });
    };
  }

  return (
    <button className="button__container" onClick={() => SaveScore}>
      <i className="fa fa-pen-nib button__icon"></i>

      <span>Save Score</span>
    </button>
  );
};

export default SaveButton;
