import "./App.css";
import React from "react";
import ExpenseTracker from "./Components/ExpenseTracker";
import ProviderComponent from "./Components/ProviderComponent";
import Transaction from "./Components/Transaction";
import { withTranslation } from "react-i18next";

function App({ t, i18n }) {
  const changeLanguageHandler = (e) => {
    i18n.changeLanguage(e.target.value);
  };
  return (
    <div className="App">
      <select onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select>
      <h3>{t("name")}</h3>
      <ProviderComponent>
        <ExpenseTracker />
        <Transaction className="Transaction" />
      </ProviderComponent>
    </div>
  );
}

export default withTranslation()(App);
