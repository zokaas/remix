"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const Select = ({ name, label, options, selectedValue, onChange, errorMessage, placeholder = "Choose an option", }) => {
    const [dropdownOpen, setDropdownOpen] = (0, react_1.useState)(false);
    const [searchTerm, setSearchTerm] = (0, react_1.useState)("");
    const dropdownRef = (0, react_1.useRef)(null);
    const handleOptionClick = (option) => {
        onChange(option.value);
        setDropdownOpen(false);
    };
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };
    (0, react_1.useEffect)(() => {
        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);
    const filteredOptions = options.length > 15
        ? options.filter((option) => option.value.toLowerCase().includes(searchTerm.toLowerCase()))
        : options;
    // Find the selected option based on selectedValue
    const selectedOption = options.find((option) => option.value === selectedValue);
    return ((0, jsx_runtime_1.jsxs)("div", { className: "flex-grow", children: [(0, jsx_runtime_1.jsx)("label", { className: "block mb-2 font-medium text-primary", children: label }), (0, jsx_runtime_1.jsxs)("div", { className: "relative", ref: dropdownRef, children: [(0, jsx_runtime_1.jsx)("div", { className: "select w-full p-2 border border-gray-500 bg-white rounded-none focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent mb-2", onClick: (e) => {
                            e.stopPropagation();
                            setDropdownOpen(!dropdownOpen);
                        }, children: (0, jsx_runtime_1.jsx)("span", { className: "block truncate text-black", children: selectedOption ? selectedOption.value : placeholder }) }), dropdownOpen && ((0, jsx_runtime_1.jsxs)("div", { className: "absolute z-10 w-full bg-white border border-gray-300 rounded mt-1 max-h-60 overflow-y-auto text-black", children: [options.length > 15 && ((0, jsx_runtime_1.jsx)("input", { type: "text", className: "sticky top-0 z-10 w-full p-2 border-b border-gray-300 bg-white", placeholder: "Search...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), onClick: (e) => e.stopPropagation() })), filteredOptions.map((option) => ((0, jsx_runtime_1.jsx)("div", { className: "flex items-center p-2 hover:bg-gray-100 cursor-pointer text-black", onClick: (e) => {
                                    e.stopPropagation();
                                    handleOptionClick(option);
                                }, children: (0, jsx_runtime_1.jsx)("span", { className: "block truncate", children: option.value }) }, option.value)))] }))] }), errorMessage && ((0, jsx_runtime_1.jsx)("span", { className: "text-red-500 text-sm mt-2 block", children: errorMessage }))] }));
};
exports.default = Select;
