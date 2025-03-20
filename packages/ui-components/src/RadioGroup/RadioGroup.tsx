import React from "react";
import { T_RadioGroup } from "./radioGroupTypes";

const RadioGroup: React.FC<T_RadioGroup> = ({
    label,
    name,
    options,
    selectedValue,
    onChange,
    errorMessage,
}) => {
    return (
        <div className="pb-4">
            <label className="block mb-2 font-medium text-primary">{label}</label>
            <div className="flex space-x-4">
                {options.map((option) => (
                    <label key={option.value} className="flex items-center space-x-2">
                        <input
                            type="radio"
                            name={name}
                            value={option.value}
                            checked={selectedValue === option.value}
                            onChange={() => onChange(option.value)}
                            className="radio border-gray-500 checked:bg-gray-600"
                        />
                        <span className="text-primary">{option.value}</span>
                    </label>
                ))}
            </div>
            {errorMessage && (
                <span className="text-red-500 text-sm mt-2 block">{errorMessage}</span>
            )}
        </div>
    );
};

export default RadioGroup;
