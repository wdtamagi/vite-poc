import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        * {
          box-sizing: border-box;
        }

        html,
        body {
          font-family: "Helvetica Neue", Helvetica, Arial, "Lucida Grande",
            sans-serif;
          font-size: 10px;
        }
      `}
    />
  );
};

export default GlobalStyles;
