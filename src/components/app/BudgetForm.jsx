import '../../styles/sass/ExpenseForm.scss'
import React, {useState} from 'react';
import Footer from "./Footer";
import budgetImage from "../../assets/expense-form.svg"

const BudgetForm = () => {
    return (
        <div className = "budget">
            <img src = {budgetImage} />
               
        </div>
    );
};

export default  BudgetForm;