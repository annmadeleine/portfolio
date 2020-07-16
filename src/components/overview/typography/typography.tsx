import React from "react";
import { typographySizes } from "../../../styles/typography";
import "./typography.scss";

export default function Typography() {
  const spacingItems = typographySizes.map((typographySize) => (
    <div className="variableTypography__item">
      <span className="variableSpacings__info">{typographySize.name}</span>
      <span className="variableSpacings__info">{typographySize.size}</span>
    </div>
  ));
  return (
    <div className="variableTypography">
      <h1>Typography</h1>
      <p>These are the typography variables that are used in the project.</p>
      <hr />
      <span>Heading 1</span>
      <h1>Sweet soufflé icing</h1>
      <span>Heading 2</span>
      <h2>Sweet soufflé icing</h2>
      <span>Heading 3</span>
      <h3>Sweet soufflé icing</h3>
      <span>Heading 4</span>
      <h4>Sweet soufflé icing</h4>
      <span>Heading 5</span>
      <h5>Sweet soufflé icing</h5>
      <span>Heading 6</span>
      <h6>Sweet soufflé icing</h6>
      <span>Body</span>
      <p>
        Cotton candy sugar plum jelly-o tiramisu. Oat cake apple pie muffin
        sweet halvah. Sugar plum tootsie roll jujubes pudding chocolate bar
        jelly beans biscuit muffin.
      </p>
      <span>Uppercase</span>
      <p className="uppercase">Brownie gummi bears</p>
      <div className="variableSpacings__items">{spacingItems}</div>
    </div>
  );
}
