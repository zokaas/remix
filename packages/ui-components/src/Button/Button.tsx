import React from "react";
import { buttonStyles } from "./buttonStyles";
import { T_Button } from "./buttonTypes";

const Button: React.FC<T_Button> = ({
    onClick,
    disabled = false,
    children,
    variant = "neutral",
    className = "",
}) => {
    const classNames = [
        buttonStyles.base,
        buttonStyles.variants[variant],
        disabled ? buttonStyles.disabled : "",
        className,
    ].join(" ");

    return (
        <button className={classNames} onClick={onClick} disabled={disabled}>
            {children}
        </button>
    );
};

export default Button;
