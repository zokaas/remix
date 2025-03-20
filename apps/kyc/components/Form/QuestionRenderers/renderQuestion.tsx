// src/components/Question/renderQuestion.tsx

import React from "react";
import { Input, RadioGroup, Select, MultiSelectDropdown, Textarea } from "@ui-components/index";
import { T_Country } from "~/types";
import { T_FormValue } from "components/types";
import {
    BeneficialOwnerForm,
    T_BeneficialOwner,
    T_BeneficialOwnerLabels,
} from "components/BeneficialOwner";

export function renderQuestion(
    type: string,
    name: string,
    labelText: string,
    placeholder: string,
    options: { id: string; value: string }[],
    value: T_FormValue,
    handleInputChange: (name: string, value: T_FormValue) => void,
    error: string | undefined,
    countryListOptions: T_Country[],
    beneficialOwnerLabels?: T_BeneficialOwnerLabels,
    dynamicComponents?: React.ReactNode[],
) {
    return (
        <div>
            <label htmlFor={name} className="question-label flex items-center">
                {dynamicComponents && dynamicComponents.length > 0 && (
                    <span className="ml-2">{dynamicComponents}</span>
                )}
            </label>
            {(() => {
                switch (type) {
                    case "Textarea":
                        return (
                            <Textarea
                                name={name}
                                label={labelText}
                                placeholder={placeholder}
                                value={value as string}
                                onChange={(newValue: string) => handleInputChange(name, newValue)}
                                errorMessage={error}
                            />
                        );
                    case "Text":
                    case "Number":
                        return (
                            <Input
                                name={name}
                                label={labelText}
                                placeholder={placeholder}
                                value={value as string}
                                onChange={(newValue: string) => handleInputChange(name, newValue)}
                                type={type === "Number" ? "number" : "text"}
                                errorMessage={error}
                            />
                        );
                    case "RadioGroup":
                        return (
                            <RadioGroup
                                name={name}
                                label={labelText}
                                options={options}
                                selectedValue={value as string}
                                onChange={(newValue: string) => handleInputChange(name, newValue)}
                                errorMessage={error}
                            />
                        );
                    case "Select":
                        return (
                            <Select
                                name={name}
                                label={labelText}
                                options={options}
                                placeholder={placeholder}
                                selectedValue={value as string}
                                onChange={(newValue: string) => handleInputChange(name, newValue)}
                                errorMessage={error}
                            />
                        );
                    case "MultiSelectDropdown":
                        return (
                            <MultiSelectDropdown
                                name={name}
                                label={labelText}
                                options={options}
                                selectedOptions={Array.isArray(value) ? value.map(String) : []}
                                onChange={(newSelected: string[]) =>
                                    handleInputChange(name, newSelected)
                                }
                                errorMessage={error}
                                placeholder={placeholder}
                            />
                        );
                    case "BeneficialOwner":
                        return (
                            <BeneficialOwnerForm
                                name={name}
                                label={labelText}
                                beneficialOwners={
                                    Array.isArray(value) &&
                                    value.every((v) => typeof v === "object")
                                        ? (value as T_BeneficialOwner[])
                                        : []
                                }
                                setBeneficialOwner={(owners) => handleInputChange(name, owners)}
                                countryList={countryListOptions}
                                errorMessage={error}
                                beneficialOwnerLabels={beneficialOwnerLabels}
                            />
                        );
                    default:
                        console.warn("Unhandled question type:", type);
                        return null;
                }
            })()}
        </div>
    );
}
