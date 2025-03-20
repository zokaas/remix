import React from "react";
import { T_Header } from "./headerTypes";

const Header: React.FC<T_Header> = ({ logo, title }) => {
    // Add the correct prefix if missing
    const logoSrc = logo.startsWith("data:image") ? logo : `data:image/svg+xml;base64,${logo}`;

    return (
        <div className="w-full h-[76px] flex justify-center items-center bg-white pl-5 pr-5 my-4 shadow-strong box-border">
            <div className="w-[976px] flex justify-between items-center">
                <img src={logoSrc} alt="Logo" className="w-[200px]" />
                {title && <h1 className="text-xxl font-normal text-primary mr-4">{title}</h1>}
            </div>
        </div>
    );
};

export default Header;
