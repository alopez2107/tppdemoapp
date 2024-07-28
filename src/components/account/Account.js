import React, { useContext, useState } from "react";

import "./Account.css";
import Card from "../ui/Card";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/auth-context";

const Account = (props) => {
  const navigate = useNavigate();
  const ctx = useContext(AuthContext);

  function onGetAcctActivity() {
    console.log("Account activity is fetched here...");
    const acctUrl = `/${ctx.tenantID}/${props.account.accountNumber}`;
    navigate(acctUrl);
  }

  function RenderContent(props) {
    console.log(`Account info: Number: ${props.account.accountNumber} Description: ${props.account.description}`);

    return (
      <Card className="account-item">
        <div className="account-item__details">
          <h2>Account Number:</h2>
          <p>{props.account.acctNum}</p> 
          <h2>Account Type</h2>
          <p>{props.account.acctType}</p>
        </div>
        <div className="account-item__description">
          <button onClick={onGetAcctActivity}>Account Activity</button>
        </div>
      </Card>
    );
  }
  
    return (
      <RenderContent account={props.account} />
    );
  }
  
  export default Account;