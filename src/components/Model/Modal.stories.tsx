import React, { useState } from "react";
import Modal from "./Modal";

export default {
   title: "Modal",
   component: Modal,
};

export const ModelPopUp = () => {
   return (
      <>
         <Modal
            trigger={<span style={{ margin: "3rem" }}>Open small modal</span>}
            size="small"
            title="Modal Title"
            body="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus quis corrupti unde aperiam nisi, harum libero sed id doloremque veritatis, recusandae animi nam accusantium voluptate est illo nesciunt praesentium enim?"
            button={["OK", "CANCEL"]}
            onClickButton={[
               () => console.log("OK"),
               () => console.log("CANCEL"),
            ]}
            buttonPosition="left"
         />
         <Modal
            trigger={<span style={{ margin: "3rem" }}>Open medium modal</span>}
            size="medium"
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
            buttonPosition="right"
         />
         <Modal
            trigger={<span style={{ margin: "3rem" }}>Open large modal</span>}
            size="medium"
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
         />
      </>
   );
};
