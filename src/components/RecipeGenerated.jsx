import React from "react";

import "./RecipeGenerated.css";
import TypeWriter from "./TypeWriter";

const RecipeGenerated = ({ text, generationFlag }) => {
  return (
    <>
      <div className="generation-container p-3">
        {generationFlag && <TypeWriter text={text} />}
      </div>
    </>
  );
};

export default RecipeGenerated;
