import React from "react";
import './AccountsList.css';
import Accounts from "./Accounts";



const AccountsList = (props) => { 
    const AccountsList = hasFetched ? (<Accounts accounts={accounts}/>):(
        <div className="accounts-list__header">
        <h2>Loading your accounts, please wait...</h2>
      </div>
    );

    return AccountsList;
    return (
      <Accounts accounts={props.accounts}/>
    );
  }
  
  export default AccountsList;