import "./ExpenseDetails.css";
function ExpenseDetails(props) {
  return (
    <div className="expense-item__description">
      <h2>{props.ExpenseName}</h2>
      <div className="expense-item__location">
        {props.LocationOfExpenditure}
      </div>
      <div className="expense-item__price">Rs{props.ExpensePrice}</div>
    </div>
  );
}
export default ExpenseDetails;
