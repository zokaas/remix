import React, { useState } from "react";
import { Footer, Header } from "@ui-components/index";
import { Form, useActionData, useLoaderData, useSubmit } from "@remix-run/react";
import { T_Question } from "~/types";
import { FormContainer, ResponsePage } from "components";
import { T_ActionData, T_FormValue, T_FormValues } from "components/types";
import { QuestionForm } from "./QuestionForm";
import { loader } from "~/routes/$productId.$kycType.$locale";
import { validateFormData } from "validation/validateFormData";
import { appendFormData } from "~/utils";

export const MultiStepForm: React.FC = () => {
    const loaderData = useLoaderData<typeof loader>();
    const { productData } = loaderData;
    const { questions, footer, logo, steps } = productData;
    const actionData = useActionData<T_ActionData>();
    const submit = useSubmit();
    const [currentStepIndex, setCurrentStepIndex] = useState(0);
    const [formValues, setFormValues] = useState<T_FormValues>({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<Record<string, string | undefined>>(
        actionData?.errors ?? {},
    );

    const handleInputChange = (name: string, value: T_FormValue) => {
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const validateAndCollectStepValues = () => {
        const currentStepQuestions = questions.filter(
            (question: T_Question) => question.rawData.step === currentStepIndex + 1,
        );

        const validationErrors = validateFormData(
            formValues,
            currentStepQuestions,
            currentStepIndex,
        );

        if (validationErrors) {
            setErrors(validationErrors);
            return false;
        }

        setErrors({});
        return true;
    };
    const renderSteps = () => {
        const stepsArray = ["step1", "step2", "step3"].map((stepKey, index) => ({
            label: steps[stepKey].trim(),
            isActive: index <= currentStepIndex,
        }));

        return stepsArray;
    };

    const totalSteps = 3;

    const handleNext = () => {
        if (!validateAndCollectStepValues()) {
            console.warn("Validation failed. Staying on current step.");
            return;
        }

        if (currentStepIndex < totalSteps - 1) {
            setCurrentStepIndex((prev) => prev + 1);
        } else {
            const formData = appendFormData(formValues);
            submit(formData, { method: "post" });
            setIsSubmitted(true);
        }
    };

    const handleBack = () => {
        if (currentStepIndex > 0) {
            setCurrentStepIndex((prev) => prev - 1);
        }
    };

    const filteredQuestions = questions.filter(
        (question: T_Question) => question.rawData.step === currentStepIndex + 1,
    );

    return (
        <div className="min-h-screen flex flex-col">
            <Header logo={logo} />
            <div className="flex-grow flex flex-col">
                {isSubmitted ? (
                    <ResponsePage />
                ) : (
                    <Form
                        method="post"
                        className="flex-grow flex flex-col"
                        onSubmit={(e) => {
                            e.preventDefault();
                            if (currentStepIndex === steps.length - 1) {
                                handleNext();
                            }
                        }}>
                        <FormContainer
                            steps={renderSteps()}
                            currentStepIndex={currentStepIndex}
                            onNext={handleNext}
                            onBack={handleBack}
                            showHeader>
                            <QuestionForm
                                questions={filteredQuestions}
                                formValues={formValues}
                                handleInputChange={handleInputChange}
                                errors={errors}
                            />
                        </FormContainer>
                    </Form>
                )}
            </div>
            <Footer footer={footer} />
        </div>
    );
};

export default MultiStepForm;
