import React, { useContext, useState, useReducer } from "react";
import Dashboard from "../components/account/Dashboard";
import useAccountFetch from "../components/fetch/useAccountFetch";
import acctsReducer from "../components/account/acctsReducer";
import AuthContext from "../context/auth-context";

function Bank(props) {
  const [hasFetched, setFetched] = useState(false);
  const [accounts, dispatch] = useReducer(acctsReducer, []);
  const ctx = useContext(AuthContext);
  const resourceUrl = ctx.resourceUrl + "/fapi/consentedAccounts";
  const apiState = {
    tenantID: ctx.tenantID, 
    resourceUrl: resourceUrl, 
    email: ctx.email,
    hasFetched: hasFetched
  };

  useAccountFetch(dispatch, setFetched, apiState);

  return ( 
    <Dashboard accounts={accounts}/>
  ); 
} 

export default Bank;