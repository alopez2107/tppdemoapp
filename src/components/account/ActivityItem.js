import React, { useState } from "react";

import "./ActivityItem.css";
import PaymentItem from "./PaymentItem";
import TransferItem from "./TransferItem";
import DepositItem from "./DepositItem";



function ActivityItem(props) {

  useState(props.activity.title);

  function RenderContent(props) {
    switch(props.activity.activityType) {
      case 1: return (<TransferItem activity={props.activity} />);
      case 2: return (<DepositItem activity={props.activity} />);
      case 3: return (<PaymentItem activity={props.activity} />);
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