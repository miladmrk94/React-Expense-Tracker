import React from "react";
import styles from "./FilterComponent.module.scss";
import { withTranslation } from "react-i18next";

const FilterComponent = ({ changeHandler, t, i18n }) => {
  return (
    <div className={styles.filterBox}>
      <label>{t("search")}: </label>
      <input type="text" onChange={changeHandler} />
    </div>
  );
};

export default withTranslation()(FilterComponent);
