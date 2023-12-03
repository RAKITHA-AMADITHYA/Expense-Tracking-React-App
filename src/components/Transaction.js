import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

//const { transactions } = useContext(GlobalContext);

const Transaction = ({ transactions }) => {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transactions.amount < 0 ? '-' : '+';
  return (
    <li className={transactions.amount < 0 ? 'minus' : 'plus'}>
      {transactions.text} <span>{sign}Rs.{Math.abs(transactions.amount)}</span>
      <button onClick={() => deleteTransaction(transactions.id)} className='delete-btn'>X</button>
    </li>
  );
};

export default Transaction;