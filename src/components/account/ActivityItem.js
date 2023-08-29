import React, { useState } from "react";

import "./ActivityItem.css";
import PaymentItem from "./PaymentItem";
import TransferItem from "./TransferItem";
import DepositItem from "./DepositItem";



function ActivityItem(props) {

  useState(props.activity.title);

  function RenderContent(props) {
    console.log(`Activity to be rendered ${JSON.stringify(props.activity)}`);
    switch(props.activity.activityType) {
      case 'Transfer': return (<TransferItem activity={props.activity} />);
      case 'Deposit': return (<DepositItem activity={props.activity} />);
      case 'Payment': return (<PaymentItem activity={props.activity} />);
      default: return (<></>);
    }
  }
  
    return (
      <div className="activity-item">
        <RenderContent activity={props.activity} />
      </div>
    );
  }
  
  export default ActivityItem;