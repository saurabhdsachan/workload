import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import App from "./App";
import theme from "./constants/theme";
import reportWebVitals from "./reportWebVitals";
import { WorkloadProvider } from "./store";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    font-size: ${({ theme }) => theme.sizes.base}px;
    color: ${({ theme }) => theme.color.blue};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  h1{
    font-size: ${({ theme }) => theme.sizes.h1}px;
    line-height: ${({ theme }) => theme.sizes.h1 * 2.5}px;
  }
  h2{
    font-size: ${({ theme }) => theme.sizes.h2}px;
    line-height: ${({ theme }) => theme.sizes.h2 * 3}px;
  }
  h3{
    font-size: ${({ theme }) => theme.sizes.h3}px;
    line-height: ${({ theme }) => theme.sizes.h3 * 1.7}px;
  }
  h1,h2,h3{
    margin:0;
  }
  p{
    margin:0;
  }
  .uppercase{
    text-transform: uppercase;
  }
  hr{
    border-top: 1px solid red;
    border-bottom-width: 0px;
    border-left-width: 0px;
    border-right-width: 0px;
    border-top-color: ${({ theme }) => theme.color.bc};
  }
  .App{
    width: 70%;
    margin: auto;
  }
`;

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <WorkloadProvider>
        <App />
      </WorkloadProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
