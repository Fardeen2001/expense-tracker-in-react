import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [price, setPrice] = useState(props.amount);
  const EditHandler = () => {
    setTitle("updated");
    setPrice(100);
    console.log(title);
  };
  const DeleteHandler = () => {
    //console.log("DeleteClicked")
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails title={title} amount={price} location={props.location} />
      <button onClick={EditHandler}>Edit</button>
      <button onClick={DeleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
