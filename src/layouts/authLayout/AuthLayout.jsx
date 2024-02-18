import React from "react";
import { Outlet } from "react-router-dom";
import AuthWrapper from "./auth-components/AuthWrapper";

const AuthLayout = () => {
  return (
    <AuthWrapper>
      <Outlet />
    </AuthWrapper>
  );
};

export default AuthLayout;
