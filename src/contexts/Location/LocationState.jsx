import React, { useContext, useReducer } from "react";
import { LocationContext } from "./LocationContext";
import LocationReducer from "./LocationReducer";

export const useLocation = () => {
  const { state, dispatch } = useContext(LocationContext);
  return [state, dispatch];
};

export const LocationState = ({ children }) => {
  const initialState = {
    location: {},
    locationList: [
      { name: "Berlin", lat: 52.520008, lon: 13.404954 },
      { name: "Moscou", lat: 55.751244, lon: 37.618423 },
      { name: "Amsterdam", lat: 52.377956, lon: 4.89707 },
      { name: "Tokyo", lat: 35.652832, lon: 139.839478 },
      { name: "Anchorage", lat: 61.217381, lon: -149.863129 },
    ],
    loading: true,
    error: false,
    message: "",
  };

  const [state, dispatch] = useReducer(LocationReducer, initialState);

  return (
    <LocationContext.Provider
      value={{
        state: state,
        dispatch: dispatch,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
