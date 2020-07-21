import React from "react";
import styled, { StyledComponent, css } from "styled-components";
import onlineTheme from "../../themes/online";
import { Position } from "../../enums/toolTipPosition";
import {
   positionToolTip,
   positionToolTipTriangular,
} from "../../helpers/helpers";

interface ISContainerProps {
   children: React.ReactNode;
   onMouseEnter: () => void;
   onMouseLeave: () => void;
}

interface ISToolTipProps {
   children?: React.ReactNode;
   isTitle?: boolean;
   side: Position;
}

export const SToolTipContainer: StyledComponent<
   "div",
   ISContainerProps,
   {},
   never
> = styled.div`
   position: relative;
   display: inline-block;
`;

export const SToolTip: React.FunctionComponent<ISToolTipProps> = styled.div`
   background-color: ${onlineTheme.colors.dark};
   border-radius: 5px;
   position: absolute;
   bottom: 120%;
   left: 50%;
   transform: translateX(-50%);
   padding: ${({ isTitle }: ISToolTipProps) => (isTitle ? "0.5rem" : 0)};
   color: #eee;
   text-align: center;
   width: max-content;
   max-width: 15em;
   .body {
      font-size: ${onlineTheme.font.size.smallMedium2};
      padding: 0.3em;
   }

   ${({ side }: ISToolTipProps) => {
      return css`
         ${positionToolTip(side)}
      `;
   }}
`;

export const Triangular: React.FunctionComponent<ISToolTipProps> = styled.div`
   clip-path: polygon(50% 100%, 0 0, 100% 0);
   background-color: ${onlineTheme.colors.dark};
   width: 0.8rem;
   height: 0.5rem;
   position: absolute;
   ${({ side }: ISToolTipProps) => {
      return css`
         ${positionToolTipTriangular(side)}
      `;
   }}
`;

export const ToolTipTitle: React.FunctionComponent = styled.div`
   text-align: left;
   border-bottom: 1px solid #eeeeee50;
`;
