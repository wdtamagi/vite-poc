import { css, useTheme } from "@emotion/react";
import React from "react";

import Rating from "../../../components/Rating";

interface RestaurantProps {
  item: any;
}

const Restaurant: React.FC<RestaurantProps> = ({ item }) => {
  const {
    color: { black, white, darkBlue, grey },
  } = useTheme();

  return (
    <div
      css={css`
        display: grid;
        grid-template-areas: "image" "name" "detail";
        width: 304px;
        height: 428px;
      `}
    >
      <img
        css={css`
          grid-area: image;
          width: 100%;
          height: 228px;
        `}
      />
      <h5
        css={css`
          grid-area: name;
          font-size: 2rem;
          line-height: 1.4;
          font-weight: 400;
          letter-spacing: 1px;
          height: 100%;
          color: ${black};
          padding-top: 16px;
          margin: 0px;
        `}
      >
        Very Long Name Restaurants Number 1 In List
      </h5>
      <div
        css={css`
          grid-area: detail;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        `}
      >
        <Rating rating={1.5} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            padding: 20px 0px;
          `}
        >
          <span
            css={css`
              font-size: 1.2rem;
              color: ${grey};
            `}
          >
            {`Thai • $$$$`}
          </span>
          <span>OPEN NOW</span>
        </div>
        <button
          css={css`
            background-color: ${darkBlue};
            color: ${white};
            padding: 16px 0px;
            font-size: 1.4rem;
            line-height: 1.2;
            letter-spacing: 1px;
          `}
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
