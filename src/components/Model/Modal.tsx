import React, { useState, useEffect } from "react";
import { SModal, SBody, SBtnContainer } from "./style";
import Title from "../Title/Title";
import Button from "../Button/Button";
import { colorType, sizesType } from "../../types/types";
import onlineTheme from "../../themes/online";

interface IModalProps {
   size?: "small" | "medium" | "large";
   trigger: any;
   body: string | string[];
   title?: string;
   color?: colorType;
   button?: string | string[];
   onClickButton?: any;
   buttonPosition?: "left" | "center" | "right";
}

const Modal = ({
   size = "medium",
   body,
   title,
   color,
   button,
   onClickButton,
   trigger,
   buttonPosition = "center",
}: IModalProps) => {
   const [isModalShow, setIsModalShow] = useState(false);
   const [fadeOut, setFadeOut] = useState(false);
   useEffect(() => {
      if (fadeOut) {
         setTimeout(() => {
            setFadeOut(false);
            setIsModalShow(false);
         }, 200);
      }
   }, [fadeOut]);
   return (
      <>
         <span
            onClick={() =>
               isModalShow ? setFadeOut(true) : setIsModalShow(true)
            }
         >
            {trigger}
         </span>
         {isModalShow && (
            <>
               <div
                  style={{
                     width: "100vw",
                     height: "100vh",
                     position: "absolute",
                  }}
                  onClick={() => {
                     setFadeOut(true);
                  }}
               />

               <SModal size={size} show={isModalShow} isFadeOut={fadeOut}>
                  {title && <Title text={title} color={color} align="center" />}
                  <span className="close" onClick={() => setFadeOut(true)}>
                     <img src={onlineTheme.icons.close} alt="close" />
                  </span>
                  <SBody>
                     {typeof body === "object" ? (
                        body.map((b) => <p className="text">{b}</p>)
                     ) : (
                        <p className="text">{body}</p>
                     )}
                  </SBody>
                  {button && (
                     <SBtnContainer buttonPosition={buttonPosition}>
                        {typeof button === "string" ? (
                           <Button
                              text={button}
                              onClick={onClickButton}
                              color={color}
                           />
                        ) : (
                           button.map(
                              (b, i) =>
                                 typeof onClickButton === "object" && (
                                    <Button
                                       text={b}
                                       onClick={onClickButton[i]}
                                       color={color}
                                    />
                                 )
                           )
                        )}
                     </SBtnContainer>
                  )}
               </SModal>
            </>
         )}
      </>
   );
};

export default Modal;
