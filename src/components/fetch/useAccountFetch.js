import { useContext, useEffect } from "react";
import AuthContext from "../../context/auth-context";
import sendHTTPRequest from "../../services/Utils";

export default function useAccountFetch(dispatch, setFetched) {
    const ctx = useContext(AuthContext);

    useEffect(() => {
        async function getAccounts() {
            const fetchedAccounts = await sendHTTPRequest(ctx.tenantID, ctx.resourceUrl, "POST", { email: ctx.email });
            setFetched(true);
            dispatch({type: "init-accts", payload: {accts: fetchedAccounts.result}});
        }
        getAccounts();
    }, []);

}