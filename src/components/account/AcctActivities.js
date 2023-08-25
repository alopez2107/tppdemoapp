import React from "react";
import ActivityItem from "./ActivityItem";
import Card from "../ui/Card";
import './AcctActivities.css';

const AcctActivities = (props) => {
    return (
      <Card className="acct-activities">
        {props.activities.map((activity) => <ActivityItem key={activity.id} activity={activity} />)}
      </Card>
    );
  }
  
  export default AcctActivities;