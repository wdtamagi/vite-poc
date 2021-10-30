import { css, useTheme } from "@emotion/react";
import React from "react";

import Restaurant from "./Restaurant";

import Wrapper from "../../../components/Wrapper";

interface RestaurantListProps {
  items: any;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ items }) => {
  const {
    color: { offBlack },
  } = useTheme();

  return (
    <Wrapper>
      <h3
        css={css`
          font-size: 3.4rem;
          line-height: 1.2;
          letter-spacing: 1px;
          font-weight: 400;
          color: ${offBlack};
        `}
      >
        All Restaurants
      </h3>
      <div
        css={css`
          display: grid;
          grid-template-columns: 1fr 1fr 1fr 1fr;
          gap: 32px;
        `}
      >
        {items.map((item, index) => (
          <Restaurant key={index} item={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default RestaurantList;
