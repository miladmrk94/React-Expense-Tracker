import React from "react";
import { useDataTracker } from "./ProviderComponent";

const Transaction = ({ className }) => {
  const data = useDataTracker();
  return (
    <div className={className}>
      <div>filters</div>
      <div>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <h2>TS</h2>
              <h4>{item.detail}</h4>
              <h4>{item.amount}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Transaction;
