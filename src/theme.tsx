import { Theme } from "@emotion/react";

const theme: Theme = {
  colors: {
    grey: {
      "100": "hsla(0, 0%, 90%, 1)",
      "200": "hsla(0, 0%, 78%, 1)",
      "400": "hsla(0, 0%, 46%, 1)",
      "500": "hsla(0, 0%, 40%, 1)",
      "600": "hsla(0, 0%, 38%, 1)",
    },
    black: {
      "300": "hsla(0, 0%, 20%, 1)",
      "400": "hsla(0, 0%, 0%, 1)",
    },
    white: "hsla(0, 0%, 100%, 1)",
    blue: "hsla(210, 100%, 17%, 1)",
    green: "hsla(162, 100%, 45%, 1)",
    red: "hsla(354, 100%, 60%, 1)",
  },
  breakpoints: {
    mobile: 870,
  },
};

export default theme;
