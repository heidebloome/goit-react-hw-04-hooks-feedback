import React from "react";

const buttonsArray = ["Good", "Neutral", "Bad"];

const Buttons = ({ changeCount }) => {
  return (
    <ul className="btnList">
      {buttonsArray.map((button) => {
        return (
          <li key={button}>
            <button
              className="button"
              onClick={() => {
                changeCount(button);
              }}
            >
              {button}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Buttons;
