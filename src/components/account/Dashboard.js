import React, { useState, useContext, useEffect } from "react";
import Card from "../ui/Card";
import "./Dashboard.css";
import AccountsList from "./AccountsList";
import AccountControlPanel from "../controlpanel/account/AccountControlPanel";

function Dashboard(props) {
    return (
    <Card className="dashboard-main">
        <Card className="dashboard-main__header">
          <h2>Welcome to the Accounts Dashboard</h2>
        </Card>
        <AccountControlPanel />
        <AccountsList accounts={props.accounts}/>
    </Card>
  );
}

export default Dashboard;