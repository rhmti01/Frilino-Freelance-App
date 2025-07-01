/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./Components/Auth/Auth";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<Auth/>}  />
    </Routes>
  );
}

export default App;
