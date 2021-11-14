import React from "react";
import { css, useTheme } from "@emotion/react";

interface StatusProps {
  open: boolean;
  size?: "xs" | "sm" | "lg";
}

const Status: React.FC<StatusProps> = ({ open, size = "sm" }) => {
  const {
    colors: { grey, red, green, blue, white },
  } = useTheme();

  if (size === "xs") {
    return (
      <div
        css={css`
          font-size: 0.8rem;
          line-height: 2;
          padding: 0px 6px;
          background-color: ${open ? green : red};
          border-radius: 8px;
          color: ${open ? blue : white};
          letter-spacing: 0.571428px;
        `}
      >
        {open ? "OPEN" : "CLOSED"}
      </div>
    );
  }

  return (
    <div
      css={css`
        display: flex;
        align-items: center;
        font-size: ${size === "sm" ? "1.2" : "2.2"}rem;
        letter-spacing: 0.5px;
        line-height: 1.4;
        color: ${grey["400"]};
      `}
    >
      <div
        css={css`
          width: ${size === "sm" ? "8" : "22"}px;
          height: ${size === "sm" ? "8" : "22"}px;
          border-radius: 50%;
          background-color: ${open ? green : red};
          margin-inline-end: ${size === "sm" ? "4" : "8"}px;
        `}
      />
      {open ? "OPEN NOW" : "CLOSED"}
    </div>
  );
};

export default Status;
