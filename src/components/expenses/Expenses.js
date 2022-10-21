import React, { useState } from "react";

import Card from "../shared/Card.js";
import ExpenseFilter from "./ExpenseFilter.js";
import ExpensesList from "./ExpensesList.js";
import ExpensesChart  from "./ExpensesChart.js";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2022");

  const changeFilterHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filtered = props.expenses.filter(
    (e) => e.date.getFullYear() === parseInt(filteredYear)
  );

  return (
    <Card className="expenses">
      <ExpenseFilter
        onChangeFilter={changeFilterHandler}
        selectedYear={filteredYear}
      />
      <ExpensesChart expenses={filtered} />
      <ExpensesList items={filtered} />
    </Card>
  );
};

export default Expenses;
