import React from "react";
import { T_Container } from "./containerTypes";

const Container: React.FC<T_Container> = ({ children, className = "" }) => {
    const baseStyles = "max-w-xl mx-auto my-10 p-8 bg-white shadow-strong box-border";

    return <div className={`${baseStyles} ${className}`}>{children}</div>;
};

export default Container;
