import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../../types/types";
import { Sizes, Colors } from "../../../enums";
import onlineTheme from "../../../themes/online";
import Icon from "../../Icon/Icon";

// export const SDropdown: StyledComponent<
//    "span",
//    any,
//    Props,
//    never
// > = styled.span`
//    .label {
//       width: fit-content;
//       cursor: pointer;
//       display: flex;
//       padding: 0.2rem;
//       span {
//          padding-right: 0.5rem;
//       }
//    }
// `;

// export const SMenu: StyledComponent<"div", any, Props, never> = styled.div`
//    display: flex;
//    flex-direction: column;
//    border: 1px solid ${onlineTheme.colors.dark};
//    border-radius: 5px;
//    box-sizing: border-box;
//    width: fit-content;
//    margin: 0.2rem 0 0 0.8rem;
// `;

// export const SLink: StyledComponent<"div", any, Props, never> = styled.div`
//    padding: 0.5rem 1.5rem;
//    width: 100%;
//    box-sizing: border-box;

//    &:hover {
//       background-color: #eeeeee50;
//       cursor: pointer;
//    }
// `;
interface ISToggle {
   color?: Colors;
}
export const SToggle: StyledComponent<"p", any, ISToggle, never> = styled.p`
   display: flex;
   color: ${({ color }: ISToggle) => color && onlineTheme.colors[color]};
   cursor: pointer;
   width: fit-content;

   .iconContainer {
      padding: 0 0.5rem;
   }
`;
interface ISMenu {
   color?: Colors;
}
export const SMenu: StyledComponent<"div", any, ISMenu, never> = styled.div`
   width: fit-content;
   margin: 0.5rem 0;
   border: 1px solid #eeeeee;
   border-radius: 5px;
   background-color: white;
`;

interface ISItem {
   color?: Colors;
}
export const SItem: StyledComponent<"div", any, ISItem, never> = styled.div`
   padding: 0.5rem 1rem;
   color: ${({ color }: ISItem) => color && onlineTheme.colors[color]};
   font-family: ${onlineTheme.font.family};
   font-size: 0.9rem;
   &:hover {
      cursor: pointer;
      background-color: #eeeeee60;
   }
`;
