import { TokenManager } from "@forgerock/javascript-sdk";

export default async function getTokensAPI(authzCode, urlState) {
    const tokens = await TokenManager.getTokens({
        query: {
            code: authzCode,
            state: urlState
        }
    });
    return tokens;
}