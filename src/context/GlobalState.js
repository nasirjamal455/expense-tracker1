import React,{createContext, useReducer} from 'react';

//import AppReducer

import AppReducer from "./AppReducer";
//create initial state
const initialState = {
    transactions:[]
}

//create global conetxt

export const GlobalContext = createContext(initialState);

//create global provider
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState); 
    return (
        <GlobalContext.Provider value={
            {
                 transactions: state.transactions 
            }
        }>
            {children}
        </GlobalContext.Provider>

    );
}