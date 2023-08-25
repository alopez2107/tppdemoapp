import React, { useContext, useEffect } from "react";
import Dashboard from "../components/account/Dashboard";
import { useParams } from "react-router-dom";


function Bank(props) {
  const params = useParams();
  

  return ( 
    <Dashboard />
  ); 
} 

export default Bank;