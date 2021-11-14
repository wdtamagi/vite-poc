import { css, useTheme } from "@emotion/react";
import React from "react";

import { Review } from "../../../graphql/generated/graphql";
import Text from "../../../components/Text";
import Rating from "../../../components/Rating";

interface ReviewItemProps {
  review: Review;
}
const ReviewItem: React.FC<ReviewItemProps> = ({ review }) => {
  const {
    colors: { black, grey },
  } = useTheme();

  const createdDate = new Date(review.time_created ?? "");
  const formatedCreatedDate = `${createdDate.getDate()}/${createdDate.getMonth()}/${createdDate.getFullYear()}`;

  return (
    <div
      css={css`
        display: flex;
        border-bottom: 1px solid ${grey["100"]};
        padding: 80px 0px;
      `}
    >
      <img width={80} height={80} src={review.user?.image_url ?? ""} />
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 192px;
          margin: 0px 32px;
        `}
      >
        <Text
          customCss={css`
            font-size: 2.2rem;
            line-height: 1.1;
          `}
        >
          {review.user?.name}
        </Text>
        <Text
          customCss={css`
            font-size: 1.6rem;
            line-height: 1.5;
            color: ${grey["500"]};
          `}
        >
          {formatedCreatedDate}
        </Text>
      </div>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          margin: 0px 32px;
        `}
      >
        <Rating rating={review.rating ?? 0} />
        <Text
          customCss={css`
            margin-top: 20px;
          `}
        >
          {review.text}
        </Text>
      </div>
    </div>
  );
};

export default ReviewItem;
