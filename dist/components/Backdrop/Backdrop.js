import React, { useState } from "react";
import { SBackdrop } from "./style";
var Backdrop = function (_a) {
    var closeFn = _a.closeFn, _b = _a.opacity, opacity = _b === void 0 ? 0.05 : _b, _c = _a.timer, timer = _c === void 0 ? 0.2 : _c, _d = _a.bg, bg = _d === void 0 ? false : _d;
    var _e = useState(false), isFadeOut = _e[0], setIsFadeOut = _e[1];
    return (React.createElement(SBackdrop, { bg: bg, onClick: function () {
            setIsFadeOut(true);
            closeFn();
        }, isFadeOut: isFadeOut, opacity: opacity, timer: timer }));
};
export default Backdrop;
//# sourceMappingURL=Backdrop.js.map