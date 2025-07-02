/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";

function App() {
  return (
    <div className=" mx-auto max-w-7xl flex flex-col w-full  ">
      <Routes>
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </div>
  );
}

export default App;
