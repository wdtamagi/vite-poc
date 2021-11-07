import { css, useTheme, SerializedStyles } from "@emotion/react";
import React, { ButtonHTMLAttributes } from "react";

interface OutlineButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  customCss?: SerializedStyles;
}
const OutlineButton: React.FC<OutlineButtonProps> = ({
  children,
  customCss,
  ...restProps
}) => {
  const {
    colors: { blue, grey },
  } = useTheme();

  return (
    <button
      css={[
        css`
          font-size: 1.2rem;
          line-height: 1.3;
          text-transform: uppercase;
          letter-spacing: 0.857143px;
          color: ${blue};
          padding: 11px 16px;
          background-color: transparent;
          border: 1px solid ${blue};
          cursor: pointer;

          &:disabled {
            color: ${grey["200"]};
            border-color: ${grey["100"]};
            cursor: default;
          }
        `,
        customCss,
      ]}
      {...restProps}
    >
      {children}
    </button>
  );
};

export default OutlineButton;
