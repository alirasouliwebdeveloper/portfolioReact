import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import App from "./App";
import customTheme from "./theme/theme";
import "focus-visible/dist/focus-visible";

const root = ReactDOM.createRoot(document.getElementById("root"));

const breakpoints = ["360px", "768px", "1024px", "1440px"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];

const newTheme = {
  ...customTheme,
  breakpoints,
};

root.render(
  // <React.StrictMode>
  <ChakraProvider theme={newTheme}>
    <CSSReset />
    <App />
  </ChakraProvider>
  // </React.StrictMode>
);
