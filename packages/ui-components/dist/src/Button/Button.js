"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const buttonStyles_1 = require("./buttonStyles");
const Button = ({ onClick, disabled = false, children, variant = "neutral", className = "", }) => {
    const classNames = [
        buttonStyles_1.buttonStyles.base,
        buttonStyles_1.buttonStyles.variants[variant],
        disabled ? buttonStyles_1.buttonStyles.disabled : "",
        className,
    ].join(" ");
    return ((0, jsx_runtime_1.jsx)("button", { className: classNames, onClick: onClick, disabled: disabled, children: children }));
};
exports.default = Button;
