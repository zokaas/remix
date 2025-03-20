import React from "react";
import { T_Footer } from "./footerTypes";

const Footer: React.FC<T_Footer> = ({ footer }) => {
    const {
        customerServiceLabel,
        customerServiceText,
        contactInfoLabel,
        contactInfoText,
        addressLabel,
        addressText,
    } = footer;

    return (
        <footer className="w-full max-w-full flex justify-center text-white py-10">
            <div className="w-full max-w-5xl flex flex-col md:flex-row md:justify-between px-6 md:px-16 space-y-10 md:space-y-0 md:space-x-16">
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-bold mb-2">{customerServiceLabel}</h2>
                    <p className="text-sm">{customerServiceText}</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-bold mb-2">{contactInfoLabel}</h2>
                    <p className="text-sm">{contactInfoText}</p>
                </div>
                <div className="w-full md:w-1/3">
                    <h2 className="text-lg font-bold mb-2">{addressLabel}</h2>
                    <p className="text-sm">{addressText}</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
