import React from "react";
import Title from "./components/Title/Title";
import Button from "./components/Button/Button";
import { Reset } from "styled-reset";

const App: React.FC = (): JSX.Element => (
   <>
      <Reset />
      <Title text="Hello world" square="primary" />
      <Button size="s" text="click me" icon="smile" />
   </>
);
export default App;
