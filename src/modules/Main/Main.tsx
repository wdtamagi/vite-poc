import React from "react";
import { css, useTheme } from "@emotion/react";

import RestaurantList from "./components/RestaurantList";

import Wrapper from "../../components/Wrapper";
import { useSearchQuery } from "../../graphql/generated/graphql";
import FilterNav from "./components/FilterNav";

const Main: React.FC = () => {
  const {
    colors: { black, grey },
  } = useTheme();
  const { loading, error, data } = useSearchQuery({
    variables: {
      term: "restaurant",
      location: "las vegas",
    },
  });

  return (
    <div
      css={css`
        padding: 36px 0px;
      `}
    >
      <Wrapper>
        <h1
          css={css`
            font-size: 5.4rem;
            font-weight: 400;
            letter-spacing: 0.964286px;
            line-height: 1.2;
            margin: 0px;
            color: ${black["300"]};
          `}
        >
          Restaurants
        </h1>
        <p
          css={css`
            font-size: 2.2rem;
            font-weight: 400;
            letter-spacing: 0.916667px;
            line-height: 1.5;
            max-width: 752px;
            color: ${grey["400"]};
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Wrapper>
      <FilterNav />
      <RestaurantList items={data?.search?.business ?? []} />
    </div>
  );
};

export default Main;
