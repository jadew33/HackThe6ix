import React, {useState} from 'react';
import '../../styles/sass/BudgetForm.scss'


const BudgetForm = () => {
    return (
        <div className = "parentDiv">
            <div className = "top">
            <h3 className = "header">How much do you want to save?</h3>
            </div>
                <form className = "form">
                    <input className = "input"></input>
                    <button className = "button" >Continue</button>
                </form>
        </div>
    );
};

export default BudgetForm;