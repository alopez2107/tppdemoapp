import React from "react";
import "./PaymentItem.css";

function PaymentItem(props) {
  return (
    <div className="transfer-item">
      <div className="transfer-item__description">
        <h2>Tx Date:</h2> 
        <p>{props.activity.transactionDate}</p>
      </div>
      <div className="transfer-item__description">
        <h2>Concept:</h2>
        <p>{props.activity.description}</p>
        <div className="transfer-item__price">${props.activity.amount}</div>
      </div>
      <div className="transfer-item__description">
        <h2>Source Acct:</h2>
        <p>{props.activity.sourceAccountNumber}</p>
      </div>
    </div>
  );
}
  
  export default PaymentItem;