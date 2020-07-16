import React from "react";
import { spacings } from "../../../styles/spacings";
import "./spacings.scss";

export default function Spacings() {
  const spacingItems = spacings.map((spacing) => (
    <div className="variableSpacings__item">
      <span className="variableSpacings__info">{spacing.name}</span>
      <span className="variableSpacings__info">{spacing.size}</span>
    </div>
  ));

  return (
    <div className="variableSpacings">
      <h1>Spacings</h1>
      <p>These are the spacing variables that are used in the project.</p>
      <hr />
      <div className="variableSpacings__items">{spacingItems}</div>
    </div>
  );
}
