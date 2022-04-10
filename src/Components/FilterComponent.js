import React from "react";
import styles from "./FilterComponent.module.scss";
const FilterComponent = ({ changeHandler }) => {
  return (
    <div className={styles.filterBox}>
      <label>Search: </label>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default FilterComponent;
