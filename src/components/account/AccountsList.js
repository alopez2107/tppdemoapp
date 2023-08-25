import React, {useContext, useReducer, useState} from "react";
import './AccountsList.css';
import acctsReducer from "./acctsReducer";
import useAccountFetch from "../fetch/useAccountFetch";
import Accounts from "./Accounts";
import AuthContext from "../../context/auth-context";


const AccountsList = () => { 
    const [hasFetched, setFetched] = useState(false);
    const [accounts, dispatch] = useReducer(acctsReducer, []);
    const ctx = useContext(AuthContext);
    const resourceUrl = ctx.resourceUrl + "/fapi/accounts";
    
    console.log(`In AccountsList component - TenantID: ${ctx.tenantID} `);

    useAccountFetch(dispatch, setFetched, {tenantID: ctx.tenantID, resourceUrl: resourceUrl, email: ctx.email});

    const AccountsList = hasFetched ? (<Accounts accounts={accounts}/>):(
        <div className="accounts-list__header">
        <h2>Loading your accounts, please wait...</h2>
      </div>
    );

    return AccountsList;
    /*return (
      <div>
        <h2>Accounts will display here...</h2>
      </div>
    );*/
  }
  
  export default AccountsList;