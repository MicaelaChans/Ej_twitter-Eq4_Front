import React, { useEffect } from "react";
import "./css/login.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginUser } from "../redux/userSlice";
import { NavLink, useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios({
      method: "post",
      url: import.meta.env.VITE_URL_LOGIN,
      data: { password, username },
    });
    console.log(response.data.token);
    response.data.token && dispatch(loginUser(response.data));
    navigate("/");
    if (response.data.token) {
      dispatch(loginUser(response.data));
      navigate("/");
    } else {
      console.log(response.data);
    }
  };

  return (
    <div className="row m-0">
      <div className="col-12 col-md-6 col-lg-8 d-none d-md-block login-left">
        <img src="img/twitter.svg" className="login-logo" alt="" />
        <h3 className="login-greeting">Hey! Nice to see you again 🥰</h3>
      </div>
      <div className="col col-md-6 col-lg-4 login-right ps-5">
        <form action="/login" method="post" onSubmit={handleSubmit}>
          <div className="mb-1">
            <h2>Login</h2>
            <h5>Ready to start using Twitter?</h5>
            <label htmlFor="username" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Username or email"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-12 mx-auto rounded-pill login-btn"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account? <NavLink to="/register">Sign up</NavLink>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
