"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const Steps = ({ steps, currentStepIndex }) => {
    return ((0, jsx_runtime_1.jsx)("ul", { className: "steps w-full", children: steps.map((step, index) => ((0, jsx_runtime_1.jsx)("li", { className: `step ${index <= currentStepIndex ? "step-secondary" : ""}`, "data-content": index <= currentStepIndex ? "✓" : "", children: step.label }, index))) }));
};
exports.default = Steps;
