import React, { useState } from "react";

import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../Filter/ExpensesFilter";
import ExpensesChart from './ExpensesChart';
import Card from "../UI/Card";
import "./Expenses.css";

function Expenses(props) {
  const [selectedYear, setSelectedYear] = useState("2020");

  const saveExpenseYearHandler = (enteredYear) => {
    setSelectedYear(enteredYear);
  };

  // console.log(selectedYear);
  const filteredArr = props.items.filter(
    (expense) =>
      expense.date.getFullYear().toString() === selectedYear.toString()
  );

  return (
    <div>
      <div>
        <Card className="expenses">
          <ExpensesFilter
            selected={selectedYear}
            onYearChange={saveExpenseYearHandler}
          />
          <ExpensesChart expenses={filteredArr} />
          <ExpensesList items={filteredArr} />
        </Card>
      </div>
    </div>
  );
}

export default Expenses;
