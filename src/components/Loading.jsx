import React from "react";

import "./Loading.css";

const Loading = ({ show }) => {
  return (
    <>
      {show && (
        <div class="loading">
          <div class="d1"></div>
          <div class="d2"></div>
        </div>
      )}
    </>
  );
};

export default Loading;
