import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    colors: {
      grey: {
        "100": string;
        "200": string;
        "400": string;
        "500": string;
        "600": string;
      };
      black: {
        "300": string;
        "400": string;
      };
      white: string;
      blue: string;
      green: string;
      red: string;
    };
    breakpoints: {
      mobile: number;
    };
  }
}
