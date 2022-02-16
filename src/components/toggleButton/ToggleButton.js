import React from "react";
import "./ToggleButton.css";

function ToggleButton() {
  return (
    <label className="switch">
      <input type="checkbox" />
      <span className="slider"></span>
    </label>
  );
}

export default ToggleButton;
