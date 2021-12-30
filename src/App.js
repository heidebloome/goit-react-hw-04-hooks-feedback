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

  render() {
    return (
      <div>
        <Title text="Please leave your feedback" />
        <Buttons changeCount={this.changeCount} />
        <Title text="Statistics" />
        <StatList />
      </div>
    );
  }
}

export default App;
