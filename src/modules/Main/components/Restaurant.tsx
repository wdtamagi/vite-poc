import { css, useTheme } from "@emotion/react";
import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";

import Rating from "../../../components/Rating";
import Status from "../../../components/Status";
import CategoryPrice from "../../../components/CategoryPrice";
import { Business, Maybe } from "../../../graphql/generated/graphql";
import { useMediaQuery } from "../../../hooks/useMediaquery";
import Button from "../../../components/Button";
import TextArrowButton from "../../../components/TextArrowButton";

interface RestaurantProps {
  item: Maybe<Business>;
}

const Restaurant: React.FC<RestaurantProps> = ({ item }) => {
  const {
    colors: { black, white, blue },
    breakpoints: { mobile },
  } = useTheme();
  const history = useHistory();
  const isMobile = useMediaQuery(`(max-width: ${mobile}px)`);

  const handleLearnMoreClick = useCallback(() => {
    history.push(`/detail/${item?.id}`);
  }, [item, history]);

  return (
    <div
      css={css`
        display: grid;
        grid-template-areas: "image" "name" "detail";
        grid-template-rows: 228px auto 130px;
        width: 100%;
        height: 428px;

        @media (max-width: ${mobile}px) {
          grid-template-areas: "image name" "image detail";
          grid-template-columns: 116px auto;
          grid-template-rows: auto auto;
          height: 132px;
          column-gap: 12px;
        }
      `}
    >
      <div
        css={css`
          grid-area: image;
          height: 228px;
          background-image: url(${item?.photos?.[0]});
          background-repeat: no-repeat;
          background-size: cover;
          background-position: 50%;

          @media (max-width: ${mobile}px) {
            height: 132px;
          }
        `}
      />
      <h5
        css={css`
          grid-area: name;
          font-size: 2rem;
          line-height: 1.4;
          font-weight: 400;
          height: 100%;
          color: ${black["400"]};
          padding-top: 16px;
          margin: 0px;

          @media (max-width: ${mobile}px) {
            padding-top: 0px;
          }
        `}
      >
        {item?.name}
      </h5>
      <div
        css={css`
          grid-area: detail;
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          height: fit-content;

          @media (max-width: ${mobile}px) {
            align-self: flex-end;
          }
        `}
      >
        <Rating rating={item?.rating ?? 0} size={isMobile ? "xs" : "sm"} />
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 16px 0px;
          `}
        >
          <CategoryPrice
            category={item?.categories?.[0]?.title ?? ""}
            price={item?.price ?? ""}
          />
          <Status
            open={item?.hours?.[0]?.is_open_now ?? false}
            size={isMobile ? "xs" : "sm"}
          />
        </div>
        {isMobile ? (
          <TextArrowButton onClick={handleLearnMoreClick}>
            Learn More
          </TextArrowButton>
        ) : (
          <Button onClick={handleLearnMoreClick}>LEARN MORE</Button>
        )}
      </div>
    </div>
  );
};

export default Restaurant;
