import React from "react";
import "./ActivityDate.css";

function ActivityDate(props) {
    const month = props.activity.date.toLocaleString('en-US', {month: 'long'});
    const day = props.activity.date.toLocaleString('en-US', {day: '2-digit'});
    const year = props.activity.date.getFullYear();
    return (
        <div className="activity-date">
            <div className="activity-date_month">{month}</div>
            <div className="activity-date_year">{year}</div>
            <div className="activity-date_day">{day}</div>
        </div>
    );
}

export default ActivityDate;