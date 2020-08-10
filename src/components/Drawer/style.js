import styled, { keyframes, css } from "styled-components";
import onlineTheme from "../../themes/online";
import { Sizes } from "../../enums";
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
var openFromRight = keyframes(
   templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
         [
            "\nfrom{\n   transform: translateX(-100%);\n}\nto{\n   transform: translateX(0);\n}\n",
         ],
         [
            "\nfrom{\n   transform: translateX(-100%);\n}\nto{\n   transform: translateX(0);\n}\n",
         ]
      ))
);
var closeFromRight = keyframes(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         [
            "\nfrom{\n   transform: translateX(0);\n}\nto{\n   transform: translateX(-100%);\n}\n",
         ],
         [
            "\nfrom{\n   transform: translateX(0);\n}\nto{\n   transform: translateX(-100%);\n}\n",
         ]
      ))
);
export var SDrawer = styled.div(
   templateObject_4 ||
      (templateObject_4 = __makeTemplateObject(
         [
            "\n   height: 100vh;\n   width: ",
            ";\n   background-color: #fff;\n   box-shadow: -10px 0px 20px 1px black;\n   position: absolute;\n   left: 0;\n   top: 0;\n   animation: ",
            " 0.3s;\n   ",
            "\n   h2 {\n      text-align: center;\n      margin-top: 3rem;\n      color: ",
            ";\n      font-family: ",
            ";\n   }\n\n   img {\n      width: 1rem;\n   }\n\n   .closeBtn {\n      width: 1rem;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      cursor: pointer;\n   }\n   .iconContainer {\n      width: fit-content;\n      position: absolute;\n      top: 0.8rem;\n      right: 1.1rem;\n      cursor: pointer;\n   }\n",
         ],
         [
            "\n   height: 100vh;\n   width: ",
            ";\n   background-color: #fff;\n   box-shadow: -10px 0px 20px 1px black;\n   position: absolute;\n   left: 0;\n   top: 0;\n   animation: ",
            " 0.3s;\n   ",
            "\n   h2 {\n      text-align: center;\n      margin-top: 3rem;\n      color: ",
            ";\n      font-family: ",
            ";\n   }\n\n   img {\n      width: 1rem;\n   }\n\n   .closeBtn {\n      width: 1rem;\n      position: absolute;\n      top: 20px;\n      right: 20px;\n      cursor: pointer;\n   }\n   .iconContainer {\n      width: fit-content;\n      position: absolute;\n      top: 0.8rem;\n      right: 1.1rem;\n      cursor: pointer;\n   }\n",
         ]
      )),
   function(_a) {
      var drawerWith = _a.drawerWith;
      return drawerWith === Sizes.LARGE
         ? "40rem"
         : drawerWith === Sizes.SMALL
         ? "15rem"
         : "20rem";
   },
   openFromRight,
   function(_a) {
      var isFadeOut = _a.isFadeOut;
      return (
         isFadeOut &&
         css(
            templateObject_3 ||
               (templateObject_3 = __makeTemplateObject(
                  ["\n         animation: ", " 0.3s ease-in;\n      "],
                  ["\n         animation: ", " 0.3s ease-in;\n      "]
               )),
            closeFromRight
         )
      );
   },
   onlineTheme.colors.primary,
   onlineTheme.font.family
);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map
