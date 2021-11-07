import React, { useCallback, useState } from "react";
import { css, useTheme } from "@emotion/react";

import Wrapper from "../../../components/Wrapper";
import Combobox from "../../../components/Combobox/Combobox";
import Radio from "../../../components/Radio";
import {
  CategoriesFilterOptions,
  PriceFilterOptions,
} from "../../../constants";
import useStore from "../../../store/useStore";
import OutlineButton from "../../../components/OutlineButton";

interface FilterNavProps {}
const FilterNav: React.FC<FilterNavProps> = () => {
  const {
    colors: { grey, blue, white },
  } = useTheme();
  const filterOpen = useStore((s) => s.filterOpen);
  const switchFilterOpen = useStore((s) => s.switchFilterOpen);
  const filterPrice = useStore((s) => s.filterPrice);
  const clearFilterPrice = useStore((s) => s.clearFilterPrice);
  const filterCategory = useStore((s) => s.filterCategory);
  const clearFilterCategory = useStore((s) => s.clearFilterCategory);
  const handleSelectPrice = useStore((s) => s.handleSelectPrice);
  const handleSelectCategory = useStore((s) => s.handleSelectCategory);
  const clearFilters = useStore((s) => s.clearFilters);

  const isFilterClean =
    !filterOpen && filterPrice.length === 0 && filterCategory.length === 0;

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
            width: 100%;
          `}
        >
          <label
            css={css`
              font-size: 1.6rem;
              line-height: 1.5;
              color: ${grey["600"]};
              margin-inline-end: 24px;
              margin-top: -6px;
            `}
          >
            Filter By:
          </label>
          <div
            css={css`
              height: 25px;
              margin-bottom: -3px;
              margin-inline-end: 33px;
              border-bottom: 1px solid ${grey["200"]};
            `}
          >
            <Radio
              id="filterOpen"
              name="filterOpen"
              checked={filterOpen}
              onClick={switchFilterOpen}
              label="Open Now"
              readOnly
            />
          </div>
          <div
            css={css`
              height: 25px;
              margin-bottom: -3px;
              margin-inline-end: 33px;
              border-bottom: 1px solid ${grey["200"]};
            `}
          >
            <Combobox
              label="Price"
              selectedValues={filterPrice}
              clearValues={clearFilterPrice}
              options={PriceFilterOptions}
              handleSelect={handleSelectPrice}
              customCss={css`
                width: 97px;
              `}
            />
          </div>
          <div
            css={css`
              height: 25px;
              margin-bottom: -3px;
              margin-inline-end: 33px;
              border-bottom: 1px solid ${grey["200"]};
            `}
          >
            <Combobox
              label="Category"
              selectedValues={filterCategory}
              clearValues={clearFilterCategory}
              options={CategoriesFilterOptions}
              handleSelect={handleSelectCategory}
              customCss={css`
                width: 193px;
              `}
            />
          </div>
          <div
            css={css`
              margin-left: auto;
            `}
          >
            <OutlineButton
              disabled={isFilterClean}
              onClick={clearFilters}
              customCss={css`
                width: 151px;
              `}
            >
              Clear All
            </OutlineButton>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FilterNav;
