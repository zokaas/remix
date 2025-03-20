import { getRequest } from "./utils/apiHelpers.server";
import { buildUrl } from "./utils/urlHelpers.server";

type T_VerifySessionResponseData = {
    status: boolean;
    ttl: number;
};

type T_AuthSessionApiResponse<T = unknown> = {
    status: number;
    data: T;
};

type T_UserInfo = {
    sub: string;
    email_verified: boolean;
    name: string;
    preferred_username: string;
    user_roles: string[];
    given_name: string;
    family_name: string;
    attrs: T_UserAttributes;
};

type T_UserAttributes = {
    bank?: string;
    firstname?: string;
    lastname?: string;
    fullname?: string;
    birthdate?: string;
    refType: string;
    ssn?: string;
    ref?: string;
};

export const verifySession = async (
    clientId: string,
    sessionId: string,
): Promise<T_VerifySessionResponseData> => {
    const verifyPath = "authenticate/verify";
    const url = buildUrl(verifyPath, clientId);

    try {
        return await getRequest<T_VerifySessionResponseData>(url, sessionId);
    } catch (error) {
        console.error("Failed to verify session", error);
        return { status: false, ttl: 0 }; // Return null in case of an error
    }
};

export const endSession = async (
    sessionId: string,
    clientId: string,
): Promise<T_AuthSessionApiResponse | null> => {
    const logoutPath = "authenticate/logout";
    const url = buildUrl(logoutPath, clientId);

    return getRequest<T_AuthSessionApiResponse>(url, sessionId);
};

export const getUserInfo = async (
    sessionId: string,
    clientId: string,
): Promise<T_UserInfo | null> => {
    const sessionInfoPath = "authenticate/sessioninfo";
    const url = buildUrl(sessionInfoPath, clientId);

    return getRequest<T_UserInfo>(url, sessionId);
};
