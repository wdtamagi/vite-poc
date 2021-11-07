import React from "react";
import { css } from "@emotion/react";

const Wrapper: React.FC = ({ children, ...restProps }) => {
  return (
    <div
      css={css`
        width: min(1312px, calc(100% - 128px));
        margin: 0 auto;
      `}
    >
      {children}
    </div>
  );
};

export default Wrapper;
