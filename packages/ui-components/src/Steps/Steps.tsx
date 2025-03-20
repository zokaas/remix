import React from "react";
import { T_Steps } from "./stepsTypes";

const Steps: React.FC<T_Steps> = ({ steps, currentStepIndex }) => {
    return (
        <ul className="steps w-full">
            {steps.map((step, index) => (
                <li
                    key={index}
                    className={`step ${index <= currentStepIndex ? "step-secondary" : ""}`}
                    data-content={index <= currentStepIndex ? "✓" : ""}>
                    {step.label}
                </li>
            ))}
        </ul>
    );
};

export default Steps;
