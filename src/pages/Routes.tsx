
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import ProductDetail from "./ProductDetail";
import Login from "../pages/LogIN";
import Register from "./Register";
import ForgotPassword from "./ForgotPass";
import ErrorPage from "./Error";


interface AppRoutesProps {
  searchQuery: string;
}

const AppRoutes: React.FC<AppRoutesProps> = ({ searchQuery }) => {
  return (
    <Routes>
      <Route path="/" element={<Home searchQuery={searchQuery} />} />
      <Route path="/error" element={<ErrorPage />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
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
