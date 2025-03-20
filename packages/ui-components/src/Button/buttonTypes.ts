import React from "react";

export type ButtonVariants =
    | "neutral"
    | "blue"
    | "small"
    | "greenBeneficialOwner"
    | "redBeneficialOwner";

export type T_Button = {
    onClick: () => void;
    disabled?: boolean;
    children: React.ReactNode;
    variant?: ButtonVariants;
    className?: string;
};
