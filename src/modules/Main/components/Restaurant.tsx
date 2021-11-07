import { css, useTheme } from "@emotion/react";
import React from "react";

import Rating from "../../../components/Rating";
import Status from "../../../components/Status";
import CategoryPrice from "../../../components/CategoryPrice";
import { Business, Maybe } from "../../../graphql/generated/graphql";

interface RestaurantProps {
  item: Maybe<Business>;
}

const Restaurant: React.FC<RestaurantProps> = ({ item }) => {
  const {
    colors: { black, white, blue },
  } = useTheme();

  return (
    <div
      css={css`
        display: grid;
        grid-template-areas: "image" "name" "detail";
        grid-template-rows: 228px auto 130px;
        width: 100%;
        height: 428px;
      `}
    >
      <div
        css={css`
          grid-area: image;
          height: 228px;
          background-image: url(${item?.photos?.[0]});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50%;
        `}
      />
      <h5
        css={css`
          grid-area: name;
          font-size: 2rem;
          line-height: 1.4;
          font-weight: 400;
          height: 100%;
          color: ${black["400"]};
          padding-top: 16px;
          margin: 0px;
        `}
      >
        {item?.name}
      </h5>
      <div
        css={css`
          grid-area: detail;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
        `}
      >
        <Rating rating={item?.rating ?? 0} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0px;
          `}
        >
          <CategoryPrice
            category={item?.categories?.[0]?.title ?? ""}
            price={item?.price ?? ""}
          />
          <Status open={item?.hours?.[0]?.is_open_now ?? false} />
        </div>
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
        >
          LEARN MORE
        </button>
      </div>
    </div>
  );
};

export default Restaurant;
