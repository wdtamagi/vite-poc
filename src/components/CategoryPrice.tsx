import React from "react";
import { css, useTheme } from "@emotion/react";

interface CategoryPriceProps {
  category: string;
  price: string;
  size?: "sm" | "lg";
}

const CategoryPrice: React.FC<CategoryPriceProps> = ({
  category,
  price,
  size = "sm",
}) => {
  const {
    colors: { grey },
  } = useTheme();

  return (
    <span
      css={css`
        font-size: ${size === "sm" ? "1.2" : "2.2"}rem;
        color: ${grey["400"]};
      `}
    >
      {`${category} • ${price}`}
    </span>
  );
};

export default CategoryPrice;
