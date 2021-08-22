import '../../styles/sass/ExpenseForm.scss'
import React, {useState} from 'react';
import Footer from "./Footer";
import expenseImage from "../../assets/expense-form.svg"

const ExpenseForm = () => {
    return (
        <div className = "expenses">
            <img src = {expenseImage} />
               
        </div>
    );
};

export default ExpenseForm ;