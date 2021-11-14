import { css, useTheme } from "@emotion/react";
import React, { HTMLAttributes } from "react";
import ArrowRightIcon from "./ArrowRightIcon";
import Text from "./Text";

interface TextArrowButtonProps extends HTMLAttributes<HTMLButtonElement> {}
const TextArrowButton: React.FC<TextArrowButtonProps> = ({
  children,
  ...restProps
}) => {
  const {
    colors: { black, white, blue, grey },
    breakpoints: { mobile },
  } = useTheme();

  return (
    <button
      css={css`
        display: flex;
        align-items: center;
        background-color: transparent;
        color: ${blue};
        border: none;
        cursor: pointer;

        & > svg {
          margin-left: 8px;
        }

        &:hover {
          opacity: 0.9;
        }
      `}
      {...restProps}
    >
      <Text
        customCss={css`
          font-size: 1.6rem;
          line-height: 1.2;
          border-bottom: 1px solid ${grey["100"]};
        `}
      >
        {children}
      </Text>
      <ArrowRightIcon />
    </button>
  );
};

export default TextArrowButton;
