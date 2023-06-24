import React from 'react';
import "./ExpenseItem.css";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";

function ExpenseItem(props) {
  // const expenseDate = props.date;

  // const [title, setTitle] = useState(props.title);

  const title = props.title;

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  // const clickHandler = () => {
  //   setTitle("updated!!");
  //   console.log(title);
  // }

  return (
    <Card className="expense-item">
      {/* <div>{expenseDate.toDateString()}</div> */}
      <ExpenseDate month={month} day={day} year={year}></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={clickHandler}>Change Title</button> */}
    </Card>
  );
}

export default ExpenseItem;
