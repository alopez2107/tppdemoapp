import React from "react";
import "./TransferItem.css";

function TransferItem(props) {
    return (
      <div className="transfer-item">
        <div>
          <h2>Tx Date:</h2> 
          <p>{props.activity.transactionDate}</p>
        </div>
        <div className="transfer-item__description">
          <h2>Description:</h2>
          <p>{props.activity.description}</p>
          <div className="transfer-item__price">${props.activity.amount}</div>
        </div>
        <div className="transfer-item__description">
          <h2>Origin Acct:</h2>
          <p>{props.activity.originAcctNumber}</p>
          <h2>Destination Acct:</h2>
          <p>{props.activity.destinationAcct.accountNumber}</p>
        </div>
      </div>
    );
  }
  
  export default TransferItem;