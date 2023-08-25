import React, {useReducer, useState} from "react";
import './AccountsList.css';
import acctsReducer from "./acctsReducer";
import useAccountFetch from "../fetch/useAccountFetch";
import Accounts from "./Accounts";


const AccountsList = () => { 
    const [hasFetched, setFetched] = useState(false);
    const [accounts, dispatch] = useReducer(acctsReducer, []);

    useAccountFetch(dispatch, setFetched);

    const AccountsList = hasFetched ? (<Accounts accounts={accounts}/>):(
        <div className="accounts-list__header">
        <h2>Loading your accounts, please wait...</h2>
      </div>
    );

    return AccountsList;
  }
  
  export default AccountsList;