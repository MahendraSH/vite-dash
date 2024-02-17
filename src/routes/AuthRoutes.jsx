import { lazy } from "react";

// project import
import Loadable from "../components/Loadable";
import MinimalLayout from "../layouts/mainLayout/MainLayout";
import { Navigate } from "react-router-dom";

// render - login
const LoginPage = Loadable(lazy(() => import("../pages/auth/LoginPage")));

const AuthRoutes = {
  path: "/",
  element: <MinimalLayout />,
  children: [
    {
      path: "/",
      element: <Navigate to="/dash" />,
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
  ],
};

export default AuthRoutes;
