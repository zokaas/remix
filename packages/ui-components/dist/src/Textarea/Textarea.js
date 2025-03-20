"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Textarea = ({ label, placeholder, value, onChange, errorMessage }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "mb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 font-medium text-primary", children: label }), (0, jsx_runtime_1.jsx)("textarea", { className: "w-full p-2 border border-gray-500 bg-white text-black", placeholder: placeholder, value: value, onChange: (e) => onChange(e.target.value) }), errorMessage && (0, jsx_runtime_1.jsx)("span", { className: "text-red-500 text-sm ", children: errorMessage })] }));
};
exports.default = Textarea;
