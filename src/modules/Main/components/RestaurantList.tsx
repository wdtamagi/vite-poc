import React from "react";
import { css, useTheme } from "@emotion/react";

import Restaurant from "./Restaurant";

import Wrapper from "../../../components/Wrapper";
import { Business, Maybe } from "../../../graphql/generated/graphql";

interface RestaurantListProps {
  items: Array<Maybe<Business>>;
}

const RestaurantList: React.FC<RestaurantListProps> = ({ items }) => {
  const {
    colors: { black },
  } = useTheme();

  return (
    <Wrapper>
      <h3
        css={css`
          font-size: 3.4rem;
          line-height: 1.2;
          font-weight: 400;
          color: ${black["300"]};
        `}
      >
        All Restaurants
      </h3>
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(auto-fit, 304px);
          justify-content: center;
          gap: 32px;
        `}
      >
        {items?.map((item, index) => (
          <Restaurant key={index} item={item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default RestaurantList;
