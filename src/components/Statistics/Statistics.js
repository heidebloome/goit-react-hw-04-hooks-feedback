import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbackCount,
  positiveFeedbackCount,
}) => {
  return (
    <div>
      {totalFeedbackCount ? (
        <ul>
          <li>
            <p>Good: {good}</p>
          </li>
          <li>
            <p>Neutral: {neutral}</p>
          </li>
          <li>
            <p>Bad: {bad}</p>
          </li>
          <li>
            <p>Total: {totalFeedbackCount}</p>
          </li>
          <li>
            <p>Positive feedback: {positiveFeedbackCount}%</p>
          </li>
        </ul>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedbackCount: PropTypes.number.isRequired,
  positiveFeedbackCount: PropTypes.number.isRequired,
};

export default Statistics;
