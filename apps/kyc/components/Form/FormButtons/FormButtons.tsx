import React from "react";
import { useLoaderData } from "@remix-run/react";
import { T_GetFormResponse } from "~/types";
import { Button } from "@ui-components/index";
import { T_FormButtons } from "./formButtonsTypes";

export const FormButtons: React.FC<T_FormButtons> = ({
    currentStepIndex,
    steps,
    onNext,
    onBack,
}) => {
    const loaderData = useLoaderData<T_GetFormResponse>();
    const { button } = loaderData.productData;

    return (
        <div className="flex justify-between mt-6 flex-1">
            {currentStepIndex > 0 && (
                <Button variant="neutral" onClick={onBack}>
                    {button?.back}
                </Button>
            )}
            <div className="flex-1 text-right">
                <Button variant="blue" onClick={onNext}>
                    {currentStepIndex < steps.length - 1 ? button?.next : button?.submit}
                </Button>
            </div>
        </div>
    );
};
