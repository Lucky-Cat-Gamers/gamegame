export default function toggleLeaderboard() {
  return (dispatch, getState) => {
    if (getState().dialog.leaderboard) {
      dispatch({
        type: "PAUSE",
        payload: { pause: false },
      });
    } else {
      dispatch({
        type: "PAUSE",
        payload: {
          pause: true,
          leaderboard: true,
        },
      });
    }
  };
}
