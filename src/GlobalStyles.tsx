import { Global } from "@emotion/react";
import emotionNormalize from "emotion-normalize";
import React from "react";

const GlobalStyles: React.FC = () => {
  return (
    <Global
      styles={css`
        ${emotionNormalize}
        * {
          box-sizing: border-box;
        }
      `}
    />
  );
};

export default GlobalStyles;
