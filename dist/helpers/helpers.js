import { Position } from "../enums/toolTipPosition";
export var positionToolTip = function (side) {
    switch (side) {
        case Position.TOP_LEFT:
            return "\n              left: -50%;\n           ";
        case Position.TOP_RIGHT:
            return "\n              left: 150%;\n           ";
        case Position.BOTTOM_CENTER:
            return "\n              top: 120%;\n              left: 50%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.BOTTOM_RIGHT:
            return "\n              top: 120%;\n              left: 120%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.BOTTOM_LEFT:
            return "\n              top: 120%;\n              left: -20%;\n              transform: translateX(-50%);\n              height: fit-content;\n           ";
        case Position.RIGHT:
            return "\n              top: 50%;\n              left: 125%;\n              transform: translateY(-50%);\n              height: fit-content;\n           ";
        case Position.LEFT:
            return "\n              top: 50%;\n              left: -215%;\n              transform: translate(-50%, -50%);\n              height: fit-content;\n           ";
        default:
            return "";
    }
};
export var positionToolTipTriangular = function (side) {
    switch (side) {
        case Position.TOP_CENTER:
            return "\n            left: 50%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.TOP_LEFT:
            return "\n            left: 5%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.TOP_RIGHT:
            return "\n            left: 95%;\n            bottom: calc(120% - 0.4rem);\n            transform: translateX(-50%);\n         ";
        case Position.BOTTOM_CENTER:
            return "\n            left: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.BOTTOM_RIGHT:
            return "\n            left: 95%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.BOTTOM_LEFT:
            return "\n            left: 5%;\n            bottom: calc(120% - 1.8rem);\n            transform: translateX(-50%) rotate(180deg);\n         ";
        case Position.RIGHT:
            return "\n            left: 120%;\n            top: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translate(-50%, -50%) rotate(90deg);\n         ";
        case Position.LEFT:
            return "\n            left: -20%;\n            top: 50%;\n            bottom: calc(120% - 1.8rem);\n            transform: translate(-50%, -50%) rotate(-90deg);\n         ";
    }
};
//# sourceMappingURL=helpers.js.map