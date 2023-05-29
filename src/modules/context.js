import React, { createContext, useCallback, useState } from "react";
import * as Service from "./Service";

const initialState = {
  liveData: [],
  refresh: false,
};

export const AppContext = createContext({
  ...initialState,
  getLiveData: async () => {},
  addWatchList: async () => {},
});

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const refreshState = () => {
    setState((prev) => ({ ...prev, refresh: !prev.refresh }));
  };

  const getLiveData = useCallback(async (query) => {
    const data = await Service.listTodos(query);

    setState((prev) => ({ ...prev, liveData: [...data] }));
  }, []);

  const addWatchList = (payload) => {
    return Service.addTodo(payload);
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        getLiveData,
        addWatchList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export { AppContext };
