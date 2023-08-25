import React, {useContext, useEffect, useReducer, useState} from "react";
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
    const ctxState = {
      tenantID: ctx.tenantID, 
      resourceUrl: resourceUrl, 
      email: ctx.email
    };
    const [apiState, setApiState] = useState(ctxState); 
    console.log(`In AccountsList component - TenantID: ${ctx.tenantID} `);

    useAccountFetch(dispatch, setFetched, apiState);

    useEffect(() => {  
      if (hasFetched) {
        accounts.map((acct) => {
          console.log(`Account number: ${acct.accountNumber} Description: ${acct.description}`);
          return {accountNumber: acct.accountNumber, description: acct.description};
        });
      }
    }, [])
    

    /*const AccountsList = hasFetched ? (<Accounts accounts={accounts}/>):(
        <div className="accounts-list__header">
        <h2>Loading your accounts, please wait...</h2>
      </div>
    );

    return AccountsList;*/
    return (
      <div>
        <h2>Accounts will display here...</h2>
      </div>
    );
  }
  
  export default AccountsList;