import React, { Component } from "react";
import axios from "axios";

class LeaderboardScreen extends Component {
  state = {
    scores: [],
  };

  componentDidMount() {
    axios.get("https://witchfall.herokuapp.com/load").then((resp) => {
      console.log(resp.data);

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
                <th>Candy</th>
              </tr>
            </thead>
            <tbody>
              {this.state.scores.slice(0, 10).map((scores, i) => (
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
