import React, {useContext, useEffect, useReducer, useState} from "react";
import './AccountsList.css';
import acctsReducer from "./acctsReducer";
import useAccountFetch from "../fetch/useAccountFetch";
import Accounts from "./Accounts";
import AuthContext from "../../context/auth-context";


const AccountsList = (props) => { 
    /*const AccountsList = hasFetched ? (<Accounts accounts={accounts}/>):(
        <div className="accounts-list__header">
        <h2>Loading your accounts, please wait...</h2>
      </div>
    );

    return AccountsList;*/
    return (
      <Accounts accounts={props.accounts}/>
    );
  }
  
  export default AccountsList;