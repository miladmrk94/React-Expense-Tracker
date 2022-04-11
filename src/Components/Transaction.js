import React, { useEffect, useState } from "react";
import FilterComponent from "./FilterComponent";
import { useDataTracker, useDataAction } from "./ProviderComponent";
import styles from "./Transaction.module.scss";

const Transaction = () => {
  const data = useDataTracker();
  const [filterData, setFilterData] = useState(data);

  const changeHandler = (e) => {
    const eventValue = e.target.value;
    if (!eventValue || eventValue === "") {
      setFilterData(data);
    } else {
      const filter = filterData.filter((i) => {
        return i.detail.includes(eventValue);
      });
      setFilterData(filter);
    }
  };

  useEffect(() => {
    setFilterData(data);
  }, [data]);
  return (
    <div className={styles.container}>
      <FilterComponent changeHandler={changeHandler} />
      <div>
        {filterData.map((item) => {
          return (
            <div key={item.id} className={styles.detailBox}>
              <div className={styles.boxOne}>
                <h2>{item.detail.slice(0, 1).toUpperCase()}</h2>
                <h4>{item.detail}</h4>
              </div>
              <p className={styles.date}>{item.time.format("l - LT")}</p>

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
