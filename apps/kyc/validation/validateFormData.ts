import { T_FormValues } from "components/types/formLayout";
import { buildSchema } from "validation/validationSchema";
import { z } from "zod";
import { T_Question, T_DependentQuestion } from "~/types";

export const validateFormData = (
    formValues: T_FormValues,
    questions: T_Question[],
    currentStep: number,
) => {
    try {
        const currentStepQuestions = questions.filter((q) => q.rawData.step === currentStep + 1);

        if (!currentStepQuestions.length) {
            console.warn(`No questions found for step ${currentStep + 1}`);
            return null;
        }

        const schema = buildSchema(currentStepQuestions, formValues);

        const stepFieldNames = new Set<string>();
        currentStepQuestions.forEach((q) => {
            const { name, dynamicField } = q.rawData;
            if (name) stepFieldNames.add(name);

            if (dynamicField && Array.isArray(dynamicField)) {
                dynamicField.forEach((depField) => {
                    if (depField.__component === "kyc.dependent-question") {
                        const depQuestion = depField as T_DependentQuestion;
                        if (depQuestion.name) {
                            stepFieldNames.add(depQuestion.name);
                        }
                    }
                });
            }
        });

        const stepValues = Object.fromEntries(
            Array.from(stepFieldNames).map((name) => [name, formValues[name]]),
        );

        schema.parse(stepValues);
        return null;
    } catch (error) {
        if (error instanceof z.ZodError) {
            return error.errors.reduce(
                (acc, curr) => {
                    const path = Array.isArray(curr.path) ? curr.path.join(".") : curr.path[0];
                    acc[path] = curr.message;
                    return acc;
                },
                {} as Record<string, string>,
            );
        }
        console.error("Validation error:", error);
        return { general: "An unexpected error occurred during validation" };
    }
};
