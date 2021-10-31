import React, { useState } from "react";
import { css, useTheme } from "@emotion/react";

import Wrapper from "../../../components/Wrapper";

interface FilterNavProps {}

const FilterNav: React.FC<FilterNavProps> = () => {
  const {
    colors: { grey, blue },
  } = useTheme();
  const [open, setOpen] = useState(false);

  return (
    <div
      css={css`
        width: 100%;
        padding: 24px 0px;
        border-bottom: 1px solid ${grey["100"]};
        border-top: 1px solid ${grey["100"]};
      `}
    >
      <Wrapper>
        <div
          css={css`
            display: flex;
            align-items: center;
          `}
        >
          <label
            css={css`
              font-size: 1.6rem;
              line-height: 1.5;
              color: ${grey["600"]};
              margin-inline-end: 24px;
            `}
          >
            Filter By:
          </label>
          <div
            css={css`
              border-bottom: 1px solid ${grey["200"]};
            `}
          >
            <input
              type="radio"
              id="open"
              checked={open}
              onClick={() => setOpen((v) => !v)}
            />
            <label
              htmlFor="open"
              css={css`
                font-size: 1.6rem;
                margin-inline-start: 8px;
                color: ${blue};
              `}
            >
              Open Now
            </label>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FilterNav;
