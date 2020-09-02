import React, {createContext, useReducer} from "react";
import AppReducer from "./AppReducer";

//create initial state
const initialState = {
    trasactions:[
        {id:1, description:"income 1", transactionAmount:1000},
        {id:2, description:"expense 1", transactionAmount:-2000},
        {id:3, description:"income 2", transactionAmount:3000},
        {id:4, description:"expense 2", transactionAmount:-1000}
    ]
}

//create global context
    export  const GlobalContext = createContext(initialState);

//create provider for Global context
export const GlobalProvider=({childern})=>{
    const [state, dispatch]= useReducer(AppReducer, initialState);
    return(
        <GlobalContext.Provider 
        
        value={{transactions: state.transactions}}
        >
            {childern}
        </GlobalContext.Provider>
    )
}