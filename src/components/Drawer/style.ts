import styled, { keyframes, css } from "styled-components";
import onlineTheme from "../../themes/online";
import { Sizes, Position } from "../../enums";
import { colorType } from "../../types/types";

interface ISDrawer {
   drawerWith: Sizes;
   isFadeOut: Boolean;
   color: colorType;
}
const openFromRight = keyframes`
from{
   transform: translateX(-100%);
}
to{
   transform: translateX(0);
}
`;
const closeFromRight = keyframes`
from{
   transform: translateX(0);
}
to{
   transform: translateX(-100%);
}
`;
export const SDrawer = styled.div<ISDrawer>`
   height: 100vh;
   width: ${({ drawerWith }: ISDrawer) =>
      drawerWith === Sizes.LARGE
         ? "40rem"
         : drawerWith === Sizes.SMALL
         ? "15rem"
         : "20rem"};
   background-color: #fff;
   box-shadow: -10px 0px 20px 1px black;
   position: absolute;
   left: 0;
   top: 0;
   animation: ${openFromRight} 0.3s;
   ${({ isFadeOut }: ISDrawer) =>
      isFadeOut &&
      css`
         animation: ${closeFromRight} 0.3s ease-in;
      `}
   h2 {
      text-align: center;
      margin-top: 3rem;
      color: ${onlineTheme.colors.primary};
      font-family: ${onlineTheme.font.family};
   }

   img {
      width: 1rem;
   }

   .closeBtn {
      width: 1rem;
      position: absolute;
      top: 20px;
      right: 20px;
      cursor: pointer;
   }
   .iconContainer {
      width: fit-content;
      position: absolute;
      top: 0.8rem;
      right: 1.1rem;
      cursor: pointer;
   }
`;
