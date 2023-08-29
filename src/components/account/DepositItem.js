import React from "react";
import ActivityDate from "./ActivityDate";


function DepositItem(props) {
    return (
        <div className="transfer-item">
          <div>
            <h2>Tx Date:</h2> 
            <p>{props.activity.transactionDate}</p>
          </div>
          <div className="transfer-item__description">
            <h2>Type of Deposit:</h2>
            <p>{props.activity.depositType}</p>
            <div className="transfer-item__price">${props.activity.amount}</div>
          </div>
          <div className="transfer-item__description">
            <h2>Destination Acct:</h2>
            <p>{props.activity.accountNumber}</p>
          </div>
        </div>
    );
}


export default DepositItem;