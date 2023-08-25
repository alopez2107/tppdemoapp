import React, {useState} from "react";

import "./NewAcctActivityForm.css";

function NewAcctActivityForm(props) {
    const [currentTitle, setCurrentTitle] = useState('');
    const [currentAmount, setCurrentAmount] = useState(0.00);
    const [currentActivityDate, setCurrentActivityDate] = useState(new Date('2020-08-10'));

    const titleChangeNandler = (event) => {
        setCurrentTitle(event.target.value);
    }

    const amountChangeNandler = (event) => {
        setCurrentAmount(event.target.value);
    }

    const dateChangeNandler = (event) => {
        setCurrentActivityDate(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();

        const newAcctActivityData = {
            id: Math.random().toString(),
            title: currentTitle,
            amount: currentAmount,
            date: new Date(currentActivityDate)
        };
        
        props.onSaveNewActivity(newAcctActivityData);
        setCurrentTitle('');
        setCurrentAmount('');
        setCurrentActivityDate('');
    };

    return (
        <form onSubmit={onSubmitHandler}>
            <div className="new-acctactivity__controls">
                <div className="new-acctactivity__control">
                    <label>Title</label>
                    <input tupe="text" onChange={titleChangeNandler} value={currentTitle}/>
                </div>
                <div className="new-acctactivity__control">
                    <label>Ammount</label>
                    <input tupe="number" min="0.01" step="0.01" onChange={amountChangeNandler} value={currentAmount}/>
                </div>
                <div className="new-acctactivity__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeNandler} value={currentActivityDate}/>
                </div>
            </div>
            <div className="new-acctactivity__actions">
                <button type="submit">Add Activity</button>
            </div>
        </form>
    )
}

export default NewAcctActivityForm;