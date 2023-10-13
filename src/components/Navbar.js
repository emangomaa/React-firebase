import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { auth } from "../config/firebase.config";
import { signOut } from "firebase/auth";
export default function Navbar() {
  const navigate = useNavigate();
  const signout = async () => {
    try {
      await signOut(auth);
      navigate("/signIn");
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 w-100 justify-content-center">
            <li className="nav-item">
              <NavLink
                className="nav-link active"
                aria-current="page"
                to="/homePage"
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/profile">
                Profile
              </NavLink>
            </li>
          </ul>
          <button onClick={signout} className="btn btn-outline-secondary">
            LogOut
          </button>
        </div>
      </div>
    </nav>
  );
}
