import React from "react";
import ExpenseItem from "./ExpenseItems";
import "./ExpenseList.css";
const ExpenseList = (props) => {
  if (props.items.length === 0) {
    return (
      <h2 className="expenses-list__fallback">No Expenses Found Here...</h2>
    );
  } else if (props.items.length === 1) {
    return (
      <ul className="expenses-list__fallback">
        {props.items.map((item) => (
          <>
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
              location={item.location}
            />
            <h2>Only single Expense here. Please add more...</h2>
          </>
        ))}
      </ul>
    );
  }
  return (
    <ul className="expenses-list">
      {props.items.map((item) => (
        <ExpenseItem
          key={item.id}
          title={item.title}
          amount={item.amount}
          date={item.date}
          location={item.location}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
