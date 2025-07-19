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
import OwnerLayout from "./features/owner/OwnerLayout";
import OwnerDashboard from "./pages/OwnerDashboard";
import Projects from "./features/projects/Projects";
import Project from "./pages/Project";
import { ThemeSwitchProvider } from "./context/ThemeSwitchContext";
import FreelancerDashboard from "./pages/FreelancerDashboard";
import Proposals from "./pages/Proposals";
import SubmittedProjects from "./pages/SubmittedProjects";
import FreelancerLayout from "./features/freelancer/FreelancerLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import ProtectedRoute from "./ui/ProtectedRoute";
import NotAccess from "./pages/NotAccess";

const queryClient = new QueryClient();

function App() {

  return (
    <ThemeSwitchProvider>
      <QueryClientProvider client={queryClient}>
        {/* <ReactQueryDevtools initialIsOpen={false} />   */}
        <Toaster />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="not-access" element={<NotAccess />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/complete-profile" element={<CompleteProfile />} />
          <Route
            path="owner"
            element={
              <ProtectedRoute>
                <OwnerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace={true} />} />
            <Route path="dashboard" element={<OwnerDashboard />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<Project />} />
          </Route>
          <Route
            path="/freelancer"
            element={
              <ProtectedRoute>
                <FreelancerLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate to="dashboard" replace={true} />} />
            <Route path="dashboard" element={<FreelancerDashboard />} />
            <Route path="projects" element={<SubmittedProjects />} />
            <Route path="proposals" element={<Proposals />} />
          </Route>
        </Routes>
      </QueryClientProvider>
    </ThemeSwitchProvider>
  );
}

export default App;
