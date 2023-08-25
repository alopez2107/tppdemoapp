import React from "react";
import "./TransferItem.css";

function TransferItem(props) {
    return (
      <div className="transfer-item">
        <div>Tx Date: {props.date}</div>
        <div className="transfer-item__description">
          <h2>{props.description}</h2>
          <div className="transfer-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
  
  export default TransferItem;