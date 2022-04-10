import React from "react";
import { useDataTracker } from "./ProviderComponent";
import styles from "./Transaction.module.scss";

const Transaction = () => {
  const data = useDataTracker();
  return (
    <div className={styles.container}>
      <div className={styles.filterBox}>filters</div>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.detailBox}>
              <div className={styles.boxOne}>
                <h2>{item.detail.slice(0, 1).toUpperCase()}</h2>
                <h4>{item.detail}</h4>
              </div>
              <h4
                style={
                  item.type === "expense"
                    ? { color: "red" }
                    : { color: "green" }
                }
              >
                $ {item.amount}
              </h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
