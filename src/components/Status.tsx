import React from "react";
import { css, useTheme } from "@emotion/react";

interface StatusProps {
  open: boolean;
}

const Status: React.FC<StatusProps> = ({ open }) => {
  const {
    colors: { grey, red, green },
  } = useTheme();

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        letter-spacing: 0.5px;
        line-height: 1.4;
        color: ${grey["400"]};
      `}
    >
      <div
        css={css`
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: ${open ? green : red};
          margin-inline-end: 5px;
        `}
      />{" "}
      {open ? "OPEN NOW" : "CLOSED"}
    </div>
  );
};

export default Status;
