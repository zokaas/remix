import React, { useState, useRef, useEffect } from "react";
import { T_MultiSelectDropdown } from "./multiSelectDropdownTypes";

const MultiSelectDropdown: React.FC<T_MultiSelectDropdown> = ({
    name,
    label,
    options,
    selectedOptions,
    onChange,
    errorMessage,
    placeholder,
}) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };

    const handleOptionToggle = (optionName: string) => {
        const newSelectedOptions = selectedOptions.includes(optionName)
            ? selectedOptions.filter((option) => option !== optionName)
            : [...selectedOptions, optionName];

        onChange(newSelectedOptions);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div className="flex-grow mb-4" ref={dropdownRef}>
            <label className="block mb-2 font-medium text-primary">{label}</label>
            <div className="relative">
                <div
                    className="select w-full p-2 border border-gray-500 bg-white text-black rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent relative mb-1 cursor-pointer"
                    onClick={toggleDropdown}>
                    {selectedOptions.length > 0
                        ? `${selectedOptions.length} selected`
                        : placeholder}
                </div>
                {dropdownOpen && (
                    <div className="absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto">
                        <input
                            type="text"
                            className="sticky top-0 z-10 w-full p-2 border-b border-gray-300 bg-white"
                            placeholder="Search..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        {options.map((option) => (
                            <label
                                key={option.value}
                                className="flex items-center p-2 hover:bg-gray-100 cursor-pointer">
                                <input
                                    type="checkbox"
                                    checked={selectedOptions.includes(option.value)}
                                    onChange={() => handleOptionToggle(option.value)}
                                    className="checkbox-custom mr-2"
                                />
                                {option.value}
                            </label>
                        ))}
                    </div>
                )}
            </div>
            <div className="mt-2">
                {selectedOptions.length > 0 && (
                    <div>
                        <span className="font-medium text-gray-700">Selected:</span>
                        <ul className="mt-1">
                            {options
                                .filter((option) => selectedOptions.includes(option.value))
                                .map((option) => (
                                    <li
                                        key={option.value}
                                        className="inline-block mr-2 mt-1 px-2 py-1 bg-gray-200 rounded">
                                        {option.value}
                                    </li>
                                ))}
                        </ul>
                    </div>
                )}
            </div>
            {errorMessage && (
                <span className="text-red-500 text-sm mt-2 block">{errorMessage}</span>
            )}
        </div>
    );
};

export default MultiSelectDropdown;
