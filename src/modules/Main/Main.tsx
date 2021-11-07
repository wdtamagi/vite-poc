import React, { useEffect, useState } from "react";
import { css, useTheme } from "@emotion/react";

import FilterNav from "./components/FilterNav";
import RestaurantList from "./components/RestaurantList";

import Wrapper from "../../components/Wrapper";
import { Business, useSearchQuery } from "../../graphql/generated/graphql";
import useStore from "../../store/useStore";

const Main: React.FC = () => {
  const {
    colors: { black, grey },
  } = useTheme();
  const [filteredData, setFilteredData] = useState<Array<any>>([]);
  const filterOpen = useStore((s) => s.filterOpen);
  const filterPrice = useStore((s) => s.filterPrice);
  const filterCategory = useStore((s) => s.filterCategory);
  const { loading, error, data } = useSearchQuery({
    variables: {
      term: "restaurant",
      location: "las vegas",
      categories: filterCategory.join().toLowerCase(),
    },
  });

  useEffect(() => {
    setFilteredData(
      data?.search?.business?.filter((item) => {
        let filter = false;
        if (filterOpen) {
          filter = item?.hours?.[0]?.is_open_now === filterOpen;
        } else {
          filter = true;
        }

        if (!filter) {
          return false;
        }

        if (filterPrice.length > 0) {
          filter = filterPrice.includes(item?.price ?? "");
        }
        return filter;
      }) ?? []
    );
  }, [data, filterOpen, filterPrice]);

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
      <RestaurantList items={filteredData} />
    </div>
  );
};

export default Main;
