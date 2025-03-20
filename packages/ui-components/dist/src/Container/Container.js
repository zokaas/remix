"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Container = ({ children, className = "" }) => {
    const baseStyles = "max-w-xl mx-auto my-10 p-8 bg-white shadow-strong box-border";
    return (0, jsx_runtime_1.jsx)("div", { className: `${baseStyles} ${className}`, children: children });
};
exports.default = Container;
