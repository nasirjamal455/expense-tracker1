import React,{createContext, useReducer} from 'react';

//import AppReducer

import AppReducer from "./AppReducer";
//create initial state
const initialState = {
    transactions:[
        
        ]
    }
//create global conetxt

export const GlobalContext = createContext(initialState);

//create global provider
export const GlobalProvider = ({children})=>{
    const [state, dispatch] = useReducer(AppReducer, initialState); 

    //ACtions
    function deleteTransaction (id){
        dispatch({
            type:"DELETE_TRANSACTION", 
            payload:id
        });
    }
      function addTransaction (transaction){
            dispatch ({
                type:"ADD_TRANSACTION",
                payload:transaction
            });
        }

    
    return (
        <GlobalContext.Provider value={
            {
                 transactions: state.transactions ,
                 deleteTransaction ,
                 addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>

    );
}