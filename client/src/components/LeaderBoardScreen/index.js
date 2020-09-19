import React, { Component } from "react";
import axios from "axios";

class LeaderboardScreen extends Component {
  state = {
    scores: [],
  };

  componentDidMount() {
    console.log("Is running component did mount");

    axios.get("https://witchfall.herokuapp.com/load").then((resp) => {
      console.log(resp);

      this.setState({
        scores: resp.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>High Scores</h2>
        {this.state.scores.length ? (
          <table>
            <thead>
              <tr>
                <th>Player</th>
                <th>Score</th>
                <th>Gold</th>
              </tr>
            </thead>
            <tbody>
              {this.state.scores.map((scores, i) => (
                <tr>
                  <td>{i + 1}</td>
                  <td>{scores.user}</td>
                  <td>{scores.level}</td>
                  <td>{scores.gold}</td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <h1>
            <br />
            No Scores
            <br />
          </h1>
        )}
      </div>
    );
  }
}

export default LeaderboardScreen;
