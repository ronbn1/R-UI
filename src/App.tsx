import React from "react";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import { GlobalStyle } from "./themes/globalStyls";
const App: React.FC = (): JSX.Element => (
   <>
      <GlobalStyle />
      <Title text="Hello world" square="primary" />
      <Button size="s" text="click me" icon="down" />
   </>
);
export default App;
