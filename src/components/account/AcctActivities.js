import React from "react";
import ActivityItem from "./ActivityItem";
import Card from "../ui/Card";
import './AcctActivities.css';
import { useNavigate } from "react-router-dom";

const AcctActivities = (props) => {
  const navigate = useNavigate();

  function onBackToAccounts() {
    navigate(-1);
  }

  function onReloadTransactions() {
    props.onReloadTransactions();
  }

  return (
    <Card className="acct-activities">
        {props.activities.map((activity) => <ActivityItem key={activity._id} activity={activity} />)}
        <Card className="acct-activities__control_panel">
          <button onClick={onBackToAccounts}>Back to Accounts</button>
          <button onClick={onReloadTransactions}>Reload Transactions</button>
        </Card>
    </Card>
  );
}
  
  export default AcctActivities;