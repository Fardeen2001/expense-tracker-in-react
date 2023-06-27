import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  const EditHandler = ()=>{
    console.log("EditClicked")
  }
  const DeleteHandler = ()=>{
    console.log("DeleteClicked")
  }
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
      <button onClick={EditHandler}>Edit</button>
      <button onClick={DeleteHandler}>Delete</button>
    </Card>
  );
};

export default ExpenseItem;
