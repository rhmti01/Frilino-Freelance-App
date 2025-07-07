/* eslint-disable no-unused-vars */
import React from "react";
import "./App.css";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import AppLayout from "./ui/AppLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./ui/Projects";
import Project from "./ui/Project";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/complete-profile" element={<CompleteProfile />} />
        <Route path="owner" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace={true} />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="projects/:id" element={<Project />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
