import styled, { keyframes, css } from "styled-components";
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
         ["\nfrom{\n    opacity:0\n}\nto {\n    opacity:100\n}\n"],
         ["\nfrom{\n    opacity:0\n}\nto {\n    opacity:100\n}\n"]
      ))
);
var fadeOut = keyframes(
   templateObject_2 ||
      (templateObject_2 = __makeTemplateObject(
         ["\nfrom{\n    opacity:100\n}\nto {\n    opacity:0\n}\n"],
         ["\nfrom{\n    opacity:100\n}\nto {\n    opacity:0\n}\n"]
      ))
);
export var SBackdrop = styled.div(
   templateObject_6 ||
      (templateObject_6 = __makeTemplateObject(
         [
            "\n   position: absolute;\n   top: 0;\n   left: 0;\n   z-index: -1;\n\n   ",
            "\n\n   height: 100%;\n   width: 100%;\n   animation: ",
            " ",
            "s;\n   ",
            "\n",
         ],
         [
            "\n   position: absolute;\n   top: 0;\n   left: 0;\n   z-index: -1;\n\n   ",
            "\n\n   height: 100%;\n   width: 100%;\n   animation: ",
            " ",
            "s;\n   ",
            "\n",
         ]
      )),
   function(_a) {
      var bg = _a.bg;
      return bg
         ? css(
              templateObject_3 ||
                 (templateObject_3 = __makeTemplateObject(
                    [
                       "\n              background-color: rgba(\n                 0,\n                 0,\n                 0,\n                 ",
                       "\n              );\n           ",
                    ],
                    [
                       "\n              background-color: rgba(\n                 0,\n                 0,\n                 0,\n                 ",
                       "\n              );\n           ",
                    ]
                 )),
              function(_a) {
                 var opacity = _a.opacity;
                 return opacity;
              }
           )
         : css(
              templateObject_4 ||
                 (templateObject_4 = __makeTemplateObject(
                    [
                       "\n              background-color: transparent;\n           ",
                    ],
                    [
                       "\n              background-color: transparent;\n           ",
                    ]
                 ))
           );
   },
   fadeIn,
   function(_a) {
      var timer = _a.timer;
      return timer;
   },
   function(_a) {
      var isFadeOut = _a.isFadeOut;
      return (
         isFadeOut &&
         css(
            templateObject_5 ||
               (templateObject_5 = __makeTemplateObject(
                  ["\n         animation: ", " ", "s;\n      "],
                  ["\n         animation: ", " ", "s;\n      "]
               )),
            fadeOut,
            function(_a) {
               var timer = _a.timer;
               return timer;
            }
         )
      );
   }
);
var templateObject_1,
   templateObject_2,
   templateObject_3,
   templateObject_4,
   templateObject_5,
   templateObject_6;
//# sourceMappingURL=style.js.map
