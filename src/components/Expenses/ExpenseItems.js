import ExpenseDate from "./ExpenseDate";
import Card from "../UI/card";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";

const ExpenseItem = (props) => {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <ExpenseDetails
        title={props.title}
        amount={props.amount}
        location={props.location}
      />
    </Card>
  );
};

export default ExpenseItem;
