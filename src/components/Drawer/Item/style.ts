import styled, { keyframes, css } from "styled-components";
import onlineTheme from "../../../themes/online";
import { colorType, iconType } from "../../../types/types";
interface ISItem {
   color: colorType;
}

export const SItemContainer = styled.div`
   display: flex;
   flex-direction: column;
   padding-top: 0.5rem;
   position: absolute;
   top: 40%;
   left: 0;
   width: 100%;
   transform: translateY(-50%);
`;

export const SItem = styled.p`
   display: flex;
   margin: 0.2rem;
   img {
      opacity: 0.5;
      width: 20px;
      padding: 0 3rem 0 1rem;
   }
   color: ${({ color }: ISItem) =>
      color ? onlineTheme.colors[color] : onlineTheme.colors.dark};
   width: 100%;
   text-align: center;
   padding: 0.5rem 0;
   font-family: ${onlineTheme.font.family};
   cursor: pointer;
   &:hover {
      background-color: ${onlineTheme.colors.primary + "f0"};
   }
`;
