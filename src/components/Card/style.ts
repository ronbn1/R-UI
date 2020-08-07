import styled, { StyledComponent, css } from "styled-components";
import { colorType, sizesType, iconType } from "../../types/types";
import { Sizes, Colors } from "../../enums";
import onlineTheme from "../../themes/online";
import Icon from "../Icon/Icon";
import Title from "../Title/Title";

interface ISCard {
   width?: Sizes;
}

interface ISBody {}

interface ISTitle {
   size?: sizesType;
   color?: colorType;
}

interface ISSubtitle {
   size?: sizesType;
   color?: colorType;
}

interface ISText {
   size?: sizesType;
   color?: colorType;
}

interface ISTopIcon {}

interface ISLinkContainer {}
export const SCard: StyledComponent<"div", any, ISCard, never> = styled.div`
   width: ${({ width }: ISCard) =>
      width === Sizes.LARGE
         ? "25rem"
         : width === Sizes.MEDIUM
         ? "20rem"
         : width === Sizes.SMALL
         ? "15rem"
         : "10rem"};
   border: 1px solid #00000050;
   border-radius: 8px;
`;

export const SBody: StyledComponent<"div", any, ISBody, never> = styled.div`
   padding: 1rem;
`;

export const STitle: StyledComponent<"h2", any, ISTitle, never> = styled.h2`
   font-size: ${({ size }: ISTitle) =>
      size ? onlineTheme.sizes[size] : "1.2rem"};
   color: ${({ color }: ISTitle) =>
      color ? onlineTheme.colors[color] : onlineTheme.colors.primary};
   padding: 0 0.4rem;
`;

export const SSubtitle: StyledComponent<"p", any, ISSubtitle, never> = styled.p`
   font-size: ${({ size }: ISSubtitle) =>
      size ? onlineTheme.sizes[size] : "1rem"};

   color: ${({ color }: ISSubtitle) =>
      color ? onlineTheme.colors[color] : onlineTheme.colors.dark};
   padding: 0.5rem;
`;

export const SText: StyledComponent<"p", any, ISText, never> = styled.p`
   font-size: ${({ size }: ISText) =>
      size ? onlineTheme.sizes[size] : "1rem"};

   color: ${({ color }: ISText) =>
      color ? onlineTheme.colors[color] : onlineTheme.colors.secondary};
   padding: 0.5rem;
`;

export const SLinkContainer: StyledComponent<
   "div",
   any,
   ISLinkContainer,
   never
> = styled.div`
   display: flex;
   justify-content: center;
`;

export const STopIcon: StyledComponent<
   "div",
   any,
   ISTopIcon,
   never
> = styled.div`
   display: flex;
   justify-content: flex-end;
`;

// interface ISTitle {}
// export const STitle: StyledComponent<"h1", any, STitle, never> = styled(Title)``;

// interface ISMenu {
//    color?: Colors;
// }
// export const SMenu: StyledComponent<"div", any, ISMenu, never> = styled.div`
//    width: fit-content;
//    margin: 0.5rem 0;
//    border: 1px solid #eeeeee;
//    border-radius: 5px;
//    background-color: white;
// `;

// interface ISItem {
//    color?: Colors;
// }
// export const SItem: StyledComponent<"div", any, ISItem, never> = styled.div`
//    padding: 0.5rem 1rem;
//    color: ${({ color }: ISItem) => color && onlineTheme.colors[color]};
//    font-family: ${onlineTheme.font.family};
//    font-size: 0.9rem;
//    &:hover {
//       cursor: pointer;
//       background-color: #eeeeee60;
//    }
// `;
