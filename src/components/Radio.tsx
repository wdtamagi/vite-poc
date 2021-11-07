import React, {
  DetailedHTMLProps,
  InputHTMLAttributes,
  memo,
  useState,
} from "react";
import { css, useTheme } from "@emotion/react";

interface RadioProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string;
}

const Radio: React.FC<RadioProps> = ({ label, id, checked, ...restProps }) => {
  const {
    colors: { grey, blue, white },
  } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      css={css`
        display: flex;
      `}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        css={css`
          position: relative;
          appearance: none;
          background-color: ${white};
          margin: 0;
          font: inherit;
          color: ${grey["200"]};
          width: 1.6rem;
          height: 1.6rem;
          border: 0.1rem solid currentColor;
          border-radius: 50%;
          transform: translateY(0.2rem);

          &:before {
            content: "";
            position: absolute;
            top: 0.3rem;
            left: 0.3rem;
            width: 0.8rem;
            height: 0.8rem;
            border-radius: 50%;
            transform: scale(${checked ? "1" : "0"});
            transition: 120ms transform ease-in-out;
            background-color: ${blue};
          }
        `}
        {...restProps}
      />
      <label
        htmlFor={id}
        css={css`
          font-size: 1.6rem;
          color: ${blue};
          margin-inline-start: 8px;
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default memo(Radio);
