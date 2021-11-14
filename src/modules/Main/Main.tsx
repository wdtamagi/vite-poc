import React, { useEffect, useState } from "react";
import { css, useTheme } from "@emotion/react";

import FilterNav from "./components/FilterNav";
import RestaurantList from "./components/RestaurantList";

import Wrapper from "../../components/Wrapper";
import { Business, useSearchQuery } from "../../graphql/generated/graphql";
import useStore from "../../store/useStore";
import Text from "../../components/Text";
import { mainDescription, mainTitle } from "../../constants";

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
        <Text variant="title">{mainTitle}</Text>
        <Text
          variant="subTitle"
          customCss={css`
            max-width: 752px;
          `}
        >
          {mainDescription}
        </Text>
      </Wrapper>
      <FilterNav />
      <RestaurantList items={filteredData} />
    </div>
  );
};

export default Main;
