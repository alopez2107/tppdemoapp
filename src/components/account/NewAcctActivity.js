import React from "react";

import "./NewAcctActivity.css";
import NewAcctActivityForm from "./NewAcctActivityForm";

function NewAcctActivity(props) {
    const onSaveNewActivity = (newActivityData) => {
        props.onSaveNewActivity(newActivityData);
    }

    return (
        <div className="new-acctactivity">
            <NewAcctActivityForm onSaveNewActivity={onSaveNewActivity}/>
        </div>
    );


}

export default NewAcctActivity;