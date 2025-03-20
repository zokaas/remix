import React from "react";
import { T_Input } from "./inputTypes";

const Input: React.FC<T_Input> = ({
    label,
    placeholder,
    value,
    onChange,
    type = "text",
    errorMessage,
}) => {
    return (
        <div className="flex-grow">
            <label className="block mb-2 font-medium text-primary">{label}</label>
            <div className="relative">
                <input
                    type={type}
                    className={`input w-full p-2 border border-gray-500 bg-white !text-black rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2`}
                    placeholder={placeholder}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                />
                {errorMessage && <span className="text-red-500 text-sm mt-3">{errorMessage}</span>}
            </div>
        </div>
    );
};

export default Input;
