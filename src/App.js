import React, { Component } from "react";

import Title from "./components/Title/Title";
import Buttons from "./components/Buttons/Buttons";
import StatList from "./components/StatList/StatList";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  changeCount = (key) => {
    this.setState((prevState) => {
      const btn = key.toLowerCase();
      return {
        [btn]: prevState[btn] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const count = Math.round(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
    return count;
  };

  render() {
    return (
      <div>
        <Title text="Please leave your feedback" />
        <Buttons changeCount={this.changeCount} />
        <Title text="Statistics" />
        <StatList
          value={this.state}
          totalFeedbackCount={this.countTotalFeedback}
          positiveFeedbackCount={this.countPositiveFeedbackPercentage}
        />
      </div>
    );
  }
}

export default App;
