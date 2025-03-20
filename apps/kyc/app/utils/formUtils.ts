import { T_FormValues, T_FormValue } from "components/types/formLayout";

// Helper function to parse form values safely
export const parseFormValues = (formData: FormData): T_FormValues => {
    const formValues: Record<string, T_FormValue> = {};

    // Iterate over form data and safely assign types
    formData.forEach((value, key) => {
        if (key === "beneficialOwners" || key === "questions") {
            try {
                formValues[key] = JSON.parse(value as string);
            } catch (error) {
                console.error(`Error parsing ${key}:`, error);
            }
        } else {
            formValues[key] = value as string;
        }
    });
    console.log("Parsed Form Values: ", formValues);
    return formValues;
};

export const appendFormData = (data: Record<string, unknown>): FormData => {
    const formData = new FormData();

    const append = (key: string, value: unknown): void => {
        if (typeof value === "object" && value !== null && !Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
        } else if (Array.isArray(value)) {
            formData.append(key, JSON.stringify(value));
        } else if (value !== undefined && value !== null) {
            formData.append(key, String(value));
        }
    };

    Object.entries(data).forEach(([key, value]) => {
        append(key, value);
    });

    return formData;
};
