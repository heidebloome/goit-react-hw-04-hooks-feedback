import { useState } from 'react';

import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const updateFeedbackCount = option => {
    switch (option.toLowerCase()) {
      case 'good':
        setGood(prevState => prevState + 1);
        break;
      case 'neutral':
        setNeutral(prevState => prevState + 1);
        break;
      case 'bad':
        setBad(prevState => prevState + 1);
        break;
      default:
        return;
    }
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good * 100) / countTotalFeedback());
  };

  return (
    <>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={['Good', 'Neutral', 'Bad']}
          onLeaveFeedback={updateFeedbackCount}
        />
      </Section>

      <Section title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          totalFeedbackCount={countTotalFeedback}
          positiveFeedbackCount={countPositiveFeedbackPercentage}
        />
      </Section>
    </>
  );
};

// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   updateFeedbackCount = option => {
//     this.setState(prevState => {
//       const feedbackOption = option.toLowerCase();
//       return {
//         [feedbackOption]: prevState[feedbackOption] + 1,
//       };
//     });
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good * 100) / this.countTotalFeedback());
//   };

//   render() {
//     const { good, neutral, bad } = this.state;

//     return (
//       <>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['Good', 'Neutral', 'Bad']}
//             onLeaveFeedback={this.updateFeedbackCount}
//           />
//         </Section>

//         <Section title="Statistics">
//           <Statistics
//             good={good}
//             neutral={neutral}
//             bad={bad}
//             totalFeedbackCount={this.countTotalFeedback}
//             positiveFeedbackCount={this.countPositiveFeedbackPercentage}
//           />
//         </Section>
//       </>
//     );
//   }
// }

export default App;
