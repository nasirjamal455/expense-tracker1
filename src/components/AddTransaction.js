import React,{useState, useContext} from 'react'
import {GlobalContext} from "../context/GlobalState";


export const AddTransaction = () => {
    const [text, settext] =useState(); 
    const [amount , setamount]= useState()
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e =>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*10000),
            text:+text,
            amount: +amount
        }
        addTransaction(newTransaction)
            }
    return (
        <div>
            <h3>Add new transaction</h3>
            <form onSubmit = {onSubmit}> 
                <div className="form-control">
                    <label htmlFor = "description">Description</label>
                    <input type="text" id="description" placeholder="Details of transaction" value={text}
                    onChange = {(e)=>settext(e.target.value)}/>

                </div>
                <div className="form-control">
                <label htmlFor = "transactionamount">Description</label>
                 <input type="number" id="transactionamount" placeholder="enter amount"
                 value = {amount}  onChange = {(e)=>setamount(e.target.value)}/>

                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
export default AddTransaction;