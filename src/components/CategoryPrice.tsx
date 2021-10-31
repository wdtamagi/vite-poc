import React from "react";
import { css, useTheme } from "@emotion/react";

interface CategoryPriceProps {
  category: string;
  price: string;
}

const CategoryPrice: React.FC<CategoryPriceProps> = ({ category, price }) => {
  const {
    color: { grey },
  } = useTheme();

  return (
    <span
      css={css`
        font-size: 1.2rem;
        color: ${grey};
      `}
    >
      {`${category} • ${price}`}
    </span>
  );
};

export default CategoryPrice;