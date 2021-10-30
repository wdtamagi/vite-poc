import React from "react";
import { css } from "@emotion/react";

const Wrapper: React.FC = ({ children, ...restProps }) => {
  return (
    <div
      css={css`
        max-width: 1147px;
        width: 100%;
        margin: 0 64px;
      `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
