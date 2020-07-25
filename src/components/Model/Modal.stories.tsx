import React from "react";
import Modal from "./Modal";
import { jsxDecorator } from "storybook-addon-jsx";
import { Sizes, Position } from "../../enums";
export default {
   title: "Modal",
   component: Modal,
   decorators: [jsxDecorator],
};

export const ModelPopUp = () => {
   return (
      <>
         <Modal
            size={Sizes.SMALL}
            title="Modal Title"
            body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?"
            button={["OK", "CANCEL"]}
            onClickButton={[
               () => console.log("OK"),
               () => console.log("CANCEL"),
            ]}
            buttonPosition={Position.LEFT}
         >
            <span style={{ margin: "3rem" }}>Open small modal</span>
         </Modal>
         <Modal
            size={Sizes.MEDIUM}
            title="Modal Title"
            body={[
               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?",
               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?",
            ]}
            button={["OK", "CANCEL"]}
            onClickButton={[
               () => console.log("OK"),
               () => console.log("CANCEL"),
            ]}
            buttonPosition={Position.RIGHT}
         >
            <span style={{ margin: "3rem" }}>Open medium modal</span>
         </Modal>
         <Modal
            size={Sizes.LARGE}
            title="Modal Title"
            body={[
               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?",
               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?",
               "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?",
            ]}
            button={["OK", "CANCEL", "HELP"]}
            onClickButton={[
               () => console.log("OK"),
               () => console.log("CANCEL"),
               () => console.log("Help"),
            ]}
         >
            <span style={{ margin: "3rem" }}>Open large modal</span>
         </Modal>
      </>
   );
};
