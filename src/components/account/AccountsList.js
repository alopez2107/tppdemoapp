import React from "react";
import './AccountsList.css';
import Accounts from "./Accounts";



const AccountsList = (props) => { 
    return (
      <Accounts accounts={props.accounts}/>
    );
  }
  
  export default AccountsList;