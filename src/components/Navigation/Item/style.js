import styled, { css } from "styled-components";
import { Sizes } from "../../../enums/";
import onlineTheme from "../../../themes/online";
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
export var SItem = styled.div(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         [
            "\n   height: 60px;\n   padding: 5px 0;\n   width: 100%;\n   position: relative;\n   transition: all 0.2s;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   cursor: pointer;\n   .selectedLine {\n      opacity: 0;\n      transition: all 0.2s;\n   }\n   ",
            ";\n",
         ],
         [
            "\n   height: 60px;\n   padding: 5px 0;\n   width: 100%;\n   position: relative;\n   transition: all 0.2s;\n   display: flex;\n   flex-direction: column;\n   justify-content: center;\n   align-items: center;\n   cursor: pointer;\n   .selectedLine {\n      opacity: 0;\n      transition: all 0.2s;\n   }\n   ",
            ";\n",
         ]
      )),
   function(_a) {
      var active = _a.active;
      return (
         active &&
         css(
            templateObject_1 ||
               (templateObject_1 = __makeTemplateObject(
                  [
                     "\n         background-color: ",
                     ";\n         .selectedLine {\n            opacity: 1;\n            width: 5px;\n            height: 100%;\n            background-color: ",
                     ";\n            position: absolute;\n            top: 0%;\n            left: 0;\n         }\n         ",
                     " ,",
                     "{\n            opacity: 1;\n         }\n      ",
                  ],
                  [
                     "\n         background-color: ",
                     ";\n         .selectedLine {\n            opacity: 1;\n            width: 5px;\n            height: 100%;\n            background-color: ",
                     ";\n            position: absolute;\n            top: 0%;\n            left: 0;\n         }\n         ",
                     " ,",
                     "{\n            opacity: 1;\n         }\n      ",
                  ]
               )),
            onlineTheme.colors.selected,
            onlineTheme.colors.primary,
            SIcon,
            SLabel
         )
      );
   }
);
export var SLabel = styled.div(
   templateObject_3 ||
      (templateObject_3 = __makeTemplateObject(
         [
            "\n   font-size: 0.75rem;\n   font-family: ",
            ";\n   color: white;\n   text-align: center;\n   opacity: 0.5;\n   padding-top: 0.5rem;\n",
         ],
         [
            "\n   font-size: 0.75rem;\n   font-family: ",
            ";\n   color: white;\n   text-align: center;\n   opacity: 0.5;\n   padding-top: 0.5rem;\n",
         ]
      )),
   onlineTheme.font.family
);
export var SIcon = styled.div(
   templateObject_4 ||
      (templateObject_4 = __makeTemplateObject(
         [
            "\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
            ";\n   height: ",
            ";\n   background-color: ",
            ";\n   mask: ",
            ";\n   mask-repeat: no-repeat;\n",
         ],
         [
            "\n   background-size: cover;\n   opacity: 0.5;\n   width: ",
            ";\n   height: ",
            ";\n   background-color: ",
            ";\n   mask: ",
            ";\n   mask-repeat: no-repeat;\n",
         ]
      )),
   function(_a) {
      var size = _a.size;
      return size === Sizes.MEDIUM
         ? "1.5rem"
         : size === Sizes.LARGE
         ? "3rem"
         : "1rem";
   },
   function(_a) {
      var size = _a.size;
      return size === Sizes.MEDIUM
         ? "1.5rem"
         : size === Sizes.LARGE
         ? "3rem"
         : "1rem";
   },
   function(props) {
      return props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary;
   },
   function(props) {
      return props.icon && "url(" + onlineTheme.icons[props.icon] + ") ";
   }
);
var templateObject_1, templateObject_2, templateObject_3, templateObject_4;
//# sourceMappingURL=style.js.map
