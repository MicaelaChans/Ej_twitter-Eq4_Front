import React from "react";
import { NavLink } from "react-router-dom";

//en el link de tweet, generar una function show para abrir el modal

function NavBar() {
  return (
    <>
      <header className="vh-100 nav-position">
        <nav className="d-flex vh-100 flex-column justify-content-between py-3">
          <ul className="d-flex flex-column p-0">
            <li className="mb-2 nav-list">
              <NavLink to="/">
                <i className="bi bi-twitter nav-icons"></i>
              </NavLink>
            </li>
            <li className="d-flex align-items-center mb-2 nav-list">
              <NavLink to="/">
                <i className="bi-house-heart-fill nav-icons me-xl-3"></i>
              </NavLink>
              <NavLink to="/" className="d-none d-xl-block nav-links">
                Home
              </NavLink>
            </li>
            <li className="d-flex align-items-center mb-2 nav-list">
              <NavLink to="/profile">
                <i className="bi bi-person nav-icons me-xl-3"></i>
              </NavLink>
              <NavLink to="/profile" className="d-none d-xl-block nav-links">
                Profile
              </NavLink>
            </li>
            <NavLink to="/tweetModal" className="d-xl-none d-xxl-none nav-list">
              <i className="bi bi-brush-fill icons-nav-btn btn nav-btn rounded-circle"></i>
            </NavLink>
            <NavLink
              to="/tweetModal"
              className="btn d-none d-xl-block rounded-pill nav-btn my-2 fw-bold"
            >
              Tweet
            </NavLink>
          </ul>
          <NavLink to="/logout" className="d-xl-none d-xxl-none nav-list">
            <i className="bi bi-box-arrow-right nav-icons-btn btn btn-danger rounded-circle"></i>
          </NavLink>
          <NavLink
            to="/logout"
            className="btn btn-danger d-none d-xl-block rounded-pill"
          >
            Logout
          </NavLink>
        </nav>
      </header>
    </>
  );
}

export default NavBar;
