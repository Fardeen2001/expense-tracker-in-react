import "./ExpenseItems.css";
function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <div>{props.ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{props.ExpenseName}</h2>
        <div className="expense-item__location">
          {props.LocationOfExpenditure}
        </div>
        <div className="expense-item__price">Rs{props.ExpensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItems;
