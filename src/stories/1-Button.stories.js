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
         <Button size="s" text="click me" icon="plus" />
         <Button size="s" text="click me" icon="trash" />
         <Button size="s" text="click me" icon="upArrow" />
         <Button size="s" text="click me" icon="rightArrow" />
         <Button size="s" text="click me" icon="downArrow" />
         <Button size="s" text="click me" icon="leftArrow" />
         <Button size="s" text="click me" icon="heart" />
         <Button size="s" text="click me" icon="smile" />
      </>
   );
};
