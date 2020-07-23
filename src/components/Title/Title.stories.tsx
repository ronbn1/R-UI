import React from "react";
import Title from "./Title";

export default {
   title: "Title",
   component: Title,
   decorators: [
      (storyFn: any) => <div style={{ display: "flex" }}>{storyFn()}</div>,
   ],
};

export const title = () => {
   return (
      <>
         <Title text="Hello World" />
         <Title text="Hello World" color="secondary" />
         <Title text="Hello World" color="success" />
         <Title text="Hello World" color="dark" />
         <Title text="Hello World" color="light" />
      </>
   );
};

export const titleWithUnderline = () => {
   return (
      <>
         <Title text="Hello World" color="secondary" underline="secondary" />
         <Title text="Hello World" color="secondary" underline="success" />
         <Title text="Hello World" color="secondary" underline="primary" />
         <Title text="Hello World" color="secondary" underline="dark" />
         <Title text="Hello World" color="secondary" underline="light" />
      </>
   );
};

export const decoratedTitle = () => {
   return (
      <>
         <Title text="Hello World" color="secondary" square="secondary" />
         <Title text="Hello World" color="secondary" square="success" />
         <Title text="Hello World" color="secondary" square="primary" />
         <Title text="Hello World" color="secondary" square="dark" />
         <Title text="Hello World" color="secondary" square="light" />
      </>
   );
};
