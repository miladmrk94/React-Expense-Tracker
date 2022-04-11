import React, { useContext, useReducer } from "react";
import moment from "moment";

const ProviderData = React.createContext();
const ProviderDataDispatcher = React.createContext();

const initialData = [];
const ProviderComponent = ({ children }) => {
  const [data, setData] = useReducer((state, action) => {
    switch (action.type) {
      case "ok":
        const formValue = action.e;
        return [...state, { ...formValue, id: Date.now(), time: moment() }];

      default:
        return state;
    }
  }, initialData);

  return (
    <ProviderData.Provider value={data}>
      <ProviderDataDispatcher.Provider value={setData}>
        {children}
      </ProviderDataDispatcher.Provider>
    </ProviderData.Provider>
  );
};

export default ProviderComponent;

export const useDataTracker = () => {
  return useContext(ProviderData);
};

export const useDataAction = () => {
  return useContext(ProviderDataDispatcher);
};
