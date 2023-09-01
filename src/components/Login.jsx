import React from "react";
import "./css/login.css";

function Login() {
  return (
    <div className="row m-0">
      <div className="col-12 col-md-6 col-lg-8 d-none d-md-block login-left">
        <img src="img/twitter.svg" className="login-logo" alt="" />
        <h3 className="login-greeting">Hey! Nice to see you again 🥰</h3>
      </div>
      <div className="col col-md-6 col-lg-4 login-right ps-5">
        <form action="/login" method="post">
          <div className="mb-1">
            <h2>Login</h2>
            <h5>Ready to start using Twitter?</h5>
            <label for="username" className="form-label"></label>
            <input
              type="text"
              className="form-control"
              id="username"
              aria-describedby="emailHelp"
              placeholder="Username or email"
              name="username"
            />
          </div>
          <div className="mb-3">
            <label for="password" className="form-label"></label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Password"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary col-12 mx-auto rounded-pill login-btn"
          >
            Login
          </button>
          <p className="text-center mt-4">
            Don't have an account? <a href="/register">Sign up</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Login;
