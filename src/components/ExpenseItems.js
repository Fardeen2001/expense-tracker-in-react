import "./ExpenseItems.css";
function ExpenseItems() {
  const ExpenseDate = new Date(2023, 6, 24);
  const ExpenseName = "Food";
  const LocationOfExpenditure = "Tumkur";
  const ExpensePrice = 10;
  return (
    <div className="expense-item">
      <div>{ExpenseDate.toISOString()}</div>
      <div className="expense-item__description">
        <h2>{ExpenseName}</h2>
        <div className="expense-item__location">{LocationOfExpenditure}</div>
        <div className="expense-item__price">Rs{ExpensePrice}</div>
      </div>
    </div>
  );
}
export default ExpenseItems;
