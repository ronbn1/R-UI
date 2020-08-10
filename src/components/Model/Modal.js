import React, { useState, useEffect } from "react";
import { SModal, SBody, SBtnContainer } from "./style";
import Title from "../Title/Title";
import Button from "../Button/Button";
import onlineTheme from "../../themes/online";
import { Sizes, Position } from "../../enums";
var __read =
   (this && this.__read) ||
   function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
         r,
         ar = [],
         e;
      try {
         while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
            ar.push(r.value);
      } catch (error) {
         e = { error: error };
      } finally {
         try {
            if (r && !r.done && (m = i["return"])) m.call(i);
         } finally {
            if (e) throw e.error;
         }
      }
      return ar;
   };
var Modal = function(_a) {
   var children = _a.children,
      body = _a.body,
      title = _a.title,
      color = _a.color,
      button = _a.button,
      onClickButton = _a.onClickButton,
      _b = _a.size,
      size = _b === void 0 ? Sizes.MEDIUM : _b,
      _c = _a.buttonPosition,
      buttonPosition = _c === void 0 ? Position.CENTER : _c;
   var _d = __read(useState(false), 2),
      isModalShow = _d[0],
      setIsModalShow = _d[1];
   var _e = __read(useState(false), 2),
      fadeOut = _e[0],
      setFadeOut = _e[1];
   useEffect(
      function() {
         if (fadeOut) {
            setTimeout(function() {
               setFadeOut(false);
               setIsModalShow(false);
            }, 200);
         }
      },
      [fadeOut]
   );
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(
         "span",
         {
            onClick: function() {
               return isModalShow ? setFadeOut(true) : setIsModalShow(true);
            },
         },
         React.createElement("span", { style: { cursor: "pointer" } }, children)
      ),
      isModalShow &&
         React.createElement(
            React.Fragment,
            null,
            React.createElement("div", {
               style: {
                  width: "100vw",
                  height: "100vh",
                  position: "absolute",
               },
               onClick: function() {
                  setFadeOut(true);
               },
            }),
            React.createElement(
               SModal,
               { size: size, show: isModalShow, isFadeOut: fadeOut },
               title &&
                  React.createElement(Title, {
                     text: title,
                     color: color,
                     align: "center",
                  }),
               React.createElement(
                  "span",
                  {
                     className: "close",
                     onClick: function() {
                        return setFadeOut(true);
                     },
                  },
                  React.createElement("img", {
                     src: onlineTheme.icons.close,
                     alt: "close",
                  })
               ),
               React.createElement(
                  SBody,
                  null,
                  typeof body === "object"
                     ? body.map(function(b) {
                          return React.createElement(
                             "p",
                             { className: "text" },
                             b
                          );
                       })
                     : React.createElement("p", { className: "text" }, body)
               ),
               button &&
                  React.createElement(
                     SBtnContainer,
                     { buttonPosition: buttonPosition },
                     typeof button === "string"
                        ? React.createElement(Button, {
                             text: button,
                             onClick: onClickButton,
                             color: color,
                          })
                        : button.map(function(b, i) {
                             return (
                                typeof onClickButton === "object" &&
                                React.createElement(Button, {
                                   key: i,
                                   text: b,
                                   onClick: onClickButton[i],
                                   color: color,
                                })
                             );
                          })
                  )
            )
         )
   );
};
export default Modal;
//# sourceMappingURL=Modal.js.map
