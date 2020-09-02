import React from 'react';

import Header from "./components/Header.js";
import Balance from "./components/Balance";
import AccountSumury from "./components/AccountSumury";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import './App.css';
import { GlobalProvider } from './context/GlobalState.js';



function App() {
  return (
   <GlobalProvider>
     <Header />
     <div className="container">
       <Balance />
       <AccountSumury />
       <TransactionHistory />
       <AddTransaction />
     </div>
    </GlobalProvider>
  );
}

export default App;
