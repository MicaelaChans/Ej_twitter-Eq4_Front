import React from "react";
import "./css/register.css";
import { useForm } from "react-hook-form";
import { registerRequest } from "../api/apiAuth";
import { redirect } from "react-router-dom";

function Register() {

  const { register, handleSubmit } = useForm();

  const registerSubmit = handleSubmit(async (values) => {
    console.log(values);
    const response = await registerRequest(values)
    console.log("Llamada realizada, usuario creado")
    redirect("/profile");
    console.log(response)
    })

  return (
    <div className="row m-0">
      <div className="col-12 col-md-6 col-lg-8" id="colum1">
        <img src="img/twitter.svg" id="logoTwitter" alt="logoTwitter" />
        <h3>Hi! Welcome to Twitter Clone 👋</h3>
      </div>
      <div className="col-md-6 col-lg-4" id="colum2">
        <h2 className="text-start">Sign up</h2>
        <p>Create an account and start using twitter</p>
        <form
          method="POST"
          onSubmit={registerSubmit}
          action="/register" encType="multipart/form-data"
        >
          <div className="mb-3 mt-3">
            <input
              type="firstname"
              {...register("firstname", {required: true})}
              className="form-control"
              id="firstname"
              aria-describedby="firstname"
              name="firstname"
              placeholder="First name"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="lastname"
              {...register("lastname", {required: true})}
              className="form-control"
              id="lastname"
              aria-describedby="lastname"
              name="lastname"
              placeholder="Last name"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="email"
              {...register("email", {required: true})}
              className="form-control"
              id="email"
              aria-describedby="email"
              name="email"
              placeholder="Email"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="username"
              {...register("username", {required: true})}
              className="form-control"
              id="username"
              aria-describedby="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="file"
              {...register("profilePic", {required: false})}
              placeholder="cdsfse"
              className="form-control"
              id="profilePic"
              name="profilePic"
            />
          </div>
          <div className="mb-3 mt-3">
            <input
              type="password"
              {...register("password", {required: true})}
              className="form-control"
              id="password"
              aria-describedby="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button
            type="submit"
            className="btn col-12 mx-auto rounded-pill"
            id="btnSingUp"
          >
            Sign up
          </button>
          <p className="text-center mt-4" id="aSingIn">
            Already have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
}
export default Register;
