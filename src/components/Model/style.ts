import styled, { keyframes, css } from "styled-components";
import onlineTheme from "../../themes/online";
import { Sizes, Position } from "../../enums";
interface ISModal {
   show: boolean;
   size?: Sizes;
   isFadeOut: boolean;
}

interface ISButtonContainer {
   buttonPosition?: Position.LEFT | Position.RIGHT | Position.CENTER;
}

const fadeIn = keyframes`
  from {
   opacity:0;
   margin-top:-10rem;
  }

  to {
   opacity:1;
   margin-top:0rem;
   }
`;

const fadeOut = keyframes`
  from {
   opacity:1;
   margin-top:0rem;
  }
 
  to {
   opacity:0;
   margin-top:-10rem;
   }
`;
export const SModal = styled.div<ISModal>`
   ${({ isFadeOut }: ISModal) => {
      if (isFadeOut) {
         return css`
            animation: ${fadeOut} 0.3s;
         `;
      } else {
         return css`
            animation: ${({ show }: ISModal) => (show ? fadeIn : fadeOut)} 0.2s;
         `;
      }
   }};

   display: flex;

   flex-direction: column;
   max-width: ${({ size }: ISModal) =>
      size === Sizes.MEDIUM ? "40%" : size === Sizes.SMALL ? "25%" : "50%"};

   position: absolute;
   top: 50%;
   left: 50%;
   transform: translate(-50%, -50%);
   box-shadow: 0px 0 30px -20px ${onlineTheme.colors.dark};
   border-radius: 5px;
   .close {
      position: absolute;
      right: 20px;
      top: 20px;
      img {
         width: 20px;
         height: 20px;
         opacity: 0.7;
         cursor: pointer;
      }
   }
`;

export const SBody = styled.div`
   display: flex;
   flex-direction: column;
   flex: 1;
   padding: 0 1rem 0 1rem;
   .text {
      text-align: center;
      padding-bottom: 1rem;
      font-family: ${onlineTheme.font.family};
   }
`;

export const SBtnContainer = styled.div<ISButtonContainer>`
   display: flex;
   justify-content: ${({ buttonPosition }: ISButtonContainer) =>
      buttonPosition === Position.LEFT
         ? "flex-start"
         : buttonPosition === Position.RIGHT
         ? "flex-end"
         : Position.CENTER};
   flex: 1;
`;
