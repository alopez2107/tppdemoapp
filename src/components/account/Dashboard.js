import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/auth-context";
import sendHTTPRequest from "../../services/Utils";
import Card from "../ui/Card";
import "./Dashboard.css";
import AccountsList from "./AccountsList";

function Dashboard(props) {
    

  return (
    <Card className="dashboard-main">
        <AccountsList/>
    </Card>
  );
}

export default Dashboard;