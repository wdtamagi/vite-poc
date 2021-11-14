import { css, useTheme } from "@emotion/react";
import React from "react";
import { useParams } from "react-router-dom";

import {
  useBusinessQuery,
  useReviewsQuery,
} from "../../graphql/generated/graphql";
import Wrapper from "../../components/Wrapper";
import Text from "../../components/Text";
import Rating from "../../components/Rating";
import CategoryPrice from "../../components/CategoryPrice";
import Status from "../../components/Status";
import ReviewItem from "./components/ReviewItem";

interface RouteParams {
  id: string;
}

const Detail: React.FC = () => {
  const {
    colors: { grey },
  } = useTheme();
  const { id } = useParams<RouteParams>();
  const {
    loading: loadingBusiness,
    error: errorBusiness,
    data: dataBusiness,
  } = useBusinessQuery({ variables: { id } });
  const {
    loading: loadingReviews,
    error: errorReviews,
    data: dataReviews,
  } = useReviewsQuery({ variables: { business: id } });

  const business = dataBusiness?.business;
  const reviews = dataReviews?.reviews;

  return (
    <>
      <div
        css={css`
          padding: 36px 0px;
          border-bottom: 1px solid ${grey["100"]};
        `}
      >
        <Wrapper>
          <Text variant="title">{business?.name}</Text>
          <div
            css={css`
              margin: 16px 0px 23px;
            `}
          >
            <Rating rating={business?.rating ?? 0} size="lg" />
          </div>
          <div
            css={css`
              display: flex;
              align-items: center;
              justify-content: space-between;
            `}
          >
            <CategoryPrice
              category={business?.categories?.[0]?.title ?? ""}
              price={business?.price ?? ""}
              size="lg"
            />
            <Status
              open={business?.hours?.[0]?.is_open_now ?? false}
              size="lg"
            />
          </div>
        </Wrapper>
      </div>
      <div
        css={css`
          padding: 48px 0px;
          border-bottom: 1px solid ${grey["100"]};
        `}
      >
        <Wrapper>
          <div
            css={css`
              display: flex;
              margin-bottom: 15px;
            `}
          >
            {business?.photos?.slice(0, 2).map((photo, index) => (
              <img width="304" height="228" key={index} src={photo ?? ""} />
            ))}
          </div>
          <Text>{`${business?.location?.address1} ${business?.location?.city}, ${business?.location?.state} ${business?.location?.postal_code}`}</Text>
        </Wrapper>
      </div>
      <div
        css={css`
          padding: 48px 0px;
          border-bottom: 1px solid ${grey["100"]};
        `}
      >
        <Wrapper>
          <Text
            customCss={css`
              color: ${grey["500"]};
            `}
          >{`${reviews?.total} Reviews`}</Text>
          <div>
            {reviews?.review?.map((review, index) => (
              <ReviewItem key={index} review={review} />
            ))}
          </div>
        </Wrapper>
      </div>
    </>
  );
};

export default Detail;
