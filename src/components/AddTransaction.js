import React,{useState} from 'react'

export const AddTransaction = () => {
    const [description, setdescription] =useState(); 
    const [transaction , setTransaction]= useState()
    return (
        <div>
            <h3>Add new transaction</h3>
            <form>
                <div className="form-control">
                    <label htmlFor = "description">Description</label>
                    <input type="text" id="description" placeholder="Details of transaction" value={description} 
                    onChange = {(e)=>setdescription(e.target.value)}/>

                </div>
                <div className="form-control">
                <label htmlFor = "transactionamount">Description</label>
                 <input type="number" id="transactionamount" placeholder="enter amount"
                 value = {transaction}  onChange = {(e)=>setTransaction(e.target.value)}/>

                </div>
                <button className="btn"> 
                    Add Transaction
                </button>
            </form>
        </div>
    )
}
export default AddTransaction;