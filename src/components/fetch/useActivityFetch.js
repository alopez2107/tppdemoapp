import { useState } from "react";

import sendHTTPRequest from "../../services/Utils";

export default function useActivityFetch(dispatch, setFetched, state) {
    async function getActivities() {
        const fetchedActivities = await sendHTTPRequest(state.tenantID, state.resourceUrl, "POST", { accountNumber: state.accountNumber });
        setFetched(true);
        console.log(`Activities result: ${JSON.stringify(fetchedActivities)}`);
        var allActivities = [];
        allActivities.push(...fetchedActivities.deposits);
        allActivities.push(...fetchedActivities.payments);
        allActivities.push(...fetchedActivities.transfers);
        dispatch({type: "init-activities", payload: {activities: allActivities}});
    }
    if (!state.hasFetched) {
        getActivities();
    }
}