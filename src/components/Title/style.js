import styled, { css } from "styled-components";
import onlineTheme from "../../themes/online";
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
var STitle = styled.h1(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         [
            "\n   font-size: ",
            ";\n   text-align: ",
            ";\n   border-bottom: ",
            ";\n\n   color: ",
            ';\n\n   font-family: "Roboto", sans-serif;\n   font-weight: 600;\n   position: relative;\n\n   position: relative;\n   ',
            ";\n",
         ],
         [
            "\n   font-size: ",
            ";\n   text-align: ",
            ";\n   border-bottom: ",
            ";\n\n   color: ",
            ';\n\n   font-family: "Roboto", sans-serif;\n   font-weight: 600;\n   position: relative;\n\n   position: relative;\n   ',
            ";\n",
         ]
      )),
   function(props) {
      return props.size ? onlineTheme.sizes[props.size] : "2rem";
   },
   function(props) {
      return props.align && props.align;
   },
   function(props) {
      return props.underline
         ? "1px solid " + onlineTheme.colors[props.underline]
         : "";
   },
   function(props) {
      return props.color
         ? onlineTheme.colors[props.color]
         : onlineTheme.colors.primary;
   },
   function(props) {
      return (
         props.square &&
         css(
            templateObject_1 ||
               (templateObject_1 = __makeTemplateObject(
                  [
                     '\n         &:before {\n            position: absolute;\n            content: "";\n            width: 15px;\n            height: 15px;\n            top: 45%;\n            left: -25px;\n\n            background-color: ',
                     ";\n\n            border-radius: 2px;\n            transform: rotate(45deg) translateY(-50%);\n         }\n      ",
                  ],
                  [
                     '\n         &:before {\n            position: absolute;\n            content: "";\n            width: 15px;\n            height: 15px;\n            top: 45%;\n            left: -25px;\n\n            background-color: ',
                     ";\n\n            border-radius: 2px;\n            transform: rotate(45deg) translateY(-50%);\n         }\n      ",
                  ]
               )),
            function(props) {
               return props.square ? "" + onlineTheme.colors[props.square] : "";
            }
         )
      );
   }
);
export default STitle;
var templateObject_1, templateObject_2;
//# sourceMappingURL=style.js.map
