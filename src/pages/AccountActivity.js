import { useContext, useEffect, useReducer, useState } from "react";
import AuthContext from "../context/auth-context";
import useActivityFetch from "../components/fetch/useActivityFetch";
import AcctActivities from "../components/account/AcctActivities";
import activitiesReducer from "../components/account/activitiesReducer";
import { useParams } from "react-router-dom";

function AccountActivity() {
  const [hasFetched, setFetched] = useState(false);
  const [activities, dispatch] = useReducer(activitiesReducer, null);
  const [activityItems, setActivityItems] = useState([]);
  const ctx = useContext(AuthContext);
  const resourceUrl = ctx.resourceUrl + "/fapi/account/activity";
  const params = useParams();
  const accountNumber = params.acctNum;
  const apiState = {
    tenantID: ctx.tenantID, 
    resourceUrl: resourceUrl, 
    accountNumber: accountNumber,
    hasFetched: hasFetched
  };

  function onReloadTransactions() {
    setFetched(false);
  }

  useActivityFetch(dispatch, setFetched, apiState);

  useEffect(() => {
    if (hasFetched) {
      console.log(`Fetched Activities are: ${activities}`);
      setActivityItems(activities);
    }
  });

  return (     
    <AcctActivities activities={activityItems} onReloadTransactions={onReloadTransactions}/>
  );
}

export default AccountActivity;