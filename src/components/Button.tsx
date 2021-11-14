import { css, useTheme } from "@emotion/react";
import React, { HTMLAttributes } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}
const Button: React.FC<ButtonProps> = ({ children, ...restProps }) => {
  const {
    colors: { black, white, blue },
    breakpoints: { mobile },
  } = useTheme();

  return (
    <button
      css={css`
        background-color: ${blue};
        color: ${white};
        padding: 16px 0px;
        font-size: 1.4rem;
        line-height: 1.2;
        border: none;
        cursor: pointer;

        &:hover {
          opacity: 0.9;
        }
      `}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default Button;
