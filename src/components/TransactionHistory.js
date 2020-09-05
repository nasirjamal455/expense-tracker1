import React, {useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";
import {Transaction } from "./Transaction";


 const TransactionHistory = () => {
     const {transactions} = useContext(GlobalContext);
     console.log({transactions});
    return (
        <div>
            <h3> Add Transactions</h3>
            <ul className="list">
               < Transaction />
            </ul>
        </div>
    )
}
export default TransactionHistory;