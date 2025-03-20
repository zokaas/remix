import React from "react";
import { LoaderFunction } from "@remix-run/node";
import { Container } from "@ui-components/index";

export const loader: LoaderFunction = async () => {
    console.log("logout");
    return null;
};

const logoutPage: React.FC = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Container className="bg-white shadow-strong w-full max-w-xl mx-auto p-6 text-center">
                <h2 className="text-2xl font-bold text-primary">SESSION EXPIRED</h2>
                <p>User will be redirected to source application</p>
            </Container>
        </div>
    );
};
export default logoutPage;
