import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/form/NewExpense";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
      location: "tumkur",
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2021, 2, 12),
      location: "tumkur",
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
      location: "tumkur",
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
      location: "tumkur",
    },
  ];
  // return React.createElement(
  //   "div",
  //   { className: expense - items },
  //   React.createElement(ExpenseDate, { date: props.date }),
  //   React.createElement(
  //     "div",
  //     {},
  //     React.createElement(
  //       "h1",
  //       {},
  //       "Expense 1",
  //       React.createElement("h1", {}, "Expense 1")
  //     )
  //   )
  // );
  return (
    <div>
      <NewExpense />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
