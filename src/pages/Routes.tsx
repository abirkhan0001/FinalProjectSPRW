// src/pages/Routes.tsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home"; // নিশ্চিত হও Home আসলেই এখানে আছে
import ProductDetail from "./ProductDetail";
import Login from "../pages/LogIN";
import Register from "./Register";
import ForgotPassword from "./ForgotPass";
import AllPage from "./AllPage";

interface AppRoutesProps {
  searchQuery: string; // এখন আর optional নয়
}

const AppRoutes: React.FC<AppRoutesProps> = ({ searchQuery }) => {
  return (
    <Routes>
      {/* Home page */}
      <Route path="/" element={<Home searchQuery={searchQuery} />} />
      <Route path="/all" element={<AllPage />} />

      {/* Product Detail page */}
      <Route path="/product/:id" element={<ProductDetail />} />

      {/* Auth pages */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />

      {/* Forgot Password page */}
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* Catch all - 404 page */}
      <Route
        path="*"
        element={
          <div className="text-center py-10 text-gray-500">
            404 - Page Not Found
          </div>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
