import { Position } from "../enums/toolTipPosition";

export const positionToolTip = (side: Position) => {
   switch (side) {
      case Position.TOP_LEFT:
         return `
              left: -50%;
           `;
      case Position.TOP_RIGHT:
         return `
              left: 150%;
           `;
      case Position.BOTTOM_CENTER:
         return `
              top: 120%;
              left: 50%;
              transform: translateX(-50%);
              height: fit-content;
           `;
      case Position.BOTTOM_RIGHT:
         return `
              top: 120%;
              left: 120%;
              transform: translateX(-50%);
              height: fit-content;
           `;
      case Position.BOTTOM_LEFT:
         return `
              top: 120%;
              left: -20%;
              transform: translateX(-50%);
              height: fit-content;
           `;
      case Position.RIGHT:
         return `
              top: 50%;
              left: 125%;
              transform: translateY(-50%);
              height: fit-content;
           `;
      case Position.LEFT:
         return `
              top: 50%;
              left: -215%;
              transform: translate(-50%, -50%);
              height: fit-content;
           `;
      default:
         return ``;
   }
};

export const positionToolTipTriangular = (side: Position) => {
   switch (side) {
      case Position.TOP_CENTER:
         return `
            left: 50%;
            bottom: calc(120% - 0.4rem);
            transform: translateX(-50%);
         `;
      case Position.TOP_LEFT:
         return `
            left: 5%;
            bottom: calc(120% - 0.4rem);
            transform: translateX(-50%);
         `;
      case Position.TOP_RIGHT:
         return `
            left: 95%;
            bottom: calc(120% - 0.4rem);
            transform: translateX(-50%);
         `;
      case Position.BOTTOM_CENTER:
         return `
            left: 50%;
            bottom: calc(120% - 1.8rem);
            transform: translateX(-50%) rotate(180deg);
         `;
      case Position.BOTTOM_RIGHT:
         return `
            left: 95%;
            bottom: calc(120% - 1.8rem);
            transform: translateX(-50%) rotate(180deg);
         `;
      case Position.BOTTOM_LEFT:
         return `
            left: 5%;
            bottom: calc(120% - 1.8rem);
            transform: translateX(-50%) rotate(180deg);
         `;
      case Position.RIGHT:
         return `
            left: 120%;
            top: 50%;
            bottom: calc(120% - 1.8rem);
            transform: translate(-50%, -50%) rotate(90deg);
         `;
      case Position.LEFT:
         return `
            left: -20%;
            top: 50%;
            bottom: calc(120% - 1.8rem);
            transform: translate(-50%, -50%) rotate(-90deg);
         `;
   }
};
