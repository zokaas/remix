"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Input = ({ label, placeholder, value, onChange, type = "text", errorMessage, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex-grow", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 font-medium text-primary", children: label }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", children: [(0, jsx_runtime_1.jsx)("input", { type: type, className: `input w-full p-2 border border-gray-500 bg-white !text-black rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2`, placeholder: placeholder, value: value, onChange: (e) => onChange(e.target.value) }), errorMessage && (0, jsx_runtime_1.jsx)("span", { className: "text-red-500 text-sm mt-3", children: errorMessage })] })] }));
};
exports.default = Input;
