import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => (
  <div className={styles.container}>
    <table className={styles.transactioHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default TransactionHistory;
