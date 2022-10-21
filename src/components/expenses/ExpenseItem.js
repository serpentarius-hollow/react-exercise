import React, { useState } from "react";

import Card from "../shared/Card.js";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle('Updated');
  };

  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate day={day} month={month} year={year} />
        <div className="expense-item__description">
          <h2>{title}</h2>
          <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={clickHandler}>Change Title</button>
      </Card>
    </li>
  );
};

export default ExpenseItem;
