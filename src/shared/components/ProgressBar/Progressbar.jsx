import React from "react";
import "./ProgressBar.css";

const ProgressBar = ({ name, percentage }) => {
  return (
    <div className="progress-container">
      <span className="progress-title">{name}</span>
      <div className="progress2 progress-moved">
        <div
          className="progress-bar2"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
