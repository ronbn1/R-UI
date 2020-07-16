import React from "react";
import Button from "../components/Button/Button";

export default {
   title: "Button",
   component: Button,
};

export const TextButton = () => {
   return (
      <>
         <div>
            <Button size="s" text="click me" />
            <Button color="dark" size="s" text="click me" />
            <Button color="secondary" size="s" text="click me" />
            <Button color="success" size="s" text="click me" />
         </div>
         <div>
            <Button size="m" text="click me" />
            <Button color="dark" size="m" text="click me" />
            <Button color="secondary" size="m" text="click me" />
            <Button color="success" size="m" text="click me" />
         </div>
         <div>
            <Button size="l" text="click me" />
            <Button color="dark" size="l" text="click me" />
            <Button color="secondary" size="l" text="click me" />
            <Button color="success" size="l" text="click me" />
         </div>
      </>
   );
};

export const iconButton = () => {
   return (
      <>
         <Button size="s" text="click me" icon="add" />
         <Button size="s" text="click me" icon="delete" />
         <Button size="s" text="click me" icon="up" />
         <Button size="s" text="click me" icon="right" />
         <Button size="s" text="click me" icon="down" />
         <Button size="s" text="click me" icon="left" />
         <Button size="s" text="click me" icon="like" />
      </>
   );
};
