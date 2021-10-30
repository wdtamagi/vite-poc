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

        body {
          font-family: "HelveticaNeue-Light", "Helvetica Neue Light",
            "Helvetica Neue", Helvetica, Arial, "Lucida Grande", sans-serif;
          font-weight: 300;
        }
      `}
    />
  );
};

export default GlobalStyles;
