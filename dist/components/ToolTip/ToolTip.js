import React, { useState } from "react";
import { SToolTipContainer, SToolTip, Triangular, ToolTipTitle } from "./style";
import { Position } from "../../enums";
var ToolTip = function (_a) {
    var children = _a.children, body = _a.body, title = _a.title, _b = _a.side, side = _b === void 0 ? Position.TOP_CENTER : _b;
    var _c = useState(false), showToolTip = _c[0], setShowToolTip = _c[1];
    return (React.createElement(React.Fragment, null,
        React.createElement(SToolTipContainer, { onMouseEnter: function () { return setShowToolTip(true); }, onMouseLeave: function () { return setShowToolTip(false); } },
            showToolTip && (React.createElement(React.Fragment, null,
                React.createElement(SToolTip, { isTitle: true, side: side },
                    title && React.createElement(ToolTipTitle, null, title),
                    React.createElement("div", { className: "body" }, body)),
                React.createElement(Triangular, { side: side }))),
            children)));
};
export default ToolTip;
//# sourceMappingURL=ToolTip.js.map