import React, { Component, Fragment } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  updateFeedbackCount = option => {
    this.setState(prevState => {
      const feedbackOption = option.toLowerCase();
      return {
        [feedbackOption]: prevState[feedbackOption] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good * 100) / this.countTotalFeedback());
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <Fragment>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={['Good', 'Neutral', 'Bad']}
            onLeaveFeedback={this.updateFeedbackCount}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            totalFeedbackCount={this.countTotalFeedback}
            positiveFeedbackCount={this.countPositiveFeedbackPercentage}
          />
        </Section>
      </Fragment>
    );
  }
}

export default App;
