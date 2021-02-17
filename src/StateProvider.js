import React, { createContext, useContext, useReducer } from "react";
//dataleyar
export const StateContext = createContext();
//warp app on datalayer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull info from datalayer
export const useStateValue = () => useContext(StateContext);
