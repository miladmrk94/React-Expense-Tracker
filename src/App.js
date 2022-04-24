import "./App.css";
import React from "react";
import ExpenseTracker from "./Components/ExpenseTracker";
import ProviderComponent from "./Components/ProviderComponent";
import Transaction from "./Components/Transaction";
import { withTranslation } from "react-i18next";

function App({ t, i18n }) {
  const changeLanguageHandler = (e) => {
    const checked = e.target.checked;
    checked ? i18n.changeLanguage("fa") : i18n.changeLanguage("en");
  };
  return (
    <div className="App">
      <div className="toggle-box">
        <div className="button r" id="button-9">
          <input
            type="checkbox"
            className="checkbox"
            onChange={changeLanguageHandler}
          />
          <div className="knobs">
            <span></span>
          </div>
          <div className="layer"></div>
        </div>
      </div>

      {/* <Toggle
        className="DarkToggle"
        checked={false}
        onChange={changeLanguageHandler}
        icons={{ checked: "🌙", unchecked: "🔆" }}
      /> */}

      {/* <select onChange={changeLanguageHandler}>
        <option value="en">English</option>
        <option value="fa">فارسی</option>
      </select> */}
      <h3>{t("name")}</h3>
      <ProviderComponent>
        <ExpenseTracker />
        <Transaction className="Transaction" />
      </ProviderComponent>
    </div>
  );
}

export default withTranslation()(App);
