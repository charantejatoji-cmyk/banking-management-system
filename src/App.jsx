import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import AccountDetails from "./pages/accountdetails";
import TransactionHistory from "./pages/transactionhistory";
import FundTransfer from "./pages/fundtransfer";
import Contact from "./pages/contact";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/protectedroute";
import "./App.css";

function App() {
  return (
    <Routes>
      {/* Public Route */}
      <Route path="/" element={<Login />} />

      {/* Protected Routes */}
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Navbar />
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route
        path="/account"
        element={
          <ProtectedRoute>
            <Navbar />
            <AccountDetails />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transactions"
        element={
          <ProtectedRoute>
            <Navbar />
            <TransactionHistory />
          </ProtectedRoute>
        }
      />
      <Route
        path="/transfer"
        element={
          <ProtectedRoute>
            <Navbar />
            <FundTransfer />
          </ProtectedRoute>
        }
      />
      <Route
        path="/contact"
        element={
          <ProtectedRoute>
            <Navbar />
            <Contact />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;