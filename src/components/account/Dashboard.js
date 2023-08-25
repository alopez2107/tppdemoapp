import React, { useState, useContext, useEffect } from "react";
import Card from "../ui/Card";
import "./Dashboard.css";
import AccountsList from "./AccountsList";
import AccountControlPanel from "../controlpanel/account/AccountControlPanel";

function Dashboard(props) {
    return (
    <Card className="dashboard-main">
        <AccountControlPanel />
        <AccountsList accounts={props.accounts}/>
    </Card>
  );
}

export default Dashboard;