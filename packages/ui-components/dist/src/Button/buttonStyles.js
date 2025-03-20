"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buttonStyles = void 0;
exports.buttonStyles = {
    base: "border rounded cursor-pointer text-center",
    variants: {
        neutral: "px-4 py-2 bg-gray-200 text-black shadow-custom border border-gray-300 mb-1",
        blue: "px-4 py-2 text-[16px] font-normal text-white shadow-custom mb-1 cursor-pointer bg-blue-gradient",
        small: "px-2 py-1 font-sans text-[12px] font-normal text-white shadow-custom mb-1 border-none cursor-pointer bg-blue-gradient",
        greenBeneficialOwner: "px-4 py-2 text-[16px] font-normal shadow-custom mb-1 cursor-pointer bg-green-gradient text-white shadow-custom border",
        redBeneficialOwner: "px-4 py-2 text-[16px] font-normal shadow-custom mb-1 cursor-pointer bg-red-gradient text-white shadow-custom",
    },
    disabled: "opacity-50 cursor-not-allowed",
};
