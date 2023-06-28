import React, { useState } from "react";
import "./ExpenseForm.css";
function ExpenseForm() {
  const [enteredTitle, updatedTitle] = useState("");
  const [enteredAmount, updatedAmount] = useState("");
  const [enteredDate, updatedDate] = useState("");
  // const [inputUser, setInputUser] = useState({
  //   title: "",
  //   amount: "",
  //   date: "",
  // });
  const titleChanged = (e) => {
    // setInputUser({
    //   ...inputUser,
    //   title: e.target.value,
    // });
    updatedTitle(e.target.value);
    //console.log(e.target.value);
  };
  const priceChanged = (e) => {
    // setInputUser({
    //   ...inputUser,
    //   amount: e.target.value,
    // });
    updatedAmount(e.target.value);
    //console.log(e.target.value);
  };
  const dateChanged = (e) => {
    // setInputUser({
    //   ...inputUser,
    //   date: e.target.value,
    // });
    updatedDate(e.target.value);
    //console.log(e.target.value);
  };
  const clicked = (e) => {
    e.preventDefault();
    let userInput = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };
    console.log(userInput);
    //console.log("clicked");
  };

  return (
    <form onSubmit={clicked}>
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
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
export default ExpenseForm;
