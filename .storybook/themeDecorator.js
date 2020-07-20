import React from "react";
import { ThemeProvider } from "styled-components";
import onlineTheme from "../src/themes/online.ts";

const ThemeDecorator = (storyFn) => (
   <ThemeProvider theme={onlineTheme}>{storyFn()}</ThemeProvider>
);

export default ThemeDecorator;
