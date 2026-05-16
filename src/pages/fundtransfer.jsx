import { useState } from "react";

function FundTransfer() {
  const [account, setAccount] = useState("");
  const [amount, setAmount] = useState("");

  const handleTransfer = (e) => {
    e.preventDefault();

    alert(`₹${amount} transferred to account ${account}`);
    setAccount("");
    setAmount("");
  };

  return (
    <div className="page">
      <h1>Fund Transfer</h1>

      <form className="card" onSubmit={handleTransfer}>
        <input
          type="text"
          placeholder="Recipient Account Number"
          value={account}
          onChange={(e) => setAccount(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <button type="submit">Transfer</button>
      </form>
    </div>
  );
}

export default FundTransfer;