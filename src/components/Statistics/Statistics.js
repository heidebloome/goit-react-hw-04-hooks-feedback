import React from 'react';

const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedbackCount,
  positiveFeedbackCount,
}) => {
  const totalCount = totalFeedbackCount();

  return (
    <div>
      {totalCount ? (
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
            <p>Total: {totalCount}</p>
          </li>
          <li>
            <p>Positive feedback: {positiveFeedbackCount()}%</p>
          </li>
        </ul>
      ) : (
        <p>There is no feedback</p>
      )}
    </div>
  );
};

export default Statistics;
