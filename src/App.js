import "./App.css";
import React from "react";
import ExpenseTracker from "./Components/ExpenseTracker";
import ProviderComponent from "./Components/ProviderComponent";
import Transaction from "./Components/Transaction";

function App() {
  return (
    <div className="App">
      <h3>Expense Tracker</h3>
      <ProviderComponent>
        <ExpenseTracker />
        <Transaction className="Transaction" />
      </ProviderComponent>
    </div>
  );
}

export default App;
