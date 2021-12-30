import React from "react";

const buttonsArray = ["Good", "Neutral", "Bad"];

const StatList = ({ value, totalFeedbackCount, positiveFeedbackCount }) => {
  const totalCount = totalFeedbackCount();
  let positiveCount = positiveFeedbackCount();
  if (isNaN(positiveCount)) {
    positiveCount = 0;
  }

  return (
    <div>
      <ul>
        {buttonsArray.map((button) => {
          return (
            <li key={button}>
              <p>{`${button}: ${value[button.toLowerCase()]}`}</p>
            </li>
          );
        })}
      </ul>
      <p>Total: {totalCount}</p>
      <p>Positive feedback: {positiveCount}%</p>
    </div>
  );
};

export default StatList;
