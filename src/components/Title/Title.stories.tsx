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
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="success" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="dark" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="light" />
         </span>
      </>
   );
};

export const titleWithUnderline = () => {
   return (
      <>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" underline="secondary" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" underline="success" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" underline="primary" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" underline="dark" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" underline="light" />
         </span>
      </>
   );
};

export const decoratedTitle = () => {
   return (
      <>
         {" "}
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" square="secondary" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" square="success" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" square="primary" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" square="dark" />
         </span>
         <span style={{ padding: "2rem" }}>
            <Title text="Hello World" color="secondary" square="light" />
         </span>
      </>
   );
};
