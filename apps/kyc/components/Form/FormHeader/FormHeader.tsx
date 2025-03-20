import { useLoaderData } from "@remix-run/react";
import React from "react";
import { T_FormHeader } from "~/types";

export const FormHeader: React.FC = () => {
    const { title, infoText } = useLoaderData<T_FormHeader>();
    return (
        <div className="text-center mb-6">
            {title && <h2 className="text-2xl font-bold text-primary">{title}</h2>}
            {infoText && <p className="text-gray-500">{infoText}</p>}
        </div>
    );
};

export default FormHeader;
