import React from 'react'

 const TransactionHistory = () => {
    return (
        <div>
            <h3> Add Transactions</h3>
            <ul className="list">
                <li className="plus">
                    project 1 expenses
                    <span>$1,000</span>
                    <button className="delete-btn">X</button>
                </li>
                <li className="minus">
                    project 2 salaries
                    <span>-$5000</span>
                <button className="delete-btn">X</button>
                </li>
            </ul>
        </div>
    )
}
export default TransactionHistory;