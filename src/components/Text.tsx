import { css, SerializedStyles, useTheme } from "@emotion/react";
import React, { memo, ReactNode } from "react";

interface TextProps {
  variant?: "title" | "subTitle" | "body";
  customCss?: SerializedStyles;
  children?: ReactNode;
}
const Text: React.FC<TextProps> = ({
  children,
  variant = "body",
  customCss,
}) => {
  const {
    colors: { black, grey },
    breakpoints: { mobile },
  } = useTheme();

  if (variant === "title") {
    return (
      <h1
        css={[
          css`
            font-size: 5.4rem;
            font-weight: 400;
            letter-spacing: 0.964286px;
            line-height: 1.2;
            margin: 0px;
            color: ${black["300"]};

            @media (max-width: ${mobile}px) {
              font-size: 3.2rem;
            }
          `,
          customCss,
        ]}
      >
        {children}
      </h1>
    );
  }

  if (variant === "subTitle") {
    return (
      <p
        css={[
          css`
            font-size: 2.2rem;
            font-weight: 400;
            letter-spacing: 0.916667px;
            line-height: 1.5;
            color: ${grey["400"]};

            @media (max-width: ${mobile}px) {
              font-size: 1.6rem;
            }
          `,
          customCss,
        ]}
      >
        {children}
      </p>
    );
  }

  return (
    <span
      css={[
        css`
          font-size: 2rem;
          line-height: 1.4;
          color: ${black};

          @media (max-width: ${mobile}px) {
            font-size: 1.6rem;
          }
        `,
        customCss,
      ]}
    >
      {children}
    </span>
  );
};

export default memo(Text);
