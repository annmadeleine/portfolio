import React from "react";
import { colors } from "../../../styles/colors";
import "./colors.scss";

export default function Colors() {
  const colorItems = colors.map((color) => (
    <div className="variableColors__item">
      <div
        className="variableColors__preview"
        style={{ backgroundColor: color.colorCode }}
      ></div>
      <span className="variableColors__info">{color.name}</span>
      <span className="variableColors__info">{color.colorCode}</span>
    </div>
  ));
  return (
    <div className="variableColors">
      <h1>Colors</h1>
      <p>These are the color variables that are used in the project.</p>
      <hr />
      <div className="variableColors__items">{colorItems}</div>
    </div>
  );
}
