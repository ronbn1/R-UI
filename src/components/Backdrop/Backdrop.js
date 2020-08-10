import React, { useState } from "react";
import { SBackdrop } from "./style";
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
var Backdrop = function(_a) {
   var closeFn = _a.closeFn,
      _b = _a.opacity,
      opacity = _b === void 0 ? 0.05 : _b,
      _c = _a.timer,
      timer = _c === void 0 ? 0.2 : _c,
      _d = _a.bg,
      bg = _d === void 0 ? false : _d;
   var _e = __read(useState(false), 2),
      isFadeOut = _e[0],
      setIsFadeOut = _e[1];
   return React.createElement(SBackdrop, {
      bg: bg,
      onClick: function() {
         setIsFadeOut(true);
         closeFn();
      },
      isFadeOut: isFadeOut,
      opacity: opacity,
      timer: timer,
   });
};
export default Backdrop;
//# sourceMappingURL=Backdrop.js.map
