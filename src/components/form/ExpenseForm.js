import "./ExpenseForm.css";
function ExpenseForm() {
  const titleChanged = (e) => {
    console.log(e.target.value);
  };
  const priceChanged = (e) => {
    console.log(e.target.value);
  };
  const dateChanged = (e) => {
    console.log(e.target.value);
  };
  const clicked = () => {
    console.log("clicked");
  };

  return (
    <div className="form">
      <input type="text" onChange={titleChanged} />
      <input type="number" onChange={priceChanged} />
      <input type="date" onChange={dateChanged} />
      <button onClick={clicked}>Submit</button>
    </div>
  );
}
export default ExpenseForm;
