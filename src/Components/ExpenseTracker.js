import React, { useState, useEffect } from "react";
import styles from "./ExpenseTracker.module.scss";
import { useDataTracker, useDataAction } from "./ProviderComponent";
import {
  HiPlusCircle,
  HiArrowNarrowUp,
  HiArrowNarrowDown,
} from "react-icons/hi";
import { withTranslation } from "react-i18next";

const ExpenseTracker = ({ t }) => {
  //--------------- show and hidden form
  const [isShow, setIsShow] = useState(false);
  const clickHandler = () => {
    setIsShow(!isShow);
  };

  //--------------- get information by form
  const [formValue, setFormValue] = useState({
    amount: "",
    detail: "",
    type: "expense",
  });

  const dispatch = useDataAction();

  const submitHandler = (e) => {
    e.preventDefault();
    if (formValue.amount === "" || formValue.detail === "") {
      alert("plz complete!");
    } else if (!formValue.amount || !formValue.type) {
      alert("plz complete");
    } else if (!formValue.detail || !formValue.type) {
      alert("plz complete");
    } else {
      dispatch({ type: "ok", e: formValue });
      setIsShow(false);
      setFormValue([]);
    }
  };

  //--------------- get income and expense by useDataTracker
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);
  const allData = useDataTracker();

  useEffect(() => {
    let inc = 0;
    let exp = 0;

    allData.forEach((i) => {
      return i.type === "expense"
        ? (exp = exp + parseFloat(i.amount))
        : (inc = inc + parseFloat(i.amount));
    });
    setIncome(inc);
    setExpense(exp);
  }, [allData]);
  const changeHandler = (e) => {
    setFormValue({ ...formValue, [e.target.name]: e.target.value });
  };
  return (
    <div className={styles.container}>
      <div className={styles.balanceBox}>
        <h3>{t("totalBalance")}</h3>
        <div className={styles.total}>
          <h2>
            {t("$")} {income - expense}
          </h2>
          <h3 onClick={clickHandler}>
            <HiPlusCircle size="2.5rem" />
          </h3>
        </div>
      </div>
      {isShow ? (
        <div className={styles.formBox}>
          <form onSubmit={submitHandler}>
            <input
              className={styles.input}
              placeholder={t("amount")}
              type="number"
              name="amount"
              onChange={changeHandler}
            />
            <input
              className={styles.input}
              placeholder={t("detail")}
              type="text"
              name="detail"
              onChange={changeHandler}
            />
            <div>
              <label>{t("expense")}</label>
              <input
                type="radio"
                value="expense"
                name="type"
                onChange={changeHandler}
                checked={formValue.type === "expense"}
              />
              <label>{t("income")}</label>
              <input
                type="radio"
                value="income"
                name="type"
                onChange={changeHandler}
                checked={formValue.type === "income"}
              />
            </div>

            <button type="submit">{t("addTransaction")}</button>
          </form>
        </div>
      ) : (
        <div className={styles.detailBox}>
          <div className={styles.incomeBox}>
            <HiArrowNarrowUp size="2.5rem" color="#11C231" />
            <div className={styles.income}>
              <h3>{t("income")}</h3>
              <h4>{income}</h4>
            </div>
          </div>
          <div className={styles.expenseBox}>
            <HiArrowNarrowDown size="2.5rem" color="#EB4C4C" />
            <div className={styles.expense}>
              <h3>{t("expense")}</h3>
              <h4>{expense}</h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default withTranslation()(ExpenseTracker);
