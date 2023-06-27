import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm(props) {
  const [enteredTitle, updatedTitle] = useState(props.title);
  const [enteredAmount, updatedAmount] = useState(props.amount);
  const [enteredDate, updatedDate] = useState(props.date);
  const titleChanged = (e) => {
    updatedTitle(e.target.value);
    //console.log(e.target.value);
  };
  const priceChanged = (e) => {
    updatedAmount(e.target.value);
    //console.log(e.target.value);
  };
  const dateChanged = (e) => {
    updatedDate(e.target.value);
    //console.log(e.target.value);
  };
  const clicked = (e) => {
    e.preventDefault();
    //console.log("clicked");
  };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChanged} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={priceChanged} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2024-12-31"
            onChange={dateChanged}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit" onClick={clicked}>
          Add Expense
        </button>
      </div>
    </form>
  );
}
export default ExpenseForm;
