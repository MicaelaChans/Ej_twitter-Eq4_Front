import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./components/Home";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/registro" element={<Navigate replace to="/register" />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/iniciar-sesion"
          element={<Navigate replace to="/login" />}
        />
        <Route path="/" element={<Home />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;

//ni idea con logout
