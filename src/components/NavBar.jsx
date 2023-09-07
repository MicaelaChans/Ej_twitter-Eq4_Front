import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { loginUser } from "../redux/userSlice";
import { loginTweet } from "../redux/tweetSlice";
import TweetModal from "./TweetModal";

function NavBar() {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => setShow(true);

  const handleLogout = () => {
    dispatch(loginUser(null));
  };

  const loggedUser = useSelector((state) => state.user);
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
              <NavLink to={`/${loggedUser.username}`}>
                <i className="bi bi-person nav-icons me-xl-3"></i>
              </NavLink>
              <NavLink
                to={`/${loggedUser.username}`}
                className="d-none d-xl-block nav-links"
              >
                Profile
              </NavLink>
            </li>
            <NavLink className="d-xl-none d-xxl-none nav-list">
              <i
                className="bi bi-brush-fill icons-nav-btn btn nav-btn rounded-circle"
                onClick={handleShow}
              ></i>
            </NavLink>

            <NavLink
              className="btn d-none d-xl-block rounded-pill nav-btn my-2 fw-bold"
              onClick={handleShow}
            >
              Tweet
            </NavLink>
          </ul>
          <NavLink
            to="/login"
            className="d-xl-none d-xxl-none nav-list"
            onClick={() => handleLogout()}
          >
            <i className="bi bi-box-arrow-right nav-icons-btn btn btn-danger rounded-circle"></i>
          </NavLink>
          <NavLink
            to="/login"
            className="btn btn-danger d-none d-xl-block rounded-pill"
            onClick={() => handleLogout()}
          >
            Logout
          </NavLink>
        </nav>
      </header>
      <TweetModal show={show} handleClose={handleClose} />
    </>
  );
}

export default NavBar;
