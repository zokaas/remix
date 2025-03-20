import { useLoaderData } from "@remix-run/react";
import React from "react";
import { T_CompanyBlock } from "~/types";
// TODO:Hardcoded translations
export const CompanyInfoBlock: React.FC = () => {
    const { companyName, orgNumber } = useLoaderData<T_CompanyBlock>();
    return (
        <div className="p-2 mb-4 border-b border-gray-300">
            <div className="grid grid-cols-2 justify-between items-start py-4">
                <div>
                    <p className="font-semibold text-gray-700">Company Name</p>
                    <p className="text-gray-800">{companyName}</p>
                </div>
                <div>
                    <p className="font-semibold text-gray-700">Organization number</p>
                    <p className="text-gray-800">{orgNumber}</p>
                </div>
            </div>
        </div>
    );
};

export default CompanyInfoBlock;
