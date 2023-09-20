import React from "react";
import "./Title.css";

const Title = ({ title, color }) => {
  return (
    <div className="title-wrapper">
      <div className="main-title">{title}</div>
      <div className="sub-title" style={{ color: `${color}` }}>
        {title}
      </div>
    </div>
  );
};

export default Title;
