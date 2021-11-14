import React from "react";
import { css } from "@emotion/react";

interface RatingProps {
  rating?: number;
  size?: "xs" | "sm" | "lg";
}

const Rating: React.FC<RatingProps> = ({ rating = 0, size = "sm" }) => {
  const normalizedRating = rating < 0 ? 0 : rating > 5 ? 5 : rating;
  const RatingTrunc = Math.trunc(normalizedRating);
  const hasHalf = normalizedRating - RatingTrunc > 0;
  const stars = {
    filled: Array(RatingTrunc).fill(0),
    half: hasHalf,
    outline: Array((hasHalf ? 4 : 5) - RatingTrunc).fill(0),
  };

  return (
    <div
      css={css`
        display: flex;
        width: 100%;
      `}
    >
      {stars.filled.map((_, index) => (
        <Filled size={size} key={index} />
      ))}
      {stars.half && <Half size={size} />}
      {stars.outline.map((_, index) => (
        <Outline size={size} key={index} />
      ))}
    </div>
  );
};

interface IconProps {
  size: "xs" | "sm" | "lg";
}
const Filled: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      height={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 0.140015L12.76 7.54001H19.76L13.86 11.98L16.72 19.44L10 14.4L3.3 19.44L6.14 11.98L0.239998 7.54001H7.22L10 0.140015Z"
        fill="#002B56"
      />
    </svg>
  );
};

const Half: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      height={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
        stroke="#002B56"
      />
      <mask
        id="mask0_0:415"
        maskUnits="userSpaceOnUse"
        x="0"
        y="0"
        width={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
        height={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      >
        <path
          d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
          fill="white"
          stroke="white"
        />
      </mask>
      <g mask="url(#mask0_0:415)">
        <rect width="10" height="20" fill="#002B56" />
      </g>
    </svg>
  );
};

const Outline: React.FC<IconProps> = ({ size }) => {
  return (
    <svg
      width={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      height={size === "xs" ? "13" : size === "sm" ? "20" : "30"}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.9983 1.56627L12.2915 7.71474L12.4128 8.04001H12.76H18.264L13.5593 11.5805L13.2582 11.8071L13.3931 12.159L15.6321 17.9991L10.3 14L9.99954 13.7747L9.69942 14.0004L4.38347 17.9993L6.60727 12.1579L6.74103 11.8066L6.44064 11.5805L1.73594 8.04001H7.21999H7.56627L7.68805 7.71585L9.9983 1.56627Z"
        stroke="#002B56"
      />
    </svg>
  );
};

export default Rating;
