import React from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import client from "./graphql/client";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <div>Hello There!</div>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
