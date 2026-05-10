import { Link, useNavigate } from "react-router-dom";

import "../styles/navbar.css";

function Navbar() {

    const navigate = useNavigate();

    function handleLogout() {

        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");

        navigate("/login");
    }

    return (

        <nav className="navbar">

            <h1 className="logo">
                Music App
            </h1>

            <div className="nav-links">

                <Link to="/">
                    Home
                </Link>

                <Link to="/profile">
                    Profile
                </Link>

                <button
                    className="logout-btn"
                    onClick={handleLogout}
                >
                    Logout
                </button>

            </div>

        </nav>
    );
}

export default Navbar;