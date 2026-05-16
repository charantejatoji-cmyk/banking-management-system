import { Link, useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem("isAuthenticated");
        navigate("/");
    };

    return (
        <nav className="navbar">
            <h2>Banking System</h2>

            <div className="nav-links">
                <Link to="/dashboard">Dashboard</Link>
                <Link to="/account">Account</Link>
                <Link to="/transactions">Transactions</Link>
                <Link to="/transfer">Transfer</Link>
                <Link to="/contact">Contact</Link>

                <button onClick={logout}>Logout</button>
            </div>
        </nav>
    );
}

export default Navbar;