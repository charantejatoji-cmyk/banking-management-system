function TransactionHistory() {
  const transactions = [
    {
      id: 1,
      type: "Credit",
      amount: "₹10,000",
      date: "12 May 2026",
    },
    {
      id: 2,
      type: "Debit",
      amount: "₹2,000",
      date: "14 May 2026",
    },
    {
      id: 3,
      type: "Credit",
      amount: "₹5,500",
      date: "15 May 2026",
    },
  ];

  return (
    <div className="page">
      <h1>Transaction History</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TransactionHistory;