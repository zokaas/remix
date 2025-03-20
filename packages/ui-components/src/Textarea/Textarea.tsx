import React from "react";
import { T_Textarea } from "./textareaTypes";

const Textarea: React.FC<T_Textarea> = ({ label, placeholder, value, onChange, errorMessage }) => {
    return (
        <div className="mb-4">
            <label className="block mb-2 font-medium text-primary">{label}</label>
            <textarea
                className="w-full p-2 border border-gray-500 bg-white text-black"
                placeholder={placeholder}
                value={value}
                onChange={(e) => onChange(e.target.value)}></textarea>
            {errorMessage && <span className="text-red-500 text-sm ">{errorMessage}</span>}
        </div>
    );
};

export default Textarea;
