import ExpenseItems from "./components/ExpenseItems";

function App() {
  let Expenses = [
    {
      ExpenseName: "Petrol",
      ExpensePrice: 100,
      ExpenseDate: new Date(),
      LocationOfExpenditure: "Tumkur",
    },
    {
      ExpenseName: "Food",
      ExpensePrice: 200,
      ExpenseDate: new Date(),
      LocationOfExpenditure: "Tumkur",
    },
    {
      ExpenseName: "Birthday party",
      ExpensePrice: 1000,
      ExpenseDate: new Date(),
      LocationOfExpenditure: "Tumkur",
    },
    {
      ExpenseName: "Petrol",
      ExpensePrice: 100,
      ExpenseDate: new Date(2023, 5, 25),
      LocationOfExpenditure: "Tumkur",
    },
    {
      ExpenseName: "Lost",
      ExpensePrice: 100,
      ExpenseDate: new Date(2023, 5, 25),
      LocationOfExpenditure: "Tumkur",
    },
  ];
  return (
    <div>
      <h2>Expense Tracker</h2>
      {Expenses.map((ExpenseList, index) => {
        return (
          <ExpenseItems
            ExpenseName={ExpenseList.ExpenseName}
            ExpensePrice={ExpenseList.ExpensePrice}
            ExpenseDate={ExpenseList.ExpenseDate}
            LocationOfExpenditure={ExpenseList.LocationOfExpenditure}
          />
        );
      })}
      ;
      {/* <ExpenseItems
        ExpenseName={Expenses[1].ExpenseName}
        ExpensePrice={Expenses[1].ExpensePrice}
        ExpenseDate={Expenses[1].ExpenseDate}
        LocationOfExpenditure={Expenses[1].LocationOfExpenditure}
      />
      <ExpenseItems
        ExpenseName={Expenses[2].ExpenseName}
        ExpensePrice={Expenses[2].ExpensePrice}
        ExpenseDate={Expenses[2].ExpenseDate}
        LocationOfExpenditure={Expenses[2].LocationOfExpenditure}
      />
      <ExpenseItems
        ExpenseName={Expenses[3].ExpenseName}
        ExpensePrice={Expenses[3].ExpensePrice}
        ExpenseDate={Expenses[3].ExpenseDate}
        LocationOfExpenditure={Expenses[3].LocationOfExpenditure}
      /> */}
    </div>
  );
}

export default App;
