import React from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container } from "@ui-components/index";

export const loader: LoaderFunction = async () => {
    console.log("error, session not valid");
    return null;
};

const errorPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Container className="bg-white shadow-strong w-full max-w-xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-bold text-primary">ERROR: SESSION NOT VALID</h2>
            </Container>
        </div>
    );
};
export default errorPage;
