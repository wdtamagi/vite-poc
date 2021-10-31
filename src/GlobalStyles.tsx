import React from "react";
import { Global, css } from "@emotion/react";
import emotionNormalize from "emotion-normalize";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        @font-face {
          font-family: HelveticaNeue;
          src: url("src/assets/fonts/Helvetica Neue LT 45 Light.ttf")
            format("truetype");
          font-weight: normal;
        }

        * {
          box-sizing: border-box;
        }

        html,
        body {
          font-family: HelveticaNeue, Helvetica, Arial, "Lucida Grande",
            sans-serif;
          font-size: 10px;
          letter-spacing: 1px;
        }
      `}
    />
  );
};

export default GlobalStyles;
