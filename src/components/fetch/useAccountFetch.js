import { useEffect } from "react";

import sendHTTPRequest from "../../services/Utils";

export default function useAccountFetch(dispatch, setFetched, state) {

    useEffect(() => {
        async function getAccounts() {
            const fetchedAccounts = await sendHTTPRequest(state.tenantID, state.resourceUrl, "POST", { email: state.email });
            setFetched(true);
            dispatch({type: "init-accts", payload: {accts: fetchedAccounts.result}});
        }
        getAccounts();
    }, []);

}