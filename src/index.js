import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import "./index.css";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";

const client = new ApolloClient({
  uri: "https://js-petshelterapi.herokuapp.com/graphql"
});

ReactDOM.render(
  <ApolloProvider client={client}>
  <BrowserRouter>
    <App />
  </BrowserRouter>
  </ApolloProvider>,
  document.getElementById("root")
);

serviceWorker.register();
