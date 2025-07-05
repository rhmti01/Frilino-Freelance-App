/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "./index.css";
import { Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <div className=" mx-auto max-w-7xl flex flex-col w-full  ">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile/>} />
        </Routes>
      </div>
    </QueryClientProvider>
  );
}

export default App;
