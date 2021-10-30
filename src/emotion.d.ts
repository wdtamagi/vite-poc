import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      blue: string;
      darkBlue: string;
      lightGrey: string;
      grey: string;
      mediumGrey: string;
      darkGrey: string;
      green: string;
      red: string;
      offBlack: string;
      white: string;
      black: string;
    };
  }
}
