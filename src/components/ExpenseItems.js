import ExpenseDate from "./ExpenseDate";
import ExpenseDetails from "./ExpenseDetails";
import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate ExpenseDate={props.ExpenseDate} />
      <ExpenseDetails
        ExpenseName={props.ExpenseName}
        ExpensePrice={props.ExpensePrice}
        LocationOfExpenditure={props.LocationOfExpenditure}
      />
    </div>
  );
}
export default ExpenseItems;
