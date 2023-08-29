import { useState } from "react";

import sendHTTPRequest from "../../services/Utils";

export default function useAccountFetch(dispatch, setFetched, state) {
    async function getAccounts() {
        const fetchedAccounts = await sendHTTPRequest(state.tenantID, state.resourceUrl, "POST", { email: state.email });
        setFetched(true);
        dispatch({type: "init-accts", payload: {accts: fetchedAccounts.result}});
    }
    if (!state.hasFetched) {
        getAccounts();
    }
}