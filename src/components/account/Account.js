import React, { useState } from "react";

import "./Account.css";
import Card from "../ui/Card";

const Account = (props) => {

  useState(props.account.title);

  function RenderContent(props) {
    console.log(`Account info: Number: ${props.account.accountNumber} Description: ${props.account.description}`);

    return (
      <Card className="account-item">
        <div className="account-item__description">
          <h2>Account Number: {props.account.accountNumber}</h2>
          <h2>Description: {props.account.description}</h2>
        </div>
        <Card className="account-item">
          <div className="account-item__details">
            <div className="account-item_description">
              <h2>Account Type</h2>
            </div>
            <div className="account-item__body">
              <p>{props.account.accountType}</p>
            </div>
          </div>
        </Card>
      </Card>
    );
  }
  
    return (
      <div className="account-item">
        <RenderContent account={props.account} />
      </div>
    );
  }
  
  export default Account;