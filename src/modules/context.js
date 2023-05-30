import React, { createContext, useCallback, useState } from "react";
import * as Service from "./service";

const initialState = {
  liveData: [],
  refresh: false,
  user: {},
  notifications: [],
  search: "",
};

export const AppContext = createContext({
  ...initialState,
  getLiveData: async () => {},
  addWatchList: async () => {},
  getNotifications: async () => {},
  login: async () => {},
  setSearch: async () => {},
});

export const AppContextProvider = ({ children }) => {
  const [state, setState] = useState(initialState);

  const refreshState = () => {
    setState((prev) => ({ ...prev, refresh: !prev.refresh }));
  };

  const setSearch = (string) => {
    setState((prev) => ({ ...prev, search: string }));
  };

  const getLiveData = useCallback(async (query) => {
    const data = await Service.getLiveData(query);
    if (!data) return;
    setState((prev) => ({ ...prev, liveData: [...data] }));
  }, []);

  const addWatchList = (payload) => {
    return Service.addWatchList(payload);
  };

  const login = async (payload) => {
    const data = await Service.login(payload);
    if (!data) return;
    setState((prev) => ({ ...prev, user: data }));
    return data.data;
  };

  const getNotifications = useCallback(async (id) => {
    const data = await Service.getNotifications(id);
    if (!data) return;
    setState((prev) => ({ ...prev, notifications: [...data] }));
  }, []);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getLiveData,
        addWatchList,
        login,
        getNotifications,
        setSearch,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
