// src/routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import ProductListing from "../pages/ProductListing";
import Login from "../pages/Login";
import ForgotPassword from "../pages/ForgotPassword";
import Register from "../pages/Register";

import ProfileDashbord from "../pages/user-profile/ProfileDashbord";
import ProfileOrder from "../pages/user-profile/ProfileOrder";
import ProfileOrderDetails from "../pages/user-profile/ProfileOrderDetails";

import PrivateRoute from "./PrivateRoute"; 

const AppRoutes = () => (
  <Routes>
    {/* Public Routes */}
    <Route path="/" element={<Home />} />
    <Route path="/productListing" element={<ProductListing />} />
    <Route path="/login" element={<Login />} />
    <Route path="/forgotpassword" element={<ForgotPassword />} />
    <Route path="/register" element={<Register />} />

    {/* Protected Profile Routes */}
    <Route path="/profileDashbord" element={ <PrivateRoute> <ProfileDashbord /></PrivateRoute> } />
    <Route path="/profileOrder" element={ <PrivateRoute> <ProfileOrder /> </PrivateRoute> } />
    <Route path="/profileOrderDetails"element={ <PrivateRoute> <ProfileOrderDetails /></PrivateRoute> } />
  </Routes>
);

export default AppRoutes;
