import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails ExpenseDetails={props.ExpenseDetails} />
    </div>
  );
}
export default ExpenseItems;
