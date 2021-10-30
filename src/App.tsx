import React, { Suspense } from "react";
import { ApolloProvider } from "@apollo/client";
import { ThemeProvider } from "@emotion/react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import GlobalStyles from "./GlobalStyles";
import theme from "./theme";
import client from "./graphql/client";

const Main = React.lazy(() => import("./modules/Main"));
const Detail = React.lazy(() => import("./modules/Detail"));

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <ApolloProvider client={client}>
        <GlobalStyles />
        <Suspense fallback={<div>Loading...</div>}>
          <Router>
            <Switch>
              <Route exact path="/detail/:id">
                <Detail />
              </Route>
              <Route exact path="/">
                <Main />
              </Route>
              <Route path="/*">
                <Redirect to="/" />
              </Route>
            </Switch>
          </Router>
        </Suspense>
      </ApolloProvider>
    </ThemeProvider>
  );
};

export default App;
