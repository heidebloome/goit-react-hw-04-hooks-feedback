import React, { Component, Fragment } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

const buttonsArray = ['Good', 'Neutral', 'Bad'];

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedbackCount = option => {
    this.setState(prevState => {
      const feedback = option.toLowerCase();
      return {
        [feedback]: prevState[feedback] + 1,
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
        (this.state.good + this.state.neutral + this.state.bad),
    );
    return count;
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={buttonsArray}
            onLeaveFeedback={this.updateFeedbackCount}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            value={this.state}
            totalFeedbackCount={this.countTotalFeedback}
            positiveFeedbackCount={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Fragment>
    );
  }
}

export default App;
