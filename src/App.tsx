import React from "react";
import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div>Hello There!</div>
    </ThemeProvider>
  );
};

export default App;
