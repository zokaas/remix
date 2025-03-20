"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Footer = ({ footer }) => {
    const { customerServiceLabel, customerServiceText, contactInfoLabel, contactInfoText, addressLabel, addressText, } = footer;
    return ((0, jsx_runtime_1.jsx)("footer", { className: "w-full max-w-full flex justify-center text-white py-10", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-full max-w-5xl flex flex-col md:flex-row md:justify-between px-6 md:px-16 space-y-10 md:space-y-0 md:space-x-16", children: [(0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/3", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold mb-2", children: customerServiceLabel }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm", children: customerServiceText })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/3", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold mb-2", children: contactInfoLabel }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm", children: contactInfoText })] }), (0, jsx_runtime_1.jsxs)("div", { className: "w-full md:w-1/3", children: [(0, jsx_runtime_1.jsx)("h2", { className: "text-lg font-bold mb-2", children: addressLabel }), (0, jsx_runtime_1.jsx)("p", { className: "text-sm", children: addressText })] })] }) }));
};
exports.default = Footer;
