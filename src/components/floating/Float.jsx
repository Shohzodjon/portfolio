import React from "react";
import "./float.css";
function Float({ img, text, text2 }) {
  return (
    <div className="float">
      <img src={img} alt="img" />

      <span>
        {text} <br />
        {text2}
      </span>
    </div>
  );
}

export default Float;
