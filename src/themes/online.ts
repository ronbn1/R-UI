import leftArrow from "../assets/arrow-left-solid.svg";
import downArrow from "../assets/arrow-down-solid.svg";
import rightArrow from "../assets/arrow-right-solid.svg";
import upArrow from "../assets/arrow-up-solid.svg";
import heart from "../assets/heart-regular.svg";
import plus from "../assets/plus-circle-solid.svg";
import trash from "../assets/trash-solid.svg";
import smile from "../assets/smile-regular.svg";
import close from "../assets/times-circle-regular.svg";
const onlineTheme: {
   font: {
      family: string;
      size: {
         small: string;
         smallMedium: string;
         smallMedium2: string;
         smallMedium3: string;
         medium: string;
         medium2: string;
         medium3: string;
         mediumLarge: string;
         large: string;
         huge: string;
         huger: string;
         gargantuan: string;
      };
      weight: {
         thin: string;
         regular: string;
         bold: string;
      };
   };
   sizes: {
      s: string;
      m: string;
      l: string;
   };
   colors: {
      secondary: string;
      success: string;
      dark: string;
      primary: string;
      light: string;
   };
   icons: {
      plus: any;
      trash: any;
      heart: any;
      downArrow: any;
      rightArrow: any;
      leftArrow: any;
      upArrow: any;
      smile: any;
      close: any;
   };
} = {
   font: {
      family: "Roboto",
      size: {
         small: "0.5rem",
         smallMedium: "0.7rem",
         smallMedium2: "0.8rem",
         smallMedium3: "0.9rem",
         medium: "1rem",
         medium2: "1.2rem",
         medium3: "1.3rem",
         mediumLarge: "1.4rem",
         large: "1.5rem",
         huge: "2rem",
         huger: "2.2.5rem",
         gargantuan: "3rem",
      },
      weight: {
         thin: "300",
         regular: "400",
         bold: "600",
      },
   },
   sizes: {
      s: "1rem",
      m: "1.5rem",
      l: "2rem",
   },
   colors: {
      secondary: "#3d5a80",
      success: "#3bceac",
      dark: "#293241",
      primary: "#ee6c4d",
      light: "#e0fbfc",
   },
   icons: {
      plus,
      trash,
      heart,
      downArrow,
      rightArrow,
      leftArrow,
      upArrow,
      smile,
      close,
   },
};
export default onlineTheme;
export type ThemeType = typeof onlineTheme;
