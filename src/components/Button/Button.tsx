import React from "react";
import StyledButton from "./Button-style";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { colorType, sizesType, iconType } from "../../types";
import { icons } from "../../styles/utils";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
   faArrowDown,
   faArrowUp,
   faArrowRight,
   faArrowLeft,
   faPlusCircle,
   faHeart,
   faSmile,
   faTrash,
} from "@fortawesome/free-solid-svg-icons";

library.add(
   faArrowUp,
   faArrowRight,
   faArrowLeft,
   faPlusCircle,
   faArrowDown,
   faSmile,
   faHeart,
   faTrash
);

interface Props {
   text: string;
   color?: colorType;
   size?: sizesType;
   icon?: iconType;
}

const Button = (props: Props) => {
   return (
      <StyledButton color={props.color} size={props.size}>
         {props.text}
         <span>
            {props.icon ? <FontAwesomeIcon icon={icons[props.icon]} /> : ""}
         </span>
      </StyledButton>
   );
};

export default Button;
