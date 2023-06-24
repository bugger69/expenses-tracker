import React, {useState} from 'react';
import './NewExpense.css';
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [isEditing, setIsEditing] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            id: Math.random().toString(),
            ...enteredExpenseData,
        };
        props.onAddExpense(expenseData);
    };

    const startEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    // const stateHandler = () => {
    //     if(state === button) {
    //         setState(form);
    //     } else {
    //         setState(button);
    //     }
    // }

    // const form = <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stateChange={stateHandler}/>;

    // const button = <button onClick={stateHandler}>Add New Expense</button>;

    // const [state, setState] = useState(button);

    return (
        <div className="new-expense">
            {!isEditing && <button onClick={startEditingHandler} >Add New Expense</button>}
            {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} stopEditing={stopEditingHandler}/>}
        </div>
    )
}

export default NewExpense;