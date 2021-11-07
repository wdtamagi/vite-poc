import React, { HTMLProps } from "react";
import { css, useTheme } from "@emotion/react";

import CheckedIcon from "../CheckedIcon";
import UncheckedIcon from "../UncheckedIcon";

interface ComboboxItemProps extends HTMLProps<HTMLDivElement> {
  innerRef: (e: HTMLDivElement) => void;
  selected: boolean;
}
const ComboboxItem: React.FC<ComboboxItemProps> = ({
  children,
  innerRef,
  selected,
  ...restProps
}) => {
  const {
    colors: { grey, white },
  } = useTheme();

  return (
    <div
      tabIndex={0}
      ref={innerRef}
      css={css`
        display: flex;
        align-items: center;
        background-color: ${white};
        padding: 16px 16px 0px 16px;
        font-size: 1.6rem;
        line-height: 1.5;
        letter-spacing: 0.5px;
        color: ${grey["600"]};
        cursor: default;

        svg {
          margin-right: 8px;
        }

        &:last-of-type {
          padding-bottom: 16px;
        }
      `}
      {...restProps}
    >
      {selected ? <CheckedIcon /> : <UncheckedIcon />}
      {children}
    </div>
  );
};

export default ComboboxItem;
