import React, { useState } from "react";
import styles from "./OverViewComp.module.scss";

const OverViewComp = ({ expense, income }) => {
  const [show, setShow] = useState(true);

  const clickHandler = () => {
    setShow(!show);
    console.log(show);
  };

  return (
    <section className={styles.container}>
      <div className={styles.boxOne}>
        <div>Balance {expense - income}</div>
        <button onClick={clickHandler}>ADD</button>
      </div>

      {show ? (
        <div className={styles.boxTwo}>
          <div>Expense {expense}</div>
          <div>Income{income}</div>
        </div>
      ) : (
        <div>
          <form>
            <input />
            <button>ok</button>
          </form>
        </div>
      )}
    </section>
  );
};

export default OverViewComp;
