import React, {useState} from "react";

import Expenses from "./components/expenses/Expenses";
import NewExpense from "./components/new_expense/NewExpense";

const DUMMY_DATA = [
  {
    id: "1",
    title: "Sex & Drugs",
    date: new Date(Date.now()),
    amount: "100.0",
  },
  {
    id: "2",
    title: "Foods",
    date: new Date(Date.now()),
    amount: "150.0",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA)

  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => [expense, ...prevState]);
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
