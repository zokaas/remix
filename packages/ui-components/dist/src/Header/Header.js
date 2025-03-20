"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Header = ({ logo, title }) => {
    // Add the correct prefix if missing
    const logoSrc = logo.startsWith("data:image") ? logo : `data:image/svg+xml;base64,${logo}`;
    return ((0, jsx_runtime_1.jsx)("div", { className: "w-full h-[76px] flex justify-center items-center bg-white pl-5 pr-5 my-4 shadow-strong box-border", children: (0, jsx_runtime_1.jsxs)("div", { className: "w-[976px] flex justify-between items-center", children: [(0, jsx_runtime_1.jsx)("img", { src: logoSrc, alt: "Logo", className: "w-[200px]" }), title && (0, jsx_runtime_1.jsx)("h1", { className: "text-xxl font-normal text-primary mr-4", children: title })] }) }));
};
exports.default = Header;
