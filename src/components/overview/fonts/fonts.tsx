import React from "react";
import { fonts } from "../../../styles/fonts";
import "./fonts.scss";

export default function Fonts() {
  const fontItems = fonts.map((font) => (
    <div className="variableFonts__item">
      <div className="variableFonts__item--style">
        <div
          className="variableFonts__preview variableFonts__item--medium"
          style={{ fontFamily: font.fontCode }}
        >
          Aa
        </div>
        <span className="variableFonts__info">{font.name}</span>
        <span className="variableFonts__info">{font.fontCode}</span>
      </div>
      <div className="variableFonts__item--style">
        <div
          className="variableFonts__preview variableFonts__item--bold"
          style={{ fontFamily: font.fontCode }}
        >
          Aa
        </div>
        <span className="variableFonts__info">{font.name}</span>
        <span className="variableFonts__info">{font.fontCode}</span>
      </div>
      <div className="variableFonts__item--style">
        <div
          className="variableFonts__preview variableFonts__item--cursive"
          style={{ fontFamily: font.fontCode }}
        >
          Aa
        </div>
        <span className="variableFonts__info">{font.name}</span>
        <span className="variableFonts__info">{font.fontCode}</span>
      </div>
    </div>
  ));

  return (
    <div className="variableFonts">
      <h1>Fonts</h1>
      <p>These are the font variables that are used in the project.</p>
      <hr />
      <div className="variableFonts__items">{fontItems}</div>
    </div>
  );
}
