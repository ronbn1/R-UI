import styled, { keyframes, css } from "styled-components";
import onlineTheme from "../../themes/online";
import { Sizes, Position } from "../../enums";
var __makeTemplateObject =
   (this && this.__makeTemplateObject) ||
   function(cooked, raw) {
      if (Object.defineProperty) {
         Object.defineProperty(cooked, "raw", { value: raw });
      } else {
         cooked.raw = raw;
      }
      return cooked;
   };
var fadeIn = keyframes(
   templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
         [
            "\n  from {\n   opacity:0;\n   margin-top:-10rem;\n  }\n\n  to {\n   opacity:1;\n   margin-top:0rem;\n   }\n",
         ],
         [
            "\n  from {\n   opacity:0;\n   margin-top:-10rem;\n  }\n\n  to {\n   opacity:1;\n   margin-top:0rem;\n   }\n",
         ]
      ))
);
var fadeOut = keyframes(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         [
            "\n  from {\n   opacity:1;\n   margin-top:0rem;\n  }\n \n  to {\n   opacity:0;\n   margin-top:-10rem;\n   }\n",
         ],
         [
            "\n  from {\n   opacity:1;\n   margin-top:0rem;\n  }\n \n  to {\n   opacity:0;\n   margin-top:-10rem;\n   }\n",
         ]
      ))
);
export var SModal = styled.div(
   templateObject_5 ||
      (templateObject_5 = __makeTemplateObject(
         [
            "\n   ",
            ";\n\n   display: flex;\n\n   flex-direction: column;\n   max-width: ",
            ";\n\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   box-shadow: 0px 0 30px -20px ",
            ";\n   border-radius: 5px;\n   .close {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      img {\n         width: 20px;\n         height: 20px;\n         opacity: 0.7;\n         cursor: pointer;\n      }\n   }\n",
         ],
         [
            "\n   ",
            ";\n\n   display: flex;\n\n   flex-direction: column;\n   max-width: ",
            ";\n\n   position: absolute;\n   top: 50%;\n   left: 50%;\n   transform: translate(-50%, -50%);\n   box-shadow: 0px 0 30px -20px ",
            ";\n   border-radius: 5px;\n   .close {\n      position: absolute;\n      right: 20px;\n      top: 20px;\n      img {\n         width: 20px;\n         height: 20px;\n         opacity: 0.7;\n         cursor: pointer;\n      }\n   }\n",
         ]
      )),
   function(_a) {
      var isFadeOut = _a.isFadeOut;
      if (isFadeOut) {
         return css(
            templateObject_3 ||
               (templateObject_3 = __makeTemplateObject(
                  ["\n            animation: ", " 0.3s;\n         "],
                  ["\n            animation: ", " 0.3s;\n         "]
               )),
            fadeOut
         );
      } else {
         return css(
            templateObject_4 ||
               (templateObject_4 = __makeTemplateObject(
                  ["\n            animation: ", " 0.2s;\n         "],
                  ["\n            animation: ", " 0.2s;\n         "]
               )),
            function(_a) {
               var show = _a.show;
               return show ? fadeIn : fadeOut;
            }
         );
      }
   },
   function(_a) {
      var size = _a.size;
      return size === Sizes.MEDIUM
         ? "40%"
         : size === Sizes.SMALL
         ? "25%"
         : "50%";
   },
   onlineTheme.colors.dark
);
export var SBody = styled.div(
   templateObject_6 ||
      (templateObject_6 = __makeTemplateObject(
         [
            "\n   display: flex;\n   flex-direction: column;\n   flex: 1;\n   padding: 0 1rem 0 1rem;\n   .text {\n      text-align: center;\n      padding-bottom: 1rem;\n      font-family: ",
            ";\n   }\n",
         ],
         [
            "\n   display: flex;\n   flex-direction: column;\n   flex: 1;\n   padding: 0 1rem 0 1rem;\n   .text {\n      text-align: center;\n      padding-bottom: 1rem;\n      font-family: ",
            ";\n   }\n",
         ]
      )),
   onlineTheme.font.family
);
export var SBtnContainer = styled.div(
   templateObject_7 ||
      (templateObject_7 = __makeTemplateObject(
         ["\n   display: flex;\n   justify-content: ", ";\n   flex: 1;\n"],
         ["\n   display: flex;\n   justify-content: ", ";\n   flex: 1;\n"]
      )),
   function(_a) {
      var buttonPosition = _a.buttonPosition;
      return buttonPosition === Position.LEFT
         ? "flex-start"
         : buttonPosition === Position.RIGHT
         ? "flex-end"
         : Position.CENTER;
   }
);
var templateObject_1,
   templateObject_2,
   templateObject_3,
   templateObject_4,
   templateObject_5,
   templateObject_6,
   templateObject_7;
//# sourceMappingURL=style.js.map
