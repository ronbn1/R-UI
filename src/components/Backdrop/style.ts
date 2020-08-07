import styled, { keyframes, css, StyledComponent } from "styled-components";

interface ISBackdropProps {
   isFadeOut: boolean;
   opacity?: number;
   timer?: number;
   bg?: boolean;
}
const fadeIn = keyframes`
from{
    opacity:0
}
to {
    opacity:100
}
`;

const fadeOut = keyframes`
from{
    opacity:100
}
to {
    opacity:0
}
`;
export const SBackdrop: StyledComponent<
   "div",
   any,
   ISBackdropProps,
   never
> = styled.div`
   position: absolute;
   top: 0;
   left: 0;
   z-index: -1;

   ${({ bg }: ISBackdropProps) => {
      return bg
         ? css`
              background-color: rgba(
                 0,
                 0,
                 0,
                 ${({ opacity }: ISBackdropProps) => opacity}
              );
           `
         : css`
              background-color: transparent;
           `;
   }}

   height: 100%;
   width: 100%;
   animation: ${fadeIn} ${({ timer }: ISBackdropProps) => timer}s;
   ${({ isFadeOut }: ISBackdropProps) =>
      isFadeOut &&
      css`
         animation: ${fadeOut} ${({ timer }: ISBackdropProps) => timer}s;
      `}
`;
