import React from "react";
import { Steps, Container } from "@ui-components/index";
import { T_FormContainer } from "./formContainerTypes";
import { CompanyInfoBlock, FormButtons, FormHeader } from "components";

export const FormContainer: React.FC<T_FormContainer> = ({
    steps,
    currentStepIndex,
    onNext,
    onBack,
    children,
    showHeader = true,
}) => {
    return (
        <div className="relative flex flex-col items-center w-screen overflow-x-hidden m-0 p-0 box-border">
            <Container className="bg-white shadow-strong max-w-xl w-full mx-auto">
                {showHeader && <FormHeader />}
                {currentStepIndex < steps.length && (
                    <>
                        <Steps steps={steps} currentStepIndex={currentStepIndex} />
                        <div className="divider divider-primary mb-3"></div>
                        {currentStepIndex === 0 && <CompanyInfoBlock />}
                        {children}
                        <FormButtons
                            currentStepIndex={currentStepIndex}
                            steps={steps}
                            onBack={onBack}
                            onNext={onNext}
                        />
                    </>
                )}
            </Container>
        </div>
    );
};
