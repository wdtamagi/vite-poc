import React from "react";
import { css, useTheme } from "@emotion/react";

import Wrapper from "../../components/Wrapper";
import RestaurantList from "./components/RestaurantList";

const Main: React.FC = () => {
  const {
    color: { offBlack, mediumGrey },
  } = useTheme();

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
            color: ${offBlack};
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
            color: ${mediumGrey};
          `}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </Wrapper>
      <RestaurantList items={[{}]} />
    </div>
  );
};

export default Main;
