import React from "react";
import "./PaymentItem.css";

function PaymentItem(props) {
    return (
      <div className="activity-item">
        <div>Tx Date: {props.date}</div>
        <div className="activity-item__description">
          <h2>{props.title}</h2>
          <div className="activity-item__price">${props.amount}</div>
        </div>
      </div>
    );
  }
  
  export default PaymentItem;