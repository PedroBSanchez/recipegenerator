import React from "react";

import "./TypeWriter.css";

const TypeWriter = ({ text, generationFlag }) => {
  return (
    <div class="typewriter">
      <h1>
        <div class="typewriter">
          <p
            style={{
              fontFamily: "Courier New",
              fontSize: "1.2rem",
              fontWeight: "900",
            }}
          >
            {text}
          </p>
        </div>
      </h1>
    </div>
  );
};

export default TypeWriter;
