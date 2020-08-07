import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../../types/types";
import { Sizes, Colors } from "../../../enums/";
import onlineTheme from "../../../themes/online";

interface IProps {
   active: Boolean;
}

interface ISLabelProps {}

interface ISIconProps {
   color?: Colors;
   icon: iconType;
   size?: Sizes;
}
export const SItem: StyledComponent<"div", any, IProps, never> = styled.div`
   height: 60px;
   padding: 5px 0;
   width: 100%;
   position: relative;
   transition: all 0.2s;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   cursor: pointer;
   .selectedLine {
      opacity: 0;
      transition: all 0.2s;
   }
   ${({ active }: IProps) =>
      active &&
      css`
         background-color: ${onlineTheme.colors.selected};
         .selectedLine {
            opacity: 1;
            width: 5px;
            height: 100%;
            background-color: ${onlineTheme.colors.primary};
            position: absolute;
            top: 0%;
            left: 0;
         }
         ${SIcon} ,${SLabel}{
            opacity: 1;
         }
      `};
`;

export const SLabel: StyledComponent<
   "div",
   any,
   ISLabelProps,
   never
> = styled.div`
   font-size: 0.75rem;
   font-family: ${onlineTheme.font.family};
   color: white;
   text-align: center;
   opacity: 0.5;
   padding-top: 0.5rem;
`;

export const SIcon: StyledComponent<
   "div",
   any,
   ISIconProps,
   never
> = styled.div`
   background-size: cover;
   opacity: 0.5;
   width: ${({ size }: ISIconProps) =>
      size === Sizes.MEDIUM
         ? "1.5rem"
         : size === Sizes.LARGE
         ? "3rem"
         : "1rem"};
   height: ${({ size }: ISIconProps) =>
      size === Sizes.MEDIUM
         ? "1.5rem"
         : size === Sizes.LARGE
         ? "3rem"
         : "1rem"};
   background-color: ${(props: ISIconProps) =>
      props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary};
   mask: ${(props: ISIconProps) =>
      props.icon && `url(${onlineTheme.icons[props.icon]}) `};
   mask-repeat: no-repeat;
`;
