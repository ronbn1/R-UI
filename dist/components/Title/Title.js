import React from "react";
import STitle from "./style";
var Title = function (props) {
    return (React.createElement(STitle, { underline: props.underline, size: props.size, color: props.color, square: props.square, align: props.align }, props.text));
};
export default Title;
//# sourceMappingURL=Title.js.map