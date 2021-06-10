import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";

import MovieSearch from "./pages/MovieSearch";

const GlobalStyle = createGlobalStyle`
* {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    font-family: 'Nunito', sans-serif;
  }
  p, label {
    color: white;
    font-size: 20px;
    margin: 0;
  }
  button {
    background:none;
    border:none;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <MovieSearch />
    <GlobalStyle />
  </React.StrictMode>,
  document.getElementById("root")
);
