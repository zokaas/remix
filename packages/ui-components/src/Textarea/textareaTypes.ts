export type T_Textarea = {
    name: string;
    label: string;
    placeholder: string;
    value: string;
    onChange: (value: string) => void;
    errorMessage?: string;
};
