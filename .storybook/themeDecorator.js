import React from "react";
import { ThemeProvider } from "../src";

const ThemeDecorator = (storyFn) => <>{storyFn()}</>;

export default ThemeDecorator;
