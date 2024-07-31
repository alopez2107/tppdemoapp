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
    const acctUrl = `/${ctx.tenantID}/${props.account.acctNumber}`;
    navigate(acctUrl);
  }

  function RenderContent(props) {
    console.log(`Account info: Number: ${props.account.acctNumber} Description: ${props.account.acctName}`);

    return (
      <Card className="account-item">
        <div className="account-item__details">
          <h2>Account Number:</h2>
          <p>{props.account.acctNumber}</p> 
          <h2>Account Name</h2>
          <p>{props.account.acctName}</p>
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