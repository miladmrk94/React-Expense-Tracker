import React, { useState } from "react";
import styles from "./ExpenseApp.module.scss";
import OverViewComp from "./OverViewComp";
import TransActionComp from "./TransActionComp";

const ExpenseApp = () => {
  const [expense, setExpense] = useState(0);
  const [income, setIncome] = useState(0);
  const [transAction, setTransAction] = useState([]);

  return (
    <div>
      <OverViewComp expense={expense} income={income} />
      <TransActionComp transAction={transAction} />
    </div>
  );
};

export default ExpenseApp;
