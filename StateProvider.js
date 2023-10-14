import React, { createContext, useContext, useReducer } from "react";

//Prepare the data layer i.e the layer which we will be
// using to post the data

export const StateContext = createContext();

//Wrap our app and provide the data layer i.e: 
// Give access of this data layer to all the components of the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);


//Pull information from the data layer
export const useStateValue = () => useContext(StateContext);
