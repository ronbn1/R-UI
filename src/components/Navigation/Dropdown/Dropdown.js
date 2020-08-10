import React, { useState } from "react";
import { GlobalStyle } from "../../../themes/globalStyls";
import { Colors } from "../../../enums";
import Icon from "../../Icon/Icon";
import { SToggle, SMenu, SItem } from "./style";
import Backdrop from "../../Backdrop/Backdrop";
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
var Dropdown = function(_a) {
   var children = _a.children;
   var toggle = children.filter(function(c) {
      return c.type.name === "Toggle";
   });
   var menu = children.filter(function(c) {
      return c.type.name === "Menu";
   });
   var _b = __read(useState(false), 2),
      isShown = _b[0],
      setIsShown = _b[1];
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(GlobalStyle, null),
      React.createElement(
         "span",
         {
            onClick: function() {
               return setIsShown(function(cur) {
                  return !cur;
               });
            },
         },
         toggle
      ),
      isShown &&
         React.createElement(
            React.Fragment,
            null,
            React.createElement(Backdrop, {
               closeFn: function() {
                  return setIsShown(false);
               },
            }),
            menu
         )
   );
};
var Toggle = function(_a) {
   var children = _a.children,
      _b = _a.color,
      color = _b === void 0 ? Colors.DARK : _b;
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(
         SToggle,
         { color: color },
         children,
         React.createElement(
            "span",
            { className: "iconContainer" },
            React.createElement(Icon, { icon: "downArrow", color: color })
         )
      )
   );
};
var Menu = function(_a) {
   var children = _a.children;
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(SMenu, null, children)
   );
};
var Item = function(_a) {
   var children = _a.children,
      _b = _a.color,
      color = _b === void 0 ? Colors.DARK : _b;
   return React.createElement(
      React.Fragment,
      null,
      React.createElement(SItem, { color: color }, children)
   );
};
Dropdown.Toggle = Toggle;
Dropdown.Menu = Menu;
Dropdown.Item = Item;
export default Dropdown;
//# sourceMappingURL=Dropdown.js.map
