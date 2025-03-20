"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const RadioGroup = ({ label, name, options, selectedValue, onChange, errorMessage, }) => {
    return ((0, jsx_runtime_1.jsxs)("div", { className: "pb-4", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 font-medium text-primary", children: label }), (0, jsx_runtime_1.jsx)("div", { className: "flex space-x-4", children: options.map((option) => ((0, jsx_runtime_1.jsxs)("label", { className: "flex items-center space-x-2", children: [(0, jsx_runtime_1.jsx)("input", { type: "radio", name: name, value: option.value, checked: selectedValue === option.value, onChange: () => onChange(option.value), className: "radio border-gray-500 checked:bg-gray-600" }), (0, jsx_runtime_1.jsx)("span", { className: "text-primary", children: option.value })] }, option.value))) }), errorMessage && ((0, jsx_runtime_1.jsx)("span", { className: "text-red-500 text-sm mt-2 block", children: errorMessage }))] }));
};
exports.default = RadioGroup;
