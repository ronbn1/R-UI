import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../../types/types";
import { Sizes, Colors } from "../../../enums";
import onlineTheme from "../../../themes/online";

interface Props {}

export const SNavBar: StyledComponent<"div", any, Props, never> = styled.div`
   padding: 0.5rem 3rem;
   border-bottom: 1px solid #ffffff40;
   display: flex;
   justify-content: space-between;
   align-items: center;

   .iconsContainer {
      display: flex;
      justify-content: flex-end;
   }
   .icon {
      padding: 0.5rem 1rem;
      cursor: pointer;
   }
`;
