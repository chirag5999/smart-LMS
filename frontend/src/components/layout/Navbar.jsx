import { useState } from "react";
import { Link } from "react-router-dom";
// import logo from "../assets/logo.svg"; // Replace with your logo

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm px-3 py-2">
      <div className="container-fluid">

        {/* BRAND / LOGO */}
        <Link className="navbar-brand fw-bold text-primary" to="/">
          {/* <img src="" alt="logo" width="35" className="me-2" /> */}
          Smart LMS
        </Link>

        {/* MOBILE TOGGLE BUTTON */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => setOpen(!open)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION LINKS */}
        <div className={`collapse navbar-collapse ${open ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

             <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fw-semibold" to="/courses">
                Courses
              </Link>
            </li>

            <li className="nav-item ms-lg-3">
              <Link className="btn btn-primary px-3 fw-semibold" to="/login">
                Login
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}
