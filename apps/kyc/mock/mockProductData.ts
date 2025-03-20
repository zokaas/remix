import { T_ProductData } from "~/types";

export const mockProductData: T_ProductData = {
    product: "sweden-b2b-application",
    type: "onboarding",
    locale: "en",
    steps: {
        step1: "Company",
        step2: "Business",
        step3: "Operation",
    },
    button: {
        next: "Next",
        back: "Back",
        submit: "Submit",
    },
    footer: {
        customerServiceLabel: "Customer Service",
        customerServiceText: "Need help? Contact us.",
        contactInfoLabel: "Contact",
        contactInfoText: "support@company.com",
        addressLabel: "Address",
        addressText: "123 Business Street, City, Country",
    },
    logo: "base64ImageDataHere",
    companyBlock: {
        companyName: "Sample Company AB",
        orgNumber: "123456-7890",
    },
    formHeader: {
        title: "Företagslån Onboarding Form",
        infoText: "Please complete the KYC form to proceed with your application.",
    },
    questions: [
        {
            id: 1,
            rawData: {
                labelText: "Business plan",
                step: 1,
                type: "Text",
                placeholder: "Describe your business plan...",
                name: "businessPlan",
                locale: "en",
                questionToCM1: false,
                dynamicField: [],
            },
        },
        {
            id: 2,
            rawData: {
                labelText: "What is the purpose of your company?",
                step: 2,
                type: "Textarea",
                placeholder: "Provide details...",
                name: "loanPurpose",
                locale: "en",
                questionToCM1: false,
                dynamicField: [],
            },
        },
        {
            id: 3,
            rawData: {
                labelText: "Are you a PEP or RCA?",
                step: 3,
                type: "RadioGroup",
                placeholder: null,
                name: "pepOrRca",
                locale: "en",
                questionToCM1: true,
                dynamicField: [
                    {
                        id: "1",
                        __component: "kyc.info",
                        labelDescription: "Explanation",
                        labelExplanation:
                            "Politically Exposed Persons (PEP) and Relatives and Close Associates (RCA) are individuals in public positions of power.",
                    },
                ],
            },
        },
    ],
};
