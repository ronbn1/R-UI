import styled from "styled-components";
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
export var SToggle = styled.p(
   templateObject_1 ||
      (templateObject_1 = __makeTemplateObject(
         [
            "\n   display: flex;\n   color: ",
            ";\n   cursor: pointer;\n   width: fit-content;\n\n   .iconContainer {\n      padding: 0 0.5rem;\n   }\n",
         ],
         [
            "\n   display: flex;\n   color: ",
            ";\n   cursor: pointer;\n   width: fit-content;\n\n   .iconContainer {\n      padding: 0 0.5rem;\n   }\n",
         ]
      )),
   function(_a) {
      var color = _a.color;
      return color && onlineTheme.colors[color];
   }
);
export var SMenu = styled.div(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         [
            "\n   width: fit-content;\n   margin: 0.5rem 0;\n   border: 1px solid #eeeeee;\n   border-radius: 5px;\n   background-color: white;\n",
         ],
         [
            "\n   width: fit-content;\n   margin: 0.5rem 0;\n   border: 1px solid #eeeeee;\n   border-radius: 5px;\n   background-color: white;\n",
         ]
      ))
);
export var SItem = styled.div(
   templateObject_3 ||
      (templateObject_3 = __makeTemplateObject(
         [
            "\n   padding: 0.5rem 1rem;\n   color: ",
            ";\n   font-family: ",
            ";\n   font-size: 0.9rem;\n   &:hover {\n      cursor: pointer;\n      background-color: #eeeeee60;\n   }\n",
         ],
         [
            "\n   padding: 0.5rem 1rem;\n   color: ",
            ";\n   font-family: ",
            ";\n   font-size: 0.9rem;\n   &:hover {\n      cursor: pointer;\n      background-color: #eeeeee60;\n   }\n",
         ]
      )),
   function(_a) {
      var color = _a.color;
      return color && onlineTheme.colors[color];
   },
   onlineTheme.font.family
);
var templateObject_1, templateObject_2, templateObject_3;
//# sourceMappingURL=style.js.map
