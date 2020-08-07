import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../types/types";
import { Sizes, Colors } from "../../enums/";
import onlineTheme from "../../themes/online";

interface ISIconProps {
   color?: Colors;
   icon: iconType;
   size?: Sizes;
}

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
