import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../../types/types";
import { Sizes, Colors } from "../../../enums/";
import onlineTheme from "../../../themes/online";

interface Props {
   width: Sizes;
   backgroundColor?: Colors;
   gradientBackgroundColor?: Colors[];
}
interface ILogoProps {
   children: any;
}
export const SSideNav: StyledComponent<"div", any, Props, never> = styled.div`
   width: ${({ width = Sizes.MEDIUM }: Props) =>
      width === Sizes.MEDIUM
         ? "150px"
         : width === Sizes.LARGE
         ? "200px"
         : "125px"};
   height: 100vh;
   ${({ gradientBackgroundColor, backgroundColor = Colors.PRIMARY }: Props) =>
      gradientBackgroundColor
         ? css`
              background: linear-gradient(
                 220deg,
                 ${onlineTheme.colors[gradientBackgroundColor[0]] + "e0"},
                 ${onlineTheme.colors[gradientBackgroundColor[1]]}
              );
           `
         : backgroundColor &&
           css`
              background-color: ${onlineTheme.colors[backgroundColor]};
           `}
`;
export const SLogo: StyledComponent<"div", any, ILogoProps, never> = styled.div`
   font-size: 1.5rem;
   color: ${onlineTheme.colors.primary};
   text-align: center;
   padding: 1rem 0;
   font-family: ${onlineTheme.font.family};
`;
