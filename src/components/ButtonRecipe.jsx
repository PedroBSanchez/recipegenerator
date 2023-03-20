import React from "react";

import "./ButtonRecipe.css";

const ButtonRecipe = ({ generateRecipe }) => {
  return (
    <button class="learn-more" onClick={generateRecipe}>
      Generate
    </button>
  );
};

export default ButtonRecipe;
