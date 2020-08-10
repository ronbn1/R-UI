import React from "react";
import { GlobalStyle } from "../../themes/globalStyls";
import Icon from "../Icon/Icon";
import {
   SBody,
   SSubtitle,
   STitle,
   SCard,
   SText,
   SLinkContainer,
   STopIcon,
} from "./style";
import Button from "../Button/Button";
var __assign =
   (this && this.__assign) ||
   function() {
      __assign =
         Object.assign ||
         function(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
               s = arguments[i];
               for (var p in s)
                  if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
         };
      return __assign.apply(this, arguments);
   };
var Card = function(_a) {
   var children = _a.children,
      width = _a.width,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(
      SCard,
      { width: width, style: __assign({}, style) },
      React.createElement(GlobalStyle, null),
      children
   );
};
var Body = function(_a) {
   var children = _a.children,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(SBody, { style: __assign({}, style) }, children);
};
var Title = function(_a) {
   var children = _a.children,
      size = _a.size,
      color = _a.color,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(
      STitle,
      { size: size, color: color, style: __assign({}, style) },
      children
   );
};
var Subtitle = function(_a) {
   var children = _a.children,
      size = _a.size,
      color = _a.color,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(
      SSubtitle,
      { size: size, color: color, style: __assign({}, style) },
      children
   );
};
var Text = function(_a) {
   var children = _a.children,
      size = _a.size,
      color = _a.color,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(
      SText,
      { size: size, color: color, style: __assign({}, style) },
      children
   );
};
var LinksContainer = function(_a) {
   var children = _a.children,
      _b = _a.style,
      style = _b === void 0 ? {} : _b;
   return React.createElement(
      SLinkContainer,
      { style: __assign({}, style) },
      " ",
      children
   );
};
var Link = function(_a) {
   var children = _a.children,
      color = _a.color;
   return React.createElement(Button, { text: children, color: color });
};
var TopIcon = function(_a) {
   var icon = _a.icon,
      color = _a.color;
   return React.createElement(
      STopIcon,
      null,
      icon && React.createElement(Icon, { icon: icon, color: color })
   );
};
Card.Body = Body;
Card.Title = Title;
Card.Subtitle = Subtitle;
Card.Text = Text;
Card.LinksContainer = LinksContainer;
Card.Link = Link;
Card.TopIcon = TopIcon;
export default Card;
//# sourceMappingURL=Card.js.map
