import { lazy } from "react";

// project import
import AuthLayout from "@/layouts/authLayout/AuthLayout";
import { Navigate } from "react-router-dom";
import Loadable from "../components/Loadable";

// render - login
const LoginPage = Loadable(lazy(() => import("@/pages/auth/LoginPage")));
const RegisterPage = Loadable(lazy(() => import("@/pages/auth/RegisterPage")));

const AuthRoutes = {
  path: "/",
  element: <AuthLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="/dash" />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterPage />,
    },
  ],
};

export default AuthRoutes;
