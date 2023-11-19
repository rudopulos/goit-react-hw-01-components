import React from 'react';
import PropTypes from 'prop-types';
import './TransactionHistory.css'; 

const TransactionHistory = ({ items }) => {
  return (
    <table className="transactions">
      <thead>
        <tr className="transaction_header">
          <th className="transaction_data">Type</th>
          <th className="transaction_data">Amount</th>
          <th className="transaction_data">Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((transaction, index) => (
          <tr key={transaction.id} className={`transaction_row ${index % 2 === 0 ? 'even' : 'odd'}`}>
            <td className="transaction_data">{transaction.type}</td>
            <td className="transaction_data">{transaction.amount}</td>
            <td className="transaction_data">{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
