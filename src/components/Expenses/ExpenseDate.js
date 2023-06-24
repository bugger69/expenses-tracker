import React from 'react';
import './ExpenseDate.css';

function ExpenseDate (props) {
    // const month = props.month;
    // const day = props.day;
    // const year = props.year;

    return (
        <div className="expense-date">
            <div className="expense-date__month">{props.month} </div>
            <div className="expense-date__day">{props.day} </div>
            <div className="expense-date__year">{props.year} </div>
        </div>
    );

}

export default ExpenseDate;