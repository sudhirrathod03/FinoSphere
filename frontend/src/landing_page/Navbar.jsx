import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  const handleLinkClick = () => {
    setIsNavCollapsed(true);
  };

  const handleDashboardClick = () => {
    if (token) {
      window.location.href = import.meta.env.VITE_DASHBOARD_URL;
    } else {
      navigate("/login"); 
    }
    setIsNavCollapsed(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/"); 
    window.location.reload(); 
  };

  return (
    <nav className="navbar navbar-expand-lg border-bottom p-3" style={{ backgroundColor: "white" }}>
      <div className="container">
        <Link className="navbar-brand" to="/" onClick={handleLinkClick}>
          <img style={{ width: "150px" }} alt="logo" src="/assets/images/logo.svg" />
        </Link>

        {/* Mobile Toggle Button - Bootstrap data attributes removed for React state handling */}
        <button
          className="navbar-toggler"
          type="button"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
          <ul className="navbar-nav text-center align-items-center">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/about" onClick={handleLinkClick}>
                About
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/product" onClick={handleLinkClick}>
                Product
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/pricing" onClick={handleLinkClick}>
                Pricing
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/support" onClick={handleLinkClick}>
                Support
              </Link>
            </li>

            {/* If logged in: Show Dashboard and Logout */}
            {token ? (
              <>
                <li className="nav-item mx-2 mt-2 mt-lg-0">
                  <button className="btn btn-primary w-100 w-lg-auto" onClick={handleDashboardClick}>
                    Dashboard
                  </button>
                </li>
                <li className="nav-item mx-2 mt-2 mt-lg-0">
                  <button className="btn btn-outline-danger w-100 w-lg-auto" onClick={handleLogout}>
                    Logout
                  </button>
                </li>
              </>
            ) : (
              /* If NOT logged in: Show Login and Signup */
              <>
                <li className="nav-item mx-2 mt-2 mt-lg-0">
                  <Link className="btn btn-outline-primary w-100 w-lg-auto" to="/login" onClick={handleLinkClick}>
                    Login
                  </Link>
                </li>
                <li className="nav-item mx-2 mt-2 mt-lg-0">
                  <Link className="btn btn-primary w-100 w-lg-auto" to="/signup" onClick={handleLinkClick}>
                    Sign up
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;