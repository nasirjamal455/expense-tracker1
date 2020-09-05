import React,{createContext, useReducer} from 'react';

//import AppReducer

import AppReducer from "./AppReducer";
//create initial state
const initialState = {
    transactions:[
          { id: 1, text: 'Flower', amount: -20 },
          { id: 2, text: 'Salary', amount: 300 },
          { id: 3, text: 'Book', amount: -10 },
          { id: 4, text: 'Camera', amount: 150 }
        ]
    }
//create global conetxt

export const GlobalContext = createContext(initialState);

//create global provider
export const GlobalProvider = ({children})=>{
    const [state] = useReducer(AppReducer, initialState); 
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