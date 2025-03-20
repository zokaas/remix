import { T_Step } from "@ui-components/index";

export type T_FormContainer = {
    steps: T_Step[];
    currentStepIndex: number;
    onNext: () => void;
    onBack: () => void;
    children: React.ReactNode;
    showHeader?: boolean;
};
