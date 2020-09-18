import React from "react";
import axios from "axios";
import store from "../../config/store";
import "../button/styles.scss";

const SaveButton = () => {
  const SaveScore = () => {
    console.log("Ran save score");
    var stateLoad = store.getState();
    const { level, gold } = stateLoad.stats;

    console.log(`Level: ${level} Gold: ${gold}`);
    // return (dispatch, getState) => {
    //   const { stats, level, gold } = getState();

    //   console.log(stats);

    axios
      .post("https://witchfall.herokuapp.com/save", {
        level: level,
        gold: gold,
      })
      .then((resp) => {
        console.log("Save request successful");
      });
  };

  return (
    <button className="button__container" onClick={() => SaveScore()}>
      <i className="fa fa-pen-nib button__icon"></i>

      <span>Save Score</span>
    </button>
  );
};

export default SaveButton;
